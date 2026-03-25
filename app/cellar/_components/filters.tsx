import { Menu } from "@/shared/components/ui";
import { Input, InputGroup, HStack, Stack, Box } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { strengthFilters, flavourFilters } from "@/shared/constants";

export const Filters = () => {
  return (
    <Stack
      mb={{ base: 8, md: 16 }}
      flexDir={{ base: "column", md: "row" }}
      alignItems={{ base: "center", sm: "start" }}
    >
      <InputGroup
        startElement={
          <Box ml={3} color={"primary"}>
            <CiSearch strokeWidth={1.5} size={24} />
          </Box>
        }
      >
        <Input
          variant={"outline"}
          id="search-field"
          placeholder="Search flavours, brands..."
        />
      </InputGroup>
      <HStack>
        <Menu title="Strength" items={strengthFilters} filter="strength" />
        <Menu title="Flavour" items={flavourFilters} filter="flavour" />
      </HStack>
    </Stack>
  );
};
