import { FindAllLeadsFilter } from "@domain/entities/lead";
import { LeadRepository, FindAllLeadsReturn } from "@domain/repositories/lead";
import { Injectable } from "@nestjs/common";
import {
  PaginationQuery,
  PaginationFilter,
  PaginationUseCase
} from "@use-cases/pagination";

export interface FindAllLeadsUseCaseParams
  extends FindAllLeadsFilter,
    PaginationQuery {}

@Injectable()
export class FindAllLeadsUseCase {
  constructor(
    private readonly leadRepository: LeadRepository,
    private readonly paginationUseCase: PaginationUseCase
  ) {}

  async findAll(
    params: FindAllLeadsUseCaseParams
  ): Promise<FindAllLeadsReturn> {
    const pagination = this.paginationUseCase.paginate(
      params.page,
      params.limit
    ) as PaginationFilter;

    const { total, leads } = await this.leadRepository.findAll(
      { ...params },
      pagination
    );

    return {
      total,
      leads
    };
  }
}
