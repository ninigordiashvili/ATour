"use client";
import React from "react";
import { Link, usePathname, useRouter } from "../i18n/routing";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import { Typography } from "./Typography";
import { useLocale, useTranslations } from "next-intl";
import MailIcon from "../icons/MailIcon";
import LocationIcon from "../icons/LocationIcon";
import { DesktopContainer, MobileContainer } from "./Responsive";
import WhatsappIcon from "../icons/WhatsappIcon";
import MessengerIcon from "../icons/MessengerIcon";
import InstaIcon from "../icons/InstaIcon";
import LogoIcon from "../icons/LogoIcon";
import LogoSmallIcon from "../icons/LogoSmallIcon";

const FooterWrapper = styled.footer`
  background-color: ${colors.background.light};
  position: relative;
  padding: 100px 0 48px 0;
  @media screen and (max-width: 1080px) {
    padding: 48px 0;
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
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
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
  @media screen and (max-width: 710px) {
    text-align: left;
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 8px;
  }
`;

const Footer = () => {
  const tFooter = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);

  return (
    <FooterWrapper>
      <DecorativeLine />
      <Container>
        <FooterContent>
          <BrandSection>
            <DesktopContainer>
              <Link
                href="/"
                style={{ cursor: "pointer" }}
                aria-label="Atour Home"
              >
                <LogoIcon />
              </Link>
            </DesktopContainer>
            <MobileContainer>
              <Link
                href="/"
                style={{ cursor: "pointer" }}
                aria-label="Atour Home"
              >
                <LogoSmallIcon />
              </Link>
            </MobileContainer>
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
                  variant={
                    locale === "ka" ? "text-mdUppercase" : "text-mdOneline"
                  }
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {tFooter("Links.home")}
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
                  {tFooter("Links.home")}
                </Typography>
              </MobileContainer>
            </Title>
            <LinkItem
              href="/Blog"
              onClick={(e) => {
                e.preventDefault();
                router.push("/Blog");
              }}
              onMouseEnter={() => setHoveredLink("blog")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={
                    hoveredLink === "blog"
                      ? colors.links.hoverText
                      : colors.text.light
                  }
                  weight="regular"
                >
                  {tFooter("Links.blog")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={
                    hoveredLink === "blog"
                      ? colors.links.hoverText
                      : colors.text.light
                  }
                  weight="regular"
                >
                  {tFooter("Links.blog")}
                </Typography>
              </MobileContainer>
            </LinkItem>
            <LinkItem
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/Blog") {
                  router.push("/#testimonials");
                } else {
                  const section = document.getElementById("testimonials");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              onMouseEnter={() => setHoveredLink("testimonials")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={
                    hoveredLink === "testimonials"
                      ? colors.links.hoverText
                      : colors.text.light
                  }
                  weight="regular"
                >
                  {tFooter("Links.testimonials")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={
                    hoveredLink === "testimonials"
                      ? colors.links.hoverText
                      : colors.text.light
                  }
                  weight="regular"
                >
                  {tFooter("Links.testimonials")}
                </Typography>
              </MobileContainer>
            </LinkItem>
            <LinkItem
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/Blog") {
                  router.push("/#contact");
                } else {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              onMouseEnter={() => setHoveredLink("contact")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={
                    hoveredLink === "contact"
                      ? colors.links.hoverText
                      : colors.text.light
                  }
                  weight="regular"
                >
                  {tFooter("Links.contact")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={
                    hoveredLink === "contact"
                      ? colors.links.hoverText
                      : colors.text.light
                  }
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
                  variant={
                    locale === "ka" ? "text-mdUppercase" : "text-mdOneline"
                  }
                  color={colors.text.dark}
                  weight="semibold"
                >
                  {tFooter("Contact.title")}
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
                  {tFooter("Contact.title")}
                </Typography>
              </MobileContainer>
            </Title>
            <ContactItem>
              <DesktopContainer>
                <MailIcon />
              </DesktopContainer>
              <MobileContainer>
                <MailIcon width={16} height={18} />
              </MobileContainer>
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
              <DesktopContainer>
                <LocationIcon />
              </DesktopContainer>
              <MobileContainer>
                <LocationIcon width={16} height={18} />
              </MobileContainer>
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
                aria-label="Contact us on WhatsApp"
                onMouseEnter={() => setHoveredSocial("whatsapp")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <DesktopContainer>
                  <WhatsappIcon
                    color={
                      hoveredSocial === "whatsapp"
                        ? "#7AD06D"
                        : colors.text.light
                    }
                  />
                </DesktopContainer>
                <MobileContainer>
                  <WhatsappIcon
                    color={
                      hoveredSocial === "whatsapp"
                        ? "#7AD06D"
                        : colors.text.light
                    }
                    width={26}
                    height={26}
                  />
                </MobileContainer>
              </SocialLink>
              <SocialLink
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                onMouseEnter={() => setHoveredSocial("instagram")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <DesktopContainer>
                  <InstaIcon
                    color={
                      hoveredSocial === "instagram"
                        ? "#8C3AAA"
                        : colors.text.light
                    }
                  />
                </DesktopContainer>
                <MobileContainer>
                  <InstaIcon
                    color={
                      hoveredSocial === "instagram"
                        ? "#8C3AAA"
                        : colors.text.light
                    }
                    width={26}
                    height={26}
                  />
                </MobileContainer>
              </SocialLink>
              <SocialLink
                href="https://messenger.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on Messenger"
                onMouseEnter={() => setHoveredSocial("messenger")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <DesktopContainer>
                  <MessengerIcon
                    color={
                      hoveredSocial === "messenger"
                        ? "#00B2FF"
                        : colors.text.light
                    }
                  />
                </DesktopContainer>
                <MobileContainer>
                  <MessengerIcon
                    color={
                      hoveredSocial === "messenger"
                        ? "#00B2FF"
                        : colors.text.light
                    }
                    width={26}
                    height={26}
                  />
                </MobileContainer>
              </SocialLink>
            </SocialIcons>
          </SocialSection>
        </FooterContent>

        <CopyrightSection>
          <DesktopContainer>
            <Typography variant="text-smUppercase" color={colors.text.light}>
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
