import * as React from "react";

interface InstaIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const InstaIcon = ({
  color = "#1F2937",
  width = 33,
  height = 33,
}: InstaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 33 33"
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.475}
      d="M7.554 7.54v.016m8.684 23.681c-7.07 0-10.607 0-12.803-2.196-2.197-2.196-2.197-5.732-2.197-12.804 0-7.07 0-10.607 2.197-12.803C5.63 1.237 9.166 1.237 16.238 1.237c7.07 0 10.608 0 12.804 2.197 2.196 2.196 2.196 5.731 2.196 12.803 0 7.07 0 10.608-2.196 12.804-2.196 2.196-5.732 2.196-12.804 2.196Zm0-22.105a7.105 7.105 0 1 1 0 14.211 7.105 7.105 0 0 1 0-14.211Z"
    />
  </svg>
);
export default InstaIcon;
