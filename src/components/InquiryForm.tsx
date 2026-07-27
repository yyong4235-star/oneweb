"use client";

import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";
import { products, type Language, type ProductKey } from "@/content/site";

type FormState = "idle" | "submitting" | "success" | "error";

const copy = {
  zh: {
    title: "提交采购询盘",
    subtitle: "请留下采购产品、数量和目标地区，我们会尽快与您沟通产品选型和贸易服务。",
    name: "姓名",
    company: "公司名称",
    email: "邮箱",
    phone: "电话",
    product: "采购产品",
    quantity: "预计数量",
    region: "目标地区",
    message: "需求说明",
    consent: "我已阅读并同意",
    privacy: "《隐私政策》",
    terms: "《用户协议》",
    submit: "提交询盘",
    success: "询盘已提交，我们会尽快联系您。",
    error: "提交失败，请稍后重试或直接电话联系。",
    required: "请填写必填信息，并勾选协议。",
  },
  en: {
    title: "Submit Procurement Inquiry",
    subtitle: "Share product, quantity and target region. We will follow up with product matching and trade service details.",
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    product: "Product",
    quantity: "Estimated quantity",
    region: "Target region",
    message: "Requirements",
    consent: "I have read and agree to the",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    submit: "Submit Inquiry",
    success: "Inquiry submitted. We will contact you soon.",
    error: "Submission failed. Please try again later or call us directly.",
    required: "Please complete required fields and accept the policies.",
  },
};

export function InquiryForm({ lang, compact = false }: { lang: Language; compact?: boolean }) {
  const t = copy[lang];
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      product: String(form.get("product") || "other") as ProductKey,
      quantity: String(form.get("quantity") || ""),
      region: String(form.get("region") || ""),
      message: String(form.get("message") || ""),
      language: lang,
      acceptedPolicies: form.get("acceptedPolicies") === "on",
    };

    if (!payload.name || !payload.email || !payload.message || !payload.acceptedPolicies) {
      setState("error");
      setMessage(t.required);
      return;
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      setState("success");
      setMessage(t.success);
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage(t.error);
    }
  }

  return (
    <div className={`glass-card p-5 ${compact ? "" : "sm:p-7"}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">{t.title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">{t.subtitle}</p>
      </div>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t.name} name="name" required />
          <Field label={t.company} name="company" />
          <Field label={t.email} name="email" type="email" required />
          <Field label={t.phone} name="phone" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            {t.product}
            <select className="h-12 rounded-[10px] border border-white/10 bg-[#0a1622] px-3 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:ring-4 focus:ring-emerald-400/10" name="product" required>
              {products.map((item) => (
                <option key={item.key} value={item.key} className="bg-[#0a1622]">{lang === "zh" ? item.titleZh : item.titleEn}</option>
              ))}
              <option value="other" className="bg-[#0a1622]">{lang === "zh" ? "其他" : "Other"}</option>
            </select>
          </label>
          <Field label={t.quantity} name="quantity" />
          <Field label={t.region} name="region" />
        </div>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          {t.message}
          <textarea className="min-h-32 rounded-[10px] border border-white/10 bg-[#0a1622] px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/60 focus:ring-4 focus:ring-emerald-400/10" name="message" required />
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-400">
          <input className="mt-1 size-4 rounded border-white/20 bg-[#0a1622] text-emerald-400 accent-emerald-400" name="acceptedPolicies" type="checkbox" />
          <span>
            {t.consent} <Link className="font-medium text-emerald-300 hover:text-emerald-200" href={`/privacy?lang=${lang}`}>{t.privacy}</Link> {lang === "zh" ? "和" : "and"} <Link className="font-medium text-emerald-300 hover:text-emerald-200" href={`/terms?lang=${lang}`}>{t.terms}</Link>
          </span>
        </label>
        {message ? <p className={`rounded-[10px] px-3 py-2 text-sm ${state === "success" ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border border-red-400/30 bg-red-500/10 text-red-300"}`}>{message}</p> : null}
        <button className="btn-glow inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 text-sm font-semibold text-[#062018] transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60" disabled={state === "submitting"} type="submit">
          <Send size={16} /> {state === "submitting" ? (lang === "zh" ? "提交中..." : "Submitting...") : t.submit}
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-300">
      {label}
      <input className="h-12 rounded-[10px] border border-white/10 bg-[#0a1622] px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/60 focus:ring-4 focus:ring-emerald-400/10" name={name} required={required} type={type} />
    </label>
  );
}
