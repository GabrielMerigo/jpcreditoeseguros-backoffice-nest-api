import { Lead, FindAllLeadsFilter } from "@domain/entities/lead";
import { LeadRepository, FindAllLeadsReturn } from "@domain/repositories/lead";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";
import { PaginationFilter } from "@use-cases/pagination";
import { Prisma as PrismaTypes } from "@prisma/client";

@Injectable()
export class PrismaLeadRepository implements LeadRepository {
  constructor(private readonly prisma: Prisma) {}

  async create(leadToCreate: Lead): Promise<Lead> {
    const lead = await this.prisma.lead.create({
      data: leadToCreate
    });

    return lead;
  }

  async findById(id: string): Promise<Lead> {
    const lead = await this.prisma.lead.findUnique({
      where: { id }
    });

    if (!lead) return null;

    return lead;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.lead.delete({
      where: { id }
    });
  }

  async findAll(
    filter: FindAllLeadsFilter,
    pagination: PaginationFilter
  ): Promise<FindAllLeadsReturn> {
    const args: PrismaTypes.LeadFindManyArgs = {
      take: pagination.take,
      skip: pagination.skip,
      where: {
        fullName: {
          contains: filter.fullName,
          mode: "insensitive"
        }
      }
    };

    const [leads, total] = await this.prisma.$transaction([
      this.prisma.lead.findMany(args),
      this.prisma.lead.count({
        where: args.where
      })
    ]);

    return {
      total,
      leads
    };
  }
}
