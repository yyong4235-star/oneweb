import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, getLang, PageHero, Section, SiteShell } from "@/components/layout";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "联系我们 | 北海蓝曜储能贸易有限公司",
  description: "联系北海蓝曜储能贸易有限公司，获取储能设备、光伏产品、锂电池和新能源配套产品采购与进出口贸易服务。",
};

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  const email = process.env.CONTACT_TO_EMAIL || company.emailFallback;
  return (
    <SiteShell lang={lang}>
      <PageHero title={lang === "zh" ? "联系我们" : "Contact Us"} subtitle={lang === "zh" ? "欢迎提交采购询盘，或通过电话与我们沟通新能源产品贸易需求。" : "Submit your inquiry or call us to discuss new energy product trade requirements."} lang={lang} />
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
        <Container className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <Info icon={<Phone size={20} />} title={lang === "zh" ? "电话" : "Phone"} value={company.phone} href={`tel:${company.phone}`} />
            <Info icon={<Mail size={20} />} title={lang === "zh" ? "邮箱" : "Email"} value={email} />
            <Info icon={<MapPin size={20} />} title={lang === "zh" ? "经营地址" : "Address"} value={lang === "zh" ? company.addressZh : company.addressEn} />
            <div className="tech-card p-6">
              <h2 className="font-semibold text-white">{lang === "zh" ? "企业信息" : "Company Information"}</h2>
              <div className="mt-4 grid gap-2 text-sm leading-7 text-slate-400">
                <p>{company.nameZh}</p><p>{company.nameEn}</p><p>统一社会信用代码：{company.creditCode}</p><p>D-U-N-S：{company.dunsCode}</p><p>{company.region}</p><p>邮政编码：{company.postalCode}</p>
              </div>
            </div>
            <div className="map-panel rounded-2xl border border-[color:var(--line)]"><span>{lang === "zh" ? "北海市海城区 · 办公地址定位地图占位" : "Haicheng District, Beihai · Map placeholder"}</span></div>
          </div>
          <InquiryForm lang={lang} />
        </Container>
      </Section>
    </SiteShell>
  );
}

function Info({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  const content = <div className="flex gap-4 tech-card p-5"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-200">{icon}</span><div><p className="text-sm font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-6 text-slate-400">{value}</p></div></div>;
  return href ? <a href={href} className="block">{content}</a> : content;
}
