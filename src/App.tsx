import React from "react";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import useShopState from "./useShopState";
import Title from "./components/TitleComponent";
import Item from "./components/Item";

function App() {
  const {
    purchase,
    totalDiscount,
    finalValue,
    finalDescounts,
    handleItem,
    fruits,
  } = useShopState();
  return (
    <Stack>
      <Stack direction="column" gap="10px">
        {fruits.map((el, idx) => (
          <React.Fragment key={idx}>
            <Title text={el.name} />
            <Item
              fruit={el.id}
              handleItem={handleItem}
              purchase={purchase}
              totalDiscount={totalDiscount}
            />
          </React.Fragment>
        ))}
        <Title text="Total purchases" />

        <Typography>
          Final value:
          {finalValue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>

        <Typography>
          Total descounts:
          {finalDescounts.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default App;
