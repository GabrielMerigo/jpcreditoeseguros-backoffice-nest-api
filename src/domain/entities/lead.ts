import { BaseEntity } from "./base";

export enum MaritalStatus {
  MARRIED = "MARRIED",
  SINGLE = "SINGLE",
  DIVORCED = "DIVORCED"
}
export interface Lead extends BaseEntity {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  owner: string;
  identificationDocument: string;
  nonCompliance: string;
  monthlyNetIncome: number;
  maritalStatus: string;
  currentlyResideIn: string;
  employmentRelationship: string;
  timeAtCompany: Date;
  taxPayerNumber: string;
  birthDate: Date;
  age: number;
  districtName: string;
  deletedAt?: Date;
  statusValue: string;
}

export interface FindAllLeadsFilter {
  fullName?: string;
}
