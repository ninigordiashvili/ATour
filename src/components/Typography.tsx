import React from "react";
import styled, { css } from "styled-components";

export type TypographyVariant =
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "text-lg"
  | "text-md"
  | "text-mdOneline"
  | "text-sm"
  | "text-xs"
  | "display-xs"
  | "display-lgUppercase"
  | "display-mdUppercase"
  | "display-smUppercase"
  | "text-smOneline"
  | "display-xsUppercase"
  | "text-mdUppercase"
  | "text-lgUppercase"
  | "text-smUppercase";

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

interface TypographyProps {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
  children: React.ReactNode;
  as?: TypographyElement;
  className?: string;
  lineHeight?: string | number;
}

const variantStyles = {
  "display-lg": css`
    font-size: 48px;
    line-height: 52px;
  `,
  "display-lgUppercase": css`
    font-size: 48px;
    line-height: 52px;
    font-family:
      "Helvetica Georgian Caps", "Noto Sans", Helvetica, Arial, sans-serif;
  `,
  "display-md": css`
    font-size: 32px;
    line-height: 40px;
  `,
  "display-mdUppercase": css`
    font-size: 32px;
    line-height: 40px;
    font-family:
      "Helvetica Georgian Caps", "Noto Sans", Helvetica, Arial, sans-serif;
  `,
  "display-sm": css`
    font-size: 24px;
    line-height: 34px;
  `,
  "display-smUppercase": css`
    font-size: 24px;
    line-height: 30px;
    font-family:
      "Helvetica Georgian Caps", "Noto Sans", Helvetica, Arial, sans-serif;
  `,
  "display-xs": css`
    font-size: 22px;
    line-height: 26px;
  `,
  "display-xsUppercase": css`
    font-size: 22px;
    line-height: 26px;
    font-family:
      "Helvetica Georgian Caps", "Noto Sans", Helvetica, Arial, sans-serif;
  `,
  "text-lg": css`
    font-size: 18px;
    line-height: 24px;
  `,
  "text-lgUppercase": css`
    font-size: 18px;
    line-height: 24px;
    font-family:
      "Helvetica Georgian Caps", "Noto Sans", Helvetica, Arial, sans-serif;
  `,
  "text-md": css`
    font-size: 16px;
    line-height: 24px;
  `,
  "text-mdOneline": css`
    font-size: 16px;
    line-height: 20px;
  `,
  "text-mdUppercase": css`
    font-size: 16px;
    line-height: 20px;

    font-family:
      "Helvetica Georgian Caps", "Noto Sans", Helvetica, Arial, sans-serif;
  `,
  "text-sm": css`
    font-size: 14px;
    line-height: 20px;
  `,
  "text-smOneline": css`
    font-size: 14px;
    line-height: 16px;
  `,
  "text-smUppercase": css`
    font-size: 14px;
    line-height: 18px;
    font-family:
      "Helvetica Georgian Caps", "Noto Sans", Helvetica, Arial, sans-serif;
  `,
  "text-xs": css`
    font-size: 12px;
    line-height: 18px;
  `,
};

const weightStyles = {
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const StyledText = styled.div<{
  $variant: TypographyVariant;
  $weight: TypographyWeight;
  $color?: string;
  $lineHeight?: string | number;
}>`
  && {
    color: ${(props) => props.$color || "#1F2937"};
    margin: 0;

    ${(props) => variantStyles[props.$variant]}
    ${(props) => weightStyles[props.$weight]}
    ${(props) =>
      props.$lineHeight !== undefined &&
      css`
        line-height: ${typeof props.$lineHeight === "number"
          ? props.$lineHeight
          : props.$lineHeight};
      `}
  }
`;

export const Typography: React.FC<TypographyProps> = ({
  variant,
  weight = "regular",
  color,
  children,
  as = "p",
  className,
  lineHeight,
}) => {
  return (
    <StyledText
      as={as}
      $variant={variant}
      $weight={weight}
      {...(color && { $color: color })}
      {...(lineHeight !== undefined && { $lineHeight: lineHeight })}
      className={className}
    >
      {children}
    </StyledText>
  );
};

// Convenient pre-configured components for common use cases

export const Heading2 = ({
  children,
  weight = "semibold",
  ...props
}: Omit<TypographyProps, "variant" | "as"> & { weight?: TypographyWeight }) => (
  <Typography variant="display-lg" weight={weight} as="h2" {...props}>
    {children}
  </Typography>
);

export const Heading3 = ({
  children,
  weight = "semibold",
  ...props
}: Omit<TypographyProps, "variant" | "as"> & { weight?: TypographyWeight }) => (
  <Typography variant="display-md" weight={weight} as="h3" {...props}>
    {children}
  </Typography>
);

export const Heading4 = ({
  children,
  weight = "semibold",
  ...props
}: Omit<TypographyProps, "variant" | "as"> & { weight?: TypographyWeight }) => (
  <Typography variant="display-sm" weight={weight} as="h4" {...props}>
    {children}
  </Typography>
);

export const BodyLarge = ({
  children,
  weight = "regular",
  ...props
}: Omit<TypographyProps, "variant" | "as"> & { weight?: TypographyWeight }) => (
  <Typography variant="text-lg" weight={weight} as="p" {...props}>
    {children}
  </Typography>
);

export const BodyMedium = ({
  children,
  weight = "regular",
  ...props
}: Omit<TypographyProps, "variant" | "as"> & { weight?: TypographyWeight }) => (
  <Typography variant="text-md" weight={weight} as="p" {...props}>
    {children}
  </Typography>
);

export const BodySmall = ({
  children,
  weight = "regular",
  ...props
}: Omit<TypographyProps, "variant" | "as"> & { weight?: TypographyWeight }) => (
  <Typography variant="text-sm" weight={weight} as="p" {...props}>
    {children}
  </Typography>
);

export const Caption = ({
  children,
  weight = "regular",
  ...props
}: Omit<TypographyProps, "variant" | "as"> & { weight?: TypographyWeight }) => (
  <Typography variant="text-xs" weight={weight} as="span" {...props}>
    {children}
  </Typography>
);

export default Typography;
