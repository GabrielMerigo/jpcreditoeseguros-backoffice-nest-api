import { BaseEntity } from "./base";
import { RoleEnum } from "./role";

export interface User extends BaseEntity {
  name: string;
  email: string;
  password: string;
  roleValue: RoleEnum;
  contact?: string;
  dateOfBirth?: Date;
  deletedAt?: Date;
}
