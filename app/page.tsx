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
  Badge,
} from "@chakra-ui/react";
// import { Button } from "@/shared/components/ui";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { Menu } from "@/shared/components/ui/menu";
import {
  StatisticCard,
  RecentlyAcquiredCard,
  CellarCard,
} from "@/shared/components/cards";

export default async function Page() {
  const items = [
    { value: "all", content: "All Strength" },
    { value: "light", content: "Light" },
    { value: "medium", content: "Medium" },
    { value: "strong", content: "Strong" },
  ];
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

        <Menu title="Strength" items={items} filter="strength" />

        <HStack>
          <Box width={100} height={100} bg={"tobacco.400"} />
          <Box width={100} height={100} bg={"tobacco.500"} />
          <Box width={100} height={100} bg={"tobacco.600"} />
          <Box width={100} height={100} bg={"tobacco.700"} />
          <Box width={100} height={100} bg={"tobacco.800"} />
          <Box width={100} height={100} bg={"tobacco.900"} />
          <Box width={100} height={100} bg={"black/20"} />
        </HStack>

        <HStack>
          <Badge size="md">250G</Badge>
          <Badge variant="outline" size="md">
            125G
          </Badge>
          <Badge variant="solid">Fruit</Badge>
        </HStack>

        <HStack>
          <StatisticCard
            title="1,450"
            description="Total Stock"
            caption={["grams", "+125g this month"]}
          >
            <FiBox size={24} />
          </StatisticCard>

          <RecentlyAcquiredCard
            title="Vanilla"
            descrption="Bonche"
            image={{
              src: "/image.png",
              alt: "image",
            }}
            size={125}
            caption={["Dessert", "Strong"]}
          />

          <CellarCard
            title="Vanilla"
            descrption="Bonche"
            image={{
              src: "/image.png",
              alt: "image",
            }}
            size={125}
          />
        </HStack>
      </VStack>
    </Box>
  );
}
