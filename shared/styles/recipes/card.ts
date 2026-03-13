import { defineSlotRecipe } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/react/anatomy";

export const cardSlotRecipe = defineSlotRecipe({
  slots: cardAnatomy.keys(),
  variants: {
    variant: {
      statistic: {
        root: {
          bg: "card/50",
          color: "foreground",
          borderColor: "border",
          borderStyle: "solid",
          borderWidth: "1px",
          _hover: { bg: "card", backdropBlur: "lg" },
        },
        title: {
          fontFamily: "heading",
        },
        description: {
          color: "mutedForeground",
        },
        footer: {
          justifyContent: "space-between",
        },
      },
    },

    size: {
      lg: {
        root: {
          padding: 12,
          gap: 4,
          maxWidth: "210px",
        },
        body: { padding: 0, gap: 7 },
        title: {
          fontSize: "36px",
        },
        footer: {
          fontSize: "12px",
          padding: 0,
        },
      },
    },
  },
});
