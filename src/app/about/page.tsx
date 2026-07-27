import type { Metadata } from "next";
import { BadgeCheck, MapPinned, ShieldCheck, UsersRound } from "lucide-react";
import { FadeContent } from "@/components/effects/FadeContent";
import { Container, getLang, PageHero, Section, SiteShell } from "@/components/layout";
import { advantages, company, intro } from "@/content/site";

export const metadata: Metadata = {
  title: "关于我们 | 北海蓝曜储能贸易有限公司",
  description: "了解北海蓝曜储能贸易有限公司的企业简介、进出口资质、邓白氏编码、经营理念和北海外贸区位优势。",
};

export default async function AboutPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  const cards = [
    { icon: BadgeCheck, title: lang === "zh" ? "资质荣誉" : "Qualifications", body: `${company.qualification}；D-U-N-S ${company.dunsCode}` },
    { icon: ShieldCheck, title: lang === "zh" ? "经营理念" : "Operating Principle", body: lang === "zh" ? "以优质货源、合规贸易、高效服务为核心，为客户降低跨境采购沟通成本。" : "Quality sourcing, compliant trade and efficient service to reduce procurement friction." },
    { icon: UsersRound, title: lang === "zh" ? "团队优势" : "Team Strength", body: lang === "zh" ? "围绕产品选型、贸易代理、订单跟进和售后沟通形成完整协同。" : "Coordinated support for product selection, trade agency, order follow-up and after-sales communication." },
    { icon: MapPinned, title: lang === "zh" ? "属地优势" : "Location Advantage", body: company.region },
  ];

  return (
    <SiteShell lang={lang}>
      <PageHero title={lang === "zh" ? "关于北海蓝曜" : "About Beihai Lanyao"} subtitle={lang === "zh" ? "正规进出口资质、透明企业信息、面向全球采购商的新能源贸易服务能力。" : "Qualified import-export credentials, transparent company information and new energy trade services for global buyers."} lang={lang} />
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeContent>
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">COMPANY PROFILE</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{lang === "zh" ? "企业简介" : "Company Profile"}</h2>
            <p className="mt-5 text-base leading-8 text-slate-400">{intro[lang]}</p>
          </FadeContent>
          <FadeContent delay={0.08} className="glass-card p-6">
            <dl className="grid gap-4 text-sm text-slate-300">
              <Info label={lang === "zh" ? "中文全称" : "Chinese Name"} value={company.nameZh} />
              <Info label={lang === "zh" ? "英文全称" : "English Name"} value={company.nameEn} />
              <Info label={lang === "zh" ? "统一社会信用代码" : "Credit Code"} value={company.creditCode} />
              <Info label="D-U-N-S" value={company.dunsCode} />
              <Info label={lang === "zh" ? "经营地址" : "Address"} value={lang === "zh" ? company.addressZh : company.addressEn} />
            </dl>
          </FadeContent>
        </Container>
      </Section>
      <Section className="bg-[#050b12]">
        <Container className="grid gap-5 md:grid-cols-2">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeContent className="tech-card p-6" delay={index * 0.05} key={item.title}>
                <span className="grid size-11 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200"><Icon size={20} /></span>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.body}</p>
              </FadeContent>
            );
          })}
        </Container>
      </Section>
      <Section className="relative overflow-hidden bg-[#060d14] text-white">
        <div className="absolute inset-0 circuit-board opacity-35" aria-hidden="true" />
        <Container className="relative">
          <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">CORE ADVANTAGES</p>
          <h2 className="mt-3 text-3xl font-semibold">{lang === "zh" ? "核心优势" : "Core Advantages"}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div className="tech-card p-5" key={item.zh}>
                <h3 className="font-semibold text-emerald-200">{lang === "zh" ? item.zh : item.en}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{lang === "zh" ? item.bodyZh : item.bodyEn}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="font-medium text-white">{value}</dd>
    </div>
  );
}
