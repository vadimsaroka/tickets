import request from "supertest";
import mongoose from "mongoose";
import { Ticket } from "../../models/ticket";
import { app } from "../../app";
import { Order, OrderStatus } from "../../models/order";
import { natsWrapper } from "../../nats-wrapper";

it("marks an order as cancelled", async () => {
  const ticket = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: "concert",
    price: 10,
  });

  await ticket.save();

  const user = global.signup();

  const { body: order } = await request(app)
    .post(`/api/orders`)
    .set("Cookie", user)
    .send({ ticketId: ticket.id })
    .expect(201);

  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set("Cookie", user)
    .send()
    .expect(201);

  const orderstatus = await Order.findById(order.id);

  expect(orderstatus!.status).toEqual(OrderStatus.Cancelled);
});

it("emits a order cancelled event", async () => {
  const ticket = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: "concert",
    price: 10,
  });

  await ticket.save();

  const user = global.signup();

  const { body: order } = await request(app)
    .post(`/api/orders`)
    .set("Cookie", user)
    .send({ ticketId: ticket.id })
    .expect(201);

  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set("Cookie", user)
    .send()
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
