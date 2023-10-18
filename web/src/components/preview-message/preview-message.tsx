import { Alert, AlertTitle, Container } from "@mui/material";

export interface PreviewMessageProps {
  message: string
  title: string
  severity?: 'error' | 'info' | 'success' | 'warning'
  variant?: 'filled' | 'outlined' | 'standard'
}

export const PreviewMessage = (props: PreviewMessageProps) => {
  const {
    message,
    title,
    severity = 'info',
    variant = 'standard'
  } = props

  return (
    <Container sx={{marginTop: '120px'}}>
      <Alert severity={severity} variant={variant}>
        <AlertTitle>{title}</AlertTitle>
        <strong>{message}</strong>
      </Alert>
    </Container>
  )
}