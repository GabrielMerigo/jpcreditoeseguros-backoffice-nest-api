import { Lead, MaritalStatus } from "@domain/entities/lead";
import { randomUUID } from "crypto";
import { LeadStatusEnum } from "prisma/seed/constants/leadStatus";

interface AnLeadWithAccessParams {
  id?: string;
  firstName?: string;
  lastName?: string;
  nonCompliance?: string;
  maritalStatus?: string;
}

export class LeadObjectMother {
  static async anLead({
    id,
    firstName,
    lastName,
    nonCompliance,
    maritalStatus
  }: AnLeadWithAccessParams): Promise<Lead> {
    return {
      id: id || randomUUID(),
      firstName: firstName || "John",
      lastName: lastName || "Doe",
      fullName: firstName && lastName ? firstName + " " + lastName : "John Doe",
      email: (firstName || "john") + "@test.com",
      phone: "11999999999",
      identificationDocument: "12345678901",
      nonCompliance: nonCompliance || "Nenhuma",
      monthlyNetIncome: 9999.99,
      maritalStatus: maritalStatus || MaritalStatus.SINGLE,
      currentlyResideIn: "Lisboa",
      employmentRelationship: "EMPREGADO",
      timeAtCompany: new Date(2020, 1, 1),
      taxPayerNumber: "12345678901",
      birthDate: new Date(1990, 1, 1),
      age: 30,
      districtName: "Centro",
      statusValue: LeadStatusEnum.PENDENT,
      owner: "John Doe"
    } as Lead;
  }
}
