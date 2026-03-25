"use client";

import { Menu as ChakraMenu, Portal, Button } from "@chakra-ui/react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { useFilters } from "@/shared/context";
import type { Filters, MenuItem } from "@/shared/types";
import { useState } from "react";

type MenuProps<K extends keyof Filters> = {
  title: string;
  filter: K;
  items: MenuItem<Filters[K]>[];
};

export const Menu = <K extends keyof Filters>({
  title,
  filter,
  items,
}: MenuProps<K>) => {
  const { filters, setFilter } = useFilters();
  const selectedItem = items.find((item) => item.value === filters[filter]);

  return (
    <ChakraMenu.Root>
      <ChakraMenu.Trigger asChild>
        <Button gap={5}>
          <CiFilter />
          {selectedItem ? selectedItem.content : title}
          <IoIosArrowDown opacity={0.5} />
        </Button>
      </ChakraMenu.Trigger>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content>
            {items.map((item) => (
              <ChakraMenu.Item
                value={String(item.value)}
                key={item.value}
                onSelect={() => setFilter(filter, String(item.value))}
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

type AdditionMenuProps<K extends keyof Filters> = {
  title: string;
  items: MenuItem<Filters[K]>[];
  selectedItem?: Filters[K];
  onChange?: (value: Filters[K]) => void;
  invalid: boolean;
};

export const AdditionMenu = <K extends keyof Filters>({
  title,
  items,
  selectedItem,
  onChange,
  invalid,
}: AdditionMenuProps<K>) => {
  return (
    <ChakraMenu.Root>
      <ChakraMenu.Trigger asChild>
        <Button
          gap={5}
          color={selectedItem ? "primary" : "mutedForeground"}
          w={"100%"}
          justifyContent={"space-between"}
          bg={"card/30"}
          borderColor={invalid ? "destructive" : "border/50"}
        >
          {items.find((i) => i.value === selectedItem)?.content || title}
          <IoIosArrowDown opacity={0.5} />
        </Button>
      </ChakraMenu.Trigger>
      <Portal>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content>
            {items.map((item) => (
              <ChakraMenu.Item
                value={String(item.value)}
                key={item.value}
                onSelect={() => {
                  item.value === selectedItem
                    ? onChange?.(undefined)
                    : onChange?.(item.value);
                }}
              >
                {item.content}
                {selectedItem === item.value && <MdDone />}
              </ChakraMenu.Item>
            ))}
          </ChakraMenu.Content>
        </ChakraMenu.Positioner>
      </Portal>
    </ChakraMenu.Root>
  );
};
