import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { DesktopContainer, MobileContainer } from "./Responsive";
import Button from "./Button";

const InsightsWrapper = styled.div`
  background-color: ${colors.background.light};
  position: relative;
  padding: 100px 0;
  @media screen and (max-width: 1080px) {
    padding: 48px 0;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 32px;
    gap: 8px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 0 20px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
    gap: 16px;
    margin: 0;
  }
`;

const InsightCard = styled.div`
  background: ${colors.background.light};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${colors.shadow.light};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (max-width: 1080px) {
    padding: 16px;
    min-height: 400px;
  }
`;

const CardDate = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CardBody = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 1080px) {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  justify-content: space-between;
  @media screen and (max-width: 1080px) {
    order: 1;
    min-height: 210px;
  }
  @media screen and (max-width: 738px) {
    min-height: auto;
  }
`;

const CardBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardImage = styled.div`
  position: relative;
  width: 236px;
  height: 420px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: 194px;
    margin-top: 4px;
    order: 2;
  }
`;

const Insights = () => {
  const tInsights = useTranslations("Insights");
  const locale = useLocale();

  return (
    <InsightsWrapper>
      <Container>
        <Title>
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "text-mdUppercase" : "text-mdOneline"}
              color={colors.text.light}
            >
              {tInsights("description")}
            </Typography>
            <Typography
              variant={locale === "ka" ? "display-mdUppercase" : "display-md"}
              color={colors.text.dark}
              weight="bold"
            >
              {tInsights("title")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "text-smUppercase" : "text-sm"}
              color={colors.text.light}
            >
              {tInsights("description")}
            </Typography>
            <Typography
              variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
              color={colors.text.dark}
              weight="bold"
            >
              {tInsights("title")}
            </Typography>
          </MobileContainer>
        </Title>

        <CardsGrid>
          <InsightCard>
            <CardBody>
              <CardTextContent>
                <CardDate>
                  <DesktopContainer>
                    <Typography
                      variant="text-mdOneline"
                      color={colors.text.light}
                      weight="regular"
                    >
                      {tInsights("Card1.date")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-smUppercase"
                      color={colors.text.light}
                      weight="regular"
                    >
                      {tInsights("Card1.date")}
                    </Typography>
                  </MobileContainer>
                </CardDate>
                <CardBottomContent>
                  <DesktopContainer>
                    <Typography
                      variant={
                        locale === "ka" ? "text-lgUppercase" : "display-sm"
                      }
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tInsights("Card1.title")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant={locale === "ka" ? "text-mdUppercase" : "text-md"}
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tInsights("Card1.title")}
                    </Typography>
                  </MobileContainer>
                  <DesktopContainer>
                    <Typography
                      variant="text-md"
                      weight="regular"
                      color={colors.text.light}
                    >
                      {tInsights("Card1.description")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-sm"
                      weight="regular"
                      color={colors.text.light}
                    >
                      {tInsights("Card1.description")}
                    </Typography>
                  </MobileContainer>
                  <Button variant="transparent" />
                </CardBottomContent>
              </CardTextContent>
              <CardImage>
                <Image
                  src="/images/insights/card1.jpg"
                  alt={tInsights("Card1.title")}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CardImage>
            </CardBody>
          </InsightCard>

          <InsightCard>
            <CardBody>
              <CardTextContent>
                <CardDate>
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
                </CardDate>
                <CardBottomContent>
                  <DesktopContainer>
                    <Typography
                      variant={
                        locale === "ka" ? "text-lgUppercase" : "display-sm"
                      }
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tInsights("Card2.title")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant={locale === "ka" ? "text-mdUppercase" : "text-md"}
                      color={colors.text.dark}
                      weight="semibold"
                    >
                      {tInsights("Card2.title")}
                    </Typography>
                  </MobileContainer>
                  <DesktopContainer>
                    <Typography
                      variant="text-md"
                      weight="regular"
                      color={colors.text.light}
                    >
                      {tInsights("Card2.description")}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography
                      variant="text-sm"
                      weight="regular"
                      color={colors.text.light}
                    >
                      {tInsights("Card2.description")}
                    </Typography>
                  </MobileContainer>
                  <Button variant="transparent" />
                </CardBottomContent>
              </CardTextContent>
              <CardImage>
                <Image
                  src="/images/insights/card2.jpg"
                  alt={tInsights("Card2.title")}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </CardImage>
            </CardBody>
          </InsightCard>
        </CardsGrid>
      </Container>
    </InsightsWrapper>
  );
};

export default Insights;
