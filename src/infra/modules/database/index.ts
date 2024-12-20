import { Module } from "@nestjs/common";
import { Prisma } from "@infra/config/prisma";
import { PrismaUserRepository } from "@infra/repositories/prisma/user";
import { UserRepository } from "@domain/repositories/user";
import { PrismaLeadRepository } from "@infra/repositories/prisma/lead";
import { LeadRepository } from "@domain/repositories/lead";
import { LeadStatusRepository } from "@domain/repositories/lead-status";
import { PrismaLeadStatusRepository } from "@infra/repositories/prisma/lead-status";

@Module({
  providers: [
    Prisma,
    { useClass: PrismaUserRepository, provide: UserRepository },
    { useClass: PrismaLeadRepository, provide: LeadRepository },
    { useClass: PrismaLeadStatusRepository, provide: LeadStatusRepository }
  ],
  exports: [UserRepository, LeadRepository, LeadStatusRepository]
})
export class DatabaseModule {}
