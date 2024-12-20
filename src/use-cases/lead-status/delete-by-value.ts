import { ExceptionsAdapter } from "@domain/adapters/exceptions";
import { LeadStatusRepository } from "@domain/repositories/lead-status";
import { Injectable } from "@nestjs/common";
import { FindByValueLeadStatusUseCase } from "./find-by-value";

@Injectable()
export class DeleteByValueLeadStatusUseCase {
  constructor(
    private readonly leadStatusRepository: LeadStatusRepository,
    private readonly findByValueLeadStatusUseCase: FindByValueLeadStatusUseCase,
    private readonly exceptionService: ExceptionsAdapter
  ) {}

  async deleteByValue(value: string): Promise<void> {
    const leadStatus =
      await this.findByValueLeadStatusUseCase.findByValue(value);

    if (!leadStatus) {
      this.exceptionService.notFound({
        message: "Lead status not found"
      });
    }

    await this.leadStatusRepository.deleteByValue(value);
  }
}
