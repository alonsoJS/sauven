import { Injectable } from "@nestjs/common";
import { PrismaService } from "../global/prisma/prisma.service";
import { DBFileCreation } from "./db-files.dto";

@Injectable()
export class DBFilesService {
  constructor(private prisma: PrismaService) {}

  async store(data: DBFileCreation) {
    return this.prisma.upload.create({
      data
    })
  }

  async getAll() {
    return this.prisma.upload.findMany()
  }

  async getByPath(path: string) {
    return this.prisma.upload.findFirst({
      where: { path }
    })
  }
}