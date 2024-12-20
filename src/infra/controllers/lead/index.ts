import { Lead } from "@domain/entities/lead";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateLeadUseCase } from "@use-cases/lead/create";
import { FindLeadByIdUseCase } from "@use-cases/lead/find-by-id";
import { CreateLeadDto } from "./dtos/create";
import { FindLeadByIdLeadDto } from "./dtos/find-by-id";
import { DeleteLeadByIdLeadDto } from "./dtos/delete-by-id";
import { DeleteLeadByIdUseCase } from "@use-cases/lead/delete-by-id";
import { FindAllLeadsQueryDto } from "./dtos/find-all";
import { FindAllLeadsUseCase } from "@use-cases/lead/find-all";
import { FindAllLeadsReturn } from "@domain/repositories/lead";

@ApiTags("Lead")
@Controller("lead")
export class LeadController {
  constructor(
    private readonly findLeadByIdUseCase: FindLeadByIdUseCase,
    private readonly createLeadUseCase: CreateLeadUseCase,
    private readonly deleteLeadByIdUseCase: DeleteLeadByIdUseCase,
    private readonly findAllLeadsUseCase: FindAllLeadsUseCase
  ) {}

  @Get(":id")
  async findById(@Param() params: FindLeadByIdLeadDto): Promise<Lead> {
    return await this.findLeadByIdUseCase.findById(params.id);
  }

  @Post()
  async create(@Body() body: CreateLeadDto): Promise<Lead> {
    return await this.createLeadUseCase.create(body);
  }

  @Delete(":id")
  async deleteById(@Param() params: DeleteLeadByIdLeadDto): Promise<void> {
    return await this.deleteLeadByIdUseCase.deleteById(params.id);
  }

  @Get()
  async findAll(
    @Query() query: FindAllLeadsQueryDto
  ): Promise<FindAllLeadsReturn> {
    return await this.findAllLeadsUseCase.findAll(query);
  }
}
