import { LeadStatus } from "@domain/entities/lead-status";
import { LeadStatusRepository } from "@domain/repositories/lead-status";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllLeadStatusUseCase {
  constructor(private readonly leadStatusRepository: LeadStatusRepository) {}

  async findAll(): Promise<LeadStatus[]> {
    return await this.leadStatusRepository.findAll();
  }
}
