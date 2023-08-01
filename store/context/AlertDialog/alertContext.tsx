import { createContext } from "react";

type AlertDialogContextType = {
    state: boolean;
    openDialogFxn: (value: boolean) => void;
    productId: string;
    setProductIdFxn: (value: string) => void;
}

export const AlertDialogContext = createContext<null | AlertDialogContextType>(null);
