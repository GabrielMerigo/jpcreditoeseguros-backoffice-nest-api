import { Injectable } from "@nestjs/common";
import { UserRepository, UserWithoutPassword } from "@domain/repositories/user";
import { ExceptionsAdapter } from "@domain/adapters/exceptions";

export interface GetUserUseCaseReturn {
  user: UserWithoutPassword;
}

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    protected readonly exceptionsService: ExceptionsAdapter
  ) {}

  async findById(id: string): Promise<GetUserUseCaseReturn> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      this.exceptionsService.notFound({
        message: "User wasn't found"
      });
      return;
    }

    return { user };
  }
}
