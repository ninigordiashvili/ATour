import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Button from "./Button";
import { DesktopContainer, MobileContainer } from "./Responsive";
import CloseIcon from "../icons/CloseIcon";
import { relative } from "path/win32";

const ServicesWrapper = styled.section`
  background-color: ${colors.background.light};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  position: relative;
  padding: 100px 0;
  @media screen and (max-width: 1080px) {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    padding: 48px 0 58px 0;
  }
`;

const DecorativeLine = styled.div`
  border: 2px solid ${colors.state.focus.ring}70;
  border-radius: 99px;
  width: 122px;
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  @media screen and (max-width: 1080px) {
    border: 1px solid ${colors.state.focus.ring}70;
    width: 64px;
    top: 16px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 32px;
    gap: 8px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 470px);
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
  transition: all 0.3s ease;
  box-shadow: ${colors.shadow.light};
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
  padding: 24px;
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
  max-width: 107px;
`;

const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  gap: 16px;
`;

// Popup styles
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.overlay.dark};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1080px) {
  }
`;

interface PopupCardProps {
  $bg: string;
}

const PopupCard = styled.div<PopupCardProps>`
  border-radius: 24px;
  max-width: 800px;
  position: relative;
  overflow: hidden;
  background: ${({ $bg }) => `url(${$bg}) center center / cover no-repeat`};
  padding: 32px;
  height: 509px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1080px) {
    margin: 0 16px;
    min-width: 343px;
    padding: 16px;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    bottom: 0;
    width: 100%;
    height: 60%; /* Adjust height as needed */
    pointer-events: none;
    background: linear-gradient(
      to top,
      ${colors.background.white} 0%,
      ${colors.background.white}00 100%
    );
  }
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1080px) {
  }
`;

const BadgeWrapper = styled.div`
  background: ${colors.state.focus.ring};
  padding: 6px 12px;
  border-radius: 53px;
  display: inline-block;
`;

const BadgeSwitcher = styled.div`
  display: flex;
  background: ${colors.background.light};
  border-radius: 53px;
`;

const BadgeButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) =>
    active ? colors.state.focus.ring : "transparent"};
  color: ${({ active }) => (active ? colors.text.primary : colors.text.light)};
  border: none;
  border-radius: 53px;
  padding: 8px 16px;
  cursor: pointer;
  transition:
    background 300ms ease-out,
    color 300ms ease-out;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: auto;
  z-index: 10;

  @media (max-width: 1080px) {
    gap: 16px;
    margin: 8px;
  }
`;

const PopupClose = styled.button`
  position: absolute;
  top: 32px;
  right: 42px;
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

