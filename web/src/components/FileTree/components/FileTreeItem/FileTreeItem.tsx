import * as React from "react";
import {TreeItem, TreeItemProps} from "@mui/x-tree-view/TreeItem";
import {TransitionComponent} from "../../../transition/transition.tsx";

export const FileTreeItem = React.forwardRef(
  (props: TreeItemProps, ref: React.Ref<HTMLLIElement>) => (
    <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
  ),
);