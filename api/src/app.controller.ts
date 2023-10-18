import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response, Request } from 'express';
import { diskStorage } from 'multer';
import { createReadStream } from 'fs';
import { join } from 'path';
import * as process from 'process';
import { ZipService } from './zip/zip.service';
import { DirTreeService } from './dir-tree/dir-tree.service';
import { DBFilesService } from "./db-files/db-files.service";
import * as path from 'path'

const DECOMPRESS_PATH = 'user-uploads/decompressed-files';
const SAVE_PATH = './user-uploads/original-zips';

@Controller()
export class AppController {
  constructor(
    private readonly zipService: ZipService,
    private readonly dirTree: DirTreeService,
    private readonly dbFiles: DBFilesService
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: SAVE_PATH,
        filename(
          req: Request,
          file: Express.Multer.File,
          callback: (error: Error | null, filename: string) => void,
        ) {
          callback(null, file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const decompressedPath = await this.zipService.uncompress(file.originalname, file.path, DECOMPRESS_PATH);
    await this.dbFiles.store({
      path: `${DECOMPRESS_PATH}/${decompressedPath}`,
      originalZipPath: file.path,
      filename: file.originalname
    })

    return {
      tree: await this.dirTree.getTree(DECOMPRESS_PATH),
    };
  }

  @Get('tree')
  async getTree() {
    return {
      tree: await this.dirTree.getTree(DECOMPRESS_PATH),
    };
  }

  @Post('view-file')
  getFile(@Body() { filepath }: { filepath: string }, @Res() res: Response) {
    const file = createReadStream(join(process.cwd(), filepath));
    const fileExtension = filepath.slice((filepath.lastIndexOf(".") - 1 >>> 0) + 2)

    res.set('Content-Type', `application/${fileExtension}`)
    file.pipe(res);
  }
}
