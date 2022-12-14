import { useEffect, useState } from "react";

const fruits = [
  {
    name: "Bag of grapes",
    id: "grapes",
  },
  {
    name: "Apples",
    id: "apple",
  },
  {
    name: "Peaches",
    id: "peach",
  },
];

const useShopState = () => {
  const [purchase, setPurchase] = useState({
    grapes: { amount: 0, totalToPay: 0 },
    apple: { amount: 0, totalToPay: 0 },
    peach: { amount: 0, totalToPay: 0 },
  });

  const [totalDiscount, setDiscount] = useState({
    grapes: 0,
    apple: 0,
  });

  const [finalValue, setFinalValue] = useState(0);
  const [finalDescounts, setFinalDescounts] = useState(0);

  const handleItem = (item: string, action: string, value?: number) => {
    if (action === "add") {
      setPurchase((prevState: any) => ({
        ...prevState,
        [item]: {
          ...prevState[item],
          amount: value ?? prevState[item].amount + 1,
        },
      }));
    } else {
      setPurchase((prevState: any) => ({
        ...prevState,
        [item]: {
          ...prevState[item],
          amount:
            prevState[item].amount === 0 || value === 0
              ? 0
              : value !== undefined
              ? value - 1
              : prevState[item].amount - 1,
        },
      }));
    }
  };

  useEffect(() => {
    if (purchase.grapes.amount >= 1) {
      const checkAmountGrapesToPayFor = purchase.grapes.amount / 2;
      const calcDiscount = Math.floor(checkAmountGrapesToPayFor) * 5;
      setDiscount((prevState) => ({
        ...prevState,
        grapes: calcDiscount,
      }));

      setPurchase((prevState) => ({
        ...prevState,
        grapes: {
          ...prevState.grapes,
          totalToPay: purchase.grapes.amount * 5,
        },
      }));
    } else {
      setDiscount((prevState) => ({
        ...prevState,
        grapes: 0,
      }));

      setPurchase((prevState) => ({
        ...prevState,
        grapes: {
          ...prevState.grapes,
          totalToPay: 0,
        },
      }));
    }

    if (purchase.apple.amount >= 1) {
      let discount = 0;
      const total = purchase.apple.amount * 3;

      if (purchase.apple.amount >= 2) {
        discount = total * 0.2;
        setDiscount((prevState) => ({
          ...prevState,
          apple: discount,
        }));
        setPurchase((prevState) => ({
          ...prevState,
          apple: {
            ...prevState.apple,
            totalToPay: total,
          },
        }));
      } else {
        setDiscount((prevState) => ({
          ...prevState,
          apple: 0,
        }));

        setPurchase((prevState) => ({
          ...prevState,
          apple: {
            ...prevState.apple,
            totalToPay: total,
          },
        }));
      }
    } else {
      setDiscount((prevState) => ({
        ...prevState,
        apple: 0,
      }));
      setPurchase((prevState) => ({
        ...prevState,
        apple: {
          ...prevState.apple,
          totalToPay: 0,
        },
      }));
    }

    if (purchase.peach.amount >= 1) {
      setPurchase((prevState) => ({
        ...prevState,
        peach: {
          ...prevState.peach,
          totalToPay: purchase.peach.amount * 7,
        },
      }));
    } else {
      setPurchase((prevState) => ({
        ...prevState,
        peach: {
          ...prevState.peach,
          totalToPay: 0,
        },
      }));
    }
  }, [purchase.grapes.amount, purchase.apple.amount, purchase.peach.amount]);

  useEffect(() => {
    setFinalValue(
      purchase.grapes.totalToPay -
        totalDiscount.grapes +
        (purchase.apple.totalToPay - totalDiscount.apple) +
        purchase.peach.totalToPay
    );

    setFinalDescounts(totalDiscount.grapes + totalDiscount.apple);
  }, [
    purchase.grapes.totalToPay,
    purchase.apple.totalToPay,
    purchase.peach.totalToPay,
    totalDiscount.grapes,
    totalDiscount.apple,
  ]);

  useEffect(() => {
    setFinalDescounts(totalDiscount.grapes + totalDiscount.apple);
  }, [totalDiscount.grapes, totalDiscount.apple]);

  return {
    purchase,
    totalDiscount,
    finalValue,
    finalDescounts,
    handleItem,
    fruits,
  };
};

export default useShopState;
