import { IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { FindAllLeadsUseCaseParams } from "@use-cases/lead/find-all";
import { IsString } from "class-validator";
import { QueryWithPagination } from "@infra/config/validation-pipe/commons/query-with-pagination";

export class FindAllLeadsQueryDto
  extends QueryWithPagination
  implements FindAllLeadsUseCaseParams
{
  @ApiProperty({
    description: "Nome do lead",
    example: "John Doe",
    required: false
  })
  @IsOptional()
  @IsString()
  fullName?: string;
}
