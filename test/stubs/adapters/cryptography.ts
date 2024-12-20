import { CryptographyAdapter } from "@domain/adapters/cryptography";

export class CryptographyServiceStub implements CryptographyAdapter {
  async compare(): Promise<boolean> {
    return false;
  }

  async generateHash(): Promise<string> {
    return "HASH";
  }
}
