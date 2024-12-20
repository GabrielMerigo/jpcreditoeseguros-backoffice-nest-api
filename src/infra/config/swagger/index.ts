import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export class SwaggerConfig {
  static config(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle("JP Crédito e Seguros Backoffice API")
      .setDescription("Documentação da API da JP Crédito e Seguros Backoffice")
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);
  }
}
