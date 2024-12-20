export enum RoleEnum {
  ADMIN = "ADMIN",
  EMPLOYEE = "EMPLOYEE"
}

export interface Role {
  value: RoleEnum;
  description: string;
  label: string;
}
