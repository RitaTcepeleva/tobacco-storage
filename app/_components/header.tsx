import { Heading, Text, Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box mb={{ base: 10, md: 20 }}>
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
  );
};
