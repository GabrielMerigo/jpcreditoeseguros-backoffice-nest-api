import { Injectable } from "@nestjs/common";
import { Readable } from "stream";
import { StreamAdapter, StreamBuffer } from "@domain/adapters/stream";

@Injectable()
export class StreamService implements StreamAdapter {
  createStreamBuffer(buffer: Buffer): StreamBuffer {
    const bufferStream = new Readable();
    bufferStream.push(buffer);
    bufferStream.push(null);
    return bufferStream;
  }
}
