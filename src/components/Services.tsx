import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "./Button";
import { DesktopContainer, MobileContainer } from "./Responsive";

const ServicesWrapper = styled.div`
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
  margin-bottom: 48px;
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
  align-items: center;
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

const Services = () => {
  const tServices = useTranslations("Services");
  return (
    <ServicesWrapper>
      <DecorativeLine />

      <Container>
        <Title>
          <DesktopContainer>
            <Typography variant="text-mdOneline" color={colors.text.light}>
              {tServices("description")}
            </Typography>
            <Typography
              variant="display-md"
              color={colors.text.dark}
              weight="bold"
            >
              {tServices("title")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant="text-sm" color={colors.text.light}>
              {tServices("description")}
            </Typography>
            <Typography
              variant="display-xs"
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
                      variant="display-sm"
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tServices("Card1.title")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-lg"
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tServices("Card1.title")}
                    </Typography>
                  </MobileContainer>
                </CardTitle>
                <Button variant="iconOnly" />
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
                      variant="display-sm"
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tServices("Card2.title")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-lg"
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tServices("Card2.title")}
                    </Typography>
                  </MobileContainer>
                </CardTitle>
                <Button variant="iconOnly" />
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
    </ServicesWrapper>
  );
};

export default Services;
