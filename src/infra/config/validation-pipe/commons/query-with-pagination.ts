import { ApiPropertyOptional } from "@nestjs/swagger";
import { LIMIT_MAX_VALUE } from "@use-cases/pagination/constants";
import { IsOptional, IsString } from "class-validator";

export class QueryWithPagination {
  @ApiPropertyOptional({
    description: "Pagina de busca"
  })
  @IsString()
  @IsOptional()
  page?: string;

  @ApiPropertyOptional({
    description: `Limite de items. Não deve ser maior que ${LIMIT_MAX_VALUE}`
  })
  @IsString()
  @IsOptional()
  limit?: string;
}
