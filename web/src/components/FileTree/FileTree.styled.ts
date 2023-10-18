import { IconButton as MuiIconButton} from "@mui/material";
import styled from "@emotion/styled";

export const IconButton = styled(MuiIconButton)(() => ({
  position: 'absolute',
  top: 0,
  right: 0
}))

export const ItemContainer = styled.div(() => ({
  position: 'relative',
  marginTop: 5
}))