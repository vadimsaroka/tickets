import { Publisher, OrderCreatedEvent, Subjects } from "@vsitickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
