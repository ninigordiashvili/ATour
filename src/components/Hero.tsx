"use client";

import { useLocale } from "next-intl";
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
import React, { useState } from "react";
import dynamic from "next/dynamic";
import CloseIcon from "../icons/CloseIcon";

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

const HeroDesktopImageWrapper = styled.div`
  display: none;
  @media (min-width: 426px) {
    display: block;
  }
`;

const HeroMobileImageWrapper = styled.div`
  display: none;

  @media (max-width: 668px) {
    display: block;
  }
`;

const TagWrapper = styled.div`
  display: inline-block;
  padding: 8px;
  background-color: ${colors.background.light};
  border-radius: 24px;
  text-align: center;
  width: fit-content;
  @media screen and (max-width: 1080px) {
    margin-bottom: 16px;
    padding: 7px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 190px 0 0 0;
  gap: 32px;
  max-width: 648px;
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    gap: 16px;
    text-align: center;
    align-items: center;
    padding: 124px 0 24px 0;
  }
`;

const SocialsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 8px;
  margin-left: auto;
  margin-bottom: 100px;
  max-width: 218px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  /* Glassmorphism effect */
  background: transparent;
  backdrop-filter: blur(40px) saturate(80%) brightness(1.1);

  /* Frosted overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0.35;
    pointer-events: none;
  }

  /* Subtle edge highlight */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.7);
    pointer-events: none;
  }

  @media screen and (max-width: 1080px) {
    justify-content: center;
    align-items: center;
    margin: 0 auto 48px auto;
    max-width: 206px;
  }
`;

const SocialWrapper = styled.div`
  padding: 6.5px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  @media screen and (max-width: 1080px) {
    width: 42px;
    height: 42px;
  }
`;

const DescriptionWrapper = styled.div`
  min-height: 40px; /* 2 lines × 20px line-height */
  @media screen and (max-width: 1080px) {
    min-height: 40px;
  }
`;

const ButtonWrapper = styled.div`
  @media screen and (max-width: 1080px) {
    margin-top: 16px;
  }
`;

const ModalOverlay = styled.div`
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
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  border-radius: 24px;
  width: 747px;
  overflow-y: auto;
  position: relative;
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes scaleIn {
    from {
      transform: scale(0.96);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media screen and (max-width: 1080px) {
    margin: 0 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
`;

const ContactFormCard = dynamic(
  () => import("./Contact").then((mod) => mod.ContactFormCard),
  { ssr: false },
);

interface HeroProps {
  content: Record<string, unknown>;
  social: unknown;
}

const Hero = ({ content, social }: HeroProps) => {
  const locale = useLocale();

  const [showModal, setShowModal] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  // Responsive color for social icons
  const [isMobile, setIsMobile] = useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1080);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const socialUrls = social as {
    whatsapp: string;
    instagram: string;
    messenger: string;
  };

  return (
    <>
      <HeroImageWrapper>
        <HeroDesktopImageWrapper>
          <Image
            src={content.desktop_image as string}
            alt="Hero Background"
            fill
            priority
            fetchPriority="high"
            quality={75}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </HeroDesktopImageWrapper>

        <HeroMobileImageWrapper>
          <Image
            src={content.mobile_image as string}
            alt="Hero Background"
            fill
            priority
            fetchPriority="high"
            quality={70}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </HeroMobileImageWrapper>
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
                {content.tag as string}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant="text-xs"
                weight="regular"
                color={colors.text.light}
              >
                {content.tag as string}
              </Typography>
            </MobileContainer>
          </TagWrapper>
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "display-lgUppercase" : "display-lg"}
              weight="bold"
              color={colors.text.dark}
            >
              {content.title as string}
            </Typography>
            <DescriptionWrapper>
              <Typography
                variant="text-sm"
                weight="regular"
                color={colors.text.light}
              >
                {content.description as string}
              </Typography>
            </DescriptionWrapper>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "display-smUppercase" : "display-sm"}
              weight="bold"
              color={colors.text.dark}
            >
              {content.title as string}
            </Typography>
            <DescriptionWrapper>
              <Typography
                variant="text-sm"
                weight="regular"
                color={colors.text.light}
              >
                {content.description as string}
              </Typography>
            </DescriptionWrapper>
          </MobileContainer>
          <ButtonWrapper>
            <Button
              variant="default"
              onClick={handleOpenModal}
              active={showModal}
            />
          </ButtonWrapper>
        </MainContainer>
        <SocialsBox>
          <SocialWrapper
            as="a"
            href={socialUrls.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            onMouseEnter={() => setHoveredSocial("whatsapp")}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <WhatsappIcon
              color={isMobile ? colors.text.dark : colors.background.light}
              hovered={hoveredSocial === "whatsapp"}
            />
          </SocialWrapper>
          <SocialWrapper
            as="a"
            href={socialUrls.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            onMouseEnter={() => setHoveredSocial("instagram")}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <InstaIcon
              color={isMobile ? colors.text.dark : colors.background.light}
              hovered={hoveredSocial === "instagram"}
            />
          </SocialWrapper>
          <SocialWrapper
            as="a"
            href={socialUrls.messenger}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on Messenger"
            onMouseEnter={() => setHoveredSocial("messenger")}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <MessengerIcon
              color={isMobile ? colors.text.dark : colors.background.light}
              hovered={hoveredSocial === "messenger"}
            />
          </SocialWrapper>
        </SocialsBox>
      </Container>
      {/* Modal with animation */}
      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal} aria-label="Close">
              <CloseIcon />
            </CloseButton>
            <ContactFormCard />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Hero;
