import { CreateLeadStatusUseCase } from "@use-cases/lead-status/create";
import { DatabaseModule } from "../database";
import { Module } from "@nestjs/common";
import { LeadStatusController } from "@infra/controllers/lead-status";
import { ExceptionsModule } from "../exceptions";
import { FindByValueLeadStatusUseCase } from "@use-cases/lead-status/find-by-value";
import { FindAllLeadStatusUseCase } from "@use-cases/lead-status/find-all";
import { DeleteByValueLeadStatusUseCase } from "@use-cases/lead-status/delete-by-value";
import { UpdateByValueLeadStatusUseCase } from "@use-cases/lead-status/update-by-value";

@Module({
  imports: [DatabaseModule, ExceptionsModule],
  controllers: [LeadStatusController],
  providers: [
    CreateLeadStatusUseCase,
    FindAllLeadStatusUseCase,
    FindByValueLeadStatusUseCase,
    DeleteByValueLeadStatusUseCase,
    UpdateByValueLeadStatusUseCase
  ]
})
export class LeadStatusModule {}
