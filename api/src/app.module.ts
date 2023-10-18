import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ZipService } from './zip/zip.service';
import { DirTreeService } from './dir-tree/dir-tree.service';
import { PrismaModule } from "./global/prisma/prisma.module";
import { DBFilesService } from "./db-files/db-files.service";

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [ZipService, DirTreeService, DBFilesService],
})
export class AppModule {}
