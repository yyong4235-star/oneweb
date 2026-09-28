import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BatteryCharging, Boxes, Building2, FileCheck2, FileDown, Globe2, HelpCircle, Home as HomeIcon, MessageCircle, Radar, Radio, Route, ShieldCheck, SunMedium, Truck, Warehouse, Zap } from "lucide-react";
import { AuroraField } from "@/components/effects/AuroraField";
import { CountUp } from "@/components/effects/CountUp";
import { ElectricBorder } from "@/components/effects/ElectricBorder";
import { FadeContent } from "@/components/effects/FadeContent";
import { GradientText } from "@/components/effects/GradientText";
import { MagnetButton } from "@/components/effects/MagnetButton";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { Container, getLang, Section, SiteShell } from "@/components/layout";
import { InquiryForm } from "@/components/InquiryForm";
import { advantages, company, home, intro, labels, news, processDetails, products, scenarios, seo, serviceSupport, targetMarkets } from "@/content/site";

export const metadata: Metadata = {
  title: seo.zh.title,
  description: seo.zh.description,
  keywords: ["储能设备进出口", "光伏产品贸易", "锂电池外贸", "家用储能批发", "新能源贸易"],
  openGraph: {
    title: seo.zh.title,
    description: seo.zh.description,
    type: "website",
  },
};

const productIcons = [BatteryCharging, SunMedium, Boxes, Globe2];
const productImages = ["/images/site/commercial-storage.jpg", "/images/site/solar-storage-trade.jpg", "/images/site/lithium-battery.jpg", "/images/site/port-logistics.jpg"];
const featureCards = [
  {
    titleZh: "光伏发电",
    titleEn: "Solar Power",
    bodyZh: "屋顶、园区与项目型光伏产品采购，覆盖组件、逆变与配套供应链。",
    bodyEn: "PV sourcing for rooftops, parks and projects, covering modules, inverters and accessories.",
    image: "/images/site/feature-solar-generation.jpg",
    gradient: "linear-gradient(137deg, #5EEAD4 0%, #7DD3FC 45%, #22C55E 100%)",
  },
  {
    titleZh: "家庭储能",
    titleEn: "Home Storage",
    bodyZh: "面向家庭备电、离网用电与光伏配套的家用储能系统采购服务。",
    bodyEn: "Home storage sourcing for backup power, off-grid usage and solar energy systems.",
    image: "/images/site/feature-home-storage.jpg",
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  },
  {
    titleZh: "工商储能",
    titleEn: "C&I Storage",
    bodyZh: "工商业储能柜、集装箱储能与项目配套设备，适配批量采购。",
    bodyEn: "C&I cabinets, containerized storage and project equipment for batch procurement.",
    image: "/images/site/feature-industrial-storage.jpg",
    gradient: "linear-gradient(137deg, #38BDF8 0%, #A7F3D0 45%, #14B8A6 100%)",
  },
];

function isNumericStat(stat: (typeof home.zh.stats)[number] | (typeof home.en.stats)[number]): stat is { value: number; suffix: string; label: string } {
  return "value" in stat && typeof stat.value === "number";
}

