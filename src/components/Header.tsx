"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { colors } from "../styles/colors";
import LogoIcon from "../icons/LogoIcon";
import { usePathname, useRouter } from "../i18n/routing";
import Container from "./Container";
import { DesktopContainer, MobileContainer } from "./Responsive";
import LogoSmallIcon from "../icons/LogoSmallIcon";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 32px 0;
  @media (max-width: 1080px) {
    padding: 8px;
    background-color: ${colors.background.light};
    border-radius: 24px;
    margin-top: 16px;
  }
`;

const LinksWrapper = styled.nav`
  display: flex;
  gap: 32px;
  padding: 4px;
  background-color: ${colors.background.light};
  border-radius: 24px;
`;

const Link = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.$isSelected ? colors.state.focus.ring : "transparent"};
  transition: background-color 0.3s ease-in-out;
  animation: ${(props) => (props.$isSelected ? "slideIn" : "none")} 0.3s
    ease-in-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LanguageSwitcher = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  background-color: ${colors.background.light};
  border-radius: 24px;
`;

const LanguageButton = styled.button<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 24px;
  border: none;
  background-color: ${(props) =>
    props.$isSelected ? colors.state.focus.ring : "transparent"};
  transition: background-color 0.2s ease;
  font-size: inherit;
`;

const BurgerMenuWrapper = styled.div`
  padding: 12px;
`;

const Header = () => {
  const tHeader = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [selectedLink, setSelectedLink] = useState("home");
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const links = ["home", "services", "blog", "testimonials"];
  const languages = ["en", "ka"];

  useEffect(() => {
    setSelectedLanguage(locale);
  }, [locale]);

  const handleLanguageChange = (lang: string) => {
    router.push(pathname, { locale: lang });
  };

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);

    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Container>
        <HeaderWrapper>
          <DesktopContainer>
            <LogoIcon />

            <LinksWrapper>
              {links.map((link) => (
                <Link
                  key={link}
                  $isSelected={selectedLink === link}
                  onClick={() => handleLinkClick(link)}
                >
                  <Typography
                    variant="text-mdOneline"
                    weight="regular"
                    color={
                      selectedLink === link
                        ? colors.text.primary
                        : colors.text.light
                    }
                  >
                    {tHeader(`links.${link}`)}
                  </Typography>
                </Link>
              ))}
            </LinksWrapper>

            <LanguageSwitcher>
              {languages.map((lang) => (
                <LanguageButton
                  key={lang}
                  $isSelected={selectedLanguage === lang}
                  onClick={() => handleLanguageChange(lang)}
                >
                  <Typography
                    variant="text-sm"
                    weight="semibold"
                    color={
                      selectedLanguage === lang
                        ? colors.text.primary
                        : colors.text.light
                    }
                  >
                    {tHeader(`languageSwitcher.${lang}`).toUpperCase()}
                  </Typography>
                </LanguageButton>
              ))}
            </LanguageSwitcher>
          </DesktopContainer>
          <MobileContainer>
            <LogoSmallIcon />
            <BurgerMenuWrapper>
              <BurgerMenuIcon />
            </BurgerMenuWrapper>
          </MobileContainer>
        </HeaderWrapper>
      </Container>
    </>
  );
};

export default Header;
