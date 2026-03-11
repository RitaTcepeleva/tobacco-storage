import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Avatar,
  Button,
  Input,
  InputGroup,
} from "@chakra-ui/react";
// import { Button } from "@/shared/components/ui";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default async function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <Heading size="2xl" letterSpacing="tight">
          Welcome to Chakra UI v3 + Next.js (App)
        </Heading>
        <Text>ui-kit</Text>

        <HStack>
          <Button variant={"edit"}>Edit</Button>
          <Button variant={"add"}>Add</Button>
          <Button variant={"remove"}>Remove</Button>
          <Button variant={"remove"} size={"icon"}>
            <FaRegTrashAlt />
          </Button>
        </HStack>
        <Avatar.Root variant={"solid"} size={"2xl"}>
          <Avatar.Fallback name="John Doe" />
        </Avatar.Root>
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
      </VStack>
    </Box>
  );
}
