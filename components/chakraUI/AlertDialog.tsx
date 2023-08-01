"use client";
import { useRef, useContext } from "react";
import { AlertDialogContext } from "@store/context/AlertDialog/alertContext";
import { useDispatch } from "react-redux";
import { removeProduct } from "@store/slices/productSlice";
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
import axios from "axios";

interface IAlertType {
  title: string;
  productId: string;
  product: IProducts[];
}

function AlertDialogBox({ title, productId, product }: IAlertType) {
  const dispatch = useDispatch();
  const cancelRef = useRef(null);
  const currentData = useContext(AlertDialogContext);
  const filterItem: any = product.filter(
    (item) => `product-${item.id}` === currentData?.productId
  );
  const removeProductFromCart = async (id: number): Promise<void> => {
    try {
      await axios.delete(`/api/cart/${id}`);
      dispatch(removeProduct(id));
      alert("Product Removed from Cart");
    } catch (error: any) {
      alert(error?.message);
    }
  };
  return (
    <>
      {`product-${filterItem[0].id}` === productId && (
        <AlertDialog
          key={filterItem.id}
          isOpen={currentData?.state as boolean}
          leastDestructiveRef={cancelRef}
          onClose={() =>
            currentData?.openDialogFxn(false) as unknown as () => void
          }
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {title}
              </AlertDialogHeader>

              <AlertDialogBody>{`You are really wants to delete ${filterItem[0].title} from cart?`}</AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={() =>
                    currentData?.openDialogFxn(false) as unknown as () => void
                  }
                >
                  Cancel
                </Button>
                <Button
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded mx-3"
                  onClick={() => {
                    currentData?.openDialogFxn(false),
                      removeProductFromCart(filterItem[0].id);
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </>
  );
}

export { AlertDialogBox };
