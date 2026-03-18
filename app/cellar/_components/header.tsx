import { Button, Text, Heading, VStack, Stack } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";

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
      <Button variant={"add"} size={"xl"} alignSelf={{ sm: "end" }}>
        {<GoPlus />}Add New Jar
      </Button>
    </Stack>
  );
};
