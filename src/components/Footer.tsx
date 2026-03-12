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

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
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

const TitleStyled = styled.div`
  margin-bottom: 8px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 8px;
  }
`;

interface FooterProps {
  content: {
    social: unknown;
    contact: Record<string, unknown>;
    footer: Record<string, unknown>;
  };
}

const Footer = ({ content }: FooterProps) => {
  const tFooter = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = React.useState(false);
  const [hoveredEmail, setHoveredEmail] = React.useState(false);

  const socialUrls = content.social as {
    whatsapp: string;
    instagram: string;
    messenger: string;
  };

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
                {content.footer.description as string}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography
                variant="text-sm"
                color={colors.text.light}
                weight="regular"
              >
                {content.footer.description as string}
              </Typography>
            </MobileContainer>
          </BrandSection>

          <LinksSection>
            <TitleStyled>
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
            </TitleStyled>
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
            <TitleStyled>
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
            </TitleStyled>
            <a
              href={`mailto:${content.contact.email}`}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHoveredEmail(true)}
              onMouseLeave={() => setHoveredEmail(false)}
            >
              <ContactItem>
                <DesktopContainer>
                  <MailIcon
                    color={
                      hoveredEmail ? colors.links.hoverText : colors.text.light
                    }
                  />
                </DesktopContainer>
                <MobileContainer>
                  <MailIcon
                    color={
                      hoveredEmail ? colors.links.hoverText : colors.text.light
                    }
                    width={16}
                    height={18}
                  />
                </MobileContainer>
                <DesktopContainer>
                  <Typography
                    variant="text-mdOneline"
                    color={
                      hoveredEmail ? colors.links.hoverText : colors.text.light
                    }
                    weight="regular"
                  >
                    {content.contact.email as string}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography
                    variant="text-sm"
                    color={
                      hoveredEmail ? colors.links.hoverText : colors.text.light
                    }
                    weight="regular"
                  >
                    {content.contact.email as string}
                  </Typography>
                </MobileContainer>
              </ContactItem>
            </a>
            <a
              href="https://maps.google.com/?q=Tbilisi,+Georgia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHoveredLocation(true)}
              onMouseLeave={() => setHoveredLocation(false)}
            >
              <ContactItem>
                <DesktopContainer>
                  <LocationIcon
                    color={
                      hoveredLocation
                        ? colors.links.hoverText
                        : colors.text.light
                    }
                  />
                </DesktopContainer>
                <MobileContainer>
                  <LocationIcon
                    color={
                      hoveredLocation
                        ? colors.links.hoverText
                        : colors.text.light
                    }
                    width={16}
                    height={18}
                  />
                </MobileContainer>
                <DesktopContainer>
                  <Typography
                    variant="text-mdOneline"
                    color={
                      hoveredLocation
                        ? colors.links.hoverText
                        : colors.text.light
                    }
                    weight="regular"
                  >
                    {content.contact.location as string}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography
                    variant="text-sm"
                    color={
                      hoveredLocation
                        ? colors.links.hoverText
                        : colors.text.light
                    }
                    weight="regular"
                  >
                    {content.contact.location as string}
                  </Typography>
                </MobileContainer>
              </ContactItem>
            </a>
          </ContactSection>

          <SocialSection>
            <SocialIcons>
              <SocialLink
                href={socialUrls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                onMouseEnter={() => setHoveredSocial("whatsapp")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <DesktopContainer>
                  <WhatsappIcon
                    color={colors.text.light}
                    hovered={hoveredSocial === "whatsapp"}
                  />
                </DesktopContainer>
                <MobileContainer>
                  <WhatsappIcon
                    color={colors.text.light}
                    hovered={hoveredSocial === "whatsapp"}
                    width={26}
                    height={26}
                  />
                </MobileContainer>
              </SocialLink>
              <SocialLink
                href={socialUrls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                onMouseEnter={() => setHoveredSocial("instagram")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <DesktopContainer>
                  <InstaIcon
                    color={colors.text.light}
                    hovered={hoveredSocial === "instagram"}
                  />
                </DesktopContainer>
                <MobileContainer>
                  <InstaIcon
                    color={colors.text.light}
                    hovered={hoveredSocial === "instagram"}
                    width={26}
                    height={26}
                  />
                </MobileContainer>
              </SocialLink>
              <SocialLink
                href={socialUrls.messenger}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on Messenger"
                onMouseEnter={() => setHoveredSocial("messenger")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <DesktopContainer>
                  <MessengerIcon
                    color={colors.text.light}
                    hovered={hoveredSocial === "messenger"}
                  />
                </DesktopContainer>
                <MobileContainer>
                  <MessengerIcon
                    color={colors.text.light}
                    hovered={hoveredSocial === "messenger"}
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
              {content.footer.rights as string}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant="text-xs" color={colors.text.light}>
              {content.footer.rights as string}
            </Typography>
          </MobileContainer>
        </CopyrightSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
