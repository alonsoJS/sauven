interface getFileTreeParams {
  path: string
}

interface fileState {
  fileTreeLoading: boolean
  fileTreeError: boolean
  fileTree: fileTree | null
  viewFileLoading: boolean
  viewFileError: boolean
  viewFile: viewFile | null
}

interface fileTreeApiResponse {
  tree: fileTree
}

interface fileTree {
  path: string
  name: string
  children?: fileTree[]
  custom: {
    id: string
    createdAt?: string
  }
}

interface viewFile {
  file: string
  fileType: string
  fileName: string
  filePath: string
}

