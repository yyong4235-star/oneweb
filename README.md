# 北海蓝曜储能贸易有限公司官网

Next.js App Router 官网项目，包含 8 个双语页面、ReactBits 风格动效、询盘表单、Resend 邮件通知、隐私政策和用户协议。

## 本地运行

```bash
npm install
npm run dev
```

本地访问：`http://localhost:3000/`

## 常用检查

```bash
npm run typecheck
npm run lint
npm run build
```

## 环境变量

正式启用询盘邮件通知前配置：

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=bhyangyong2025@126.com
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

页面公开联系邮箱默认为 `bhyangyong2025@126.com`。未配置邮件发送环境变量时，`/api/inquiry` 会返回可诊断的 500 错误，前端会提示提交失败。

## 图片资产

当前版本使用 AI 生成的现实摄影风格图片，位于 `public/images/site`：

- `ai-hero-energy-trade.jpg`
- `ai-commercial-storage.jpg`
- `ai-solar-storage-trade.jpg`
- `ai-lithium-battery.jpg`
- `ai-port-logistics.jpg`
- `ai-home-storage.jpg`

公司 logo 位于 `public/images/lanyao-logo.jpeg`。

## Claude 交接

如果要交给 Claude 或其他 AI 二次打磨，请优先阅读 `CLAUDE_HANDOFF.md`。
