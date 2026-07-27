import type { Language } from "@/content/site";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function getLang(searchParams?: { lang?: string | string[] }): Language {
  const value = Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : searchParams?.lang;
  return value === "en" ? "en" : "zh";
}

export function SiteShell({ children, lang }: { children: React.ReactNode; lang: Language }) {
  return (
    <div className="min-h-screen bg-[#060d14] text-[#e8f4f0]">
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </div>
  );
}

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-4 py-18 sm:px-6 lg:px-8 lg:py-24 ${className}`}>{children}</section>;
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>;
}

export function PageHero({ title, subtitle, lang }: { title: string; subtitle: string; lang: Language }) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)] bg-[#050b12] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 opacity-70 grid-bg" aria-hidden="true" />
      <div className="absolute inset-0 scanlines" aria-hidden="true" />
      <div
        className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.28),transparent_68%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.2),transparent_68%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="tech-chip">
          <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#5eead4]" aria-hidden="true" />
          {lang === "zh" ? "北海蓝曜 · 新能源储能贸易" : "Beihai Lanyao · Energy Storage Trade"}
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-glow sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
