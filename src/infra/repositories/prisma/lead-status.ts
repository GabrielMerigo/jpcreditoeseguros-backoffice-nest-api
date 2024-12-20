import { LeadStatus } from "@domain/entities/lead-status";
import { LeadStatusRepository } from "@domain/repositories/lead-status";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaLeadStatusRepository implements LeadStatusRepository {
  constructor(private readonly prisma: Prisma) {}

  async create(leadStatus: LeadStatus): Promise<LeadStatus> {
    return await this.prisma.leadStatus.create({
      data: leadStatus
    });
  }

  async findByValue(value: string): Promise<LeadStatus | null> {
    return await this.prisma.leadStatus.findUnique({
      where: { value }
    });
  }

  async findAll(): Promise<LeadStatus[]> {
    return await this.prisma.leadStatus.findMany();
  }

  async deleteByValue(statusValue: string): Promise<void> {
    await this.prisma.leadStatus.delete({
      where: { value: statusValue }
    });
  }

  async updateByValue(
    statusValue: string,
    leadStatus: LeadStatus
  ): Promise<LeadStatus> {
    return await this.prisma.leadStatus.update({
      where: { value: statusValue },
      data: leadStatus
    });
  }
}
