import { StreamBuffer } from "./stream";

export interface CustomReadlineInterface {
  [Symbol.asyncIterator](): AsyncIterableIterator<string>;
}

export abstract class ReadlineAdapter {
  abstract createReadlineInterface(
    streamBuffer: StreamBuffer
  ): CustomReadlineInterface;
}
