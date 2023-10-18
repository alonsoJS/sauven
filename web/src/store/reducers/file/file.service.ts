import { API_URL } from "../../../constants/env.ts";
import { getPathTail } from "../../../lib/helpers.ts";

const getFileTree = async (): Promise<fileTreeApiResponse> => {
  return await fetch(`${API_URL}/tree`).then(response => response.json())
}

const uploadFile = async (path: File): Promise<fileTreeApiResponse> => {
  const formData = new FormData()
  formData.append('file', path)

  return await fetch(
    `${API_URL}/upload`,
    {
      method: 'POST',
      body: formData
    }
  ).then(response => response.json())
}

const viewFile = async (path: string): Promise<viewFile> => {
  const response=  await fetch(
    `${API_URL}/view-file`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filepath: path
      })
    }
  )
  const contentType = response.headers.get('Content-Type') ?? ''
  const fileType =  getPathTail(contentType)
  const fileName = getPathTail(path)
  const fileBlob = await response.blob()
  const file = URL.createObjectURL(fileBlob)

  return {
    file,
    fileType,
    fileName,
    filePath: path,
  }
}

export const FileService = {
  getFileTree,
  uploadFile,
  viewFile
}