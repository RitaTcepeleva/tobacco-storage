import { Heading, Text, Box, HStack } from "@chakra-ui/react";
import { BurgerButton } from "@/shared/components/ui";

export const Header = () => {
  return (
    <HStack mb={{ base: 10, md: 20 }} justifyContent={"space-between"}>
      <Box>
        <Heading
          fontSize={{ base: "32px", md: "48px" }}
          mb={4}
          lineHeight={"100%"}
        >
          Cellar Overview
        </Heading>
        <Text fontSize={{ base: "14px", lg: "18px" }} color={"mutedForeground"}>
          Your curated tobacco collection at a glance.
        </Text>
      </Box>
      <BurgerButton />
    </HStack>
  );
};
