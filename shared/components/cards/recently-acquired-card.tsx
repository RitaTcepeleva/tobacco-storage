import { Card, HStack, Badge, Box } from "@chakra-ui/react";
import Image from "next/image";

type RecentlyAcquiredCardProps = {
  title: string;
  descrption: string;
  image: { src: string; alt: string };
  caption: string[];
  size: number;
};

export const RecentlyAcquiredCard = ({
  title,
  descrption,
  image,
  caption,
  size,
}: RecentlyAcquiredCardProps) => {
  return (
    <Card.Root variant="recentlyAcquired">
      <Card.Body>
        <Box
          position={"absolute"}
          inset={0}
          bg={
            "linear-gradient(to top, {colors.background/80} 0%, transparent 100%)"
          }
          zIndex={1}
        />
        <Image src={image.src} alt={image.alt} width={230} height={230} />
        <Badge
          size={"md"}
          position={"absolute"}
          top={5}
          right={5}
          zIndex={2}
        >{`${size}G`}</Badge>
      </Card.Body>
      <Card.Footer>
        <Card.Description>{descrption}</Card.Description>
        <Card.Title>{title}</Card.Title>
        <HStack>
          {caption.map((cap) => (
            <Badge key={cap} variant={"solid"}>
              {cap}
            </Badge>
          ))}
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};
