import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Transaction extends PrismaClient {}

export class WithTransaction {
  tx: Transaction;
}

export abstract class TransactionHandler {
  abstract transaction<R>(fn: (tx: Transaction) => Promise<R>): Promise<R>;
}
