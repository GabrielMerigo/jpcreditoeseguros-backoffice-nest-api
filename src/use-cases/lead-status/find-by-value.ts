import { ExceptionsAdapter } from "@domain/adapters/exceptions";
import { LeadStatus } from "@domain/entities/lead-status";
import { LeadStatusRepository } from "@domain/repositories/lead-status";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindByValueLeadStatusUseCase {
  constructor(
    private readonly leadStatusRepository: LeadStatusRepository,
    private readonly exceptionService: ExceptionsAdapter
  ) {}

  async findByValue(value: string): Promise<LeadStatus | null> {
    const leadStatus = await this.leadStatusRepository.findByValue(value);

    if (!leadStatus) {
      this.exceptionService.notFound({
        message: "Lead status not found"
      });
    }

    return leadStatus;
  }
}
