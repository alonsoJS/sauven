import { Container } from "@mui/material";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';

export interface PdfPreviewProps {
  url: string
}

export const PdfPreview = ({ url }: PdfPreviewProps) => {
  return (
    <Container sx={{marginTop: '120px'}}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={url} />;
      </Worker>
    </Container>

  )
}