import React from "react";
import styled from "styled-components";

type ResponsiveProps = {
  children: React.ReactNode;
};

const DesktopWrapper = styled.div`
  display: none;

  @media (min-width: 1081px) {
    display: contents;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: contents;
  }
`;

export function DesktopContainer({ children }: ResponsiveProps) {
  return <DesktopWrapper>{children}</DesktopWrapper>;
}

export function MobileContainer({ children }: ResponsiveProps) {
  return <MobileWrapper>{children}</MobileWrapper>;
}
