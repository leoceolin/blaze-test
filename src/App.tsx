import React from "react";
import "./App.css";
import { Stack, Typography, Button } from "@mui/material";
import { ItemContainer, Input } from "./style";
import useShopState from "./useShopState";
import Title from "./components/TitleComponent";

function App() {
  const { purchase, totalDiscount, finalValue, finalDescounts, addItem } =
    useShopState();
  return (
    <Stack>
      <Stack direction="column" gap="10px">
        <Title text="Bag of grapes" />
        <ItemContainer>
          <Button
            variant="contained"
            onClick={() => addItem("grapes", "minus")}
          >
            -
          </Button>
          <Input
            label="Bag of grapes"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={purchase.grapes.amount}
            onChange={(ev) =>
              addItem("grapes", "add", parseFloat(ev.target.value))
            }
          />
          <Button variant="contained" onClick={() => addItem("grapes", "add")}>
            +
          </Button>
          <Typography>
            Total grapes:
            {purchase.grapes.totalToPay.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            / Discount:{" "}
            {totalDiscount.grapes.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            / Final:{" "}
            {(purchase.grapes.totalToPay - totalDiscount.grapes).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
          </Typography>
        </ItemContainer>

        <Title text="Apple" />
        <ItemContainer>
          <Button variant="contained" onClick={() => addItem("apple", "minus")}>
            -
          </Button>
          <Input
            label="Apples"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={purchase.apple.amount}
            onChange={(ev) =>
              addItem("apple", "add", parseFloat(ev.target.value))
            }
          />
          <Button variant="contained" onClick={() => addItem("apple", "add")}>
            +
          </Button>
          <Typography>
            Total apples:
            {purchase.apple.totalToPay.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            / Discount:{" "}
            {totalDiscount.apple.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            / Final:{" "}
            {(purchase.apple.totalToPay - totalDiscount.apple).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
          </Typography>
        </ItemContainer>

        <Title text="Peach" />
        <ItemContainer>
          <Button variant="contained" onClick={() => addItem("peach", "minus")}>
            -
          </Button>

          <Input
            label="Peaches"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={purchase.peach.amount}
            onChange={(ev) =>
              addItem("peach", "add", parseFloat(ev.target.value))
            }
          />
          <Button variant="contained" onClick={() => addItem("peach", "add")}>
            +
          </Button>
          <Typography>
            Total peaches:
            {purchase.peach.totalToPay.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </ItemContainer>

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
