import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@vsitickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
