import { ReactElement, useState } from "react";
import Box from '@mui/material/Box';
import { TreeView } from '@mui/x-tree-view/TreeView';
import {MinusSquare} from "../Icons/MinusSquare.tsx";
import {PlusSquare} from "../Icons/PlusSquare.tsx";
import {CloseSquare} from "../Icons/CloseSquare.tsx";
import {FileTreeItem} from './components/FileTreeItem/FileTreeItem.styled.ts'
import { getItemType } from "../../lib/helpers.ts";
import { useStoreDispatch } from "../../store/hooks.ts";
import { viewFile } from "../../store/reducers/file/file.actions.ts";
import { FileViewer } from "../file-viewer/file-viewer.tsx";
import { Typography } from "@mui/material";

export interface FileTreeProps {
  id: string
  title: string
  contents: fileTree[]
  isRoot?: boolean
  createdAt?: string
}

const RenderTree = (props: FileTreeProps) => {
  const {
    id,
    title,
    contents,
    isRoot,
    createdAt
  } = props
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useStoreDispatch()

  const onClickHandler = (path: string) => {
    setOpen(prev => !prev)
    dispatch(viewFile(path))
  }

  const handleModalToggle = () => {
    setOpen(prev => !prev)
  }

  const renderItem = (item: fileTree) => {
    const { path, name, custom: { id, createdAt } , children = []} = item
    const type = getItemType(path)

    if (type === 'folder') {
      return (
        <RenderTree key={id} id={id} title={name} contents={children} createdAt={createdAt}/>
      )
    } else {
      return <FileTreeItem key={id} nodeId={id} label={name} onClick={() => onClickHandler(item.path)}/>
    }
  }

  const parentLabel = (labelText: string, createdAt?: string) => {
    const fileDate = createdAt && new Date(createdAt || '').toDateString()
    return (
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>{labelText}</Typography>
        { fileDate && <Typography sx={{color: '#b7b7b7'}}>Uploaded on: {fileDate.toString()}</Typography> }
      </Box>
    )
  }

  const renderParentTag = (children: ReactElement[], isRoot:boolean) => {
    if (!isRoot) {
      return (
        <FileTreeItem nodeId={id} label={parentLabel(title, createdAt)}>
          {children}
        </FileTreeItem>
      )
    } else {
      return (
        <div>
          {children}
        </div>
      )
    }
  }

  return (
    <div>
      { renderParentTag(contents.map(item => renderItem(item)), isRoot ?? false) }
      <FileViewer open={open} toggle={handleModalToggle} />
    </div>
  )
}

interface TreeProps {
  tree: fileTree
}
export function FileTree(props: TreeProps) {
  const {
    tree: {
      name,
      custom: { id },
      children= []
    }
  } = props

  return (
    <Box>
      <TreeView
        aria-label="customized"
        defaultExpanded={['1']}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
        sx={{ overflowX: 'hidden' }}
      >
        <RenderTree
          id={id}
          title={name}
          contents={children}
          isRoot
        />
      </TreeView>
    </Box>
  );
}