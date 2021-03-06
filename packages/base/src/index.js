import { createGlobalStyle } from "styled-components"

const colors = {
  ui_100: "#ffffff",
  ui_300: "#f3f3f3",
  ui_500: "#c7c7c7",
  ui_700: "#6f6f6f",
  ui_900: "#2d2d2d",

  blue_100: "#e9edf1",
  blue_300: "#7c95b0",
  blue_500: "#0f3e6f",
  blue_700: "#0b2e51",
  blue_900: "#0a2847",

  gold_100: "#fdf9e9",
  gold_300: "#fbeab3",
  gold_500: "#f9de89",
  gold_700: "#b6a264",
  gold_900: "#443d26",

  green_100: "#dff9f3",
  green_300: "#9fefdd",
  green_500: "#50e3c2",
  green_700: "#3ba68e",
  green_900: "#163e35",

  straw_100: "#fefef5",
  straw_300: "#fefce3",
  straw_500: "#fefacc",
  straw_700: "#e7e4ba",
  straw_900: "#a2a082",

  red_300: "#F6A5B4",
  red_500: "#EC4261",

  purple_300: "#B7B5EE",
  purple_500: "#6965D5",
}

export const theme = {
  breakpoints: ["40rem", "60rem", "80rem", "100rem", "120rem"],
  colors,
  fonts: {
    body: "'Nunito', -apple-system, 'Segoe UI', sans-serif",
    legal: "'Noto Serif', serif",
    monospace: "'IBM Plex Mono', monospace",
  },
  fontSizes: {
    small: "1.334rem",
    body: "1.5rem",
    subtitle: "2rem",
    title: "3rem",
    headline: "4rem",
    hero: "5rem",
  },
  fontWeights: {
    light: 200,
    regular: 400,
    bold: 600,
    black: 800,
  },
  lineHeights: {
    small: "1.5",
    body: "1.334",
    heading: "1.25",
  },
  space: [0, 12, 24, 36, 48, 60, 72, 84, 96],
  shadows: [
    "0 0.084rem 0.25rem rgba(0,0,0.12)",
    "0 0.25rem 0.5rem rgba(0,0,0,0.12)",
    "0 1rem 1rem -1rem rgba(0,0,0,0.12)",
  ],
  buttons: {
    primary: {
      color: colors.ui_100,
      background: colors.blue_500,
      borderColor: colors.blue_500,
      "&:hover": {
        background: colors.blue_700,
        color: colors.blue_300,
      },
      "&:focus": {
        background: colors.blue_700,
      },
    },
    danger: {
      color: colors.red_500,
      borderColor: colors.red_500,
      "&:hover": {
        background: colors.red_500,
        color: colors.ui_100,
      },
      "&:focus": {
        background: colors.red_300,
      },
    },
  },
}

export const Base = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    font-size: ${({ theme }) => theme.space[1]}px;
  }

  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strong, sub, sup, var,
  b, u, i, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.body};
    color: ${({ theme }) => theme.colors.ui_900};
  }

  h1 {
    font-size:${({ theme }) => theme.fontSizes.hero};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h2 {
    font-size:${({ theme }) => theme.fontSizes.headline};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h3 {
    font-size:${({ theme }) => theme.fontSizes.title};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h4 {
    font-size:${({ theme }) => theme.fontSizes.subtitle};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }
  h5 {
    font-size:${({ theme }) => theme.fontSizes.body};
    font-weight: ${({ theme }) => theme.fontWeights.black};
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }

  pre, code {
    font-family: ${({ theme }) => theme.fonts.monospace};
  }

  a {
    text-decoration:none;
    box-shadow: inset 0 -6px 0 ${({ theme }) => theme.colors.green_500};
    color: inherit;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    transition: box-shadow 250ms;
  }

  a:hover {
    box-shadow: inset 0 -12px 0 ${({ theme }) => theme.colors.green_500};
  }

  .no-sizing h1 {
      font-size: 4rem;
  }

  .no-sizing h2 {
    font-size: 3rem;
  }
  
  .no-sizing  h3 {
    font-size: 2rem;
  }
`
