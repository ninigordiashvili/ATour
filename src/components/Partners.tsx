"use client";

import React from "react";
import Container from "./Container";
import { styled } from "styled-components";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useLocale } from "next-intl";
import ImageCarousel from "./ImageCarousel";
import { DesktopContainer, MobileContainer } from "./Responsive";
import AptosIcon from "../logoIcons/AptosIcon";
import TotalCharmIcon from "../logoIcons/TotalCharmIcon";
import EstemedIcon from "../logoIcons/EstemedIcon";
import KnaufIcon from "../logoIcons/KnaufIcon";
import IsystemsIcon from "../logoIcons/IsystemsIcon";

const MainContainer = styled.div`
  padding: 100px 0 0 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  @media screen and (max-width: 1080px) {
    padding: 48px 0 0 0;
    margin-bottom: 32px;
  }
`;

const PartnersSection = styled.section`
  position: relative;
`;

const BlurredEllipse = styled.span<{ $size?: number }>`
  position: absolute;
  width: ${({ $size }) => $size || 863}px;
  height: ${({ $size }) => $size || 863}px;
  border-radius: 50%;
  background: #3f5fbf;
  opacity: 0.1;
  filter: blur(500px);
  pointer-events: none;
  z-index: 0;
`;

const DecorativeLine = styled.div`
  border: 1px solid ${colors.state.focus.ring}40;
  border-radius: 99px;
  max-width: 1214px;
  width: 100%;
  align-self: center;
  position: absolute;
  top: 0px;
  opacity: 40%;
  @media screen and (max-width: 1080px) {
    border: 1px solid ${colors.state.focus.ring}40;
    width: 100%;
  }
`;

const TopDecorativeWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PartnershipTag = styled.div`
  position: relative;
  margin-top: 2px;
  padding: 12px 64px 14px;
  z-index: 1;
  isolation: isolate;
  clip-path: polygon(0 0, 100% 0, 82% 100%, 18% 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${colors.background.light};
    border-top: none;
    box-shadow: 0px -17px 60px 0px #465fcf26;
    clip-path: polygon(0 0, 100% 0, 82% 100%, 18% 100%);
    z-index: -1;
    pointer-events: none;
  }

  @media screen and (max-width: 1080px) {
    padding: 8px 20px 10px;
    clip-path: polygon(0 0, 100% 0, 86% 100%, 14% 100%);

    &::before {
      clip-path: polygon(0 0, 100% 0, 86% 100%, 14% 100%);
    }
  }
`;

const MainPartnersWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const PartnerLogosRow = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 64px;
  margin-bottom: 128px;
  svg {
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 1080px) {
    margin-top: 24px;
    gap: 20px;

    svg {
      max-height: 36px;
      max-width: 100%;
    }
  }
`;

const DecorativeLineBottom = styled.div`
  border: 1px solid ${colors.state.focus.ring}40;
  border-radius: 99px;
  max-width: 1214px;
  width: 100%;
  opacity: 0.4;
  @media screen and (max-width: 1080px) {
    border: 1px solid ${colors.state.focus.ring}40;
    width: 100%;
  }
`;

const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1080px) {
    gap: 8px;
    max-width: 326px;
    text-align: center;
  }
`;

const PartnersWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }
`;

const ImageCarouselWrapper = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 48px;
  }
`;

const DecorativeLineBottomWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface PartnersProps {
  content: Record<string, unknown>;
}

const Partners = ({ content }: PartnersProps) => {
  const locale = useLocale();

  const topRowImages = content.topRowImages as { src: string; alt: string }[];
  const bottomRowImages = content.bottomRowImages as {
    src: string;
    alt: string;
  }[];

  return (
    <PartnersSection>
      {/* Top Left */}
      <BlurredEllipse style={{ top: -200, left: -256 }} />
      {/* Top Right */}
      <BlurredEllipse style={{ top: -200, right: -256 }} />
      {/* Bottom Left */}
      <BlurredEllipse $size={564} style={{ bottom: -200, left: -256 }} />
      {/* Bottom Right */}
      <BlurredEllipse $size={564} style={{ bottom: -200, right: -256 }} />
      <Container>
        <MainContainer>
          <MainPartnersWrapper>
            <TopDecorativeWrapper>
              <DecorativeLine />
              <PartnershipTag>
                <Typography
                  variant={
                    locale === "ka" ? "display-mdUppercase" : "display-md"
                  }
                  weight="bold"
                  color={colors.text.dark}
                >
                  {(content.partnershipTag as string) || "In Partnership with"}
                </Typography>
              </PartnershipTag>
            </TopDecorativeWrapper>
            <PartnerLogosRow aria-label="Partner logos">
              <AptosIcon />
              <TotalCharmIcon />
              <EstemedIcon />
              <KnaufIcon />
              <IsystemsIcon />
            </PartnerLogosRow>
          </MainPartnersWrapper>
          <TitleStyled>
            <DesktopContainer>
              <PartnersWrapper>
                <Typography
                  variant={
                    locale === "ka" ? "display-mdUppercase" : "display-md"
                  }
                  weight="bold"
                  color={colors.text.dark}
                >
                  {content.partner as string}
                </Typography>
              </PartnersWrapper>
            </DesktopContainer>
            <DesktopContainer>
              <Typography
                variant={
                  locale === "ka" ? "text-mdUppercase" : "text-mdOneline"
                }
                color={colors.text.light}
              >
                {content.title as string}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
                color={colors.text.light}
              >
                {content.title as string}
              </Typography>
            </MobileContainer>
          </TitleStyled>
        </MainContainer>
      </Container>
      <ImageCarouselWrapper>
        <ImageCarousel
          topRowImages={topRowImages}
          bottomRowImages={bottomRowImages}
        />
      </ImageCarouselWrapper>
      <DecorativeLineBottomWrapper>
        <DecorativeLineBottom />
      </DecorativeLineBottomWrapper>
    </PartnersSection>
  );
};

export default Partners;
