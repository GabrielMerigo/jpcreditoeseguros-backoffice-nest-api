import { LeadStatus } from "@domain/entities/lead-status";

export abstract class LeadStatusRepository {
  abstract create(leadStatus: LeadStatus): Promise<LeadStatus>;
  abstract findByValue(value: string): Promise<LeadStatus | null>;
  abstract findAll(): Promise<LeadStatus[]>;
  abstract deleteByValue(value: string): Promise<void>;
  abstract updateByValue(
    value: string,
    leadStatus: LeadStatus
  ): Promise<LeadStatus>;
}
