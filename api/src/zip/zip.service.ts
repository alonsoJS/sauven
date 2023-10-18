import { Injectable } from '@nestjs/common';
import * as decompress from 'decompress';

@Injectable()
export class ZipService {
  async uncompress(filename: string, path: string, outputPath: string) {
    const uncompressPath = `${outputPath}`

    const decompressed = await decompress(path, uncompressPath, {
      filter: (file) => !file.path.includes('__MACOSX'),
    });

    return decompressed[0].path.replace(/\/+$/, '')
  }
}
