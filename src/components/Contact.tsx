import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/colors";
import Typography from "./Typography";
import { useTranslations, useLocale } from "next-intl";
import { DesktopContainer, MobileContainer } from "./Responsive";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import PenIcon from "../icons/PenIcon";
import Button from "./Button";

const ContactWrapper = styled.div`
  background-color: ${colors.background.light};
  position: relative;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  padding: 100px 0;
  @media screen and (max-width: 1080px) {
    padding: 48px 0;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }
`;

const DecorativeLine = styled.div`
  border: 2px solid ${colors.state.focus.ring}70;
  border-radius: 99px;
  width: 122px;
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  @media screen and (max-width: 1080px) {
    border: 1px solid ${colors.state.focus.ring}70;
    width: 64px;
    top: 16px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 64px;
  max-width: 747px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1080px) {
    margin-bottom: 32px;
  }
`;

const FormCard = styled.div`
  background: ${colors.background.light};
  border-radius: 20px;
  padding: 24px;
  max-width: 747px;
  margin: 0 auto;
  box-shadow: ${colors.shadow.medium};
  @media screen and (max-width: 1080px) {
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ $locale?: string }>`
  width: 100%;
  padding: 16px;
  padding-right: 80px;
  border: 1px solid ${colors.text.light};
  border-radius: 20px;
  color: ${colors.text.dark};
  background: ${colors.background.light};
  outline: none;
  transition: border-color 0.2s ease;
  font-family: ${({ $locale }) =>
    $locale === "ka"
      ? "'Noto Sans Georgian', sans-serif"
      : "Helvetica, Arial, sans-serif"};

  &::placeholder {
    color: ${colors.text.light};
    font-size: 14px;
    line-height: 18px;
    font-family: ${({ $locale }) =>
      $locale === "ka"
        ? "'Noto Sans Georgian', sans-serif"
        : "Helvetica, Arial, sans-serif"};
  }

  @media screen and (max-width: 1080px) {
    padding: 17px;
    padding-right: 70px;
    font-size: 12px;
  }
`;

const StyledTextarea = styled.textarea<{ $locale?: string }>`
  width: 100%;
  padding: 16px;
  padding-right: 80px;
  border: 1px solid ${colors.text.light};
  border-radius: 20px;
  color: ${colors.text.dark};
  background: ${colors.background.light};
  outline: none;
  resize: none;
  min-height: 98px;
  transition: border-color 0.2s ease;
  font-family: ${({ $locale }) =>
    $locale === "ka"
      ? "'Noto Sans Georgian', sans-serif"
      : "Helvetica, Arial, sans-serif"};
  &::placeholder {
    color: ${colors.text.light};
    font-size: 14px;
    font-family: ${({ $locale }) =>
      $locale === "ka"
        ? "'Noto Sans Georgian', sans-serif"
        : "Helvetica, Arial, sans-serif"};
  }

  @media screen and (max-width: 1080px) {
    padding: 12px;
    padding-right: 80px;
    font-size: 12px;
  }
`;

const IconsWrapper = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  pointer-events: none;

  @media screen and (max-width: 1080px) {
    right: 12px;
    gap: 8px;
  }
`;

const SingleIconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  align-items: flex-start;
  pointer-events: none;

  @media screen and (max-width: 1080px) {
    right: 12px;
    top: 12px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 32px;
`;

const Contact = () => {
  const tContact = useTranslations("Contact");
  const locale = useLocale();
  return (
    <ContactWrapper>
      <DecorativeLine />
      <Container>
        <Title>
          <DesktopContainer>
            <Typography
              variant={locale === "ka" ? "display-mdUppercase" : "display-md"}
              color={colors.text.dark}
              weight="bold"
            >
              {tContact("title")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant={locale === "ka" ? "text-lgUppercase" : "text-lg"}
              color={colors.text.dark}
              weight="bold"
            >
              {tContact("title")}
            </Typography>
          </MobileContainer>
        </Title>

        <FormCard>
          <FormGroup>
            <Label>
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {tContact("form.emailTitle")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {tContact("form.emailTitle")}
                </Typography>
              </MobileContainer>
            </Label>
            <InputWrapper>
              <StyledInput
                type="text"
                placeholder={tContact("form.emailPlaceholder")}
                $locale={locale}
              />
              <IconsWrapper>
                <DesktopContainer>
                  <PhoneIcon width={24} height={24} />
                  <MailIcon width={24} height={24} />
                </DesktopContainer>
                <MobileContainer>
                  <PhoneIcon width={18} height={18} />
                  <MailIcon width={18} height={18} />
                </MobileContainer>
              </IconsWrapper>
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label>
              <DesktopContainer>
                <Typography
                  variant="text-mdOneline"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {tContact("form.messageTitle")}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography
                  variant="text-sm"
                  color={colors.text.dark}
                  weight="regular"
                >
                  {tContact("form.messageTitle")}
                </Typography>
              </MobileContainer>
            </Label>
            <InputWrapper>
              <StyledTextarea
                placeholder={tContact("form.messagePlaceholder")}
                rows={1}
                $locale={locale}
              />
              <SingleIconWrapper>
                <DesktopContainer>
                  <PenIcon width={24} height={24} />
                </DesktopContainer>
                <MobileContainer>
                  <PenIcon width={18} height={18} />
                </MobileContainer>
              </SingleIconWrapper>
            </InputWrapper>
          </FormGroup>

          <ButtonWrapper>
            <Button variant="bookButton" />
          </ButtonWrapper>
        </FormCard>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
