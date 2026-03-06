"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useRef, useTransition } from "react";
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
  height: 100dvh;
`;

const MobileMenu = styled.div`
  margin: 58px 16px 0 16px;
  background: ${colors.background.light};
  border-radius: 0 0 24px 24px;
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

const MobileHeaderShadow = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  border-radius: 24px 24px 0 0;
  height: 56px;
  z-index: 1101;
  pointer-events: none;
  box-shadow: ${colors.shadow.header};
  @media (min-width: 1081px) {
    display: none;
  }
`;

const LinksWrapper = styled.nav<{ $isFixed?: boolean }>`
  position: relative;
  display: flex;
  gap: 32px;
  padding: 4px;
  background-color: ${colors.background.light};
  border-radius: 24px;
  box-shadow: ${({ $isFixed }) => ($isFixed ? colors.shadow.header : "none")};
  overflow: hidden;
`;

const Link = styled.div<{ $isSelected: boolean; $isMobileVariant?: boolean }>`
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.$isMobileVariant && props.$isSelected
      ? colors.state.focus.outline
      : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? "transparent" : colors.links.hover};
  }

  &:active {
    background-color: ${(props) =>
      props.$isSelected ? colors.state.focus.outline : colors.links.hover};
  }

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

const LanguageSwitcher = styled.div<{
  $isFixed?: boolean;
  $isMobileVariant?: boolean;
}>`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 3px;
  background-color: ${colors.background.light};
  border-radius: 24px;
  box-shadow: ${({ $isFixed, $isMobileVariant }) =>
    $isFixed || $isMobileVariant ? colors.shadow.header : "none"};
  overflow: hidden;
`;

const LanguageButton = styled.button<{
  $isSelected: boolean;
  $isMobileVariant?: boolean;
}>`
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 8px 18px;
  border-radius: 24px;
  border: none;
  background-color: ${(props) =>
    props.$isMobileVariant && props.$isSelected
      ? colors.state.focus.outline
      : "transparent"};
  font-size: inherit;

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? "transparent" : colors.links.hover};
  }

  &:active {
    background-color: ${(props) =>
      props.$isSelected ? colors.state.focus.outline : colors.links.hover};
  }
`;

const SlidingPill = styled.div`
  position: absolute;
  top: 4px;
  left: 0;
  height: calc(100% - 8px);
  border-radius: 24px;
  background-color: ${colors.state.focus.outline};
  z-index: 0;
  pointer-events: none;
`;

const SlidingLanguagePill = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
  height: calc(100% - 6px);
  border-radius: 24px;
  background-color: ${colors.state.focus.outline};
  z-index: 0;
  pointer-events: none;
`;

const BurgerMenuWrapper = styled.div`
  padding: 12px;
