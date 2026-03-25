import { dialogAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export const dialogSlotRecipe = defineSlotRecipe({
  slots: dialogAnatomy.keys(),
  base: {
    // root: { p: 12 },
    content: {
      bg: "background",
    },
    header: {
      fontFamily: "heading",
    },
  },
});
