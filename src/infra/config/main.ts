import { NestFactory } from "@nestjs/core";
import { AppModule } from "@infra/modules/app";
import { ValidationPipeConfig } from "./validation-pipe";
import { SwaggerConfig } from "./swagger";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(ValidationPipeConfig.config());
  SwaggerConfig.config(app);
  app.enableCors();

  await app.listen(process.env.PORT);
}
bootstrap();
