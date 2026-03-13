import { menuAnatomy } from "@chakra-ui/react/anatomy";
import { defineSlotRecipe } from "@chakra-ui/react";

export const menuSlotRecipe = defineSlotRecipe({
  slots: menuAnatomy.keys(),
  base: {
    content: {
      bg: "background",
      borderColor: "border/40",
      borderWidth: "1px",
      borderStyle: "solid",
      boxShadow: "none",
      borderRadius: "xs",
    },
    trigger: {
      focusRingColor: "ring",
      focusVisibleRing: "inside",
      _focusVisible: {
        border: "none",
      },
    },
    item: {
      justifyContent: "space-between",
    },
  },

  variants: {
    variant: {
      subtle: {
        item: {
          borderRadius: "xs",
          _highlighted: {
            bg: "accent",
          },
        },
      },
    },
  },
});
