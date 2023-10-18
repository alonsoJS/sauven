import {alpha, styled} from "@mui/material/styles";
import {treeItemClasses} from "@mui/x-tree-view/TreeItem";
import {FileTreeItem as UnstyledTreeItem} from "./FileTreeItem.tsx";

export const FileTreeItem = styled(UnstyledTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));