export interface StreamBuffer {
  push(data: Buffer | null): void;
}

export abstract class StreamAdapter {
  abstract createStreamBuffer(buffer: Buffer): StreamBuffer;
}
