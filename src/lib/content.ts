import fs from "fs";
import path from "path";

function readJSON<T>(filePath: string): T {
  const fullPath = path.join(process.cwd(), filePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(raw) as T;
}

function localize<T extends Record<string, unknown>>(
  obj: T,
  locale: string,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key.endsWith(`_${locale}`)) {
      result[key.replace(`_${locale}`, "")] = value;
    } else if (!key.match(/_(?:en|ka)$/)) {
      result[key] = value;
    }
  }
  return result;
}

function localizeArray<T extends Record<string, unknown>>(
  arr: T[],
  locale: string,
): Record<string, unknown>[] {
  return arr.map((item) => localize(item, locale));
}

export function getHeroContent(locale: string) {
  const data = readJSON<Record<string, unknown>>("content/hero.json");
  return localize(data, locale);
}

export function getServicesContent(locale: string) {
  const data = readJSON<Record<string, unknown>>("content/services.json");
  const localized = localize(data, locale);
  localized.cards = localizeArray(
    data.cards as Record<string, unknown>[],
    locale,
  );
  return localized;
}

export function getPartnersContent(locale: string) {
  const data = readJSON<Record<string, unknown>>("content/partners.json");
  return localize(data, locale);
}

export function getInsightsContent(locale: string) {
  const data = readJSON<Record<string, unknown>>("content/insights.json");
  const localized = localize(data, locale);
  localized.cards = localizeArray(
    data.cards as Record<string, unknown>[],
    locale,
  );
  return localized;
}

export function getTestimonialsContent(locale: string) {
  const data = readJSON<Record<string, unknown>>("content/testimonials.json");
  const localized = localize(data, locale);
  localized.items = localizeArray(
    data.items as Record<string, unknown>[],
    locale,
  );
  return localized;
}

export function getSettingsContent(locale: string) {
  const data = readJSON<Record<string, unknown>>("content/settings.json");
  const contact = localize(
    data.contact as Record<string, unknown>,
    locale,
  );
  const footer = localize(
    data.footer as Record<string, unknown>,
    locale,
  );
  return {
    social: data.social,
    contact,
    footer,
  };
}

export function getBlogPost(slug: string, locale: string) {
  const data = readJSON<Record<string, unknown>>(
    `content/blog/${slug}.json`,
  );
  const localized = localize(data, locale);
  localized.sections = localizeArray(
    data.sections as Record<string, unknown>[],
    locale,
  );
  return localized;
}

export function getAllBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}
