import Image from "next/image";
import { Badge, Card, Button, Box } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import type { Card as CardProps } from "@/shared/types";

export const CellarCard = ({ title, description, image, size }: CardProps) => {
  return (
    <Card.Root variant="cellar">
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
          variant={"outline"}
          position={"absolute"}
          bottom={5}
          left={5}
          zIndex={2}
        >{`${size}G`}</Badge>
        <Button
          variant={"remove"}
          size={"icon"}
          zIndex={1}
          position={"absolute"}
          top={5}
          right={5}
        >
          <FaRegTrashAlt />
        </Button>
      </Card.Body>
      <Card.Footer paddingTop={12}>
        <Card.Description>{description}</Card.Description>
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card.Root>
  );
};
