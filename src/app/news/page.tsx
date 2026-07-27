import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { Container, getLang, PageHero, Section, SiteShell } from "@/components/layout";
import { news } from "@/content/site";

export const metadata: Metadata = {
  title: "资讯中心 | 新能源储能光伏外贸资讯",
  description: "北海蓝曜资讯中心提供行业资讯、公司动态、外贸政策、储能光伏行业知识等内容。",
};

export default async function NewsPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  return (
    <SiteShell lang={lang}>
      <PageHero title={lang === "zh" ? "资讯中心" : "Insights"} subtitle={lang === "zh" ? "关注储能光伏行业趋势、外贸政策和新能源采购知识。" : "Industry trends, trade policy and practical procurement knowledge for new energy buyers."} lang={lang} />
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative grid gap-5 md:grid-cols-2">
          {news.map((item) => (
            <article className="tech-card group p-6" key={item.titleZh}>
              <div className="flex items-center gap-3 text-xs text-emerald-300/80"><CalendarDays size={16} /> {item.date} · {lang === "zh" ? item.categoryZh : item.categoryEn}</div>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-white transition group-hover:text-emerald-200">{lang === "zh" ? item.titleZh : item.titleEn}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{lang === "zh" ? "首版资讯中心采用静态内容结构，后续可接入 Markdown 或 CMS 持续更新，增强官网 SEO 和行业专业度。" : "The first version uses static insight content and can later connect to Markdown or CMS for continuous SEO growth."}</p>
            </article>
          ))}
        </Container>
      </Section>
    </SiteShell>
  );
}
