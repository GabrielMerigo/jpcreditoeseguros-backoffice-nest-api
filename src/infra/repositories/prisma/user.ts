import { UserRepository, UserWithoutPassword } from "@domain/repositories/user";
import { Prisma } from "@infra/config/prisma";
import { Injectable } from "@nestjs/common";
import { RoleEnum } from "@domain/entities/role";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: Prisma) {}

  async findById(id: string): Promise<UserWithoutPassword | null> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user) return null;

    const {
      name,
      email,
      roleValue,
      id: userId,
      createdAt,
      updatedAt,
      deletedAt,
      contact,
      dateOfBirth
    } = user;

    return {
      id: userId,
      name,
      email,
      roleValue: roleValue as RoleEnum,
      createdAt,
      updatedAt,
      deletedAt,
      contact,
      dateOfBirth
    };
  }
}
