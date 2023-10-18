import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from "fs";
import { DECOMPRESS_PATH, SAVE_PATH } from "./env";

async function bootstrap() {
  // Generate save and decompress folders
  if (!fs.existsSync(DECOMPRESS_PATH)) {
    fs.mkdirSync(DECOMPRESS_PATH)
  }

  if (!fs.existsSync(SAVE_PATH)) {
    fs.mkdirSync(SAVE_PATH)
  }

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
