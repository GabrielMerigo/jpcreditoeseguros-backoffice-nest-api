import { ExceptionsAdapter } from "@domain/adapters/exceptions";
import { Lead } from "@domain/entities/lead";
import { LeadRepository } from "@domain/repositories/lead";
import { Injectable } from "@nestjs/common";

export interface FindLeadByIdUseCaseReturn {
  Lead: Lead;
}

@Injectable()
export class FindLeadByIdUseCase {
  constructor(
    private readonly leadRepository: LeadRepository,
    protected readonly exceptionsService: ExceptionsAdapter
  ) {}

  async findById(id: string): Promise<Lead> {
    const lead = await this.leadRepository.findById(id);

    if (!lead) {
      this.exceptionsService.notFound({
        message: "Lead wasn't found"
      });
      return;
    }

    return lead;
  }
}
