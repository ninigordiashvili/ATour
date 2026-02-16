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
}

const StyledButton = styled.button<{ $isActive: boolean; $variant?: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${(props) => (props.$isActive ? "0px" : "8px")};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: visible;
  width: ${(props) => (props.$variant === "bookButton" ? "100%" : "auto")};
`;

const TextContainer = styled.div<{ $isActive: boolean; $variant?: string }>`
  padding: 16px;
  background: ${(props) =>
    props.$variant === "bookButton"
      ? `${colors.state.focus.ring}`
      : props.$isActive
        ? `${colors.state.focus.active}`
        : `${colors.state.focus.ring}`};
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
        : "18px"};
  background: ${(props) =>
    props.$variant === "bookButton"
      ? `${colors.state.focus.ring}`
      : props.$isActive
        ? `${colors.state.focus.active}`
        : `${colors.state.focus.ring}`};
  border-radius: ${(props) => (props.$isActive ? "0 24px 24px 0" : "99px")};
  transition: all 0.2s ease-in-out;

  ${StyledButton}:hover & {
    background: ${colors.state.focus.ring};
  }

  ${StyledButton}:active & {
    background: ${colors.state.focus.active};
  }
  @media screen {
    padding: ${(props) =>
      props.$variant === "bookButton"
        ? "16px"
        : props.$variant === "iconOnly"
          ? "16px 36px"
          : "16px"};
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
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.$variant === "bookButton" ? "1px" : "0")};
  transform: ${(props) => (props.$isActive ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
  ${StyledButton}:hover & {
    transform: rotate(45deg);
  }

  ${StyledButton}:active & {
    transform: rotate(45deg);
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, variant = "default" }) => {
  const tButtons = useTranslations("Buttons");
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    onClick?.();
  };

  // Back button variant
  if (variant === "back") {
    return (
      <BackButtonContainer onClick={onClick}>
        <BackArrowIcon />
        <DesktopContainer>
          <Typography
            variant="text-mdOneline"
            color={colors.text.primary}
            weight="regular"
          >
            {tButtons("back")}
          </Typography>
        </DesktopContainer>
        <MobileContainer>
          <Typography
            variant="text-smUppercase"
            color={colors.text.primary}
            weight="regular"
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
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
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
    return (
      <StyledButton
        $isActive={false}
        onClick={onClick}
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <DesktopContainer>
          <Typography
            variant="text-mdOneline"
            color={colors.state.focus.active}
            weight="regular"
          >
            {tButtons("readMore")}
          </Typography>
        </DesktopContainer>
        <MobileContainer>
          <Typography
            variant="text-sm"
            color={colors.state.focus.active}
            weight="regular"
          >
            {tButtons("readMore")}
          </Typography>
        </MobileContainer>
        <BlueArrowIcon />
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
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
      >
        <TextContainer $isActive={true} $variant="bookButton">
          <Typography
            variant="text-mdOneline"
            color={colors.text.primary}
            weight="semibold"
          >
            {tButtons("bookACall")}
          </Typography>
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
      $isActive={isActive}
      onClick={handleClick}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
    >
      <TextContainer $isActive={isActive}>
        <Typography
          variant="text-mdOneline"
          color={colors.text.primary}
          weight="semibold"
        >
          {tButtons("bookNow")}
        </Typography>
      </TextContainer>
      <ArrowContainer
        $isActive={isActive}
        $isHovered={isHovered}
        $variant="default"
      >
        <StyledArrowIcon $isActive={isActive} $isHovered={isHovered}>
          <ArrowIcon />
        </StyledArrowIcon>
      </ArrowContainer>
    </StyledButton>
  );
};
export default Button;
