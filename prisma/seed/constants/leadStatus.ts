export enum LeadStatusEnum {
  PENDENT = "PENDENT",
  QUALIFIED = "QUALIFIED",
  REJECTED = "REJECTED"
}

const PENDENT = {
  value: LeadStatusEnum.PENDENT,
  label: "Pendente",
  description: "Lead pendente"
};

const QUALIFIED = {
  value: LeadStatusEnum.QUALIFIED,
  label: "Qualificado",
  description: "Lead qualificado"
};

const REJECTED = {
  value: LeadStatusEnum.REJECTED,
  label: "Rejeitado",
  description: "Lead rejeitado"
};

const LEAD_STATUS = [PENDENT, QUALIFIED, REJECTED];

export { LEAD_STATUS };
