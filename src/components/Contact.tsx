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
  margin-bottom: 48px;
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
    padding: 16px;
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

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-right: 80px;
  border: 1px solid ${colors.text.light};
  border-radius: 20px;
  color: ${colors.text.dark};
  background: ${colors.background.light};
  outline: none;
  transition: border-color 0.2s ease;
  font-family: inherit;

  &::placeholder {
    color: ${colors.text.light};
  }

  @media screen and (max-width: 1080px) {
    padding: 12px;
    padding-right: 70px;
    font-size: 12px;
  }
`;

const StyledTextarea = styled.textarea`
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
  font-family: inherit;
  &::placeholder {
    color: ${colors.text.light};
    font-size: 14px;
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
              variant={locale === "ka" ? "display-xsUppercase" : "display-xs"}
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
              <Typography
                variant="text-md"
                color={colors.text.dark}
                weight="medium"
              >
                {tContact("form.emailTitle")}
              </Typography>
            </Label>
            <InputWrapper>
              <StyledInput
                type="text"
                placeholder={tContact("form.emailPlaceholder")}
                color={colors.text.light}
              />
              <IconsWrapper>
                <DesktopContainer>
                  <PhoneIcon width={24} height={24} />
                  <MailIcon />
                </DesktopContainer>
                <MobileContainer>
                  <PhoneIcon width={18} height={18} />
                  <MailIcon width={24} height={18} />
                </MobileContainer>
              </IconsWrapper>
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label>
              <Typography
                variant="text-md"
                color={colors.text.dark}
                weight="medium"
              >
                {tContact("form.messageTitle")}
              </Typography>
            </Label>
            <InputWrapper>
              <StyledTextarea
                placeholder={tContact("form.messagePlaceholder")}
                rows={1}
              />
              <SingleIconWrapper>
                <DesktopContainer>
                  <PenIcon />
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
