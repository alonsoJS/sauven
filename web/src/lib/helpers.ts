// Checks if path has extension
// If path has extension return 'file'
// If path has no extension return 'folder'
export const getItemType = (path: string) => /^.*\.[^\\]+$/.test(path) ? 'file' : 'folder'

export const getPathTail = (path: string) => path?.substring(path?.lastIndexOf("/") + 1)