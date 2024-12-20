import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsDateString
} from "class-validator";

export class CreateLeadDto {
  @ApiProperty({
    description: "Primeiro nome do Lead",
    example: "John"
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: "Sobrenome do Lead",
    example: "Doe"
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: "Nome completo do Lead",
    example: "John Doe"
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    description: "Email do Lead",
    example: "john.doe@example.com"
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "Telefone do Lead",
    example: "(11) 99999-9999"
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: "Documento de identificação do Lead",
    example: "123.456.789-00"
  })
  @IsString()
  @IsNotEmpty()
  identificationDocument: string;

  @ApiProperty({
    description: "Status de não conformidade do Lead",
    example: "Não conforme"
  })
  @IsString()
  @IsNotEmpty()
  nonCompliance: string;

  @ApiProperty({
    description: "Nome do usuário que criou o Lead",
    example: "John Doe"
  })
  @IsString()
  @IsNotEmpty()
  owner: string;

  @ApiProperty({
    description: "Renda mensal líquida do Lead",
    example: 1000
  })
  @IsNumber()
  @IsNotEmpty()
  monthlyNetIncome: number;

  @ApiProperty({
    description: "Status civil do Lead",
    example: "Solteiro"
  })
  @IsString()
  @IsNotEmpty()
  maritalStatus: string;

  @ApiProperty({
    description: "Localidade onde o Lead reside",
    example: "São Paulo"
  })
  @IsString()
  @IsNotEmpty()
  currentlyResideIn: string;

  @ApiProperty({
    description: "Relacionamento de emprego do Lead",
    example: "Empregado"
  })
  @IsString()
  @IsNotEmpty()
  employmentRelationship: string;

  @ApiProperty({
    description: "Tempo na empresa do Lead",
    example: new Date("2021-10-10")
  })
  @IsDateString()
  @IsNotEmpty()
  timeAtCompany: Date;

  @ApiProperty({
    description: "Número do contribuinte do Lead",
    example: "123.456.789-00"
  })
  @IsString()
  @IsNotEmpty()
  taxPayerNumber: string;

  @ApiProperty({
    description: "Data de nascimento do Lead",
    example: new Date("1990-10-10")
  })
  @IsDateString()
  @IsNotEmpty()
  birthDate: Date;

  @ApiProperty({
    description: "Idade do Lead",
    example: 30
  })
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @ApiProperty({
    description: "Nome do distrito onde o Lead reside",
    example: "Centro"
  })
  @IsString()
  @IsNotEmpty()
  districtName: string;

  @ApiProperty({
    description: "Status do Lead",
    example: "PENDENT"
  })
  @IsString()
  @IsNotEmpty()
  statusValue: string;
}
