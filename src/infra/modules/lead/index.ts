import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database";
import { FindLeadByIdUseCase } from "@use-cases/lead/find-by-id";
import { ExceptionsModule } from "../exceptions";
import { LeadController } from "@infra/controllers/lead";
import { CreateLeadUseCase } from "@use-cases/lead/create";
import { DeleteLeadByIdUseCase } from "@use-cases/lead/delete-by-id";
import { FindAllLeadsUseCase } from "@use-cases/lead/find-all";
import { PaginationUseCase } from "@use-cases/pagination";

@Module({
  imports: [DatabaseModule, ExceptionsModule],
  controllers: [LeadController],
  providers: [
    FindLeadByIdUseCase,
    CreateLeadUseCase,
    DeleteLeadByIdUseCase,
    FindAllLeadsUseCase,
    PaginationUseCase
  ]
})
export class LeadModule {}
