import type { Metadata } from "next";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { routing, type Locale } from "../../i18n/routing";
import StyledComponentsRegistry from "../components/StyledComponentRegistry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-sans-georgian",
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Atour",
    ka: "ატური",
  };

  const descriptions = {
    en: "Fast, reliable international shipping and package delivery service. Track packages, schedule deliveries, and ship worldwide with competitive rates.",
    ka: "სწრაფი, საიმედო საერთაშორისო გადაზიდვისა და ამანათის მიწოდების სერვისი. თვალყური ადევნეთ ამანათებს, დაგეგმეთ მიწოდება და გაგზავნეთ მთელ მსოფლიოში კონკურენტული ფასებით.",
  };

  // Default to 'ka' if locale is undefined or not in our list
  const currentLocale = locale && locale in descriptions ? locale : "ka";

  return {
    title: titles[currentLocale as keyof typeof titles],
    description: descriptions[currentLocale as keyof typeof descriptions],
    appleWebApp: {
      title: titles[currentLocale as keyof typeof titles],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const fontFamily =
    locale === "ka"
      ? "var(--font-noto-sans-georgian), sans-serif"
      : "var(--font-inter), sans-serif";

  return (
    <html lang={locale} className={locale === "ka" ? "locale-ka" : "locale-en"}>
      <body
        className={`${inter.variable} ${notoSansGeorgian.variable}`}
        style={{ fontFamily }}
        suppressHydrationWarning
      >
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
