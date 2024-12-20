import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database";
import { ExceptionsModule } from "../exceptions";
import { UserController } from "@infra/controllers/User";
import { GetUserByIdUseCase } from "@use-cases/user/find-by-id";

@Module({
  imports: [ExceptionsModule, DatabaseModule],
  controllers: [UserController],
  providers: [GetUserByIdUseCase]
})
export class UserModule {}
