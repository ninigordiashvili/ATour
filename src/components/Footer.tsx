import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import { Typography } from "./Typography";
import { useTranslations } from "next-intl";
import LogoSmallIcon from "../icons/LogoSmallIcon";
import MailIcon from "../icons/MailIcon";
import LocationIcon from "../icons/LocationIcon";
import WhatsappGreyIcon from "../icons/WhatsappGreyIcon";
import InstaGreyIcon from "../icons/InstaGreyIcon";
import MessengerGreyIcon from "../icons/MessengerGreyIcon";
import { DesktopContainer, MobileContainer } from "./Responsive";

const FooterWrapper = styled.footer`
  background-color: ${colors.background.light};
  position: relative;
  padding: 100px 0 40px;
  @media screen and (max-width: 1080px) {
    padding: 48px 0 32px;
  }
`;

const DecorativeLine = styled.div`
  border: 1px solid ${colors.state.focus.ring}40;
  border-radius: 99px;
  max-width: 1214px;
  width: calc(100% - 48px);
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 64px;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 339px;

  @media screen and (max-width: 1080px) {
    max-width: 100%;
    gap: 16px;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (max-width: 1080px) {
    gap: 8px;
  }
`;

const LinkItem = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 1080px) {
    gap: 8px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: 1080px) {
    flex-direction: row;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  padding-top: 32px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 674px;
    max-width: 100%;
    height: 1px;
    background-color: ${colors.state.focus.ring}40;
  }

  @media screen and (max-width: 1080px) {
    padding-top: 16px;
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 4px;
  }
`;

const Footer = () => {
  const tFooter = useTranslations("Footer");

  return (
    <FooterWrapper>
      <DecorativeLine />
      <Container>
        <FooterContent>
          <BrandSection>
            <LogoSmallIcon />
            <DesktopContainer>
              <Typography
                variant="text-md"
                color={colors.text.light}
                weight="regular"
              >
                {tFooter("description")}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant="text-sm"
                color={colors.text.light}
                weight="regular"
              >
                {tFooter("description")}
              </Typography>
            </MobileContainer>
          </BrandSection>

          <LinksSection>
            <Title>
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {tFooter("Links.home")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {tFooter("Links.home")}
                </Typography>
              </MobileContainer>
            </Title>
            <LinkItem href="#blog">
              <DesktopContainer>
                <Typography
                  variant="text-md"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Links.blog")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Links.blog")}
                </Typography>
              </MobileContainer>
            </LinkItem>
            <LinkItem href="#testimonials">
              <DesktopContainer>
                <Typography
                  variant="text-md"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Links.testimonials")}
                </Typography>{" "}
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Links.testimonials")}
                </Typography>
              </MobileContainer>
            </LinkItem>
            <LinkItem href="#contact">
              <DesktopContainer>
                <Typography
                  variant="text-md"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Links.contact")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Links.contact")}
                </Typography>
              </MobileContainer>
            </LinkItem>
          </LinksSection>

          <ContactSection>
            <Title>
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {tFooter("Contact.title")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {tFooter("Contact.title")}
                </Typography>
              </MobileContainer>
            </Title>
            <ContactItem>
              <MailIcon />
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Contact.email")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Contact.email")}
                </Typography>
              </MobileContainer>
            </ContactItem>
            <ContactItem>
              <LocationIcon />
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Contact.location")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.light}
                  weight="regular"
                >
                  {tFooter("Contact.location")}
                </Typography>
              </MobileContainer>
            </ContactItem>
          </ContactSection>

          <SocialSection>
            <SocialIcons>
              <SocialLink
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappGreyIcon />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaGreyIcon />
              </SocialLink>
              <SocialLink
                href="https://messenger.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessengerGreyIcon />
              </SocialLink>
            </SocialIcons>
          </SocialSection>
        </FooterContent>

        <CopyrightSection>
          <DesktopContainer>
            <Typography variant="text-sm" color={colors.text.light}>
              {tFooter("rights")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant="text-xs" color={colors.text.light}>
              {tFooter("rights")}
            </Typography>
          </MobileContainer>
        </CopyrightSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
