import * as React from "react";

interface MailIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const MailIcon = ({
  color = "#6B7280",
  width = 24,
  height = 24,
}: MailIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 18"
    fill="none"
  >
    <path
      fill={color}
      d="M21.75 0C22.969 0 24 1.031 24 2.25c0 .75-.375 1.406-.938 1.828l-10.171 7.64a1.479 1.479 0 0 1-1.829 0L.892 4.079C.328 3.656 0 3 0 2.25A2.25 2.25 0 0 1 2.25 0h19.5ZM10.172 12.938a3.023 3.023 0 0 0 3.61 0L24 5.25V15c0 1.688-1.36 3-3 3H3c-1.688 0-3-1.313-3-3V5.25l10.172 7.688Z"
    />
  </svg>
);
export default MailIcon;