export default async function Home({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  const t = home[lang];
  const l = labels[lang];

  return (
    <SiteShell lang={lang}>
      {/* ============ 首屏 ============ */}
      <section className="relative overflow-hidden bg-[#050b12] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
        <video
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 size-full object-cover opacity-48 saturate-[1.08]"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4" type="video/mp4" />
        </video>
        <AuroraField />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(45,212,191,0.28),transparent_32%),linear-gradient(90deg,rgba(5,11,18,0.9)_0%,rgba(6,32,50,0.62)_48%,rgba(5,11,18,0.78)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-52" aria-hidden="true" />
        <div className="absolute inset-0 scanlines" aria-hidden="true" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="tech-chip">
              <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#5eead4]" aria-hidden="true" />
              {t.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[4.1rem]">
              <GradientText colors={["#ffffff", "#5eead4", "#38bdf8", "#b8ffe0"]} animationSpeed={5} direction="diagonal" className="text-left">
                {t.heroTitle}
              </GradientText>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagnetButton href={`/contact?lang=${lang}`} className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 text-sm font-semibold text-[#062018] transition hover:bg-emerald-200">
                {l.consult} <ArrowRight size={16} />
              </MagnetButton>
              <Link href={`/products?lang=${lang}`} className="inline-flex h-12 items-center justify-center rounded-full border border-white/22 px-6 text-sm font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/8">
                {l.products}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-emerald-300" /> {lang === "zh" ? "正规进出口资质" : "Licensed import & export"}</span>
              <span className="flex items-center gap-2"><Globe2 size={15} className="text-emerald-300" /> {lang === "zh" ? "面向全球采购商" : "Global procurement"}</span>
              <span className="flex items-center gap-2"><FileCheck2 size={15} className="text-emerald-300" /> D-U-N-S {company.dunsCode}</span>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="energy-console rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-[0_30px_140px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
              <div>
                <ElectricBorder className="rounded-2xl" color="#5eead4" speed={0.7} chaos={0.06} borderRadius={16}>
                  <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-emerald-200/15 bg-[#062032] p-5 sm:min-h-[420px]">
                    <Image src="/images/site/hero-energy-trade.jpg" alt={lang === "zh" ? "储能柜与光伏设备实景" : "Energy storage and solar equipment"} fill priority className="object-cover opacity-70" sizes="(min-width: 1024px) 520px, 100vw" />
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,15,24,0.96)_0%,rgba(6,32,50,0.58)_45%,rgba(6,32,50,0.15)_100%)]" aria-hidden="true" />
                    <div className="absolute inset-0 opacity-70 circuit-board" aria-hidden="true" />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <p className="text-xs tracking-[0.2em] text-emerald-200/80">ENERGY TRADE NODE</p>
                        <p className="mt-1 text-2xl font-semibold text-white text-glow">Beihai · Global</p>
                      </div>
                      <span className="grid size-11 place-items-center rounded-full border border-emerald-200/25 bg-emerald-200/10 text-emerald-100 shadow-[0_0_24px_rgba(45,212,191,0.35)]"><Radar size={20} /></span>
                    </div>
                    <div className="energy-map" aria-hidden="true">
                      <span className="node node-a" />
                      <span className="node node-b" />
                      <span className="node node-c" />
                      <span className="node node-d" />
                      <span className="flow flow-a" />
                      <span className="flow flow-b" />
                      <span className="flow flow-c" />
                    </div>
                    <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-3">
                      {t.stats.map((stat) => (
                        <div className="rounded-xl border border-white/10 bg-white/8 p-3 backdrop-blur" key={stat.label}>
                          <p className="text-lg font-semibold text-emerald-200 sm:text-xl">{isNumericStat(stat) ? <CountUp value={stat.value} suffix={stat.suffix} /> : stat.textValue}</p>
                          <p className="mt-1 text-[11px] leading-4 text-slate-300">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ 信任数据条 ============ */}
      <div className="border-y border-white/8 bg-[#060d14]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: "4", label: lang === "zh" ? "核心产品品类" : "Core product lines" },
            { value: "7", label: lang === "zh" ? "贸易服务项目" : "Trade services" },
            { value: lang === "zh" ? "北海海关" : "Beihai Customs", label: lang === "zh" ? "属地海关管辖" : "Customs jurisdiction" },
            { value: "D-U-N-S", label: lang === "zh" ? "邓白氏国际认证" : "Dun & Bradstreet certified" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1 px-4 py-5 text-center sm:px-6">
              <span className="text-2xl font-semibold text-emerald-300 sm:text-3xl">{item.value}</span>
              <span className="text-xs text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ 企业速览 ============ */}
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeContent className="glow-feature-card glow-feature-card--intro p-7">
            <p className="text-sm font-semibold text-emerald-300">{lang === "zh" ? "企业速览" : "Company Overview"}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">{lang === "zh" ? "把新能源产品采购变成清晰可控的贸易链路" : "Turning new energy procurement into a clear trade workflow"}</h2>
            <p className="mt-5 text-base leading-8 text-slate-400">{intro[lang]}</p>
          </FadeContent>
          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((item) => (
              <FeatureVisualCard item={item} key={item.titleZh} lang={lang} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ 核心产品矩阵 ============ */}
      {/* ============ 应用场景 ============ */}
      <Section className="relative overflow-hidden bg-[#050b12]">
        <div className="absolute inset-0 opacity-30 circuit-board" aria-hidden="true" />
        <Container className="relative">
          <FadeContent className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">SCENARIOS</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {lang === "zh" ? "适配采购场景" : "Built for Your Procurement Scenario"}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              {lang === "zh" ? "不同规模、不同用途的采购需求，找到最匹配的产品与贸易方案。" : "Match your procurement scale and use case to the right products and trade plan."}
            </p>
          </FadeContent>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((item) => {
              const iconMap = { Home: HomeIcon, Building2, Radio, Warehouse };
              const Icon = iconMap[item.iconName as keyof typeof iconMap];
              return (
                <FadeContent key={item.key}>
                  <div className="tech-card group flex h-full flex-col p-6">
                    <span className="grid size-11 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{lang === "zh" ? item.titleZh : item.titleEn}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{lang === "zh" ? item.descZh : item.descEn}</p>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/8 pt-4">
                      {(lang === "zh" ? item.tagsZh : item.tagsEn).map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-400">{tag}</span>
                      ))}
                    </div>
                  </div>
                </FadeContent>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============ 核心产品矩阵 ============ */}
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-40 circuit-board" aria-hidden="true" />
        <Container className="relative">
          <FadeContent className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">PRODUCT MATRIX</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{lang === "zh" ? "核心产品矩阵" : "Core Product Matrix"}</h2>
            <p className="mt-4 text-base leading-8 text-slate-400">{lang === "zh" ? "不是普通目录式陈列，而是围绕采购场景组织的储能、光伏、电池和配套供应链。" : "A procurement-oriented matrix for storage, solar, batteries and supporting supply chains."}</p>
          </FadeContent>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((item, index) => {
              const Icon = productIcons[index];
              const image = productImages[index];
              const wide = index === 0 || index === 3;
              return (
                <SpotlightCard className={`tech-card group flex min-h-[300px] flex-col p-6 ${wide ? "md:col-span-2 lg:col-span-2" : ""}`} key={item.key}>
                  <div className="relative -mx-2 -mt-2 mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-[#071522]">
                    <Image src={image} alt={lang === "zh" ? `${item.titleZh}应用场景图` : `${item.titleEn} application scene`} fill className="object-cover opacity-90 transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,18,0.15),rgba(5,11,18,0.82))]" aria-hidden="true" />
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid size-12 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 shadow-[0_0_24px_rgba(45,212,191,0.2)]"><Icon size={24} /></span>
                    <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{lang === "zh" ? item.titleZh : item.titleEn}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{lang === "zh" ? item.descZh : item.descEn}</p>
                  <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-6 text-slate-500">{lang === "zh" ? item.sceneZh : item.sceneEn}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 circuit-board opacity-35" aria-hidden="true" />
        <div
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_70%)] blur-2xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">WHY US</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{lang === "zh" ? "可信贸易能力，不止是产品报价" : "Trade capability beyond product quotation"}</h2>
            <p className="mt-4 text-base leading-8 text-slate-400">{lang === "zh" ? "外贸采购真正需要的是资质、品类、流程和服务协同。我们把这些能力做成可检查、可沟通、可跟进的合作基础。" : "Procurement needs qualifications, product coverage, process clarity and service coordination as much as pricing."}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => (
              <FadeContent className="tech-card p-6" delay={index * 0.05} key={item.zh}>
                <span className="grid size-11 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200"><ShieldCheck size={20} /></span>
                <h3 className="mt-5 text-xl font-semibold text-white">{lang === "zh" ? item.zh : item.en}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{lang === "zh" ? item.bodyZh : item.bodyEn}</p>
              </FadeContent>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ 目标市场 ============ */}
      <Section className="relative overflow-hidden bg-[#050b12]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">TARGET MARKETS</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {lang === "zh" ? "覆盖全球重点采购市场" : "Serving Key Global Procurement Markets"}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-400">
              {lang === "zh" ? "依托北海港口区位优势，为东南亚、中东、非洲等重点新能源市场的采购商提供合规贸易服务。" : "Leveraging Beihai port access to serve buyers in Southeast Asia, the Middle East, Africa and beyond."}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {targetMarkets.map((market) => (
              <div key={market.zh} className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/8 hover:text-emerald-200">
                <span>{market.flagEmoji}</span>
                <span>{lang === "zh" ? market.zh : market.en}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="grid size-11 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200"><Route size={20} /></span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">{lang === "zh" ? "合作流程" : "Cooperation Flow"}</h2>
              <p className="mt-4 text-base leading-8 text-slate-400">{lang === "zh" ? "从询盘到通关物流，节点清晰、资料透明、沟通高效。" : "From inquiry to customs and logistics, milestones remain clear, transparent and efficient."}</p>
            </div>
            <div className="process-rail">
              {processDetails.map((item, index) => (
                <div className="process-step" key={item.zh}>
                  <span>0{index + 1}</span>
                  <p>{lang === "zh" ? item.zh : item.en}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{lang === "zh" ? item.bodyZh : item.bodyEn}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============ 服务支持 ============ */}
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 circuit-board" aria-hidden="true" />
        <Container className="relative">
          <FadeContent className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">SERVICE SUPPORT</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {lang === "zh" ? "采购全程支持" : "Full Procurement Support"}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              {lang === "zh" ? "从选品咨询到清关物流，每个节点都有专人跟进，降低跨境采购的信息摩擦。" : "From product consultation to customs clearance, every step is followed up to reduce cross-border friction."}
            </p>
          </FadeContent>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSupport.map((item) => {
              const iconMap = { MessageCircle, FileDown, HelpCircle, Truck };
              const Icon = iconMap[item.iconName as keyof typeof iconMap];
              return (
                <FadeContent key={item.titleZh}>
                  <Link href={`${item.href}?lang=${lang}`} className="tech-card group flex h-full flex-col p-6 transition hover:border-emerald-300/30">
                    <span className="grid size-11 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200 transition group-hover:bg-emerald-300/18">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{lang === "zh" ? item.titleZh : item.titleEn}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{lang === "zh" ? item.descZh : item.descEn}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs text-emerald-400 transition group-hover:gap-2">
                      {lang === "zh" ? "了解更多" : "Learn more"} <ArrowRight size={12} />
                    </span>
                  </Link>
                </FadeContent>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============ 资讯预览 ============ */}
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-25 grid-bg" aria-hidden="true" />
        <Container className="relative">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">INSIGHTS</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {lang === "zh" ? "行业资讯" : "Industry Insights"}
              </h2>
            </div>
            <Link
              href={`/news?lang=${lang}`}
              className="shrink-0 inline-flex items-center gap-1.5 text-sm text-emerald-300 transition hover:text-emerald-200"
            >
              {lang === "zh" ? "全部资讯" : "All insights"} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((item) => (
              <FadeContent key={item.titleZh}>
                <div className="tech-card group flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-0.5 text-xs font-medium text-emerald-200">
                      {lang === "zh" ? item.categoryZh : item.categoryEn}
                    </span>
                    <time className="text-xs text-slate-500">{item.date}</time>
                  </div>
                  <p className="mt-4 flex-1 text-sm font-medium leading-7 text-slate-200 group-hover:text-white transition">
                    {lang === "zh" ? item.titleZh : item.titleEn}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs text-emerald-400 transition group-hover:gap-2">
                    {lang === "zh" ? "阅读" : "Read"} <ArrowRight size={12} />
                  </span>
                </div>
              </FadeContent>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-[#050b12]">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[#081420] p-8 text-white">
            <div className="absolute inset-0 circuit-board opacity-40" aria-hidden="true" />
            <div
              className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.2),transparent_70%)] blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="grid size-11 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200"><BadgeCheck size={20} /></span>
              <h2 className="mt-5 text-3xl font-semibold text-white">{lang === "zh" ? "资质实力公示" : "Qualification Disclosure"}</h2>
              <div className="mt-6 grid gap-3 text-sm leading-7 text-slate-300">
                <p>{company.qualification}</p>
                <p>{company.dunsName}</p>
                <p>D-U-N-S: {company.dunsCode}</p>
                <p>{lang === "zh" ? company.addressZh : company.addressEn}</p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-2 text-sm text-emerald-100"><Zap size={16} /> {lang === "zh" ? "适配海外采购询盘" : "Ready for overseas inquiries"}</div>
            </div>
          </div>
          <InquiryForm lang={lang} compact />
        </Container>
      </Section>
    </SiteShell>
  );
}

function FeatureVisualCard({ item, lang }: { item: (typeof featureCards)[number]; lang: "zh" | "en" }) {
  return (
    <FadeContent>
      <div className="glow-feature-card group min-h-[300px] p-0" style={{ "--feature-gradient": item.gradient } as React.CSSProperties}>
        <div className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[32px] p-6">
          <Image src={item.image} alt={lang === "zh" ? `${item.titleZh}商用视觉图` : `${item.titleEn} commercial visual`} fill className="object-cover opacity-88 transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.05)_0%,rgba(10,10,12,0.35)_42%,rgba(10,10,12,0.92)_100%)]" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-xl font-medium tracking-tight text-white">{lang === "zh" ? item.titleZh : item.titleEn}</h3>
            <p className="mt-3 text-sm leading-[1.65] text-slate-300">{lang === "zh" ? item.bodyZh : item.bodyEn}</p>
          </div>
        </div>
      </div>
    </FadeContent>
  );
}
