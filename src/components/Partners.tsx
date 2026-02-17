import React from "react";
import Container from "./Container";
import { styled } from "styled-components";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations, useLocale } from "next-intl";
import AptosLogoIcon from "../icons/AptosLogoIcon";
import DotsIcon from "../icons/DotsIcon";
import ImageCarousel from "./ImageCarousel";
import { DesktopContainer, MobileContainer } from "./Responsive";
import DotsMobileIcon from "../icons/DotsMobileIcon";
import AptosMobileIcon from "../icons/AptosMobileIcon";

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

  &::before,
  &::after,
  &::partner-top-right,
  &::partner-bottom-left {
    content: "";
    position: absolute;
    width: 863px;
    height: 863px;
    border-radius: 50%;
    background: #3f5fbf;
    opacity: 0.1;
    filter: blur(500px);
    pointer-events: none;
    z-index: 0;
  }

  /* Top Left */
  &::before {
    top: 200px;
    left: -256px;
  }
  /* Top Right */
  &::after {
    top: 200px;
    right: -256px;
  }
  /* Bottom Left */
  &::partner-bottom-left {
    bottom: -200px;
    left: -256px;
  }
  /* Bottom Right */
  &::partner-top-right {
    bottom: -200px;
    right: -256px;
  }
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

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  @media screen and (max-width: 1080px) {
    gap: 8px;
    max-width: 326px;
    text-align: center;
  }
`;

const PartnersWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  backdrop-filter: blur(40px);
  border-radius: 24px;
  background-color: ${colors.background.light};
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

const topRowImages = [
  { src: "images/partners/image1.jpg", alt: "Event 1" },
  { src: "images/partners/image2.jpg", alt: "Event 2" },
  { src: "images/partners/image3.jpg", alt: "Event 3" },
  { src: "images/partners/image4.jpg", alt: "Event 4" },
  { src: "images/partners/image5.jpg", alt: "Event 5" },
  { src: "images/partners/image6.jpg", alt: "Event 6" },
  { src: "images/partners/image7.jpg", alt: "Event 7" },
  { src: "images/partners/image8.jpg", alt: "Event 8" },
];

const bottomRowImages = [
  { src: "images/partners/image9.jpg", alt: "Event 9" },
  { src: "images/partners/image10.jpg", alt: "Event 10" },
  { src: "images/partners/image11.jpg", alt: "Event 11" },
  { src: "images/partners/image12.jpg", alt: "Event 12" },
  { src: "images/partners/image13.jpg", alt: "Event 13" },
  { src: "images/partners/image14.jpg", alt: "Event 14" },
  { src: "images/partners/image15.jpg", alt: "Event 15" },
];

const Partners = () => {
  const tPartners = useTranslations("Partners");
  const locale = useLocale();

  return (
    <PartnersSection>
      <span
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "-256px",
          width: "564px",
          height: "564px",
          borderRadius: "50%",
          background: "#3f5fbf",
          opacity: 0.1,
          filter: "blur(500px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "-200px",
          right: "-256px",
          width: "863px",
          height: "863px",
          borderRadius: "50%",
          background: "#3f5fbf",
          opacity: 0.1,
          filter: "blur(500px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-256px",
          width: "564px",
          height: "564px",
          borderRadius: "50%",
          background: "#3f5fbf",
          opacity: 0.1,
          filter: "blur(500px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "-200px",
          left: "-256px",
          width: "863px",
          height: "863px",
          borderRadius: "50%",
          background: "#3f5fbf",
          opacity: 0.1,
          filter: "blur(500px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
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
          <Title>
            <DesktopContainer>
              <Typography
                variant={
                  locale === "ka" ? "text-mdUppercase" : "text-mdOneline"
                }
                color={colors.text.light}
              >
                {tPartners("title")}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
                color={colors.text.light}
              >
                {tPartners("title")}
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
                  {tPartners("partner")}
                </Typography>
                <AptosLogoIcon />
              </PartnersWrapper>
            </DesktopContainer>
            <MobileContainer>
              <PartnersWrapper>
                <Typography
                  variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                  weight="bold"
                  color={colors.text.dark}
                >
                  {tPartners("partner")}
                </Typography>
                <AptosMobileIcon />
              </PartnersWrapper>
            </MobileContainer>
          </Title>
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
