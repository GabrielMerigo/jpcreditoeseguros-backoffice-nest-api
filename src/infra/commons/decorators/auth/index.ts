import { AuthGuard } from "@infra/commons/guards/auth";
import { Prisma } from "@infra/config/prisma";
import { JwtIntegration } from "@infra/integrations/token/jwt";
import { PrismaUserRepository } from "@infra/repositories/prisma/user";
import { UseGuards, applyDecorators } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ApiBearerAuth } from "@nestjs/swagger";
import { RouteAuthenticationUseCase } from "@use-cases/authentication/route-authentication";

const userRepository = new PrismaUserRepository(new Prisma());
const tokenService = new JwtIntegration(new JwtService());
const routerValidatorUseCase = new RouteAuthenticationUseCase(
  userRepository,
  tokenService
);

export const AuthDecorator = (): MethodDecorator =>
  applyDecorators(
    UseGuards(new AuthGuard(routerValidatorUseCase)),
    ApiBearerAuth()
  );
