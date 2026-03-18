import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  variants: {
    variant: {
      plain: {
        color: "mutedForeground",
        fontWeight: "medium",
        width: "100%",
        paddingBlock: 6,
        paddingInline: 8,
        gap: 6,
        borderRadius: "md",
        "& svg": {
          transition: "transform 300ms",
        },
        _hover: {
          textDecor: "none",
          bg: "secondary/80",
          "& svg": {
            transform: "scale(1.2)",
          },
        },
        _focus: {
          outline: "none",
        },
      },
    },
  },
});
