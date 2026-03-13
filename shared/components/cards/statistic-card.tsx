import { Card, Box, Text } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

type StatisticCardProps = {
  title: string;
  description: string;
  caption: string[];
} & PropsWithChildren;

export const StatisticCard = ({
  children,
  title,
  description,
  caption,
}: StatisticCardProps) => {
  return (
    <Card.Root variant="statistic" size="lg">
      <Card.Body>
        <Box
          borderRadius={"md"}
          bg={"secondary/50"}
          width={"max-content"}
          padding={6}
        >
          {children}
        </Box>
        <Card.Description>{description}</Card.Description>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Text fontWeight={"medium"}>{caption[0]}</Text>
        {caption[1]}
      </Card.Footer>
    </Card.Root>
  );
};
