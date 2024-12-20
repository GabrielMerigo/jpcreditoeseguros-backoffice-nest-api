import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

import { IsString } from "class-validator";

export class CreateLeadStatusDto {
  @ApiProperty({
    description: "Valor do status",
    example: "PENDENT"
  })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({
    description: "Label do status",
    example: "Pendente"
  })
  @IsString()
  @IsNotEmpty()
  label: string;

  @ApiProperty({
    description: "Descrição do status",
    example: "Lead pendente"
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
