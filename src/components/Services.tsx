"use client";

import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useLocale } from "next-intl";
import Image from "next/image";
import Button from "./Button";
import { DesktopContainer, MobileContainer } from "./Responsive";
import CloseIcon from "../icons/CloseIcon";

const ServicesWrapper = styled.section`
  background-color: ${colors.background.light};
  position: relative;
  margin-top: 40px;
  @media screen and (max-width: 1080px) {
    margin-top: 125px;
  }
`;

const AboutUsSection = styled.div`
  position: relative;
  padding: 0 0 64px 0;

  @media screen and (max-width: 1080px) {
    padding: 0 0 48px 0;
  }
`;

const AboutUsTitle = styled.div`
  position: relative;
  z-index: 1;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 130px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at top center,
      #e8f0fb 0%,
      #d0dcf5 100%
    );
    clip-path: url(#servicesAboutClip);
    box-shadow: 0px -17px 60px 0px #465fcf40;
    pointer-events: none;
    z-index: -1;
  }

  @media screen and (max-width: 1080px) {
    padding: 14px 56px 22px;
    gap: 8px;
    margin-bottom: 24px;

    &::before {
      background: radial-gradient(
        ellipse at top center,
        #d8e5f5 0%,
        #d1ddf3 100%
      );
      clip-path: url(#servicesAboutClip);
      box-shadow: 0px -17px 60px 0px #465fcf40;
    }
  }
`;

const AboutUsContent = styled.div`
  margin-top: 0;
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (max-width: 1080px) {
    margin-top: 0;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
  margin-top: 100px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 32px;
    gap: 8px;
    margin-top: 48px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 409px);
  gap: 16px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
    gap: 16px;
  }
`;

const ServiceCard = styled.div`
  background: ${colors.background.light};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${colors.shadow.light};
  cursor: pointer;

  /* Trigger button hover state when card is hovered */
  &:hover button > div {
    background: ${colors.state.focus.ring};
    transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover button svg {
    transform: rotate(45deg);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 228px;
  @media screen and (max-width: 1080px) {
    height: 180px;
  }
`;

const CardContent = styled.div`
  padding: 24px 16px 8px 16px;
  @media screen and (max-width: 1080px) {
    padding: 16px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 24px;
  }
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 110px;
`;

const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  align-items: center;
  gap: 4px;
`;

// Popup styles
const PopupOverlay = styled.div<{
  $show: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    167.92deg,
    rgba(31, 41, 55, 0.8) -8.86%,
    rgba(12, 42, 84, 0.8) 32.93%,
    rgba(19, 46, 85, 0.8) 74.73%
  );
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  pointer-events: ${({ $show }) => ($show ? "auto" : "none")};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 1080px) {
  }
`;

interface PopupCardProps {
  $bg: string;
}

const PopupCard = styled.div<PopupCardProps & { $show: boolean }>`
  border-radius: 24px;
  max-width: 891px;
  width: 100%;
  height: 509px;
  position: relative;
  overflow: hidden;
  background: ${({ $bg }) => `url(${$bg}) center center / cover no-repeat`};
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  transform: ${({ $show }) => ($show ? "scale(1)" : "scale(0.96)")};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  @media (max-width: 1080px) {
    margin: 0 16px;
    min-width: 343px;
    max-width: 100%;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: space-between;
  }
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1080px) {
  }
`;

const BadgeWrapper = styled.div`
  background: ${colors.state.focus.outline};
  padding: 6px 12px;
  border-radius: 53px;
  display: inline-block;
`;

const BadgeSwitcher = styled.div`
  display: flex;
  background: ${colors.background.light};
  border-radius: 53px;
  position: relative;
  overflow: hidden;
`;

