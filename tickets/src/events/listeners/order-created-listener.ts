import { Listener, OrderCreatedEvent, Subjects } from "@vsitickets/common";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";
import { TicketUpdatedublisher } from "../publishers/ticket-updated-publisher";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;

  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    // find the ticket that the order is reserving
    const ticket = await Ticket.findById(data.ticket.id);

    // if no, throw error
    if (!ticket) {
      throw new Error("Ticket not found");
    }
    // mark the ticket as bieng reserved by setting its orderId property
    ticket.set({ orderId: data.id });

    // save the ticket
    await ticket.save();
    await new TicketUpdatedublisher(this.client).publish({
      id: ticket.id,
      price: ticket.price,
      title: ticket.title,
      userId: ticket.userId,
      orderId: ticket.orderId,
      version: ticket.version,
    });

    // ack the message
    msg.ack();
  }
}
