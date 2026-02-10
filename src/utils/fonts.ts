/**
 * Font utility functions for locale-aware font selection
 */

export const getFontFamily = (locale: string): string => {
  if (locale === "ka") {
    return "Helvetica, Arial, sans-serif";
  }
  return "'Noto Sans', Helvetica, Arial, sans-serif";
};

export const getFontFamilyCSS = (locale: string): string => {
  return `font-family: ${getFontFamily(locale)};`;
};

// For use in styled-components with template literals
export const fontFamily = (locale: string) => getFontFamily(locale);
