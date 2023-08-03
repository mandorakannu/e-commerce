import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function SuccessOrder({
  title,
  description,
  isSuccess,
}: {
  title: string;
  description: string;
  isSuccess: boolean;
}) {
  const router = useRouter();
  const [isSuccessOrder, setIsSuccessOrder] = useState(false);
  const cancelRef = useRef(null);
  const onClose = () => setIsSuccessOrder(false);
  useEffect(() => {
    if (isSuccess) {
      setIsSuccessOrder(true);
    } else {
      setIsSuccessOrder(false);
      onClose();
    }
  }, [isSuccess]);

  return (
    <>
      <AlertDialog
        isOpen={isSuccessOrder}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>{description}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={()=>router.push("/shop")}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
