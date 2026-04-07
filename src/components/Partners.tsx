"use client";

import React from "react";
import Container from "./Container";
import { styled, keyframes } from "styled-components";
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
    width: 286px;
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
  clip-path: url(#partnersTagClipDesktop);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at top center,
      #f1f3fd 0%,
      #dae0f8 100%
    );
    border-top: none;
    box-shadow: 0px -17px 60px 0px #dfe4f9;
    clip-path: url(#partnersTagClipDesktop);
    z-index: -1;
    pointer-events: none;
  }

  @media screen and (max-width: 1080px) {
    padding: 8px 28px 10px;
    clip-path: url(#partnersTagClipMobile);

    &::before {
      clip-path: url(#partnersTagClipMobile);
    }
  }
`;

const MainPartnersWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const logoScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const PartnerLogosRow = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 64px;
  max-width: 1214px;
  margin-bottom: 96px;
  svg {
    width: auto;
    height: 102px;
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const MobileLogosCarouselWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1080px) {
    display: block;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-top: 24px;
    margin-bottom: 64px;
  }
`;

const MobileLogosTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: max-content;
  animation: ${logoScroll} 18s linear infinite;

  svg {
    display: block;
    height: 44px;
    width: auto;
    flex-shrink: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    overflow-x: auto;
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
    width: 286px;
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
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <clipPath
            id="partnersTagClipDesktop"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M 0 0 L 1 0 L 0.831 0.941 Q 0.82 1 0.76 1 L 0.24 1 Q 0.18 1 0.169 0.941 L 0 0 Z" />
          </clipPath>
          <clipPath
            id="partnersTagClipMobile"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M 0 0 L 1 0 L 0.868 0.941 Q 0.86 1 0.80 1 L 0.20 1 Q 0.14 1 0.132 0.941 L 0 0 Z" />
          </clipPath>
        </defs>
      </svg>
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
                <DesktopContainer>
                  <Typography
                    variant={
                      locale === "ka" ? "display-mdUppercase" : "display-md"
                    }
                    weight="bold"
                    color={colors.text.dark}
                  >
                    {(content.partnershipTag as string) ||
                      "In Partnership with"}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography
                    variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                    weight="bold"
                    color={colors.text.dark}
                  >
                    {(content.partnershipTag as string) ||
                      "In Partnership with"}
                  </Typography>
                </MobileContainer>
              </PartnershipTag>
            </TopDecorativeWrapper>
            <PartnerLogosRow aria-label="Partner logos">
              <AptosIcon />
              <TotalCharmIcon />
              <EstemedIcon />
              <KnaufIcon />
              <IsystemsIcon />
            </PartnerLogosRow>
            <MobileLogosCarouselWrapper aria-label="Partner logos">
              <MobileLogosTrack>
                <AptosIcon />
                <TotalCharmIcon />
                <EstemedIcon />
                <KnaufIcon />
                <IsystemsIcon />
                <AptosIcon />
                <TotalCharmIcon />
                <EstemedIcon />
                <KnaufIcon />
                <IsystemsIcon />
              </MobileLogosTrack>
            </MobileLogosCarouselWrapper>
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
            <MobileContainer>
              <Typography
                variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                weight="bold"
                color={colors.text.dark}
              >
                {content.partner as string}
              </Typography>
            </MobileContainer>
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
