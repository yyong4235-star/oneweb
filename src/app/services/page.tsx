import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeContent } from "@/components/effects/FadeContent";
import { Container, getLang, PageHero, Section, SiteShell } from "@/components/layout";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "业务服务 | 新能源设备进出口贸易与报关协助",
  description: "北海蓝曜提供新能源设备进出口贸易、国内贸易代理、报关报检协助、货源对接、订单跟进和跨境物流咨询。",
};

export default async function ServicesPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  return (
    <SiteShell lang={lang}>
      <PageHero title={lang === "zh" ? "业务服务" : "Services"} subtitle={lang === "zh" ? "一站式新能源产品采购、贸易代理、报关协作与订单跟进服务。" : "One-stop new energy sourcing, trade agency, customs coordination and order follow-up."} lang={lang} />
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <FadeContent className="tech-card p-6" delay={index * 0.04} key={item.zh}>
              <span className="grid size-11 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200"><CheckCircle2 size={20} /></span>
              <h2 className="mt-5 text-xl font-semibold text-white">{lang === "zh" ? item.zh : item.en}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{lang === "zh" ? item.bodyZh : item.bodyEn}</p>
            </FadeContent>
          ))}
        </Container>
      </Section>
      <Section className="relative overflow-hidden bg-[#050b12] text-white">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">WHY A TRADE PARTNER</p>
            <h2 className="mt-3 text-3xl font-semibold">{lang === "zh" ? "为什么选择贸易服务商" : "Why a Trade Service Partner"}</h2>
            <p className="mt-5 text-base leading-8 text-slate-400">{lang === "zh" ? "新能源产品跨境采购涉及产品规格、认证要求、包装资料、通关节点和物流方式。专业贸易服务可以帮助采购商提前识别风险、提升沟通效率，并保持订单执行过程透明。" : "Cross-border new energy procurement involves specifications, certification, packaging documents, customs milestones and logistics options. A professional trade partner improves efficiency, transparency and risk control."}</p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[color:var(--line)] shadow-[0_26px_90px_rgba(0,0,0,0.45)]">
            <Image src="/images/site/ai-port-logistics.jpg" alt={lang === "zh" ? "真实风格北海港口与跨境物流贸易场景" : "Photorealistic Beihai port and cross-border logistics trade scene"} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,18,0.55),rgba(5,11,18,0.05))]" aria-hidden="true" />
            <div className="absolute inset-0 opacity-50 circuit-board" aria-hidden="true" />
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
