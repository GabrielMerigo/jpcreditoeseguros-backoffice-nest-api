import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

import { IsString } from "class-validator";

export class DeleteLeadStatusDto {
  @ApiProperty({
    description: "Valor do status",
    example: "PENDENT"
  })
  @IsString()
  @IsNotEmpty()
  value: string;
}
