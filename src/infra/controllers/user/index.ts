import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
  GetUserByIdUseCase,
  GetUserUseCaseReturn
} from "@use-cases/user/find-by-id";
import { FindUserByIdDto } from "./dtos/find-by-id";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  @Get(":id")
  findById(@Param() params: FindUserByIdDto): Promise<GetUserUseCaseReturn> {
    return this.getUserByIdUseCase.findById(params.id);
  }
}
