"use client";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import IProducts from "@customTypes/IProducts";

export function useCheckout() {
    const items = useSelector((state: RootState) => state.products.length);
    const quantity = useSelector((state: RootState) => state.products.reduce((acc: number, item: IProducts) => acc + item.quantity, 0));
    const totalCharges = useSelector((state: RootState) => state.products.reduce((acc: number, item: IProducts) => acc + item.quantity * item.price, 0));
    const randomlySelectedShipping = Math.floor(Math.random() * 100) + 1;
    const subTotal = totalCharges + randomlySelectedShipping;
    const estimatedTotal = subTotal + (subTotal * 18 / 100);

    return {
        items,
        quantity,
        totalCharges,
        randomlySelectedShipping,
        subTotal,
        estimatedTotal
    }
}