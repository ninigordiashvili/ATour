import React from "react";
import Container from "./Container";
import { styled, keyframes } from "styled-components";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations } from "next-intl";
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

const MainContainer = styled.div`
  padding: 100px 0 0 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1080px) {
    padding: 48px 0 0 0;
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
  opacity: 0.4;
  @media screen and (max-width: 1080px) {
    border: 1px solid ${colors.state.focus.ring};
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

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-bottom: 64px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  backdrop-filter: blur(40px);
  border-radius: 24px;
  background-color: ${colors.background.light};
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

const Avatar = styled.img`
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

const testimonialCards = ["Card1", "Card2", "Card1", "Card2"] as const;

const Testimonials = () => {
  const tTestimonials = useTranslations("Testimonials");

  const testimonials = testimonialCards.map((cardKey, index) => ({
    id: index + 1,
    quote: tTestimonials(`${cardKey}.feedback`),
    name: tTestimonials(`${cardKey}.name`),
    title: tTestimonials(`${cardKey}.position`),
    avatar: "/images/avatar.png",
  }));

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <>
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
              <Typography variant="text-mdOneline" color={colors.text.light}>
                {tTestimonials("description")}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography variant="text-sm" color={colors.text.light}>
                {tTestimonials("description")}
              </Typography>
            </MobileContainer>
            <TagWrapper>
              <DesktopContainer>
                <Typography
                  variant="display-md"
                  weight="bold"
                  color={colors.text.dark}
                >
                  {tTestimonials("title")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="display-xs"
                  weight="bold"
                  color={colors.text.dark}
                >
                  {tTestimonials("title")}
                </Typography>
              </MobileContainer>
            </TagWrapper>
          </Title>
        </MainContainer>
      </Container>
      <CarouselContainer>
        <CarouselTrack>
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`}>
              <QuoteSection>
                <CommentIcon />
                <Typography variant="text-md" color={colors.text.light}>
                  {testimonial.quote}
                </Typography>
              </QuoteSection>
              <AuthorSection>
                <Avatar src={testimonial.avatar} alt={testimonial.name} />
                <AuthorInfo>
                  <Typography
                    variant="text-md"
                    weight="semibold"
                    color={colors.text.dark}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="text-sm" color={colors.text.dark}>
                    {testimonial.title}
                  </Typography>
                </AuthorInfo>
              </AuthorSection>
            </TestimonialCard>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </>
  );
};

export default Testimonials;
