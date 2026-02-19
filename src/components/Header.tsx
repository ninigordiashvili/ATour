"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { colors } from "../styles/colors";
import LogoIcon from "../icons/LogoIcon";
import { usePathname, useRouter } from "../i18n/routing";
import Container from "./Container";
import { DesktopContainer, MobileContainer } from "./Responsive";
import LogoSmallIcon from "../icons/LogoSmallIcon";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const MobileMenu = styled.div`
  margin: 58px 16px 0 16px;
  background: ${colors.background.light};
  border-radius: 0 0 24px 24px;
  box-shadow: ${colors.shadow.header};
  padding: 32px 0 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const HeaderWrapper = styled.header<{ $isMobileMenuOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 32px 0;
  @media (max-width: 1080px) {
    padding: 8px;
    background-color: ${colors.background.light};
    border-radius: ${({ $isMobileMenuOpen }) =>
      $isMobileMenuOpen ? "24px 24px 0 0" : "24px"};
    margin-top: 16px;
    box-shadow: ${colors.shadow.header};
  }
`;

const LinksWrapper = styled.nav<{ $isFixed?: boolean }>`
  display: flex;
  gap: 32px;
  padding: 4px;
  background-color: ${colors.background.light};
  border-radius: 24px;
  box-shadow: ${({ $isFixed }) => ($isFixed ? colors.shadow.header : "none")};
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

const LanguageSwitcher = styled.div<{ $isFixed?: boolean }>`
  display: flex;
  gap: 8px;
  padding: 3px;
  background-color: ${colors.background.light};
  border-radius: 24px;
  box-shadow: ${({ $isFixed }) => ($isFixed ? colors.shadow.header : "none")};
`;

const LanguageButton = styled.button<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 8px 18px;
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  const links = ["home", "services", "blog", "testimonials"];
  const languages = ["en", "ka"];

  useEffect(() => {
    setSelectedLanguage(locale);
  }, [locale]);

  // Track desktop vs mobile
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1080);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsAtTop(currentScrollY === 0);
          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setShowHeader(false);
            setIsFixed(false);
          } else if (currentScrollY < lastScrollY.current) {
            setShowHeader(true);
            setIsFixed(true);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    router.push(pathname, { locale: lang });
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (link: string, isMobile = false) => {
    setSelectedLink(link);

    if (link === "blog") {
      router.push("/Blog");
      if (isMobile) setIsMobileMenuOpen(false);
      return;
    }

    if (link === "home") {
      if (pathname !== "/") {
        router.push("/");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (isMobile) setIsMobileMenuOpen(false);
      return;
    }

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(link);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
      if (isMobile) setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (isMobile) setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isFixed && showHeader && <div style={{ height: 96 }} />}
      <div
        style={{
          position: isFixed ? "fixed" : "sticky",
          top: 0,
          left: 0,
          width: "100vw",
          zIndex: 100,
          background:
            isFixed && !isAtTop && isDesktop
              ? `${colors.background.light}`
              : undefined,
        }}
      >
        <Container>
          <HeaderWrapper
            $isMobileMenuOpen={isMobileMenuOpen}
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              transition: "transform 0.3s ease",
              transform: showHeader ? "translateY(0)" : "translateY(-120%)",
            }}
          >
            <DesktopContainer>
              <LogoIcon />
              <LinksWrapper $isFixed={isFixed}>
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
              <LanguageSwitcher $isFixed={isFixed}>
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
              <BurgerMenuWrapper onClick={() => setIsMobileMenuOpen(true)}>
                <BurgerMenuIcon />
              </BurgerMenuWrapper>
            </MobileContainer>
          </HeaderWrapper>
        </Container>
      </div>
      {isMobileMenuOpen && (
        <MobileMenuOverlay onClick={() => setIsMobileMenuOpen(false)}>
          <MobileMenu onClick={(e) => e.stopPropagation()}>
            {links.map((link) => (
              <Link
                key={link}
                $isSelected={selectedLink === link}
                onClick={() => handleLinkClick(link, true)}
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
            <LanguageSwitcher $isFixed={isFixed}>
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
          </MobileMenu>
        </MobileMenuOverlay>
      )}
    </>
  );
};

export default Header;
