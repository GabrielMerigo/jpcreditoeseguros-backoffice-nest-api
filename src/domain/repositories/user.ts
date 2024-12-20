import { RoleEnum } from "@domain/entities/role";
import { User } from "@domain/entities/user";

export interface CreateUserParams {
  name: string;
  email: string;
  password: string;
  roleValue: RoleEnum;
  contact?: string;
  dateOfBirth?: Date;
}

export type UserWithoutPassword = Omit<User, "password">;

export abstract class UserRepository {
  abstract findById(id: string): Promise<UserWithoutPassword | null>;
}
