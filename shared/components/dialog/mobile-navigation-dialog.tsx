import { Dialog } from "./default-dialog";
import { BurgerButton, NavLink } from "../ui";
import {
  Dialog as ChakraDialog,
  Button,
  VStack,
  HStack,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { LuBlocks, LuBrickWall } from "react-icons/lu";
import { RxExit } from "react-icons/rx";

export const MobileNavigationDialog = () => {
  return (
    <Dialog openTrigger={<BurgerButton width={"100%"} />}>
      <>
        <ChakraDialog.Header>
          <ChakraDialog.Title>Tobacco Cellar</ChakraDialog.Title>
        </ChakraDialog.Header>
        <ChakraDialog.Body>
          <HStack padding={5} width={"100%"} gap={8} borderBlock={"subtle"}>
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
          <VStack padding={5} width={"100%"}>
            <NavLink href="/">{<LuBrickWall size={20} />}Dashboard</NavLink>
            <NavLink href="/cellar">{<LuBlocks size={20} />}Cellar</NavLink>
            <Button variant={"exit"} size={"exit"} fontSize={"14px"} gap={6}>
              {<RxExit size={20} />}Exit
            </Button>
          </VStack>
        </ChakraDialog.Body>
      </>
    </Dialog>
  );
};
