import { getBlogPost } from "@/src/lib/content";
import BlogContent from "@/src/components/BlogContent";

export default async function KolkhidaCongressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getBlogPost("kolkhida-congress-2026", locale);

  return <BlogContent content={content} />;
}
