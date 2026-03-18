import { Card, HStack, Badge, Box } from "@chakra-ui/react";
import Image from "next/image";
import type { Card as CardProps } from "@/shared/types";

// type RecentlyAcquiredCardProps = {
//   title: string;
//   descrption: string;
//   image: { src: string; alt: string };
//   tags: string[];
//   size: number;
// };

export const RecentlyAcquiredCard = ({
  title,
  description,
  image,
  tags,
  size,
}: CardProps) => {
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
        <Card.Description>{description}</Card.Description>
        <Card.Title>{title}</Card.Title>
        {tags && (
          <HStack>
            {tags.map((tag) => (
              <Badge key={tag} variant={"solid"}>
                {tag}
              </Badge>
            ))}
          </HStack>
        )}
      </Card.Footer>
    </Card.Root>
  );
};
