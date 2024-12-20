import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

import { IsNotEmpty } from "class-validator";

export class DeleteLeadByIdLeadDto {
  @ApiProperty({
    description: "Id do Lead",
    example: "793e5c8f-b925-4cce-a210-930ed9d201fe"
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
