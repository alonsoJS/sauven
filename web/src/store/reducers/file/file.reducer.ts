import { createReducer } from "@reduxjs/toolkit";
import { getFileTree, uploadFile, viewFile } from "./file.actions.ts";

const initialState: fileState = {
  fileTree: null,
  fileTreeLoading: false,
  fileTreeError: false,
  viewFile: null,
  viewFileLoading: false,
  viewFileError: false,
}

export const fileReducer = createReducer(initialState, (builder) => {
  builder.addCase(getFileTree.pending, (state) => ({
    ...state,
    fileTreeLoading: true,
    fileTreeError: false

  }))

  builder.addCase(getFileTree.rejected, (state) => ({
    ...state,
    fileTreeLoading: false,
    fileTreeError: true
  }))

  builder.addCase(getFileTree.fulfilled, (state, action) => ({
    ...state,
    fileTreeLoading: false,
    fileTreeError: false,
    fileTree: action.payload.tree
  }))

  builder.addCase(uploadFile.pending, (state) => ({
    ...state,
    fileTreeLoading: true,
    fileTreeError: false

  }))

  builder.addCase(uploadFile.rejected, (state) => ({
    ...state,
    fileTreeLoading: false,
    fileTreeError: true
  }))

  builder.addCase(uploadFile.fulfilled, (state, action) => ({
    ...state,
    fileTreeLoading: false,
    fileTreeError: false,
    fileTree: action.payload.tree
  }))

  builder.addCase(viewFile.pending, (state) => ({
    ...state,
    viewFileLoading: true,
    viewFileError: false
  }))

  builder.addCase(viewFile.rejected, (state) => ({
    ...state,
    viewFileLoading: false,
    viewFileError: true
  }))

  builder.addCase(viewFile.fulfilled, (state, action) => ({
    ...state,
    viewFileLoading: false,
    viewFileError: false,
    viewFile: action.payload
  }))
})