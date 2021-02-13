import { Publisher, Subjects, TicketUpdatedEvent } from "@vsitickets/common";

export class TicketUpdatedublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
