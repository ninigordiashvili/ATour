export const colors = {
  // Primary brand colors
  brand: {
    primary: "#662d91",
    secondary: "#302e9c",
    gradientStart: "#662d91",
    gradientEnd: "#302e9c",
  },

  // Text colors
  text: {
    primary: "#F4F7FF",
    tertiary: "#3F5FBF",
    dark: "#1F2937",
    light: "#6B7280",
  },

  // Background colors
  background: {
    white: "#ffffff",
    light: "#F4F7FF",
    transparent: "transparent",
  },

  // Border colors
  border: {
    primary: "#d5d7da",
    secondary: "#c1c4c9",
    tertiary: "#b8bcc5",
    light: "#e9eaeb",
    brand: "#7f56d9",
    white: "rgba(255, 255, 255, 0.12)",
    chart: "#f5f5f5",
  },

  // State colorsƒ
  state: {
    error: "#F04438",
    success: "#17B26A",
    warning: "#F79009",
    hover: {
      light: "#f5f5f5",
      lighter: "#fafafa",
      medium: "#d9d9d9",
      background: "rgba(255, 255, 255, 0.05)",
      backgroundMedium: "rgba(255, 255, 255, 0.12)",
    },
    focus: {
      outline: "#4285f4",
      ring: "#6A8FE7",
      active: "#3F5FBF",
    },
  },

  // Shadow colors (rgba values)
  shadow: {
    light: "-4px 6px 28px 0px #1F29374D",
    medium: "0px 6px 28px 0px #1F29374D",
    dark: "0 4px 8px rgba(10, 13, 18, 0.1)",
    header: "0px 2px 16px 0px #0000001A",
  },

  // Overlay colors
  overlay: {
    dark: "rgba(0, 0, 0, 0.5)",
    light: "rgba(255, 255, 255, 0.3)",
  },
} as const;

export type Colors = typeof colors;
