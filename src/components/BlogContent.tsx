"use client";

import React from "react";
import styled from "styled-components";
import { useLocale } from "next-intl";
import Container from "@/src/components/Container";
import { Typography } from "@/src/components/Typography";
import { colors } from "@/src/styles/colors";
import { DesktopContainer, MobileContainer } from "@/src/components/Responsive";
import CalendarIcon from "@/src/icons/CalendarIcon";
import ClockIcon from "@/src/icons/ClockIcon";
import { useRouter } from "@/src/i18n/routing";
import Image from "next/image";
import Button from "@/src/components/Button";

const BlogWrapper = styled.main`
  padding: 134px 130px;
  position: relative;
  overflow: hidden;
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
  @media (max-width: 1080px) {
    padding: 122px 0 48px 0;
  }
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-bottom: 32px;

  @media (max-width: 1080px) {
    gap: 32px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TitleStyled = styled.h1`
  margin-bottom: 64px;
  @media (max-width: 1080px) {
    margin-bottom: 32px;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 480px;
  border-radius: 48px;
  overflow: hidden;
  margin-bottom: 64px;
  position: relative;

  @media (max-width: 1080px) {
    height: 220px;
    border-radius: 24px;
    margin-bottom: 32px;
  }
`;

const ArticleContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1080px) {
  }
`;

const IntroText = styled.div``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 1080px) {
    gap: 8px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
`;

const ButtonWrapper = styled.div`
  max-width: 133px;
  margin-top: 32px;
  @media (max-width: 1080px) {
    margin-top: 0;
    max-width: 127px;
  }
`;

interface BlogContentProps {
  content: Record<string, unknown>;
}

const BlogContent = ({ content }: BlogContentProps) => {
  const router = useRouter();
  const locale = useLocale();

  const handleBack = () => {
    router.push("/");
  };

  const sections = content.sections as Record<string, unknown>[];

  return (
    <BlogWrapper>
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
        <ContentWrapper>
          <MetaInfo>
            <MetaItem>
              <CalendarIcon />
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.light}
                  weight="regular"
                >
                  {content.date as string}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-smUppercase"
                  color={colors.text.light}
                  weight="regular"
                >
                  {content.date as string}
                </Typography>
              </MobileContainer>
            </MetaItem>
            <MetaItem>
              <ClockIcon />
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.light}
                  weight="regular"
                >
                  {content.time as string}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-smUppercase"
                  color={colors.text.light}
                  weight="regular"
                >
                  {content.time as string}
                </Typography>
              </MobileContainer>
            </MetaItem>
          </MetaInfo>

          {/* Title */}
          <TitleStyled>
            <DesktopContainer>
              <Typography
                variant={locale === "ka" ? "display-lgUppercase" : "display-lg"}
                color={colors.text.dark}
                weight="bold"
              >
                {content.title as string}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant={locale === "ka" ? "display-xsUppercase" : "display-xs"}
                color={colors.text.dark}
                weight="bold"
              >
                {content.title as string}
              </Typography>
            </MobileContainer>
          </TitleStyled>

          <HeroImage>
            <Image
              src={content.hero_image as string}
              alt={content.title as string}
              fill
              style={{ objectFit: "cover" }}
            />
          </HeroImage>

          <ArticleContent>
            <IntroText>
              <DesktopContainer>
                <Typography
                  variant="text-md"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {content.intro as string}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {content.intro as string}
                </Typography>
              </MobileContainer>
            </IntroText>

            {/* Sections */}
            {sections.map((section, index) => (
              <Section key={index}>
                <SectionTitle>
                  <DesktopContainer>
                    <Typography
                      variant={
                        locale === "ka" ? "text-mdUppercase" : "text-mdOneline"
                      }
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {section.subtitle as string}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant={
                        locale === "ka" ? "text-smUppercase" : "text-smOneline"
                      }
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {section.subtitle as string}
                    </Typography>
                  </MobileContainer>
                </SectionTitle>
                <DesktopContainer>
                  <Typography
                    variant="text-md"
                    color={colors.text.light}
                    weight="regular"
                  >
                    {section.description as string}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography
                    variant="text-sm"
                    color={colors.text.light}
                    weight="regular"
                  >
                    {section.description as string}
                  </Typography>
                </MobileContainer>
              </Section>
            ))}
            <ButtonWrapper>
              <Button variant="back" onClick={handleBack} />
            </ButtonWrapper>
          </ArticleContent>
        </ContentWrapper>
      </Container>
    </BlogWrapper>
  );
};

export default BlogContent;
