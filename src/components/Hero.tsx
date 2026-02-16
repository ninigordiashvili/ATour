"use client";

import { useTranslations, useLocale } from "next-intl";
import styled from "styled-components";
import { Typography } from "./Typography";
import { colors } from "../styles/colors";
import Container from "./Container";
import { DesktopContainer, MobileContainer } from "./Responsive";
import Image from "next/image";
import WhatsappIcon from "../icons/WhatsappIcon";
import InstaIcon from "../icons/InstaIcon";
import MessengerIcon from "../icons/MessengerIcon";
import Button from "./Button";

const HeroImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 905px;
  top: -108px;
  z-index: -1;
  @media screen and (max-width: 1080px) {
    height: 700px;
  }
`;

const TagWrapper = styled.div`
  display: inline-block;
  padding: 8px;
  background-color: ${colors.background.light};
  border-radius: 24px;
  max-width: 184px;
  text-align: center;
  @media screen and (max-width: 1080px) {
    max-width: 160px;
    margin-bottom: 16px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0 0 0;
  gap: 32px;
  max-width: 648px;
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    gap: 16px;
    text-align: center;
    align-items: center;
    padding: 48px 0;
  }
`;

const SocialsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 8px;
  justify-self: flex-end;
  backdrop-filter: blur(40px);
  border-radius: 24px;
  margin-bottom: 100px;
  @media screen and (max-width: 1080px) {
    justify-self: center;
    margin-bottom: 48px;
  }
`;

const SocialWrapper = styled.div`
  padding: 6.5px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  background-color: ${colors.background.light}60;
  cursor: pointer;
  @media screen and (max-width: 1080px) {
    width: 42px;
    height: 42px;
  }
`;

const Hero = () => {
  const tHero = useTranslations("Hero");
  const locale = useLocale();

  return (
    <>
      <HeroImageWrapper>
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </HeroImageWrapper>
      <Container>
        <MainContainer>
          <TagWrapper>
            <DesktopContainer>
              <Typography
                variant="text-smOneline"
                weight="regular"
                color={colors.text.light}
              >
                {tHero("tag")}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant="text-xs"
                weight="regular"
                color={colors.text.light}
              >
                {tHero("tag")}
              </Typography>
            </MobileContainer>
          </TagWrapper>
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "display-lgUppercase" : "display-lg"}
              weight="bold"
              color={colors.text.dark}
            >
              {tHero("title")}
            </Typography>
            <Typography
              variant="text-sm"
              weight="regular"
              color={colors.text.light}
            >
              {tHero("description")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "display-smUppercase" : "display-sm"}
              weight="bold"
              color={colors.text.dark}
            >
              {tHero("title")}
            </Typography>
            <Typography
              variant="text-sm"
              weight="regular"
              color={colors.text.light}
            >
              {tHero("description")}
            </Typography>
          </MobileContainer>
          <Button variant="default" />
        </MainContainer>
        <SocialsBox>
          <SocialWrapper>
            <DesktopContainer>
              <WhatsappIcon />
            </DesktopContainer>
            <MobileContainer>
              <WhatsappIcon width={26} height={26} />
            </MobileContainer>
          </SocialWrapper>
          <SocialWrapper>
            <DesktopContainer>
              <InstaIcon />
            </DesktopContainer>
            <MobileContainer>
              <InstaIcon width={26} height={26} />
            </MobileContainer>
          </SocialWrapper>
          <SocialWrapper>
            <DesktopContainer>
              <MessengerIcon />
            </DesktopContainer>
            <MobileContainer>
              <MessengerIcon width={26} height={26} />
            </MobileContainer>
          </SocialWrapper>
        </SocialsBox>
      </Container>
    </>
  );
};

export default Hero;
