import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

// const stan = nats.connect("ticketing", "abc", {
//     url: "http://localhost:4222"
// });

// stan.on("connect", () => {
//     console.log("Publisher connected to NATS");

//     const data = JSON.stringify({
//        id: "123",
//        title: "concert",
//        price: 10
//     });

//     stan.publish("ticket:created", data, () => {
//        console.log("Event published");
//     })
// });

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  try {
    console.log("Publisher connected to NATS");
    const publisher = new TicketCreatedPublisher(stan);
    await publisher.publish({
      id: "123",
      title: "concert",
      price: 10,
    });
  } catch (err) {
    console.error(err);
  }
});
