"use client";

import React from "react";
import Container from "./Container";
import { styled, keyframes } from "styled-components";
import Image from "next/image";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useLocale } from "next-intl";
import DotsIcon from "../icons/DotsIcon";
import CommentIcon from "../icons/CommentIcon";
import { DesktopContainer, MobileContainer } from "./Responsive";
import DotsMobileIcon from "../icons/DotsMobileIcon";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
`;

const SectionWrapper = styled.section`
  position: relative;
`;

const MainContainer = styled.div`
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1080px) {
    padding: 48px 0 0 0;
  }
`;

const BlurredEllipse = styled.span`
  position: absolute;
  width: 863px;
  height: 863px;
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
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  @media screen and (max-width: 1080px) {
    border: 1px solid ${colors.state.focus.ring}40;
    display: none;
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

const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-bottom: 64px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 32px;
    gap: 8px;
    text-align: center;
  }
`;

const TagWrapper = styled.div`
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

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.7);
    pointer-events: none;
  }
`;

const CarouselContainer = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 100px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 48px;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 16px;
  animation: ${scroll} 30s linear infinite;
  width: max-content;
  @media screen and (max-width: 1080px) {
    animation: ${scroll} 40s linear infinite;
    gap: 8px;
  }
`;

const TestimonialCard = styled.div`
  flex-shrink: 0;
  width: 372px;
  padding: 32px;
  background-color: ${colors.background.light};
  border-radius: 20px;
  box-shadow: ${colors.shadow.light};
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: 1080px) {
    width: 343px;
    padding: 24px;
    gap: 24px;
  }
`;

const QuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: 1080px) {
    gap: 24px;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Avatar = styled(Image)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface TestimonialsProps {
  content: Record<string, unknown>;
}

const Testimonials = ({ content }: TestimonialsProps) => {
  const locale = useLocale();

  const items = content.items as Record<string, unknown>[];

  // Build testimonials array with duplication for carousel loop
  const baseTestimonials = [...items, ...items].map((item, index) => ({
    id: index + 1,
    quote: item.feedback as string,
    name: item.name as string,
    title: item.position as string,
    avatar: item.avatar as string,
  }));

  const duplicatedTestimonials = [
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials,
  ];

  return (
    <SectionWrapper id="testimonials">
      {/* Top Left */}
      <BlurredEllipse style={{ top: 200, left: -256 }} />
      {/* Top Right */}
      <BlurredEllipse style={{ top: 200, right: -256 }} />
      {/* Bottom Left */}
      <BlurredEllipse style={{ bottom: -200, left: -256 }} />
      {/* Bottom Right */}
      <BlurredEllipse style={{ bottom: -200, right: -256 }} />
      <MainContainer>
        <Container>
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
                {content.description as string}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
                color={colors.text.light}
              >
                {content.description as string}
              </Typography>
            </MobileContainer>
            <TagWrapper>
              <DesktopContainer>
                <Typography
                  variant={
                    locale === "ka" ? "display-mdUppercase" : "display-md"
                  }
                  weight="bold"
                  color={colors.text.dark}
                >
                  {content.title as string}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
                  weight="bold"
                  color={colors.text.dark}
                >
                  {content.title as string}
                </Typography>
              </MobileContainer>
            </TagWrapper>
          </TitleStyled>
        </Container>
      </MainContainer>
      <CarouselContainer>
        <CarouselTrack>
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`}>
              <QuoteSection>
                <CommentIcon />
                <DesktopContainer>
                  <Typography variant="text-md" color={colors.text.light}>
                    {testimonial.quote}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography variant="text-sm" color={colors.text.light}>
                    {testimonial.quote}
                  </Typography>
                </MobileContainer>
              </QuoteSection>
              <AuthorSection>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={58}
                  height={58}
                  quality={75}
                  style={{ borderRadius: "50%" }}
                />
                <AuthorInfo>
                  <DesktopContainer>
                    <Typography
                      variant="text-mdOneline"
                      weight="semibold"
                      color={colors.text.dark}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="text-mdOneline"
                      color={colors.text.dark}
                    >
                      {testimonial.title}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-sm"
                      weight="semibold"
                      color={colors.text.dark}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography variant="text-sm" color={colors.text.dark}>
                      {testimonial.title}
                    </Typography>
                  </MobileContainer>
                </AuthorInfo>
              </AuthorSection>
            </TestimonialCard>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default Testimonials;
