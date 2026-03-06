import { getBlogPost } from "@/src/lib/content";
import BlogContent from "@/src/components/BlogContent";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getBlogPost("how-to-plan-corporate-event", locale);

  return <BlogContent content={content} />;
}
