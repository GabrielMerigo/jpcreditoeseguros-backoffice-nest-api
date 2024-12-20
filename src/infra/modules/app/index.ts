import { Module } from "@nestjs/common";
import { validate } from "@infra/config/env";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "../user";
import { DatabaseModule } from "../database";
import { LeadModule } from "../lead";
import { LeadStatusModule } from "../lead-status";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      isGlobal: true
    }),
    DatabaseModule,
    UserModule,
    LeadModule,
    LeadStatusModule
  ]
})
export class AppModule {}
