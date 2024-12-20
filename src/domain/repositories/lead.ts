import { Lead, FindAllLeadsFilter } from "@domain/entities/lead";
import { PaginationFilter } from "@use-cases/pagination";

export type CreateLeadUseCaseProps = Omit<
  Lead,
  "id" | "createdAt" | "updatedAt"
>;

export interface FindAllLeadsReturn {
  total: number;
  leads: Lead[];
}

export abstract class LeadRepository {
  abstract create(lead: CreateLeadUseCaseProps): Promise<Lead>;
  abstract findById(id: string): Promise<Lead | null>;
  abstract deleteById(id: string): Promise<void>;
  abstract findAll(
    filter: FindAllLeadsFilter,
    pagination: PaginationFilter
  ): Promise<FindAllLeadsReturn>;
}
