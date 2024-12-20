import { MaritalStatus, Lead } from "@domain/entities/lead";
import { LeadObjectMother } from "@test/builder/object-mother/leads";

const generateLead = async (index: number): Promise<Lead> =>
  await LeadObjectMother.anLead({
    firstName: "John",
    lastName: `Doe ${index}`,
    nonCompliance: index % 2 === 0 ? "Nenhuma" : "Prejuizo",
    maritalStatus:
      index % 2 === 0 ? MaritalStatus.MARRIED : MaritalStatus.SINGLE
  });

const LEADS = async (): Promise<Lead[]> => {
  const leadsArray = [];

  for (let index = 0; index < 10; index++) {
    leadsArray.push(await generateLead(index + 1));
  }

  return leadsArray;
};

export { LEADS };
