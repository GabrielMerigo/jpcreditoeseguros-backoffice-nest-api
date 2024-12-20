import { ExceptionsAdapter } from "@domain/adapters/exceptions";
import { LeadRepository } from "@domain/repositories/lead";
import { FindLeadByIdUseCase } from "../find-by-id";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteLeadByIdUseCase {
  constructor(
    private readonly leadRepository: LeadRepository,
    private readonly findLeadByIdUseCase: FindLeadByIdUseCase,
    private readonly exceptionsService: ExceptionsAdapter
  ) {}

  async deleteById(id: string): Promise<void> {
    const lead = await this.findLeadByIdUseCase.findById(id);

    if (!lead) {
      this.exceptionsService.notFound({
        message: "Lead wasn't found"
      });
      return;
    }

    return await this.leadRepository.deleteById(id);
  }
}
