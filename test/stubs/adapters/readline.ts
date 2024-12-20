import {
  CustomReadlineInterface,
  ReadlineAdapter
} from "@domain/adapters/readline";

export class ReadlineServiceStub implements ReadlineAdapter {
  createReadlineInterface(): CustomReadlineInterface {
    return {
      [Symbol.asyncIterator]: async function* () {
        yield "name,contact,dateOfBirth,email,password";
        yield "John Doe,+551234567890,22/06/1998,john.doe@email.com,123456";
        yield "Jane Smith,+551234567891,15/03/1997,jane.smith@email.com,abcdef";
        yield "Bob Johnson,+551234567892,30/01/1996,bob.johnson@email.com,qwerty";
      }
    };
  }
}
