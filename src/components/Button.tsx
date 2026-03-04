"use client";

import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
import BackArrowIcon from "../icons/BackArrowIcon";
import BlueArrowIcon from "../icons/BlueArrowIcon";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations } from "next-intl";
import { DesktopContainer, MobileContainer } from "./Responsive";
import ArrowMobileIcon from "../icons/ArrowMobileIcon";
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "iconOnly" | "transparent" | "bookButton" | "back";
  active?: boolean;
  isHovered?: boolean;
}

const StyledButton = styled.button<{ $isActive: boolean; $variant?: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${(props) => (props.$isActive ? "0px" : "8px")};
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  filter: url(#buttonFilter);
  justify-content: flex-start;
  align-items: stretch;
  text-decoration: none;
  transition-property: all;
  transition-duration: 0.9s;
  transition-timing-function: cubic-bezier(0.135, 2, 0.15, 1);
  display: flex;
  position: relative;
  background: none;
  border: none;
  overflow: visible;
  width: ${(props) => (props.$variant === "bookButton" ? "100%" : "auto")};
`;

const TextContainer = styled.div<{ $isActive: boolean; $variant?: string }>`
  padding: 16px;
  background: ${(props) =>
    props.$variant === "bookButton"
      ? `${colors.state.focus.outline}`
      : props.$isActive
        ? `${colors.state.focus.active}`
        : `${colors.state.focus.outline}`};
  border-radius: ${(props) => (props.$isActive ? "24px 0 0 24px" : "24px")};
  transition: all 0.2s ease-in-out;
  flex: ${(props) => (props.$variant === "bookButton" ? "1" : "0 0 auto")};
  text-align: ${(props) =>
    props.$variant === "bookButton" ? "left" : "center"};

  ${StyledButton}:hover & {
    background: ${colors.state.focus.ring};
  }

  ${StyledButton}:active & {
    background: ${colors.state.focus.active};
  }
  @media screen and (max-width: 1080px) {
    padding: 16px;
    padding: ${(props) =>
      props.$variant === "bookButton"
        ? "15px"
        : props.$variant === "iconOnly"
          ? "16px 32px"
          : "16px"};
  }
`;

const ArrowContainer = styled.div<{
  $isActive: boolean;
  $isHovered: boolean;
  $variant?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    props.$variant === "bookButton"
      ? "16px"
      : props.$variant === "iconOnly"
        ? "16px 36px"
        : "16px"};
  background: ${(props) =>
    props.$variant === "bookButton"
      ? `${colors.state.focus.outline}`
      : props.$isActive
        ? `${colors.state.focus.active}`
        : `${colors.state.focus.outline}`};
  border-radius: ${(props) => (props.$isActive ? "0 24px 24px 0" : "99px")};
  transition: all 0.2s ease-in-out;

  ${StyledButton}:hover & {
    background: ${colors.state.focus.ring};
  }

  ${StyledButton}:active & {
    background: ${colors.state.focus.active};
  }
  @media screen and (max-width: 1080px) {
    padding: ${(props) =>
      props.$variant === "bookButton"
        ? "15px"
        : props.$variant === "iconOnly"
          ? "16px 32px"
          : "15px"};
  }
`;

const BackButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: ${colors.state.focus.ring};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-family: "Noto Sans", Helvetica, Arial, sans-serif;
  white-space: nowrap;
  &:hover {
    background: ${colors.state.focus.active};
  }

  &:active {
    background: ${colors.state.focus.active};
  }
`;

const StyledArrowIcon = styled.div<{
  $isActive: boolean;
  $isHovered: boolean;
  $variant?: string;
  active?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.$variant === "bookButton" ? "1px" : "0")};
  transform: ${(props) => (props.$isActive ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;

  ${StyledButton}:active & {
    transform: rotate(45deg);
  }
`;

import { useLocale } from "next-intl";

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "default",
  active = false,
  isHovered: isHoveredProp = false,
}) => {
  const tButtons = useTranslations("Buttons");
  const locale = useLocale();
  const [isHoveredInternal, setIsHoveredInternal] = useState(false);
  const isHovered = isHoveredProp || isHoveredInternal;

  // Back button variant
  if (variant === "back") {
    return (
      <BackButtonContainer onClick={onClick}>
        <BackArrowIcon />
        <DesktopContainer>
          <Typography
            variant={locale === "ka" ? "text-mdUppercase" : "text-mdOneline"}
            color={colors.text.primary}
            weight="semibold"
          >
            {tButtons("back")}
          </Typography>
        </DesktopContainer>
        <MobileContainer>
          <Typography
            variant={locale === "ka" ? "text-smUppercase" : "text-smOneline"}
            color={colors.text.primary}
            weight="semibold"
          >
            {tButtons("back")}
          </Typography>
        </MobileContainer>
      </BackButtonContainer>
    );
  }

  // Icon-only variant
  if (variant === "iconOnly") {
    return (
      <StyledButton
        $isActive={false}
        onClick={onClick}
        onMouseLeave={() => setIsHoveredInternal(false)}
        onMouseEnter={() => setIsHoveredInternal(true)}
      >
        <ArrowContainer
          $isActive={false}
          $isHovered={isHovered}
          $variant="iconOnly"
        >
          <StyledArrowIcon $isActive={false} $isHovered={isHovered}>
            <DesktopContainer>
              <ArrowIcon />
            </DesktopContainer>
            <MobileContainer>
              <ArrowMobileIcon />
            </MobileContainer>
          </StyledArrowIcon>
        </ArrowContainer>
      </StyledButton>
    );
  }

  // Transparent variant with text and blue arrow
  if (variant === "transparent") {
    const transparentColor = isHovered
      ? colors.state.focus.ring
      : colors.state.focus.outline;

    return (
      <StyledButton
        $isActive={false}
        onClick={onClick}
        onMouseLeave={() => setIsHoveredInternal(false)}
        onMouseEnter={() => setIsHoveredInternal(true)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "text-mdUppercase" : "text-mdOneline"}
              color={transparentColor}
              weight="regular"
            >
              {tButtons("readMore")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "text-smUppercase" : "text-smOneline"}
              color={transparentColor}
              weight="regular"
            >
              {tButtons("readMore")}
            </Typography>
          </MobileContainer>
          <BlueArrowIcon color={transparentColor} />
        </div>
      </StyledButton>
    );
  }

  // Book Button variant
  if (variant === "bookButton") {
    return (
      <StyledButton
        $isActive={true}
        $variant="bookButton"
        onClick={onClick}
        onMouseLeave={() => {
          setIsHoveredInternal(false);
        }}
        onMouseEnter={() => setIsHoveredInternal(true)}
      >
        <TextContainer $isActive={true} $variant="bookButton">
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "text-mdUppercase" : "text-mdOneline"}
              color={colors.text.primary}
              weight="semibold"
            >
              {tButtons("bookACall")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "text-smUppercase" : "text-smOneline"}
              color={colors.text.primary}
              weight="semibold"
            >
              {tButtons("bookACall")}
            </Typography>
          </MobileContainer>
        </TextContainer>
        <ArrowContainer
          $isActive={true}
          $isHovered={isHovered}
          $variant="bookButton"
        >
          <StyledArrowIcon
            $isActive={true}
            $isHovered={isHovered}
            $variant="bookButton"
          >
            <ArrowMobileIcon />
          </StyledArrowIcon>
        </ArrowContainer>
      </StyledButton>
    );
  }

  // Default variant with text
  return (
    <StyledButton
      $isActive={!!active}
      onClick={onClick}
      onMouseLeave={() => setIsHoveredInternal(false)}
      onMouseEnter={() => setIsHoveredInternal(true)}
    >
      <TextContainer $isActive={!!active}>
        <DesktopContainer>
          <Typography
            variant={locale === "ka" ? "text-mdUppercase" : "text-mdOneline"}
            color={colors.text.primary}
            weight="semibold"
          >
            {tButtons("bookNow")}
          </Typography>
        </DesktopContainer>
        <MobileContainer>
          <Typography
            variant={locale === "ka" ? "text-smUppercase" : "text-smOneline"}
            color={colors.text.primary}
            weight="semibold"
          >
            {tButtons("bookNow")}
          </Typography>
        </MobileContainer>
      </TextContainer>

      <ArrowContainer
        $isActive={!!active}
        $isHovered={isHovered}
        $variant="default"
      >
        <StyledArrowIcon $isActive={!!active} $isHovered={isHovered}>
          <ArrowIcon />
        </StyledArrowIcon>
      </ArrowContainer>
    </StyledButton>
  );
};
export default Button;
