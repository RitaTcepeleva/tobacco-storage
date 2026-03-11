import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./recipes";

const config = defineConfig({
  globalCss: {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      bgColor: "{colors.background}",
      color: "{colors.foreground}",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    "a, button": {
      outline: "none",
    },
  },
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    breakpoints: {
      xs: "340px",
      sm: "440px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    tokens: {
      colors: {
        tobacco: {
          900: { value: "#462620" },
          800: { value: "#512C24" },
          700: { value: "#5B3229" },
          600: { value: "#633D36" },
          500: { value: "#6A4139" },
          400: { value: "#6E3F35" },
        },
        cream: {
          DEFAULT: { value: "#F0DCD6" },
          100: { value: "#F0DCD6" },
          200: { value: "#D2B4AC" },
        },
        red: { value: "#7C1D1D" },
      },
      fonts: {
        heading: { value: "var(--font-funnel-display), sans-serif" },
        body: { value: "var(--font-dm-sans), sans-serif" },
      },
      spacing: {
        0: { value: "0px" },
        1: { value: "2px" },
        2: { value: "4px" },
        3: { value: "6px" },
        4: { value: "8px" },
        5: { value: "10px" },
        6: { value: "12px" },
        7: { value: "14px" },
        8: { value: "16px" },
        9: { value: "18px" },
        10: { value: "20px" },
        12: { value: "24px" },
        14: { value: "28px" },
        15: { value: "30px" },
        16: { value: "33px" },
        18: { value: "36px" },
        20: { value: "40px" },
        24: { value: "48px" },
        32: { value: "64px" },
        40: { value: "80px" },
        48: { value: "95px" },
      },
      fontWeights: {
        normal: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
      },
      shadows: {
        button: {
          value: `
            0 10px 15px -3px color-mix(in oklab, {colors.primary} 20%, transparent),
            0 4px 6px -4px color-mix(in oklab, {colors.primary} 20%, transparent)
          `,
        },
        buttonHover: {
          value: `
            0 10px 15px -3px color-mix(in oklab, {colors.primary} 40%, transparent),
            0 4px 6px -4px color-mix(in oklab, {colors.primary} 40%, transparent)
          `,
        },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          value: "{colors.tobacco.900}",
          //   value: {
          //     base: "{colors.cream.100}",
          //     _dark: "{colors.tobacco.900}",
          //   },
        },
        foreground: {
          value: "{colors.cream}",
        },

        card: {
          value: "{colors.tobacco.800}",
        },
        cardForeground: {
          value: "{colors.cream}",
        },

        primary: {
          value: "{colors.cream}",
        },
        primaryForeground: {
          value: "{colors.tobacco.700}",
        },

        secondary: {
          value: "{colors.tobacco.600}",
        },
        secondaryForeground: {
          value: "{colors.cream}",
        },

        muted: {
          value: "{colors.tobacco.700}",
        },
        mutedForeground: {
          value: "{colors.cream.200}",
        },

        accent: {
          value: "{colors.tobacco.400}",
        },
        accentForeground: {
          value: "{colors.cream}",
        },

        destructive: {
          value: "{colors.red}",
        },
        destructiveForeground: {
          value: "{colors.cream}",
        },

        border: {
          value: "{colors.tobacco.500}",
        },

        input: {
          value: "{colors.tobacco.500}",
        },

        ring: {
          value: "{colors.cream}",
        },
      },
    },

    // keyframes: {
    //   spin: {
    //     from: { transform: "rotate(0deg)" },
    //     to: { transform: "rotate(360deg)" },
    //   },
    // },
  },
});

export const system = createSystem(defaultConfig, config);
