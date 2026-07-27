"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, nav, type Language } from "@/content/site";

function nextHref(pathname: string, lang: Language) {
  return `${pathname}?lang=${lang}`;
}

export function SiteHeader({ lang }: { lang: Language }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPath = pathname || "/";

  const switchLang = (nextLang: Language) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLang);
    router.push(`${currentPath}?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[#060d14]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={nextHref("/", lang)} className="flex min-w-0 items-center gap-3">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-[10px] border border-emerald-300/40 bg-white shadow-[0_0_0_3px_rgba(94,234,212,0.12),0_0_20px_rgba(45,212,191,0.25)]">
            <Image src="/images/lanyao-logo.jpeg" alt={lang === "zh" ? "北海蓝曜储能贸易有限公司标志" : "Beihai Lanyao logo"} fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-white sm:text-base">{lang === "zh" ? company.nameZh : "Beihai Lanyao"}</span>
            <span className="hidden text-xs text-emerald-200/70 sm:block">Energy Storage Trading</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={nextHref(item.href, lang)}
              className={`rounded-full px-4 py-2 text-sm transition ${currentPath === item.href ? "bg-emerald-300/15 text-emerald-200 shadow-[inset_0_0_0_1px_rgba(94,234,212,0.35)]" : "text-slate-300 hover:bg-white/8 hover:text-white"}`}
            >
              {lang === "zh" ? item.zh : item.en}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            className="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/8 hover:text-emerald-200"
            onClick={() => switchLang(lang === "zh" ? "en" : "zh")}
            type="button"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <Link href={nextHref("/contact", lang)} className="btn-glow rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-[#062018] transition hover:bg-emerald-200">
            {lang === "zh" ? "立即咨询" : "Inquire"}
          </Link>
        </div>

        <button className="grid size-10 place-items-center rounded-full border border-white/15 text-white lg:hidden" onClick={() => setOpen((value) => !value)} type="button" aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--line)] bg-[#060d14] px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={nextHref(item.href, lang)} className={`rounded-[10px] px-3 py-3 text-sm transition ${currentPath === item.href ? "bg-emerald-300/12 text-emerald-200" : "text-slate-200 hover:bg-white/8"}`} onClick={() => setOpen(false)}>
                {lang === "zh" ? item.zh : item.en}
              </Link>
            ))}
            <button className="rounded-[10px] px-3 py-3 text-left text-sm text-emerald-200 hover:bg-white/8" onClick={() => switchLang(lang === "zh" ? "en" : "zh")} type="button">
              {lang === "zh" ? "Switch to English" : "切换到中文"}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
