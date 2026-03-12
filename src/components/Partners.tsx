"use client";

import React from "react";
import Container from "./Container";
import { styled } from "styled-components";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useLocale } from "next-intl";
import DotsIcon from "../icons/DotsIcon";
import ImageCarousel from "./ImageCarousel";
import { DesktopContainer, MobileContainer } from "./Responsive";
import DotsMobileIcon from "../icons/DotsMobileIcon";
import Image from "next/image";

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

const DotsWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1080px) {
    top: 30px;
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
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(24px);

  border: 1px solid rgba(255, 255, 255, 0.18);

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
          <DecorativeLine />
          <DotsWrapper>
            <DesktopContainer>
              <DotsIcon />
            </DesktopContainer>
            <MobileContainer>
              <DotsMobileIcon />
            </MobileContainer>
          </DotsWrapper>
          <TitleStyled>
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
                <Image
                  src={content.logo as string}
                  alt="Aptos Logo"
                  width={153}
                  height={32}
                  quality={75}
                />
              </PartnersWrapper>
            </DesktopContainer>
            <MobileContainer>
              <PartnersWrapper>
                <Typography
                  variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                  weight="bold"
                  color={colors.text.dark}
                >
                  {content.partner as string}
                </Typography>
                <Image
                  src={content.logo as string}
                  alt="Aptos Logo"
                  width={124}
                  height={26}
                  quality={75}
                />
              </PartnersWrapper>
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
