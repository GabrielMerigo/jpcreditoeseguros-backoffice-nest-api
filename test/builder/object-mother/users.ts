import { RoleEnum } from "@domain/entities/role";
import { User } from "@domain/entities/user";
import { hash } from "bcryptjs";
import { randomUUID } from "crypto";

interface AnUserWithAccessParams {
  roleValue: RoleEnum;
  name?: string;
  email?: string;
  id?: string;
}

export class UserObjectMother {
  static async anUser({
    name,
    email,
    roleValue,
    id
  }: AnUserWithAccessParams): Promise<User> {
    return {
      name: name || "John Doe",
      email: email || "johnDoe@test.com",
      password: await hash("1234", 8),
      roleValue,
      id: id || randomUUID()
    } as User;
  }
}
