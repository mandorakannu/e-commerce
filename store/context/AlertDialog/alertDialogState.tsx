"use client"
import { useState } from "react";
import { AlertDialogContext } from "./alertContext";

export function AlertDialogProvider({ children }: any) {
  const [currentValue, setCurrentValue] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("" as string);

  const openDialogFxn = (value: boolean) => {
    setCurrentValue(value);
  }

  const currentState = {
    state: currentValue,
    productId,
    openDialogFxn: function (value: boolean) {
      openDialogFxn(value);
    },
    setProductIdFxn: function (value: string) {
      setProductId(value);
    }
  }
  return (
    <AlertDialogContext.Provider value={currentState}>
      {children}
    </AlertDialogContext.Provider>
  );
}
