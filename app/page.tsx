import {
  Box,
  // Button,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button } from "@/shared/components/ui";
import { FaRegTrashAlt } from "react-icons/fa";

export default async function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <Heading size="2xl" letterSpacing="tight">
          Welcome to Chakra UI v3 + Next.js (App)
        </Heading>
        <Text>Usual Text</Text>

        <HStack>
          <Button variant={"edit"}>Edit</Button>
          <Button variant={"add"}>Add</Button>
          <Button variant={"remove"}>Remove</Button>
          <Button variant={"remove"} size={"icon"}>
            <FaRegTrashAlt />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
