import { Injectable } from "@nestjs/common";
import { Readable } from "stream";
import {
  CustomReadlineInterface,
  ReadlineAdapter
} from "@domain/adapters/readline";
import * as readline from "readline";

@Injectable()
export class ReadlineService implements ReadlineAdapter {
  createReadlineInterface(stream: Readable): CustomReadlineInterface {
    return readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    });
  }
}
