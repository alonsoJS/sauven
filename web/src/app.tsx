import { useEffect } from "react";
import { CircularProgress, Container, Stack } from "@mui/material";
import { FileTree } from "./components/FileTree/FileTree.tsx";
import { getFileTree } from "./store/reducers/file/file.actions.ts";
import { useStoreDispatch } from "./store/hooks.ts";
import { useSelector } from "react-redux";
import { selectFileTree, selectFileTreeLoading } from "./store/reducers/file/file.selector.ts";
import { Header } from "./header/header.tsx";
import Box from "@mui/material/Box";

export const App = () => {
  const dispatch = useStoreDispatch()
  const fileTree = useSelector(selectFileTree)
  const fileTreeLoading = useSelector(selectFileTreeLoading)

  useEffect(() => {
    dispatch(getFileTree())
  }, [dispatch]);

  return (
    <Stack direction="row" sx={{height: 1}}>
      <Container>
        <Header />
        <hr />
        { fileTreeLoading
          ? <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}><CircularProgress /></Box>
          : fileTree && <FileTree tree={fileTree} />
        }
      </Container>
    </Stack>
  );
}