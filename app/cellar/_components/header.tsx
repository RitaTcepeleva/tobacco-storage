import { Button, Text, Heading, VStack, Stack } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
// import { BurgerButton } from "@/shared/components/ui";
import { MobileNavigationDialog } from "@/shared/components/dialog";

export const Header = () => {
  return (
    <Stack
      flexDir={{ base: "column", sm: "row" }}
      height={"max-content"}
      width={"100%"}
      justifyContent={"space-between"}
      gap={{ base: 8, sm: 0 }}
      pb={{ base: 8, md: 16 }}
      mb={{ base: 8, md: 16 }}
      borderBlockEnd={"1px solid {colors.border}"}
    >
      <VStack alignItems={"start"}>
        <Heading fontSize={{ base: "32px", lg: "48px" }}>The Cellar</Heading>
        <Text fontSize={{ base: "14px", lg: "18px" }}>
          Manage your entire inventory and filter by profile.
        </Text>
      </VStack>
      <VStack>
        {/* <BurgerButton width={"100%"} /> */}
        <MobileNavigationDialog />
        <Button variant={"add"} size={"xl"} width={"100%"}>
          {<GoPlus />}Add New Jar
        </Button>
      </VStack>
    </Stack>
  );
};
