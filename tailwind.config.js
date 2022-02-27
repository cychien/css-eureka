const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1100px",
    },
    container: {
      padding: {
        DEFAULT: "16px",
        sm: "32px",
      },
    },
    spacing: {
      0: "0px",
      "2xs": "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "48px",
      "3xl": "64px",
      "4xl": "96px",
      "5xl": "128px",
    },
    colors: {
      primary: colors.rose,
      secondary: {
        100: "#E8F0DB",
        200: "#E0EAD1",
        300: "#D6E7BD",
        700: "#365314",
      },
      gray: colors.stone,
      white: colors.white,
      bg: {
        100: "#F1F0E7",
        200: "#EEEDE2",
        300: "#E2E0CA",
      },
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      md: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
    },
    fontFamily: {
      sans: ["Noto Sans TC", ...defaultTheme.fontFamily.sans],
      logo: ["Kalam", "cursive", ...defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
    },
    lineHeight: {
      normal: 1.5,
      relaxed: 1.7,
    },
    extend: {
      keyframes: {
        "draw-navlink-stroke": {
          "0%": { strokeDashoffset: 50, strokeDasharray: 50 },
          "100%": { strokeDashoffset: 0, strokeDasharray: 50 },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            ".heading-link": {
              position: "absolute",
              transform: "translate(-28px, 4px)",
              color: theme("colors.gray[700]"),
              opacity: 0,
              transition: "opacity 200ms ease-in-out",
            },
            "h2:hover .heading-link, h3:hover .heading-link, .heading-link:hover":
              {
                opacity: 1,
              },
            ".highlight-line": {
              backgroundColor: "#65737e55",
              marginLeft: "-24px",
              marginRight: "-24px",
              paddingLeft: "24px",
              paddingRight: "24px",
              borderLeft: "6px solid #5FB3B3",
            },
          },
        },
        gray: {
          css: {
            "--tw-prose-body": theme("colors.gray[700]"),
            "--tw-prose-headings": theme("colors.gray[900]"),
            "--tw-prose-lead": theme("colors.gray[700]"),
            "--tw-prose-links": theme("colors.gray[900]"),
            "--tw-prose-bold": theme("colors.gray[900]"),
            "--tw-prose-counters": theme("colors.gray[600]"),
            "--tw-prose-bullets": theme("colors.gray[400]"),
            "--tw-prose-hr": theme("colors.gray[300]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.gray[300]"),
            "--tw-prose-captions": theme("colors.gray[700]"),
            "--tw-prose-code": theme("colors.gray[900]"),
            "--tw-prose-pre-code": theme("colors.gray[200]"),
            "--tw-prose-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
