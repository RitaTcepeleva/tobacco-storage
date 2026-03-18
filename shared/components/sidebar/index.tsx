"use client";

import {
  VStack,
  HStack,
  Heading,
  Avatar,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { LuBlocks, LuBrickWall } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { NavLink } from "../ui";

export const Sidebar = () => {
  return (
    <VStack width="16rem" height="100vh" borderRight={"subtle"}>
      <VStack width={"100%"} padding={16} borderBottom={"subtle"} gap={8}>
        <Image src="/logo.png" alt="logo" width={64} height={64} />
        <Heading size="2xl" letterSpacing="tight" mt={8}>
          Tobacco Cellar
        </Heading>
      </VStack>
      <HStack padding={12} width={"100%"} gap={8} borderBottom={"subtle"}>
        <Avatar.Root variant={"solid"} size={"xl"}>
          <Avatar.Fallback name="John Doe" />
        </Avatar.Root>
        <VStack gap={0} alignItems={"start"}>
          <Text fontSize={"14px"} fontWeight={"medium"}>
            John Doe
          </Text>
          <Text fontSize={"12px"} color={"mutedForeground"}>
            Collector
          </Text>
        </VStack>
      </HStack>
      <VStack
        width={"100%"}
        height={"100%"}
        padding={8}
        justifyContent={"space-between"}
      >
        <VStack width={"100%"}>
          <NavLink href="/">{<LuBrickWall size={20} />}Dashboard</NavLink>
          <NavLink href="/cellar">{<LuBlocks size={20} />}Cellar</NavLink>
        </VStack>
        <Button variant={"exit"} size={"exit"}>
          {<RxExit />}Exit
        </Button>
      </VStack>
    </VStack>
  );
};
