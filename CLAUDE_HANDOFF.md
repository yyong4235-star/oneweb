# Claude 二次打磨交接说明

这是北海蓝曜储能贸易有限公司官网的完整源码包，供 Claude 或其他 AI 继续设计、重构和打磨。

## 本次改造记录（2026-07-27 深色未来科技风）

按用户确认的方向完成一次整站视觉重构：**深色未来科技风 + 整站统一 + 适度有质感的动效**。

### 设计系统（`src/app/globals.css`）

统一在 `globals.css` 建立了一套深色科技设计系统，页面里通过工具类复用，不要在页面里散写颜色：

- **配色变量（`:root`）**：`--background` 深蓝黑 `#060d14`、`--background-elevated` `#0a1622`、`--foreground` `#e8f4f0`、主色 `--accent` 青绿 `#5eead4` / `--accent-strong` `#2dd4bf` / `--accent-blue` 电蓝 `#38bdf8`、描边 `--line` / `--line-soft`。
- **卡片工具类**：
  - `.glass-card`——发光玻璃拟态卡（带 backdrop-blur 和渐变描边高光），用于重点区块（企业简介、询盘表单等）。
  - `.tech-card`——轻量描边卡（无模糊，hover 上浮+发光），用于大量并排卡片（产品、优势、服务），性能更好。
- **其他工具类**：`.tech-chip`（发光小标签/eyebrow）、`.btn-glow`（发光按钮）、`.text-glow`（文字发光）。
- **背景装饰**：`.grid-bg`（精细网格）、`.scanlines`（微光扫描线）、`.aurora-field`（极光光晕）、`.circuit-board`（电路板纹理）、`.spotlight-card`（跟随鼠标高光）。
- **专用组件样式**：`.energy-console` / `.energy-map` / `.node` / `.flow`（首屏能量控制台，节点带呼吸脉冲动画）、`.process-rail` / `.process-step`（合作流程发光时间轴）、`.map-panel`（地图占位）、`.legal-prose`（协议页排版，已改深色文字）。

### 改造范围（全站 8 页 + 全局组件）

- **全局外壳**：`layout.tsx`（`SiteShell` 深色底、`PageHero` 加双色光晕+发光标签）、`SiteHeader`（半透明玻璃发光、导航高亮改青绿）、`SiteFooter`（深色化+底部光晕）。
- **询盘表单** `InquiryForm.tsx`：白底改为 `.glass-card` 深色玻璃风，输入框/下拉/复选框/提示/按钮全部适配深色。
- **首页** `page.tsx`：首屏加信任标识行（资质/全球/D-U-N-S），各版块加 eyebrow 小标题，产品矩阵改 2+1+1+2 非对称布局打破模板感。
- **7 个内页**：about / products / services / news / contact / privacy / terms 全部统一到新设计系统。

### 注意事项 / 已知取舍

- 唯一保留的纯白底 `bg-white` 是 **logo 图片容器**（header/footer，实拍 JPEG 用白底衬托，属刻意保留）。页面里出现的 `bg-white/8`、`bg-white/[0.05]` 是深色上的半透明发光遮罩，不是浅色残留。
- 首屏主视觉实拍图不透明度设为 70%，让电路纹理和深色叠加透出科技感；若要图片更清晰可调高。
- 图片仍沿用原有 AI 实拍风格图，本次未更换。
- 动效保持克制：入场淡入、hover 光效、边框流光、节点脉冲，均遵守 `prefers-reduced-motion`，无全屏鼠标特效。

### 本次验证结果

`npm run typecheck`、`npm run lint`、`npm run build` 全部通过，8 页编译成功，sitemap 正常生成；中英双语内容均真实渲染。

## 项目概况

- 公司：北海蓝曜储能贸易有限公司
- 英文名：Beihai Lanyao Energy Storage Trading Co., Ltd.
- 技术栈：Next.js App Router、TypeScript、Tailwind CSS v4、Motion、lucide-react、zod、Resend、next-sitemap
- 页面数量：8 个主要页面
  - `/` 首页
  - `/about` 关于我们
  - `/products` 产品中心
  - `/services` 业务服务
  - `/news` 资讯中心
  - `/contact` 联系我们
  - `/privacy` 隐私政策
  - `/terms` 用户协议
- 双语方式：通过 `?lang=zh` / `?lang=en` 切换，主要内容在 `src/content/site.ts`
- 询盘接口：`POST /api/inquiry`
- 联系邮箱：`bhyangyong2025@126.com`

## 运行方式

```bash
npm install
npm run dev
```

本地访问：`http://localhost:3000/`

常用检查：

```bash
npm run typecheck
npm run lint
npm run build
```

## 环境变量

见 `.env.example`：

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=bhyangyong2025@126.com
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

未配置 Resend 时，询盘接口会返回失败，但前端页面和表单校验仍可正常查看。

## 重要目录

- `src/app`：Next.js 页面、API、SEO 路由
- `src/components`：站点头尾、表单、布局组件、动效组件
- `src/content/site.ts`：公司信息、导航、产品、服务、新闻、SEO 文案
- `public/images`：logo 与图片素材

## 当前图片资产

当前网站已经替换为 AI 生成的现实摄影风格图片：

- `public/images/site/ai-hero-energy-trade.jpg`：首页主视觉，储能柜与光伏贸易场景
- `public/images/site/ai-commercial-storage.jpg`：商用储能设备
- `public/images/site/ai-solar-storage-trade.jpg`：光伏与储能贸易场景
- `public/images/site/ai-lithium-battery.jpg`：锂电池/电芯产品场景
- `public/images/site/ai-port-logistics.jpg`：港口物流/跨境贸易场景
- `public/images/site/ai-home-storage.jpg`：家用储能产品图，目前未大量使用，可继续接入
- `public/images/lanyao-logo.jpeg`：用户提供的公司 logo

旧 SVG 素材仍在 `public/images/site/*.svg`，目前页面不再引用，可按需要删除或保留备份。

## 目前用户不满意的点

用户反馈当前网站“不太合心意”，此前还反馈：

- 首页上方曾出现大面积空背景，已删除全屏鼠标特效 `HomeMouseField` 在首页的使用。
- 用户希望网站更有科技感，但不能出现空洞、堆特效、没有内容的首页。
- 用户希望图片是真实风格，而不是抽象 SVG，目前已换成 AI 现实风格图。
- 整体仍需要重新打磨视觉风格、版式节奏、首屏冲击力和商务可信感。

## 建议 Claude 重点改进方向

1. 重新设计首页首屏：保持内容直接可见，减少空背景，增强真实业务和产品视觉。
2. 优化视觉系统：深蓝、墨绿、青绿可以保留，但避免单调和模板感。
3. 减少泛泛的卡片堆叠：产品、优势、流程可以用更有层次的布局重组。
4. 重新审视动效：保留轻量 hover、入场、边框光效即可，避免全屏鼠标特效喧宾夺主。
5. 强化 B2B 外贸官网可信度：资质、公司主体、联系方式、港口/物流/产品链路要更清楚。
6. 检查移动端：确保首屏标题、按钮、图片、导航不拥挤、不重叠。
7. 协议页面已是中国大陆法律语境，重写时不要引回越南、App、Google Play、蓝牙、BMS 调试等旧内容。

## 最近一次验证结果

在打包前已通过：

```bash
npm run typecheck
npm run lint
npm run build
```

## 打包说明

本压缩包应包含源码、配置、图片和交接文档；不应包含：

- `node_modules/`
- `.next/`
- `.git/`
- `tsconfig.tsbuildinfo`
- 系统缓存文件
