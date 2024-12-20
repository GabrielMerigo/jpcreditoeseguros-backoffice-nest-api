import { Lead } from "@domain/entities/lead";
import {
  LeadRepository,
  CreateLeadUseCaseProps
} from "@domain/repositories/lead";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateLeadUseCase {
  constructor(private readonly leadRepository: LeadRepository) {}

  async create(lead: CreateLeadUseCaseProps): Promise<Lead> {
    return await this.leadRepository.create(lead);
  }
}
