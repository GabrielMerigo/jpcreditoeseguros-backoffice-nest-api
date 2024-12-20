import { TransactionHandler } from "@domain/adapters/transaction-handler";

export class TransactionHandlerStub implements TransactionHandler {
  async transaction<R>(): Promise<R> {
    return;
  }
}
