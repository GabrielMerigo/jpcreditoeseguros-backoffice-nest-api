import { TokenAdapter } from "@domain/adapters/token";
import { UserRepository, UserWithoutPassword } from "@domain/repositories/user";
import { Injectable } from "@nestjs/common";

interface AuthenticatedHeader extends Headers {
  authorization?: string;
}

export interface AuthenticatedRequest extends Request {
  user?: UserWithoutPassword;
  headers: AuthenticatedHeader;
}

@Injectable()
export class RouteAuthenticationUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenAdapter
  ) {}

  public async validate(request: AuthenticatedRequest): Promise<boolean> {
    const bearerToken = request?.headers?.authorization;

    if (!bearerToken) return false;

    const token = bearerToken.split(" ")[1];
    const userSubscription = await this.tokenService.getPayloadFromToken(token);

    if (!userSubscription) return false;

    const user = await this.userRepository.findById(userSubscription.id);

    if (!user) return false;

    request.user = user;

    return true;
  }
}
