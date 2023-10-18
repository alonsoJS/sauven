import { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";

export interface TxtReaderInterface {
  textURL: string
}

export const TxtReader = ({ textURL }: TxtReaderInterface) => {
  const [text, setText] = useState<string | null>(null)

  const getText = async (url: string) => {
    const response = await fetch(url)
    return await response.text()
  }

  useEffect(() => {
    getText(textURL).then(newText => {
      setText(newText)
    })
  }, [textURL]);

  return (
    <Container sx={{marginTop: '120px'}}>
      <Paper elevation={5} sx={{padding: '16px'}}>
        <Typography component="pre" align="left" sx={{whiteSpace: 'pre-wrap'}}>
          {text}
        </Typography>
      </Paper>
    </Container>
  )
}
