import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { routing, type Locale } from "../../i18n/routing";
import StyledComponentsRegistry from "../components/StyledComponentRegistry";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import NetlifyIdentityRedirect from "@/src/components/NetlifyIdentityRedirect";
import { getSettingsContent } from "@/src/lib/content";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
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
    en: "Corporate Travel & Event Solutions",
    ka: "კორპორატიული მოგზაურობა და ღონისძიებების გადაწყვეტილებები.",
  };

  // Default to 'ka' if locale is undefined or not in our list
  const currentLocale = locale && locale in descriptions ? locale : "ka";

  const title = titles[currentLocale as keyof typeof titles];
  const description = descriptions[currentLocale as keyof typeof descriptions];

  return {
    title,
    description,
    appleWebApp: {
      title,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://atour.ge",
      locale: currentLocale === "ka" ? "ka_GE" : "en_US",
      images: [
        {
          url: "https://atour.ge/images/hero.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://atour.ge/images/hero.png"],
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
  const settingsContent = getSettingsContent(locale);

  return (
    <html lang={locale} className={locale === "ka" ? "locale-ka" : "locale-en"}>
      <head>
        <link
          rel="preload"
          href="/fonts/helvetica-neue-lt-geo-55-roman-caps.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
      </head>
      <body className={notoSans.variable} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer content={settingsContent} />
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
        <NetlifyIdentityRedirect />
      </body>
    </html>
  );
}
