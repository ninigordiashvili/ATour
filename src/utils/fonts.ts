/**
 * Font utility functions for locale-aware font selection
 */

export const getFontFamily = (locale: string): string => {
  return locale === "ka"
    ? "var(--font-noto-sans-georgian), sans-serif"
    : "var(--font-inter), sans-serif";
};

export const getFontFamilyCSS = (locale: string): string => {
  return `font-family: ${getFontFamily(locale)};`;
};

// For use in styled-components with template literals
export const fontFamily = (locale: string) => getFontFamily(locale);
