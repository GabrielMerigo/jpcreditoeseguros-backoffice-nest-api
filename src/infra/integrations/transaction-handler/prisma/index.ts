import {
  Transaction,
  TransactionHandler
} from "@domain/adapters/transaction-handler";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaTransactionHandler implements TransactionHandler {
  constructor(private readonly prisma: Prisma) {}

  async transaction<R>(fn: (tx: Transaction) => Promise<R>): Promise<R> {
    return this.prisma.$transaction(async (tx) => {
      return fn(tx as Transaction);
    }) as Promise<R>;
  }
}
