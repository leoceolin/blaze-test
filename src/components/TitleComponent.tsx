import { Typography } from "@mui/material";
import React from "react";

interface ITitle {
  text: string;
}

const Title: React.FC<ITitle> = (props: ITitle) => {
  const { text } = props;

  return <Typography fontWeight="bold">{text}</Typography>;
};

export default Title;
