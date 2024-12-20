import { StreamAdapter, StreamBuffer } from "@domain/adapters/stream";

export class StreamServiceStub implements StreamAdapter {
  createStreamBuffer(): StreamBuffer {
    return;
  }
}