`;

const Header = () => {
  const PILL_ANIMATION_MS = 280;
  const tHeader = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [selectedLink, setSelectedLink] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);

  // Update selectedLink based on pathname
  useEffect(() => {
    if (pathname === "/Blog") {
      setSelectedLink("blog");
    } else if (pathname === "/") {
      setSelectedLink("home");
    }
    // Optionally, handle other routes if needed
  }, [pathname]);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const [isPending, startTransition] = useTransition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const linksWrapperRef = useRef<HTMLDivElement | null>(null);
  const languageSwitcherRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const languageRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [linksPillStyle, setLinksPillStyle] = useState({
    x: 0,
    width: 0,
    opacity: 0,
  });
  const [languagePillStyle, setLanguagePillStyle] = useState({
    x: 0,
    width: 0,
    opacity: 0,
  });

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
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsAtTop(currentScrollY === 0);
          const heroHeight = window.innerWidth > 1080 ? 705 : 500;
          setIsPastHero(currentScrollY > heroHeight);
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

  useEffect(() => {
    const activeLink = selectedLink;
    const wrapper = linksWrapperRef.current;
    const activeElement = linkRefs.current[activeLink];

    if (!wrapper || !activeElement) {
      setLinksPillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const wrapperRect = wrapper.getBoundingClientRect();
    const activeRect = activeElement.getBoundingClientRect();

    setLinksPillStyle({
      x: activeRect.left - wrapperRect.left,
      width: activeRect.width,
      opacity: 1,
    });
  }, [selectedLink, pathname, isMobileMenuOpen]);

  useEffect(() => {
    const activeLanguage = selectedLanguage;
    const wrapper = languageSwitcherRef.current;
    const activeElement = languageRefs.current[activeLanguage];

    if (!wrapper || !activeElement) {
      setLanguagePillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const wrapperRect = wrapper.getBoundingClientRect();
    const activeRect = activeElement.getBoundingClientRect();

    setLanguagePillStyle({
      x: activeRect.left - wrapperRect.left,
      width: activeRect.width,
      opacity: 1,
    });
  }, [selectedLanguage, locale, isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const activeLink = selectedLink;
      const linksWrapper = linksWrapperRef.current;
      const activeLinkElement = linkRefs.current[activeLink];

      if (linksWrapper && activeLinkElement) {
        const wrapperRect = linksWrapper.getBoundingClientRect();
        const activeRect = activeLinkElement.getBoundingClientRect();
        setLinksPillStyle({
          x: activeRect.left - wrapperRect.left,
          width: activeRect.width,
          opacity: 1,
        });
      }

      const activeLanguage = selectedLanguage;
      const languageWrapper = languageSwitcherRef.current;
      const activeLanguageElement = languageRefs.current[activeLanguage];

      if (languageWrapper && activeLanguageElement) {
        const wrapperRect = languageWrapper.getBoundingClientRect();
        const activeRect = activeLanguageElement.getBoundingClientRect();
        setLanguagePillStyle({
          x: activeRect.left - wrapperRect.left,
          width: activeRect.width,
          opacity: 1,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedLink, selectedLanguage]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleScrollClose = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScrollClose, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (link: string, isMobile = false) => {
    setSelectedLink(link);

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    const sectionId = link === "blog" ? "insights" : link;

    if (link === "home") {
      if (pathname !== "/") {
        navigationTimeoutRef.current = setTimeout(() => {
          router.push("/");
        }, PILL_ANIMATION_MS);
        if (isMobile) setIsMobileMenuOpen(false);
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (isMobile) setIsMobileMenuOpen(false);
      return;
    }

    if (pathname !== "/") {
      navigationTimeoutRef.current = setTimeout(() => {
        router.push(`/#${sectionId}`);
      }, PILL_ANIMATION_MS);
      if (isMobile) setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (isMobile) setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isFixed && showHeader}
      {/* Render shadow above overlay when mobile menu is open */}
      {isMobileMenuOpen && <MobileHeaderShadow />}
      <div
        style={{
          position: "fixed",
          top: isDesktop ? 0 : 16,
          left: 0,
          width: "100%",
          zIndex: 100,
          background: isAtTop ? "transparent" : "rgba(255, 255, 255, 0.2)",
          backdropFilter: isAtTop ? "none" : "blur(12px)",
          WebkitBackdropFilter: isAtTop ? "none" : "blur(12px)",
          transition: "transform 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease",
          transform: showHeader ? "translateY(0)" : "translateY(-120%)",
        }}
      >
        <Container>
          <HeaderWrapper
            $isMobileMenuOpen={isMobileMenuOpen}
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            <DesktopContainer>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleLinkClick("home")}
              >
                <LogoIcon />
              </div>
              <LinksWrapper
                as="div"
                ref={linksWrapperRef}
                role="navigation"
                $isFixed={isFixed}
              >
                <SlidingPill
                  style={{
                    transform: `translateX(${linksPillStyle.x}px)`,
                    width: `${linksPillStyle.width}px`,
                    opacity: linksPillStyle.opacity,
                  }}
                />
                {links.map((link) => (
                  <Link
                    key={link}
                    ref={(element) => {
                      linkRefs.current[link] = element;
                    }}
                    $isSelected={selectedLink === link}
                    onClick={() => handleLinkClick(link)}
                    onMouseEnter={() => setHoveredLink(link)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <Typography
                      variant="text-mdOneline"
                      weight="regular"
                      color={
                        selectedLink === link
                          ? colors.text.primary
                          : hoveredLink === link
                            ? colors.links.hoverText
                            : colors.text.light
                      }
                    >
                      {tHeader(`links.${link}`)}
                    </Typography>
                  </Link>
                ))}
              </LinksWrapper>
              <LanguageSwitcher ref={languageSwitcherRef} $isFixed={isFixed}>
                <SlidingLanguagePill
                  style={{
                    transform: `translateX(${languagePillStyle.x}px)`,
                    width: `${languagePillStyle.width}px`,
                    opacity: languagePillStyle.opacity,
                  }}
                />
                {languages.map((lang) => (
                  <LanguageButton
                    key={lang}
                    ref={(element) => {
                      languageRefs.current[lang] = element;
                    }}
                    $isSelected={selectedLanguage === lang}
                    onClick={() => handleLanguageChange(lang)}
                    onMouseEnter={() => setHoveredLanguage(lang)}
                    onMouseLeave={() => setHoveredLanguage(null)}
                  >
                    <Typography
                      variant="text-sm"
                      weight="semibold"
                      color={
                        selectedLanguage === lang
                          ? colors.text.primary
                          : hoveredLanguage === lang
                            ? colors.links.hoverText
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
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleLinkClick("home", true)}
              >
                <LogoSmallIcon />
              </div>
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
                $isMobileVariant
                $isSelected={selectedLink === link}
                onClick={() => handleLinkClick(link, true)}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Typography
                  variant="text-mdOneline"
                  weight="regular"
                  color={
                    selectedLink === link
                      ? colors.text.primary
                      : hoveredLink === link
                        ? colors.links.hoverText
                        : colors.text.light
                  }
                >
                  {tHeader(`links.${link}`)}
                </Typography>
              </Link>
            ))}
            <LanguageSwitcher $isFixed={isFixed} $isMobileVariant>
              {languages.map((lang) => (
                <LanguageButton
                  key={lang}
                  $isMobileVariant
                  $isSelected={selectedLanguage === lang}
                  onClick={() => handleLanguageChange(lang)}
                  onMouseEnter={() => setHoveredLanguage(lang)}
                  onMouseLeave={() => setHoveredLanguage(null)}
                >
                  <Typography
                    variant="text-sm"
                    weight="semibold"
                    color={
                      selectedLanguage === lang
                        ? colors.text.primary
                        : hoveredLanguage === lang
                          ? colors.links.hoverText
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
