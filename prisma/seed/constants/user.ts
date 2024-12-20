import { RoleEnum } from "@domain/entities/role";
import { User } from "@domain/entities/user";
import { UserObjectMother } from "@test/builder/object-mother/users";

const USERS = async (): Promise<User[]> => {
  const USER_ADMIN = await UserObjectMother.anUser({
    name: "Administrador",
    roleValue: RoleEnum.ADMIN
  });

  const USER_EMPLOYEE = await UserObjectMother.anUser({
    name: "Colaborador",
    roleValue: RoleEnum.EMPLOYEE
  });

  return [USER_ADMIN, USER_EMPLOYEE];
};

export { USERS };
