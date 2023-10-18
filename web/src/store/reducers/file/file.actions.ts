import { createAsyncThunk } from "@reduxjs/toolkit";
import { FileService } from "./file.service.ts";

export const getFileTree = createAsyncThunk<fileTreeApiResponse>(
  'file/getFileTree',
  FileService.getFileTree
)

export const uploadFile = createAsyncThunk<fileTreeApiResponse, File>(
  'file/uploadFile',
  (data) => FileService.uploadFile(data)
)

export const viewFile = createAsyncThunk<viewFile, string>(
  'file/viewFile',
  (data) => FileService.viewFile(data)
)