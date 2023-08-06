"use client";
import { memo, useState, useEffect } from "react";
import { Open_Sans } from "next/font/google";
import NavbarDrawer from "../chakraUI/NavbarDrawer";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

const font = Open_Sans({
  subsets: ["latin-ext"],
  display: "swap",
  preload: true,
  weight: ["400", "700"],
});
const Navbar = (): JSX.Element => {
  const [session, setSession] = useState<null | Session>(null);

  const getAllUserSession = async () => {
    const session = await getSession();
    setSession(session);
  };
  useEffect(() => {
    getAllUserSession();

    return () => {
      session;
    };
  }, [session]);

  return (
    <>
      <header className={font.className}>
        <nav className="flex justify-between items-center bg-white p-4 border-b-2 border-b-blue-500 z-50">
          <Link href="/" className="logo font-semibold">
            MK STORE
          </Link>
          <div className="flex justify-center items-center">
            {session ? (
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src={session?.user?.image!}
                    padding={"1"}
                  />
                </WrapItem>{" "}
              </Wrap>
            ) : (
              <Menu>
                <MenuButton
                  marginRight={"1rem"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  backgroundColor={"transparent"}
                  _hover={{ backgroundColor: "transparent" }}
                  _focus={{ backgroundColor: "transparent" }}
                  _active={{ backgroundColor: "transparent" }}
                >
                  Welcome!
                </MenuButton>
                <MenuList>
                  <Link href="/login">
                    <MenuItem className="hover:bg-blue-500 hover:text-white transition-colors delay-75">
                      Login
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            )}
            <NavbarDrawer />
          </div>
        </nav>
      </header>
    </>
  );
};
export default memo(Navbar);
