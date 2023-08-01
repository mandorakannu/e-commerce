"use client";
import { memo } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

const NavbarDrawer = () => {
  const cartItems = useSelector((state: RootState) => state.products.length); // It will be a coming from store using redux useSelector hook.
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor={"transparent"}
        _hover={{ backgroundColor: "transparent" }}
        _focus={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent" }}
      >
        <GiHamburgerMenu size={30} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottom={"2px"} borderColor={"gray.100"}>
            MK STORE
          </DrawerHeader>

          <DrawerBody
            padding={"0.5rem"}
            marginTop={"1.5rem"}
            marginBottom={"1.5rem"}
          >
            <Link
              href="/"
              className="block hover:bg-primary-50 hover:text-blue-500 border-l-4 border-transparent hover:border-blue-500 my-6 p-3 transition-colors duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block hover:bg-primary-50 hover:text-blue-500 border-l-4 border-transparent hover:border-blue-500 my-6 p-3 transition-colors duration-150 ease-in-out"
            >
              Shop
            </Link>
            <Link
              href="/cart"
              className="block hover:bg-primary-50 hover:text-blue-500 border-l-4 border-transparent hover:border-blue-500 my-6 p-3 transition-colors duration-150 ease-in-out"
            >
              Cart Items: {cartItems}
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default memo(NavbarDrawer);
