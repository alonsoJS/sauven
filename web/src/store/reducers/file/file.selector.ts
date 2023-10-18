import { RootState } from "../../store.ts";

export const selectFileTree = (state: RootState) => state.file.fileTree

export const selectFileTreeError = (state: RootState) => state.file.fileTreeError

export const selectFileTreeLoading = (state: RootState) => state.file.fileTreeLoading

export const selectViewFile = (state: RootState) => state.file.viewFile

export const selectViewFileLoading = (state: RootState) => state.file.viewFileLoading

export const selectViewFileError = (state: RootState) => state.file.viewFileError