const Services = () => {
  const tServices = useTranslations("Services");
  const locale = useLocale();
  const [openCard, setOpenCard] = useState<null | "Card1" | "Card2">(null);
  const [miceDmcMode, setMiceDmcMode] = useState<"MICE" | "DMC">("DMC");
  // Close popup on Esc key
  useEffect(() => {
    if (!openCard) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenCard(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openCard]);

  // Popup content for Card1 (TFLS)
  const renderPopup = () => {
    if (!openCard) return null;

    if (openCard === "Card1") {
      // Card1 popup
      const title = tServices("Card1.titleDetails");
      const description = tServices("Card1.descriptionDetails");
      const badge = tServices("Card1.title");
      const imageSrc = "/images/services/tfls.png";
      return (
        <PopupOverlay>
          <PopupCard $bg={imageSrc}>
            <PopupHeader>
              <PopupClose aria-label="Close" onClick={() => setOpenCard(null)}>
                <CloseIcon />
              </PopupClose>
              <BadgeWrapper>
                <Typography
                  as="span"
                  variant={"text-sm"}
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

    if (openCard === "Card2") {
      // Card2 popup with badge switcher
      const badge = tServices("Card2.title");
      const imageSrc = "/images/services/dmc.png";
      const title =
        miceDmcMode === "DMC"
          ? tServices("Card2.DmcDetails")
          : tServices("Card2.MiceDetails");
      const description =
        miceDmcMode === "DMC"
          ? tServices("Card2.DmcDescription")
          : tServices("Card2.MiceDescription");

      return (
        <PopupOverlay>
          <PopupCard $bg={imageSrc}>
            <PopupHeader>
              <PopupClose aria-label="Close" onClick={() => setOpenCard(null)}>
                <CloseIcon />
              </PopupClose>
              <BadgeSwitcher>
                <BadgeButton
                  active={miceDmcMode === "MICE"}
                  onClick={() => setMiceDmcMode("MICE")}
                >
                  MICE
                </BadgeButton>
                <BadgeButton
                  active={miceDmcMode === "DMC"}
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

    return null;
  };

  return (
    <ServicesWrapper id="services">
      <DecorativeLine />

      <Container>
        <Title>
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "text-mdUppercase" : "text-md"}
              color={colors.text.light}
            >
              {tServices("description")}
            </Typography>
            <Typography
              variant={locale === "ka" ? "display-mdUppercase" : "display-md"}
              color={colors.text.dark}
              weight="bold"
            >
              {tServices("title")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
              color={colors.text.light}
            >
              {tServices("description")}
            </Typography>
            <Typography
              variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
              color={colors.text.dark}
              weight="bold"
            >
              {tServices("title")}
            </Typography>
          </MobileContainer>
        </Title>
        <CardsGrid>
          <ServiceCard>
            <CardImage>
              <Image
                src="/images/services/serviceCard1.png"
                alt={tServices("Card1.title")}
                fill
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
                      {tServices("Card1.title")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tServices("Card1.title")}
                    </Typography>
                  </MobileContainer>
                </CardTitle>
                <Button
                  variant="iconOnly"
                  onClick={() => setOpenCard("Card1")}
                />
              </CardHeader>
              <DescriptionWrapper>
                <DesktopContainer>
                  <Typography
                    variant="text-mdOneline"
                    weight="regular"
                    color={colors.text.light}
                  >
                    [ 01 ]
                  </Typography>

                  <Typography
                    variant="text-md"
                    weight="regular"
                    color={colors.text.light}
                  >
                    {tServices("Card1.description")}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography
                    variant="text-sm"
                    weight="regular"
                    color={colors.text.light}
                  >
                    [ 01 ]
                  </Typography>
                  <Typography
                    variant="text-sm"
                    weight="regular"
                    color={colors.text.light}
                  >
                    {tServices("Card1.description")}
                  </Typography>
                </MobileContainer>
              </DescriptionWrapper>
            </CardContent>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <Image
                src="/images/services/serviceCard2.png"
                alt={tServices("Card2.title")}
                fill
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
                      {tServices("Card2.title")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tServices("Card2.title")}
                    </Typography>
                  </MobileContainer>
                </CardTitle>
                <Button
                  variant="iconOnly"
                  onClick={() => setOpenCard("Card2")}
                />
              </CardHeader>
              <DescriptionWrapper>
                <DesktopContainer>
                  <Typography
                    variant="text-mdOneline"
                    weight="regular"
                    color={colors.text.light}
                  >
                    [ 02 ]
                  </Typography>
                  <Typography
                    variant="text-md"
                    weight="regular"
                    color={colors.text.light}
                  >
                    {tServices("Card2.description")}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography
                    variant="text-sm"
                    weight="regular"
                    color={colors.text.light}
                  >
                    [ 02 ]
                  </Typography>
                  <Typography
                    variant="text-sm"
                    weight="regular"
                    color={colors.text.light}
                  >
                    {tServices("Card2.description")}
                  </Typography>
                </MobileContainer>
              </DescriptionWrapper>
            </CardContent>
          </ServiceCard>
        </CardsGrid>
      </Container>
      {renderPopup()}
    </ServicesWrapper>
  );
};

export default Services;
