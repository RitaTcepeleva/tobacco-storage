import { defineRecipe } from "@chakra-ui/react";

export const badgeRecipe = defineRecipe({
  variants: {
    variant: {
      subtle: {
        fontWeight: "semibold",
        bg: "background/80",
        borderColor: "border/50",
        borderStyle: "solid",
        borderWidth: "1px",
        color: "primary",
      },
      outline: {
        fontWeight: "semibold",
        bg: "primary/20",
        borderColor: "primary/20",
        borderStyle: "solid",
        borderWidth: "1px",
        color: "primary",
        shadow: "none",
      },
      solid: {
        border: "none",
        fontWeight: "medium",
        color: "primary",
        bg: "secondary/50",
      },
    },
    size: {
      sm: {
        paddingBlock: 2,
        paddingInline: 4,
        fontSize: "12px",
      },
      md: {
        paddingBlock: 2,
        paddingInline: 6,
        fontSize: "12px",
      },
    },
  },
});
