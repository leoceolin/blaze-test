import { Stack, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ItemContainer = styled(Stack)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  align-content: center;
`;

export const Input = styled(TextField)`
  width: 100px;
  display: flex;
  align-items: center;
  align-self: center;

  .MuiOutlinedInput-input {
    text-align: center;
    padding: 6px;
  }
`;
