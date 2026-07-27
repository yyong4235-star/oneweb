import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { company } from "@/content/site";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email(),
  phone: z.string().trim().max(40).optional().default(""),
  product: z.enum(["energy-storage", "solar", "battery", "accessories", "other"]),
  quantity: z.string().trim().max(80).optional().default(""),
  region: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(10).max(1000),
  language: z.enum(["zh", "en"]),
  acceptedPolicies: z.literal(true),
});

const productLabels: Record<string, string> = {
  "energy-storage": "储能设备 / Energy Storage Equipment",
  solar: "光伏太阳能产品 / Solar PV Products",
  battery: "电池系列 / Battery Series",
  accessories: "新能源配套 / New Energy Accessories",
  other: "其他 / Other",
};

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = inquirySchema.safeParse(json);

  if (!parsed.success) {
    const hasPolicyIssue = parsed.error.issues.some((issue) => issue.path.includes("acceptedPolicies"));
    return NextResponse.json(
      { ok: false, error: hasPolicyIssue ? "Policies must be accepted" : "Invalid inquiry payload" },
      { status: 400 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!resendKey || !to || !from) {
    return NextResponse.json({ ok: false, error: "Email service is not configured" }, { status: 500 });
  }

  const inquiry = parsed.data;
  const resend = new Resend(resendKey);
  const submittedAt = new Date().toISOString();

  try {
    await resend.emails.send({
      from,
      to,
      subject: `官网询盘 - ${inquiry.name} - ${productLabels[inquiry.product]}`,
      text: [
        `公司：${company.nameZh}`,
        `提交时间：${submittedAt}`,
        `语言：${inquiry.language}`,
        `姓名：${inquiry.name}`,
        `公司名称：${inquiry.company || "未填写"}`,
        `邮箱：${inquiry.email}`,
        `电话：${inquiry.phone || "未填写"}`,
        `采购产品：${productLabels[inquiry.product]}`,
        `预计数量：${inquiry.quantity || "未填写"}`,
        `目标地区：${inquiry.region || "未填写"}`,
        `已同意协议：是`,
        "",
        "需求说明：",
        inquiry.message,
      ].join("\n"),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to submit inquiry" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
