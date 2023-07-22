"use client";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
export function Price() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Price
      </MenuButton>
      <MenuList>
        <MenuItem className="hover:bg-blue-400 hover:text-white">
          Low To High
        </MenuItem>
        <MenuItem className="hover:bg-blue-400 hover:text-white">
          High To Low
        </MenuItem>
        <MenuItem className="hover:bg-blue-400 hover:text-white">
          Rating: 1.0 To 3.0
        </MenuItem>
        <MenuItem className="hover:bg-blue-400 hover:text-white">
          Rating: 3.0 and Above
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function Rating() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Rating
      </MenuButton>
      <MenuList>
        <MenuItem className="hover:bg-blue-400 hover:text-white">
          Rating: 1.0 To 3.0
        </MenuItem>
        <MenuItem className="hover:bg-blue-400 hover:text-white">
          Rating: 3.0 and Above
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
