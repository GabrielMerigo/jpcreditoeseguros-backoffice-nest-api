import { ExceptionsAdapter } from "@domain/adapters/exceptions";
import { LeadStatus } from "@domain/entities/lead-status";
import { LeadStatusRepository } from "@domain/repositories/lead-status";
import { Injectable } from "@nestjs/common";
import { FindByValueLeadStatusUseCase } from "./find-by-value";

@Injectable()
export class CreateLeadStatusUseCase {
  constructor(
    private readonly leadStatusRepository: LeadStatusRepository,
    private readonly findByValueLeadStatusUseCase: FindByValueLeadStatusUseCase,
    private readonly exceptionService: ExceptionsAdapter
  ) {}

  async create(leadStatus: LeadStatus): Promise<LeadStatus> {
    const leadStatusAlreadyExists =
      await this.findByValueLeadStatusUseCase.findByValue(leadStatus.value);

    if (leadStatusAlreadyExists) {
      this.exceptionService.badRequest({
        message: "Lead status already exists"
      });
    }

    return await this.leadStatusRepository.create(leadStatus);
  }
}
