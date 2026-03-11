import { avatarAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export const avatarSlotRecipe = defineSlotRecipe({
  slots: avatarAnatomy.keys(),
  base: {
    fallback: { fontFamily: "heading" },
  },
  variants: {
    variant: {
      solid: {
        root: {
          bg: "secondary",
          color: "primary",
        },
      },
    },
  },
});
