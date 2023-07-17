"use client";
import { memo } from "react";
import { Open_Sans } from "next/font/google";
import NavbarDrawer from "../chakraUI/NavbarDrawer";
import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const font = Open_Sans({
  subsets: ["latin-ext"],
  display: "swap",
  preload: true,
  weight: ["400", "700"],
});
const Navbar = (): JSX.Element => {
  return (
    <>
      <header className={font.className}>
        <nav className="flex justify-between items-center bg-white p-4 border-b-2 border-b-blue-500 z-50">
          <span className="logo font-semibold">MK STORE</span>
          <div>
            <Menu>
              <MenuButton
                marginRight={"1rem"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="bg-transparent hover:bg-transparent focus:bg-transparent"
              >
                Welcome!
              </MenuButton>
              <MenuList>
              <Link href="/login">
                  <MenuItem className="hover:bg-blue-500 hover:text-white transition-colors delay-75">
                    Login
                  </MenuItem>
                </Link>
                <Link href="/signup">
                  <MenuItem className="hover:bg-blue-500 hover:text-white transition-colors delay-75">
                    Sign Up
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <NavbarDrawer />
          </div>
        </nav>
      </header>
    </>
  );
};
export default memo(Navbar);
