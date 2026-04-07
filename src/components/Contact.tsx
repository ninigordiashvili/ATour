"use client";

import React, { useState } from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";

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

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 8px;
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
const RequiredAsterisk = styled.span`
  color: #ff3b3b;
  margin-left: 4px;
  font-size: 18px;
  vertical-align: middle;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ $locale?: string; $error?: boolean }>`
  width: 100%;
  padding: 16px;
  padding-right: 80px;
  border: 1px solid
    ${({ $error }) => ($error ? colors.state.error : colors.text.light)};
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

const ErrorMessageWrapper = styled.div`
  position: absolute;
  top: -36px;
  right: 0;
  white-space: nowrap;
`;

const SuccessMessage = styled.div`
  margin-top: 16px;
  text-align: center;
`;

export const ContactFormCard = () => {
  const tContact = useTranslations("Contact");
  const locale = useLocale();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Validation schema for email or phone
  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string()
      .required(tContact("form.error"))
      .test("emailOrPhone", tContact("form.error"), function (value) {
        if (!value) return false;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex =
          /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;

        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    message: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitStatus("loading");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Failed to submit");
        setSubmitStatus("success");
        resetForm();
      } catch {
        setSubmitStatus("error");
      }
    },
  });

  const hasOnlyNumbers = (value: string) => {
    // Remove spaces, dashes, parentheses, +, which are valid in phone numbers
    const cleaned = value.replace(/[\s\-().+\[\]]/g, "");
    return cleaned.length > 0 && /^[0-9]*$/.test(cleaned);
  };

  const phoneIconHasError =
    formik.touched.emailOrPhone &&
    !!formik.errors.emailOrPhone &&
    hasOnlyNumbers(formik.values.emailOrPhone);

  const mailIconHasError =
    formik.touched.emailOrPhone &&
    !!formik.errors.emailOrPhone &&
    !hasOnlyNumbers(formik.values.emailOrPhone);

  return (
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
              <RequiredAsterisk>*</RequiredAsterisk>
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant="text-sm"
              color={colors.text.dark}
              weight="regular"
            >
              {tContact("form.emailTitle")}
              <RequiredAsterisk>*</RequiredAsterisk>
            </Typography>
          </MobileContainer>
        </Label>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder={tContact("form.emailPlaceholder")}
            $locale={locale}
            $error={formik.touched.emailOrPhone && !!formik.errors.emailOrPhone}
            {...formik.getFieldProps("emailOrPhone")}
          />
          {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
            <ErrorMessageWrapper>
              <Typography
                variant="text-smOneline"
                color={colors.state.error}
                weight="regular"
              >
                {formik.errors.emailOrPhone}
              </Typography>
            </ErrorMessageWrapper>
          )}
          <IconsWrapper>
            <DesktopContainer>
              <PhoneIcon
                width={24}
                height={24}
                color={phoneIconHasError ? colors.state.error : "#6B7280"}
              />
              <MailIcon
                width={24}
                height={24}
                color={mailIconHasError ? colors.state.error : "#6B7280"}
              />
            </DesktopContainer>
            <MobileContainer>
              <PhoneIcon
                width={18}
                height={18}
                color={phoneIconHasError ? colors.state.error : "#6B7280"}
              />
              <MailIcon
                width={18}
                height={18}
                color={mailIconHasError ? colors.state.error : "#6B7280"}
              />
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
            {...formik.getFieldProps("message")}
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
        <Button
          variant="bookButton"
          onClick={() => formik.handleSubmit()}
        />
      </ButtonWrapper>
      {submitStatus === "success" && (
        <SuccessMessage>
          <Typography
            variant="text-smOneline"
            color={colors.state.focus.ring}
            weight="regular"
          >
            {tContact("form.success")}
          </Typography>
        </SuccessMessage>
      )}
      {submitStatus === "error" && (
        <SuccessMessage>
          <Typography
            variant="text-smOneline"
            color={colors.state.error}
            weight="regular"
          >
            {tContact("form.submitError")}
          </Typography>
        </SuccessMessage>
      )}
    </FormCard>
  );
};

const Contact = () => {
  const tContact = useTranslations("Contact");
  const locale = useLocale();
  return (
    <ContactWrapper>
      <DecorativeLine />
      <Container>
        <Subtitle>
          <DesktopContainer>
            <Typography
              variant="text-mdOneline"
              color={colors.text.light}
              weight="regular"
            >
              {tContact("subtitle")}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography
              variant="text-sm"
              color={colors.text.light}
              weight="regular"
            >
              {tContact("subtitle")}
            </Typography>
          </MobileContainer>
        </Subtitle>
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

        <ContactFormCard />
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
