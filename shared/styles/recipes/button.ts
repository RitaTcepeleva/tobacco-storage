import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    gap: 4,
    alignItems: "center",
    color: "{colors.primary}",
    border: "subtle",
    _hover: {
      cursor: "pointer",
    },
    _active: {
      borderColor: "border",
    },
  },
  variants: {
    variant: {
      edit: {
        _hover: {
          bgColor: "border/50",
        },
        _active: {
          borderColor: "primary",
        },
      },
      add: {
        bgColor: "{colors.primary}",
        color: "{colors.primaryForeground}",
        shadow: "{shadows.button}",
        _hover: {
          shadow: "{shadows.buttonHover}",
        },
      },
      remove: {
        bgColor: "{colors.destructive}",
        _hover: {
          bgColor: "{colors.destructive}/80",
        },
      },
      exit: {
        border: "none",
        justifyContent: "start",
        color: "mutedForeground",
        "& svg": {
          transition: "transform 300ms",
        },
        _hover: {
          bg: "destructive/20",
          color: "destructive",
          "& svg": {
            transform: "translateX(-4px)",
          },
        },
      },
    },
    size: {
      md: {
        borderRadius: "md",
        paddingBlock: 4,
        paddingInline: 8,
        fontSize: "14px",
        fontWeight: "medium",
      },
      lg: {
        borderRadius: "sm",
        paddingBlock: 4,
        paddingInline: 8,
        fontSize: "14px",
        fontWeight: "medium",
      },
      icon: {
        borderRadius: "50%",
        padding: 5,
        justifyContent: "center",
      },
      exit: {
        borderRadius: "md",
        paddingBlock: 6,
        paddingInline: 8,
        fontSize: "16px",
        fontWeight: "medium",
        gap: 6,
        width: "100%",
      },
    },
  },
  defaultVariants: {
    variant: "edit",
    size: "md",
  },
});
