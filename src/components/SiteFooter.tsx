import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, labels, nav, type Language } from "@/content/site";

function href(path: string, lang: Language) {
  return `${path}?lang=${lang}`;
}

export function SiteFooter({ lang }: { lang: Language }) {
  const l = labels[lang];
  const email = process.env.CONTACT_TO_EMAIL || company.emailFallback;

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--line)] bg-[#050b12]">
      <div className="absolute inset-0 opacity-40 grid-bg" aria-hidden="true" />
      <div
        className="absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative size-10 overflow-hidden rounded-[10px] border border-emerald-300/30 bg-white shadow-[0_0_0_3px_rgba(94,234,212,0.1)]">
              <Image src="/images/lanyao-logo.jpeg" alt={lang === "zh" ? "北海蓝曜储能贸易有限公司标志" : "Beihai Lanyao logo"} fill sizes="40px" className="object-cover" />
            </span>
            <div>
              <p className="font-semibold text-white">{lang === "zh" ? company.nameZh : company.nameEn}</p>
              <p className="text-sm text-slate-400">{lang === "zh" ? "新能源储能全品类进出口贸易服务商" : "New energy storage import & export trade partner"}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            {lang === "zh" ? "专注光伏、储能、锂电池和新能源配套产品，为海内外客户提供合规、高效、透明的一站式贸易服务。" : "Focused on solar, storage, lithium batteries and accessories, providing compliant and efficient trade services for global buyers."}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-emerald-200">{lang === "zh" ? "网站导航" : "Navigation"}</h3>
          <div className="mt-4 grid gap-2.5 text-sm text-slate-400">
            {nav.map((item) => (
              <Link className="w-fit transition hover:text-emerald-300" href={href(item.href, lang)} key={item.href}>{lang === "zh" ? item.zh : item.en}</Link>
            ))}
            <Link className="w-fit transition hover:text-emerald-300" href={href("/privacy", lang)}>{l.privacy}</Link>
            <Link className="w-fit transition hover:text-emerald-300" href={href("/terms", lang)}>{l.terms}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-emerald-200">{lang === "zh" ? "联系方式" : "Contact"}</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <a className="flex gap-3 transition hover:text-emerald-300" href={`tel:${company.phone}`}><Phone size={18} className="shrink-0 text-emerald-300/80" /> {company.phone}</a>
            <p className="flex gap-3"><Mail size={18} className="shrink-0 text-emerald-300/80" /> {email}</p>
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-emerald-300/80" /> {lang === "zh" ? company.addressZh : company.addressEn}</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-[color:var(--line-soft)] px-4 py-5 text-center text-xs text-slate-500">
        © 2026 {company.nameZh}. {lang === "zh" ? "所有公示信息以企业真实资质材料为准。" : "All public information is based on official company qualification materials."}
      </div>
    </footer>
  );
}
