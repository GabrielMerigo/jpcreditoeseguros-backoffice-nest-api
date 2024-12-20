import { TokenAdapter, TokenPayload } from "@domain/adapters/token";

export class TokenServiceStub implements TokenAdapter {
  async getPayloadFromToken(): Promise<TokenPayload> {
    return { id: "USER_ID" };
  }

  async generateToken(): Promise<string> {
    return "ENCRYPTED_TOKEN";
  }
}
