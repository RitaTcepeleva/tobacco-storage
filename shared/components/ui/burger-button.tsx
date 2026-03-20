import { Button } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import type { ButtonProps } from "@chakra-ui/react";

export const BurgerButton = ({ ...rest }: ButtonProps) => {
  return (
    <Button display={{ md: "none" }} {...rest}>
      <GiHamburgerMenu />
    </Button>
  );
};
