import { Container } from "@mui/material";
import { Img } from "../styled-components/img.tsx";

export interface ImagePreviewProps {
  src: string
  name: string
}

export const ImagePreview = ({src, name}: ImagePreviewProps) => {
  return (
    <Container sx={{marginTop: '120px'}}>
      <Img src={src} alt={name} />
    </Container>
  )
}