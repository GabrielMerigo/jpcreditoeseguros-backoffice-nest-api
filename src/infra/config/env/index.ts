import { plainToInstance } from "class-transformer";
import { IsEnum, IsNumber, IsString, validateSync } from "class-validator";

enum EnvTypes {
  development,
  production,
  staging
}

class EnvironmentVariables {
  @IsString()
  DATABASE_URL: string;

  @IsNumber()
  PORT: number;

  @IsString()
  JWT_SECRET: string;

  @IsEnum(EnvTypes)
  NODE_ENV: string;

  @IsNumber()
  PGPORT: number;

  @IsString()
  POSTGRES_DB: string;

  @IsString()
  POSTGRES_USER: string;

  @IsString()
  POSTGRES_PASSWORD: string;
}

export function validate(
  config: Record<string, unknown>
): EnvironmentVariables {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
