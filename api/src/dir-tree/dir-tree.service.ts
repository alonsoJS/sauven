import { Injectable } from '@nestjs/common';
import * as directoryTree from 'directory-tree';
import { DirectoryTree, DirectoryTreeCallback } from 'directory-tree';
import { createHash } from 'crypto';
import { DBFilesService } from "../db-files/db-files.service";

@Injectable()
export class DirTreeService {
  constructor(readonly dbFile: DBFilesService) {}

  async getTree(path: string): Promise<DirectoryTree & { id?: string, createdAt?: string }> {
    const tree = directoryTree(
      path,
      {
        extensions: /(\.|\/)(?!DS_Store).*$/,
        exclude: /__MACOSX/,
      },
      this.addIdPropertyToTreeElements,
      this.addIdPropertyToTreeElements,
    );

    return await this.addCreatedAtToRootFolder(tree)
  }

  private async addCreatedAtToRootFolder(tree: DirectoryTree): Promise<DirectoryTree> {
    const newTree = tree

    if (newTree === null) return {} as DirectoryTree

    for (const item of newTree.children) {
      const idx = newTree.children.indexOf(item);
      const uploadedFile = await this.dbFile.getByPath(item.path)

      if (uploadedFile && newTree.children) {
        newTree.children[idx].custom.createdAt = uploadedFile.createdAt
      }
    }

    return newTree
  }

  private addIdPropertyToTreeElements: DirectoryTreeCallback = (
    dirTree: DirectoryTree,
    path,
  ) => {
    return dirTree.custom = {
      id: createHash('sha1').update(path).digest('base64'),
    }
  };
}
