import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class FindUserByIdDto {
  @ApiProperty({
    description: "ID do usuario",
    example: "793e5c8f-b925-4cce-a210-930ed9d201fe"
  })
  @IsUUID()
  id: string;
}
