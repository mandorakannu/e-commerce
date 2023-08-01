"use client";
import { useRef, useContext } from "react";
import { AlertDialogContext } from "@store/context/AlertDialog/alertContext";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import IProducts from "@customTypes/IProducts";

interface IAlertType {
  title: string;
  productId: string;
  product: IProducts[];
}

function AlertDialogBox({
  title,
  productId,
  product,
}: IAlertType) {
  const cancelRef = useRef(null);
  const currentData = useContext(AlertDialogContext);
  const filterItem: any = product.filter((item) => `product-${item.id}` === currentData?.productId);
  console.log(filterItem)
  console.log(currentData?.productId)
  return (
    <>
      {
        `product-${filterItem[0].id}` === productId &&
        <AlertDialog
          key={filterItem.id}
          isOpen={currentData?.state as boolean}
          leastDestructiveRef={cancelRef}
          onClose={() => currentData?.openDialogFxn(false) as unknown as () => void}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {title}
              </AlertDialogHeader>

              <AlertDialogBody>{`You are really wants to delete ${filterItem[0].title} from cart?`}</AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={() => currentData?.openDialogFxn(false) as unknown as () => void}>
                  Cancel
                </Button>
                <Button backgroundColor={"red.400"} onClick={() => currentData?.openDialogFxn(false) as unknown as () => void} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      }
    </>
  );
}

export { AlertDialogBox };
