import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Button from "./Button";
import { DesktopContainer, MobileContainer } from "./Responsive";

const ServicesWrapper = styled.section`
  background-color: ${colors.background.light};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  position: relative;
  padding: 100px 0;
  @media screen and (max-width: 1080px) {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    padding: 48px 0;
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
    gap: 16px;
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
  background: rgba(0, 16, 61, 0.32);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupCard = styled.div`
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 8px 32px 0 rgba(0, 16, 61, 0.16);
  max-width: 800px;
  width: 90vw;
  padding: 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    border-radius: 24px;
    max-width: 95vw;
  }
`;

const PopupImage = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
  background-image: url("/images/insights/tfls.png");
  background-size: cover;
  background-position: center;
  @media (max-width: 600px) {
    height: 180px;
  }
`;

const PopupContent = styled.div`
  padding: 32px 40px 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 600px) {
    padding: 16px;
    gap: 12px;
  }
`;

const PopupClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: #f5f7fa;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 24px;
  @media (max-width: 600px) {
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
`;

const Services = () => {
  const tServices = useTranslations("Services");
  const locale = useLocale();
  const [openCard, setOpenCard] = useState<null | "Card1" | "Card2">(null);

  // Popup content for Card1 (TFLS)
  const renderPopup = () => {
    if (!openCard) return null;
    let title = tServices("Card1.titleDetails");
    let description = tServices("Card1.descriptionDetails");
    let badge = tServices("Card1.title");
    if (openCard === "Card2") {
      title = tServices("Card2.DmcDetails");
      description = tServices("Card2.DmcDescription");
      badge = tServices("Card2.title");
    }
    return (
      <PopupOverlay>
        <PopupCard>
          <PopupClose aria-label="Close" onClick={() => setOpenCard(null)}>
            ×
          </PopupClose>
          <PopupImage />
          <PopupContent>
            <Typography
              as="span"
              variant={locale === "ka" ? "text-mdUppercase" : "text-md"}
              color="#fff"
              weight="semibold"
            >
              {badge}
            </Typography>
            <Typography
              variant={locale === "ka" ? "display-mdUppercase" : "display-md"}
              color={colors.text.dark}
              weight="bold"
            >
              {title}
            </Typography>
            <Typography
              variant={locale === "ka" ? "text-mdUppercase" : "text-md"}
              color={colors.text.dark}
              weight="regular"
            >
              {description}
            </Typography>
          </PopupContent>
        </PopupCard>
      </PopupOverlay>
    );
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
              variant={locale === "ka" ? "display-xsUppercase" : "display-xs"}
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
