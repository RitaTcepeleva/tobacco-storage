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
          _hover: {
            bg: "card",
            backdropBlur: "lg",
          },
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
      recentlyAcquired: {
        root: {
          bg: "card/50",
          color: "foreground",
          borderColor: "border/50",
          borderStyle: "solid",
          borderWidth: "1px",
          overflow: "hidden",
          _hover: {
            boxShadow: "{shadows.cardHover}",
            "& img": {
              transform: "scale(1.05)",
            },
          },
        },
        body: {
          position: "relative",
          bg: "black/20",
          alignItems: "center",
          "& img": {
            transition: "transform 700ms",
          },
        },
        description: {
          textTransform: "uppercase",
          fontWeight: "medium",
        },
        footer: {
          zIndex: 1,
          mt: "-0.5em",
          flexDir: "column",
          alignItems: "start",
        },
      },
      cellar: {
        root: {
          bg: "card/50",
          color: "foreground",
          borderColor: "border/50",
          borderStyle: "solid",
          borderWidth: "1px",
          overflow: "hidden",
          "& button": { display: "none" },
          _hover: {
            "& img": {
              transform: "scale(1.05)",
            },
            "& button": {
              display: "block",
            },
          },
        },
        body: {
          position: "relative",
          bg: "black/20",
          alignItems: "center",
          "& img": {
            transition: "transform 700ms",
          },
        },
        description: {
          textTransform: "uppercase",
        },
        footer: {
          zIndex: 1,
          flexDir: "column",
          alignItems: "start",
        },
      },
    },

    size: {
      md: {
        body: { padding: 12 },
        title: {
          fontSize: "24px",
        },
        footer: {
          padding: 12,
          paddingTop: 0,
          gap: 4,
        },
      },
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
