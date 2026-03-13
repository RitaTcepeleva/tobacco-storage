import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  base: {
    borderRadius: "16px",
    padding: "12px 4px",
  },
  variants: {
    size: {
      md: {
        "--input-height": "sizes.14",
      },
    },
    variant: {
      outline: {
        bg: "card/30",
        borderColor: "border/50",
        color: "primary",
        focusRingColor: "ring",
        focusVisibleRing: "inside",
        _focusVisible: {
          border: "none",
        },
        _placeholder: {
          color: "primary",
        },
      },
    },
  },
});
