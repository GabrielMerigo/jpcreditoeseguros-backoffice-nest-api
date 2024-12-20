import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateLeadStatusUseCase } from "@use-cases/lead-status/create";
import { LeadStatus } from "@domain/entities/lead-status";
import { CreateLeadStatusDto } from "./dtos/create";
import { FindAllLeadStatusUseCase } from "@use-cases/lead-status/find-all";
import { DeleteByValueLeadStatusUseCase } from "@use-cases/lead-status/delete-by-value";
import { UpdateByValueLeadStatusUseCase } from "@use-cases/lead-status/update-by-value";
import { DeleteLeadStatusDto } from "./dtos/delete";
import { UpdateLeadStatusDto } from "./dtos/update";
import { FindByValueLeadStatusDto } from "./dtos/find-by-value";
import { FindByValueLeadStatusUseCase } from "@use-cases/lead-status/find-by-value";

@ApiTags("Lead Status")
@Controller("lead-status")
export class LeadStatusController {
  constructor(
    private readonly createLeadStatusUseCase: CreateLeadStatusUseCase,
    private readonly findAllLeadStatusUseCase: FindAllLeadStatusUseCase,
    private readonly findByValueLeadStatusUseCase: FindByValueLeadStatusUseCase,
    private readonly deleteByValueLeadStatusUseCase: DeleteByValueLeadStatusUseCase,
    private readonly updateByValueLeadStatusUseCase: UpdateByValueLeadStatusUseCase
  ) {}

  @Post()
  async create(@Body() leadStatus: CreateLeadStatusDto): Promise<LeadStatus> {
    return await this.createLeadStatusUseCase.create(leadStatus);
  }

  @Get()
  async findAll(): Promise<LeadStatus[]> {
    return await this.findAllLeadStatusUseCase.findAll();
  }

  @Get(":value")
  async findByValue(
    @Param() params: FindByValueLeadStatusDto
  ): Promise<LeadStatus> {
    return await this.findByValueLeadStatusUseCase.findByValue(params.value);
  }

  @Delete(":value")
  async deleteByValue(@Param() params: DeleteLeadStatusDto): Promise<void> {
    return await this.deleteByValueLeadStatusUseCase.deleteByValue(
      params.value
    );
  }

  @Put(":value")
  async updateByValue(
    @Param() params: UpdateLeadStatusDto,
    @Body() leadStatus: UpdateLeadStatusDto
  ): Promise<LeadStatus> {
    return await this.updateByValueLeadStatusUseCase.updateByValue(
      params.value,
      leadStatus
    );
  }
}
