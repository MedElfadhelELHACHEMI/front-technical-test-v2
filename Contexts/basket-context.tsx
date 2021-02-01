import React, { useState } from "react";
import { itemType } from "../types";

type BasketContextValue = {
  basket: itemType[];
  addItem: (item: itemType) => void;
  removeItem: (item: itemType) => void;
};

const BasketContext = React.createContext<BasketContextValue | undefined>(
  undefined
);

type ProviderProps = {
  value?: BasketContextValue;
  children: React.ReactNode;
};
function BasketProvider(props: ProviderProps): JSX.Element {
  const [basket, setBasket] = useState<itemType[]>([]);
  const addItem = (item) => {
    setBasket([...basket, item]);
  };
  const removeItem = (item) => {
    const newBasket = basket.filter((elem) => elem.objectID !== item.objectID);
    setBasket(newBasket);
  };
  const totalPrice = basket.reduce((acc: number, val: itemType): number => {
    return acc + val.salePrice;
  }, 0);
  if (totalPrice >= 200) {
    basket.map((elem: itemType) => {
      if (elem.salePrice >= 250) {
        elem.salePrice *= 0.5;
      }
    });
  }
  const value: BasketContextValue = {
    basket,
    addItem,
    removeItem,
  };

  return <BasketContext.Provider value={value} {...props} />;
}

function useBasket(): BasketContextValue {
  const context = React.useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }

  const { basket, addItem, removeItem } = context;
  return {
    basket,
    addItem,
    removeItem,
  };
}

export { BasketProvider, useBasket };
export default BasketContext;