const BadgeSlider = styled.div<{ $activeIndex: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: ${colors.state.focus.outline};
  border-radius: 53px;
  transform: ${({ $activeIndex }) =>
    $activeIndex === 0 ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
`;

const BadgeButton = styled.button<{ $active?: boolean }>`
  background: transparent;
  color: ${({ $active }) =>
    $active ? colors.text.primary : colors.text.light};
  border: none;
  border-radius: 53px;
  padding: 8px 16px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  flex: 1;
  transition: color 300ms ease-out;
`;

const PopupContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    ${colors.background.linear} 0%,
    ${colors.background.light} 100%
  );
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 10;
  box-sizing: border-box;
  @media (max-width: 1080px) {
    position: absolute;
    border-radius: 24px;
    gap: 16px;
    padding: 16px;
    background: linear-gradient(
      180deg,
      ${colors.background.linear} 0%,
      ${colors.background.light} 100%
    );
  }
`;

const PopupClose = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  background: ${colors.background.light}50;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  @media (max-width: 1080px) {
    top: 16px;
    right: 16px;
  }
`;

const DecorativeLine = styled.div`
  border: 1px solid ${colors.state.focus.ring}40;
  border-radius: 99px;
  max-width: 1214px;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 40%;
  @media screen and (max-width: 1080px) {
    border: 1px solid ${colors.state.focus.ring}40;
    width: 286px;
  }
`;

interface ServicesProps {
  content: Record<string, unknown>;
}

const Services = ({ content }: ServicesProps) => {
  const locale = useLocale();
  const [openCard, setOpenCard] = useState<null | number>(null);
  const [miceDmcMode, setMiceDmcMode] = useState<"MICE" | "DMC">("DMC");

  const cards = content.cards as Record<string, unknown>[];

  // Close popup on Esc key
  useEffect(() => {
    if (openCard === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenCard(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openCard]);

  // Popup content
  const renderPopup = useCallback(() => {
    if (openCard === null) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setOpenCard(null);
      }
    };

    const card = cards[openCard];

    if (openCard === 0) {
      // Card1 popup
      const title = card.titleDetails as string;
      const description = card.descriptionDetails as string;
      const badge = card.title as string;
      const imageSrc = card.popup_image as string;
      return (
        <PopupOverlay $show={openCard !== null} onClick={handleOverlayClick}>
          <PopupCard $bg={imageSrc} $show={openCard !== null}>
            <PopupHeader>
              <PopupClose aria-label="Close" onClick={() => setOpenCard(null)}>
                <CloseIcon />
              </PopupClose>
              <BadgeWrapper>
                <Typography
                  as="span"
                  variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
                  color={`${colors.background.white}`}
                  weight="regular"
                >
                  {badge}
                </Typography>
              </BadgeWrapper>
            </PopupHeader>
            <PopupContent>
              <DesktopContainer>
                <Typography
                  variant={
                    locale === "ka" ? "display-smUppercase" : "display-sm"
                  }
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {title}
                </Typography>
                <Typography
                  variant="text-md"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {description}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {title}
                </Typography>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {description}
                </Typography>
              </MobileContainer>
            </PopupContent>
          </PopupCard>
        </PopupOverlay>
      );
    }

    if (openCard === 1) {
      // Card2 popup with badge switcher
      const imageSrc = card.popup_image as string;
      const title =
        miceDmcMode === "DMC"
          ? (card.DmcDetails as string)
          : (card.MiceDetails as string);
      const description =
        miceDmcMode === "DMC"
          ? (card.DmcDescription as string)
          : (card.MiceDescription as string);
      return (
        <PopupOverlay $show={openCard !== null} onClick={handleOverlayClick}>
          <PopupCard $bg={imageSrc} $show={openCard !== null}>
            <PopupHeader>
              <PopupClose aria-label="Close" onClick={() => setOpenCard(null)}>
                <CloseIcon />
              </PopupClose>
              <BadgeSwitcher>
                <BadgeSlider $activeIndex={miceDmcMode === "MICE" ? 0 : 1} />
                <BadgeButton
                  $active={miceDmcMode === "MICE"}
                  onClick={() => setMiceDmcMode("MICE")}
                >
                  MICE
                </BadgeButton>
                <BadgeButton
                  $active={miceDmcMode === "DMC"}
                  onClick={() => setMiceDmcMode("DMC")}
                >
                  DMC
                </BadgeButton>
              </BadgeSwitcher>
            </PopupHeader>
            <PopupContent>
              <DesktopContainer>
                <Typography
                  variant={
                    locale === "ka" ? "display-smUppercase" : "display-sm"
                  }
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {title}
                </Typography>
                <Typography
                  variant="text-md"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {description}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {title}
                </Typography>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {description}
                </Typography>
              </MobileContainer>
            </PopupContent>
          </PopupCard>
        </PopupOverlay>
      );
    }

    if (openCard === 2) {
      // Card3 popup
      const imageSrc = card.popup_image as string;
      const title = (card.detailsTitle as string) || (card.title as string);
      const description =
        (card.detailsDescription as string) || (card.description as string);
      const badge = card.title as string;

      return (
        <PopupOverlay $show={openCard !== null} onClick={handleOverlayClick}>
          <PopupCard $bg={imageSrc} $show={openCard !== null}>
            <PopupHeader>
              <PopupClose aria-label="Close" onClick={() => setOpenCard(null)}>
                <CloseIcon />
              </PopupClose>
              <BadgeWrapper>
                <Typography
                  as="span"
                  variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
                  color={`${colors.background.white}`}
                  weight="regular"
                >
                  {badge}
                </Typography>
              </BadgeWrapper>
            </PopupHeader>
            <PopupContent>
              <DesktopContainer>
                <Typography
                  variant={
                    locale === "ka" ? "display-smUppercase" : "display-sm"
                  }
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {title}
                </Typography>
                <Typography
                  variant="text-md"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {description}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {title}
                </Typography>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {description}
                </Typography>
              </MobileContainer>
            </PopupContent>
          </PopupCard>
        </PopupOverlay>
      );
    }

    return null;
  }, [openCard, miceDmcMode, cards, locale]);

  return (
    <ServicesWrapper id="services">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <clipPath id="servicesAboutClip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1 0 L 0.7551 0.9419 Q 0.74 1 0.68 1 L 0.32 1 Q 0.26 1 0.2449 0.9419 L 0 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <AboutUsSection>
        <Container>
          <AboutUsTitle>
            <DesktopContainer>
              <Typography
                variant={locale === "ka" ? "display-mdUppercase" : "display-md"}
                color={colors.text.dark}
                weight="bold"
              >
                {content.aboutUs_title as string}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                color={colors.text.dark}
                weight="bold"
              >
                {content.aboutUs_title as string}
              </Typography>
            </MobileContainer>
          </AboutUsTitle>
          <AboutUsContent>
            <DesktopContainer>
              <Typography
                variant="text-md"
                color={colors.text.light}
                weight="regular"
              >
                {content.aboutUs_description as string}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant="text-sm"
                color={colors.text.light}
                weight="regular"
              >
                {content.aboutUs_description as string}
              </Typography>
            </MobileContainer>
          </AboutUsContent>
        </Container>
      </AboutUsSection>
      <DecorativeLine />
      <Container>
        <Title>
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "text-mdUppercase" : "text-md"}
              color={colors.text.light}
            >
              {content.description as string}
            </Typography>
            <Typography
              variant={locale === "ka" ? "display-mdUppercase" : "display-md"}
              color={colors.text.dark}
              weight="bold"
            >
              {content.title as string}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
              color={colors.text.light}
            >
              {content.description as string}
            </Typography>
            <Typography
              variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
              color={colors.text.dark}
              weight="bold"
            >
              {content.title as string}
            </Typography>
          </MobileContainer>
        </Title>
        <CardsGrid>
          {cards.map((card, index) => (
            <ServiceCard key={index} onClick={() => setOpenCard(index)}>
              <CardImage>
                <Image
                  src={card.card_image as string}
                  alt={card.title as string}
                  fill
                  priority={index === 0}
                  quality={60}
                  sizes="(max-width: 1080px) 100vw, 470px"
                  style={{ objectFit: "cover" }}
                />
              </CardImage>
              <CardContent>
                <CardHeader>
                  <CardTitle>
                    <DesktopContainer>
                      <Typography
                        variant={
                          locale === "ka" ? "display-smUppercase" : "display-sm"
                        }
                        color={colors.text.dark}
                        weight="semibold"
                      >
                        {card.title as string}
                      </Typography>
                    </DesktopContainer>
                    <MobileContainer>
                      <Typography
                        variant={
                          locale === "ka" ? "text-lgUppercase" : "text-lg"
                        }
                        color={colors.text.dark}
                        weight="semibold"
                      >
                        {card.title as string}
                      </Typography>
                    </MobileContainer>
                  </CardTitle>
                  <Button
                    variant="iconOnly"
                    onClick={() => setOpenCard(index)}
                    aria-label={card.title as string}
                  />
                </CardHeader>
                <DescriptionWrapper>
                  <DesktopContainer>
                    <Typography
                      variant="text-mdOneline"
                      weight="regular"
                      color={colors.text.light}
                    >
                      [ 0{index + 1} ]
                    </Typography>

                    <Typography
                      variant="text-md"
                      weight="regular"
                      color={colors.text.light}
                    >
                      {card.description as string}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-sm"
                      weight="regular"
                      color={colors.text.light}
                    >
                      [ 0{index + 1} ]
                    </Typography>
                    <Typography
                      variant="text-sm"
                      weight="regular"
                      color={colors.text.light}
                    >
                      {card.description as string}
                    </Typography>
                  </MobileContainer>
                </DescriptionWrapper>
              </CardContent>
            </ServiceCard>
          ))}
        </CardsGrid>
      </Container>
      {renderPopup()}
    </ServicesWrapper>
  );
};

export default Services;
