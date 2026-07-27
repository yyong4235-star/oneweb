import type { Metadata } from "next";
import Image from "next/image";
import { BatteryCharging, Boxes, Globe2, SunMedium } from "lucide-react";
import { FadeContent } from "@/components/effects/FadeContent";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { Container, getLang, PageHero, Section, SiteShell } from "@/components/layout";
import { InquiryForm } from "@/components/InquiryForm";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "产品中心 | 储能设备 光伏产品 锂电池 新能源配套",
  description: "北海蓝曜产品中心覆盖储能设备、光伏太阳能产品、锂电池、电芯、动力电池和新能源配套器材。",
};

const icons = [BatteryCharging, SunMedium, Boxes, Globe2];
const productImages = ["/images/site/ai-commercial-storage.jpg", "/images/site/ai-solar-storage-trade.jpg", "/images/site/ai-lithium-battery.jpg", "/images/site/ai-port-logistics.jpg"];

export default async function ProductsPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  return (
    <SiteShell lang={lang}>
      <PageHero title={lang === "zh" ? "产品中心" : "Products"} subtitle={lang === "zh" ? "围绕储能、光伏、锂电池和新能源配套，提供适配外贸询盘的产品矩阵。" : "A trade-ready product matrix covering energy storage, solar, batteries and new energy accessories."} lang={lang} />
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative grid gap-6 md:grid-cols-2">
          {products.map((item, index) => {
            const Icon = icons[index];
            const image = productImages[index];
            return (
              <SpotlightCard className="tech-card p-7" key={item.key}>
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-[#071522]">
                  <Image src={image} alt={lang === "zh" ? `${item.titleZh}产品与应用图` : `${item.titleEn} product and application visual`} fill className="object-cover opacity-90 transition duration-700 hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,18,0.1),rgba(5,11,18,0.55))]" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-[0_0_24px_rgba(45,212,191,0.2)]"><Icon /></span>
                  <h2 className="text-2xl font-semibold text-white">{lang === "zh" ? item.titleZh : item.titleEn}</h2>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-400">{lang === "zh" ? item.descZh : item.descEn}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Spec label={lang === "zh" ? "适用场景" : "Applications"} value={lang === "zh" ? item.sceneZh : item.sceneEn} />
                  <Spec label={lang === "zh" ? "贸易服务" : "Trade Service"} value={lang === "zh" ? "选型、货源对接、订单跟进、通关物流咨询" : "Selection, sourcing, order follow-up, customs and logistics consultation"} />
                  <Spec label={lang === "zh" ? "产品优势" : "Advantages"} value={lang === "zh" ? "品类齐全、规格灵活、适配批量采购" : "Full categories, flexible specifications, suitable for batch procurement"} />
                  <Spec label={lang === "zh" ? "可出口地区" : "Export Regions"} value={lang === "zh" ? "根据目标市场认证和通关要求确认" : "Confirmed by target market certification and customs requirements"} />
                </div>
              </SpotlightCard>
            );
          })}
        </Container>
      </Section>
      <Section className="bg-[#050b12]">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeContent>
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">MATCH BY NEED</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{lang === "zh" ? "按需求匹配产品方案" : "Match Products by Requirement"}</h2>
            <p className="mt-4 text-base leading-8 text-slate-400">{lang === "zh" ? "请提供目标产品、预计数量、目标地区和应用场景，我们将协助梳理可行的采购与出口方案。" : "Share target product, quantity, region and application. We will help clarify feasible sourcing and export options."}</p>
          </FadeContent>
          <InquiryForm lang={lang} compact />
        </Container>
      </Section>
    </SiteShell>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4"><p className="text-xs font-semibold text-emerald-300">{label}</p><p className="mt-2 text-sm leading-6 text-slate-400">{value}</p></div>;
}
