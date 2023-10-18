import {
  AppBar,
  Button, CircularProgress,
  Dialog,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import { Close as CloseIcon, CloudDownload } from "@mui/icons-material";
import { Transition } from "./file-viewer-transition.tsx";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectViewFile, selectViewFileLoading } from "../../store/reducers/file/file.selector.ts";
import { TxtReader } from "../txt-reader/txt-reader.tsx";
import { ImagePreview } from "../image-preview/image-preview.tsx";
import { PdfPreview } from "../pdf-preview/pdf-preview.tsx";
import { PreviewMessage } from "../preview-message/preview-message.tsx";

export interface FileViewerProps {
  open: boolean
  toggle: () => void
}

export const FileViewer = ({open, toggle}: FileViewerProps) => {
  const file = useSelector(selectViewFile)
  const fileLoading = useSelector(selectViewFileLoading)

  const getFileReader = () => {
    if (!file) {
      return <PreviewMessage severity="error" title="Ops!" message="No File To Show"/>
    }

    if (file.fileType === 'txt') {
      return <TxtReader textURL={file.file} />
    }

    if (/(jpg|jpeg|png|gif|webp)/.test(file.fileType)) {
      return <ImagePreview src={file.file} name={file.fileName}/>
    }

    if(file.fileType === 'pdf') {
      return <PdfPreview url={file.file} />
    }

    return (
      <PreviewMessage severity="warning" title="Ops!" message="File not supported for preview. You can download it from the top-right corner button"/>
    )
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={toggle}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'fixed' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggle}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {file?.fileName}
          </Typography>
          <Button component="a" variant="contained" color="secondary" startIcon={<CloudDownload />} href={file?.file} download={file?.fileName}>
            Download file
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        {fileLoading ? <CircularProgress /> : getFileReader()}
      </Box>
    </Dialog>
  )
}