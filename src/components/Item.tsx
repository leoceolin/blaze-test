import { Typography, Button } from "@mui/material";
import React from "react";
import { ItemContainer, Input } from "../style";

interface IItem {
  fruit: string;
  handleItem: (fruit: string, operation: string, quantity?: number) => void;
  purchase: any;
  totalDiscount: any;
}

const Item: React.FC<IItem> = (props: IItem) => {
  const { fruit, purchase, totalDiscount, handleItem } = props;

  return (
    <ItemContainer>
      <Button variant="contained" onClick={() => handleItem(fruit, "minus")}>
        -
      </Button>
      <Input
        label={`${fruit}`}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={purchase[fruit].amount}
        onChange={(ev) => handleItem(fruit, "add", parseFloat(ev.target.value))}
      />
      <Button variant="contained" onClick={() => handleItem(fruit, "add")}>
        +
      </Button>
      <Typography>
        Total {fruit}:
        {purchase[fruit].totalToPay.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
        {fruit !== "peach" && (
          <>
            {" "}
            / Discount:{" "}
            {totalDiscount[fruit].toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            / Final:{" "}
            {(purchase[fruit].totalToPay - totalDiscount[fruit]).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
          </>
        )}
      </Typography>
    </ItemContainer>
  );
};

export default Item;
