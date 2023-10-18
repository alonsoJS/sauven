import { Button, Container, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styled-components/visually-hidden-input.ts";
import { ChangeEvent } from "react";
import { uploadFile } from "../store/reducers/file/file.actions.ts";
import { useStoreDispatch } from "../store/hooks.ts";

export const Header = () => {
  const dispatch = useStoreDispatch()

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      dispatch(uploadFile(e.target.files[0]))
    }
  }
  return (
    <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
      <Typography variant="h3" component="h1" sx={{fontWeight: 'bold'}}>Sauven</Typography>
      <Button component="label" variant="contained" startIcon={<CloudUpload />}>
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
      </Button>
    </Container>
  )
}