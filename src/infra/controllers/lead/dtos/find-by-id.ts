import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class FindLeadByIdLeadDto {
  @ApiProperty({
    description: "Id do Lead",
    example: "793e5c8f-b925-4cce-a210-930ed9d201fe"
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
