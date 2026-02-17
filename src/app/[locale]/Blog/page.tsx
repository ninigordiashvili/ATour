"use client";

import React from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";
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
  padding: 100px 130px;
  position: relative;
  overflow: hidden;
  @media (max-width: 1080px) {
    padding: 48px 0;
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
  gap: 16px;
  @media (max-width: 1080px) {
    gap: 8px;
  }
`;

const Title = styled.h1`
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

const BlogPage = () => {
  const tBlog = useTranslations("Blog");
  const tInsights = useTranslations("Insights");
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  const sections = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <BlogWrapper>
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
                  {tInsights("Card2.date")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-smUppercase"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tInsights("Card2.date")}
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
                  {tBlog("time")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-smUppercase"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tBlog("time")}
                </Typography>
              </MobileContainer>
            </MetaItem>
          </MetaInfo>

          {/* Title */}
          <Title>
            <DesktopContainer>
              <Typography
                variant="display-lg"
                color={colors.text.dark}
                weight="bold"
              >
                {tBlog("title")}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant="display-xs"
                color={colors.text.dark}
                weight="bold"
              >
                {tBlog("title")}
              </Typography>
            </MobileContainer>
          </Title>

          <HeroImage>
            <Image
              src="/images/insights/card2.jpg"
              alt={tInsights("Card2.title")}
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
                  {tBlog("description")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {tBlog("description")}
                </Typography>
              </MobileContainer>
            </IntroText>

            {/* Sections */}
            {sections.map((num) => (
              <Section key={num}>
                <SectionTitle>
                  <DesktopContainer>
                    <Typography
                      variant="text-mdOneline"
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tBlog(`subtitle${num}`)}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-smOneline"
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tBlog(`subtitle${num}`)}
                    </Typography>
                  </MobileContainer>
                </SectionTitle>
                <DesktopContainer>
                  <Typography
                    variant="text-md"
                    color={colors.text.light}
                    weight="regular"
                  >
                    {tBlog(`description${num}`)}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography
                    variant="text-sm"
                    color={colors.text.light}
                    weight="regular"
                  >
                    {tBlog(`description${num}`)}
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

export default BlogPage;
