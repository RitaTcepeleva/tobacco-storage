"use client";

import { Menu as ChakraMenu, Portal, Button } from "@chakra-ui/react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { useFilters } from "@/shared/context";
import type { Filters } from "@/shared/types";

type MenuItemProps = { value: string; content: string };

type MenuProps = {
  title: string;
  filter: keyof Filters;
  items: MenuItemProps[];
};

export const Menu = ({ title, filter, items }: MenuProps) => {
  const { filters, setFilter } = useFilters();
  const selectedItem = items.find((item) => item.value === filters[filter]);

  return (
    <ChakraMenu.Root>
      <ChakraMenu.Trigger asChild>
        <Button>
          <CiFilter />
          {selectedItem ? selectedItem.content : title}
          <IoIosArrowDown />
        </Button>
      </ChakraMenu.Trigger>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content>
            {items.map((item) => (
              <ChakraMenu.Item
                value={item.value}
                key={item.value}
                onSelect={() => setFilter(filter, item.value)}
              >
                {item.content}
                {selectedItem?.value === item.value && <MdDone />}
              </ChakraMenu.Item>
            ))}
          </ChakraMenu.Content>
        </ChakraMenu.Positioner>
      </Portal>
    </ChakraMenu.Root>
  );
};
