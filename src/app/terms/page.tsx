import type { Metadata } from "next";
import { Container, getLang, PageHero, Section, SiteShell } from "@/components/layout";
import { company, policyUpdated } from "@/content/site";

export const metadata: Metadata = {
  title: "用户协议 | 北海蓝曜储能贸易有限公司",
  description: "北海蓝曜储能贸易有限公司用户协议，适用于官网、APP、小程序及相关线上服务的使用规则。",
};

const email = process.env.CONTACT_TO_EMAIL || company.emailFallback;

const zhSections = [
  ["一、协议接受", `欢迎访问和使用${company.nameZh}提供的官方网站、APP、微信小程序、H5 页面、客户服务系统及与新能源产品贸易和设备服务相关的线上服务。前述服务可统称为“本服务”。您浏览、提交询盘、下载、安装、注册、登录或使用本服务，即表示您已阅读、理解并同意本用户协议及配套《隐私政策》。若您不同意相关条款，请停止使用本服务。`],
  ["二、服务定位与使用范围", "本服务用于展示企业信息、资质公示、产品类别、业务服务、行业资讯和联系方式，并为采购商、贸易伙伴及商业客户提供在线询盘、资料沟通、产品选型咨询、进出口贸易服务对接等功能。APP 用于通过蓝牙连接相关设备、接收设备运行数据、展示设备状态和提供必要的本地设备管理能力。"],
  ["三、询盘与交易边界", "本服务展示的产品图片、规格描述、适用场景、可出口地区、交付周期、贸易服务说明、价格或报价相关信息，仅作为业务介绍和沟通起点，不构成最终报价、库存承诺、交付承诺、认证承诺或合同条款。具体产品参数、认证要求、价格、付款方式、交付周期、包装、物流、报关资料和贸易条款，应以后续双方书面确认、正式报价单、合同或订单文件为准。"],
  ["四、使用授权说明", "在您遵守本协议的前提下，公司授予您有限、非独占、不可转让、可撤销的服务使用权，仅用于合法浏览、咨询、询盘、商务沟通、资料获取、APP 蓝牙设备连接和与公司业务相关的合理用途。未经公司书面许可，您不得对网站、APP、小程序、页面设计、程序代码、数据库、接口、图片、文案或核心功能进行复制、出售、出租、传播、抓取、逆向工程、反编译、二次开发、商业包装或其他侵权使用。"],
  ["五、用户使用规范与责任", "您应遵守中国大陆相关法律法规及平台规则，并保证提交的信息真实、准确、合法。您不得冒用他人身份，不得提交违法、虚假、侵权、恶意代码、垃圾广告或干扰服务正常运行的信息；不得利用本服务攻击、扫描、入侵无关系统或获取无关数据；不得使用外挂、插件、自动化脚本或异常流量破坏服务运行；不得将本服务用于欺诈、洗钱、侵犯知识产权、违反进出口管制或其他违法违规行为。因您提供信息不准确或违法使用本服务产生的责任，由您自行承担。"],
  ["六、APP 使用规则", "APP 用于通过蓝牙连接相关设备并展示设备运行数据。您应在合法持有、管理或经授权使用相关设备的前提下使用 APP，不得利用 APP 连接、干扰、读取或操作无关设备。APP 的个人信息处理边界、蓝牙权限用途和本地数据说明，以《隐私政策》为准。"],
  ["七、官网和商务沟通规则", "您通过官网询盘、电话、邮箱或客服渠道提交信息时，应确保联系人、公司、采购需求、文件资料等内容真实、准确、合法，不侵犯任何第三方权益。公司会按照《隐私政策》处理相关信息，并将其用于业务沟通、询盘回复、贸易服务跟进、资料发送、安全维护和依法合规处理。"],
  ["八、账号、资料与通知", "本服务涉及账号、资料保存、订单沟通或消息通知功能时，您应妥善保管账号、验证码、登录凭证和设备安全。通过您的账号或设备完成的操作，原则上视为您本人或经您授权的操作。若发现账号异常、信息泄露或未经授权使用，请及时联系我们处理。"],
  ["九、服务更新与维护", "公司有权根据业务需要、技术升级、平台规则、法律法规或安全要求，对本服务进行优化、升级、维护、暂停、调整或下线部分功能。APP 或小程序可提供自动或手动更新提示，用于修复问题、提升稳定性、适配系统版本或增加服务能力。您在协议更新或版本更新后继续使用本服务，即视为接受更新后的协议和政策。"],
  ["十、知识产权", "本服务展示的文字、页面设计、图片、图形、商标、品牌信息、产品介绍、资料文件、软件代码、交互设计和其他内容，除依法属于第三方权利人的部分外，归公司或合法权利人所有。未经书面许可，不得复制、转载、修改、抓取、镜像、商用展示或用于训练、生成、再分发等未经授权的用途。"],
  ["十一、免责声明", "我们会尽力保持服务内容准确、及时和稳定，但新能源产品规格、供应状态、价格、出口政策、认证要求、汇率、物流周期、监管要求、设备状态和蓝牙连接环境可能随市场、法规、设备和使用场景变化。因第三方网络、云平台、邮件服务、应用商店、操作系统、浏览器、设备差异、蓝牙环境、不可抗力或用户操作不当导致的服务中断、信息延迟、展示偏差、连接异常或使用异常，公司将在合理范围内处理，但不对超出法定责任范围的间接损失、预期收益损失或交易机会损失承担责任。"],
  ["十二、未成年人使用条款", "本服务主要面向企业采购商、贸易伙伴、新能源行业从业者、设备使用者及商业客户，不面向未成年人提供专门服务。未成年人不应独立提交询盘、合同资料或其他商务信息，也不应独立操作与设备相关的 APP 功能。若未成年人确需使用，应在监护人监督和指导下进行，相关责任由监护人依法承担。"],
  ["十三、协议修订与终止", "公司有权根据网站、APP、小程序功能变化，业务流程调整，平台规则或法律法规要求修订本协议。最新版本将在官网、APP、小程序或相关服务页面公示。若用户违反本协议、侵犯公司或他人合法权益、干扰服务运行或从事违法违规行为，公司有权限制、暂停或终止其使用资格，并依法追究责任。"],
  ["十四、补充说明", "本用户协议与《隐私政策》互为补充、相互关联，具有同等法律效力。涉及个人信息处理、APP 蓝牙设备数据和权限使用的事项，以《隐私政策》的专门说明为准；涉及服务使用、用户行为、知识产权和交易边界的事项，以本协议为准。若本协议任一条款被认定为无效，不影响其余条款的效力。"],
  ["十五、法律适用与争议解决", "本协议的订立、履行、解释和争议解决适用中国大陆法律。因本服务使用或本协议产生争议的，双方应友好协商；协商不成的，提交公司所在地有管辖权的人民法院处理。"],
  ["十六、联系方式", `若您对本用户协议有疑问、咨询或建议，可通过以下方式联系我们：\n公司名称：${company.nameZh}\n统一社会信用代码：${company.creditCode}\n电话：${company.phone}\n地址：${company.addressZh}\n邮箱：${email}`],
];

const enSections = [
  ["1. Acceptance", `Welcome to the official website, app, mini programs, H5 pages, customer service systems and online services provided by ${company.nameEn} for new energy product trade and device services. By browsing, submitting an inquiry, downloading, installing, registering, logging in or using the services, you acknowledge that you have read and agreed to these Terms of Use and the Privacy Policy.`],
  ["2. Service Nature and Scope", "The services present company information, qualifications, product categories, business services, insights and contact channels, and support online inquiries, document communication, product consultation, import and export trade service matching and customer service. The app is used to connect to relevant devices through Bluetooth, receive device operating data, display device status and provide necessary local device management capabilities."],
  ["3. Inquiry and Transaction Boundary", "Product images, specifications, application scenarios, export regions, delivery schedules, service descriptions, prices or quotation-related information are for business introduction and communication only. Final product specifications, certification requirements, prices, payment, delivery, packaging, logistics, customs documents and trade terms shall be subject to later written confirmation, quotations, contracts or order documents."],
  ["4. License", "Subject to your compliance with these Terms, the company grants you a limited, non-exclusive, non-transferable and revocable right to use the services for lawful browsing, consultation, inquiry, business communication, document access, app Bluetooth device connection and reasonable purposes related to the company business. Unauthorized copying, resale, scraping, reverse engineering, decompilation, secondary development or commercial packaging is prohibited."],
  ["5. User Rules and Responsibilities", "You shall comply with applicable laws and platform rules, and ensure that submitted information is truthful, accurate and lawful. You may not impersonate others, submit illegal, false, infringing, malicious or disruptive content, attack or scan unrelated systems, use plug-ins or scripts to disrupt operation, or use the services for fraud, money laundering, intellectual property infringement, export control violation or other unlawful conduct."],
  ["6. App Use Rules", "The app is used to connect to relevant devices through Bluetooth and display device operating data. You shall use the app only when you lawfully own, manage or are authorized to use the relevant device, and shall not use it to connect to, interfere with, read or operate unrelated devices. Personal information processing, Bluetooth permission use and local data handling are described in the Privacy Policy."],
  ["7. Website and Business Communication Rules", "When you submit information through website inquiries, phone, email or customer service channels, you shall ensure that contact, company, purchase requirement and document information is truthful, accurate and lawful and does not infringe third-party rights. The company processes such information according to the Privacy Policy for business communication, inquiry response, trade service follow-up, document delivery, security maintenance and legal compliance."],
  ["8. Accounts, Documents and Notifications", "Where the services involve account, document storage, order communication or notification functions, you shall keep your account, verification codes, credentials and device secure. Operations completed through your account or device are generally deemed to be performed by you or with your authorization."],
  ["9. Updates and Maintenance", "The company may optimize, upgrade, maintain, suspend, adjust or discontinue parts of the services due to business needs, technical upgrades, platform rules, legal requirements or security needs. Continued use after updates means acceptance of the updated Terms and policies."],
  ["10. Intellectual Property", "Text, page design, images, graphics, trademarks, brand information, product descriptions, documents, software code, interaction design and other content belong to the company or lawful rights holders unless otherwise stated. Unauthorized copying, reposting, modification, scraping, mirroring or commercial use is prohibited."],
  ["11. Disclaimer", "We strive to keep service content accurate, timely and stable, but product specifications, supply, prices, export policies, certification requirements, exchange rates, logistics schedules, regulatory requirements, device status and Bluetooth connection environments may change. The company is not liable for indirect losses, expected profit losses or lost transaction opportunities beyond the scope required by law."],
  ["12. Minors", "The services are intended for business buyers, trade partners, new energy industry professionals, device users and commercial customers, and are not directed to minors. Minors should not independently submit inquiries, contract documents, business information or operate app device functions."],
  ["13. Revision and Termination", "The company may revise these Terms due to changes in website, app or mini program functions, business processes, platform rules or legal requirements. The latest version will be published on the website, app, mini program or relevant service page. If a user violates these Terms or applicable laws, the company may restrict, suspend or terminate the user's access."],
  ["14. Supplementary Terms", "These Terms and the Privacy Policy are complementary and have the same legal effect. Personal information processing, app Bluetooth device data and permission use are governed by the Privacy Policy; service use, user conduct, intellectual property and transaction boundaries are governed by these Terms. If any clause is deemed invalid, the remaining clauses remain effective."],
  ["15. Governing Law and Dispute Resolution", "These Terms are governed by the laws of mainland China. Disputes shall first be resolved through friendly negotiation; if negotiation fails, they may be submitted to the competent people's court at the company's location."],
  ["16. Contact Information", `For questions about these Terms, please contact us:\nCompany: ${company.nameEn}\nCredit Code: ${company.creditCode}\nPhone: ${company.phone}\nAddress: ${company.addressEn}\nEmail: ${email}`],
];

export default async function TermsPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  const sections = lang === "zh" ? zhSections : enSections;
  return (
    <SiteShell lang={lang}>
      <PageHero title={lang === "zh" ? "用户协议" : "Terms of Use"} subtitle={lang === "zh" ? `更新日期：${policyUpdated}。本协议适用于官网、APP、小程序等线上服务。` : "These terms apply to the website, app, mini programs and online services."} lang={lang} />
      <Section className="relative overflow-hidden bg-[#060d14]">
        <div className="absolute inset-0 opacity-20 grid-bg" aria-hidden="true" />
        <Container className="relative max-w-4xl">
          <div className="legal-prose">
            {sections.map(([title, body]) => (
              <section key={title}>
                <h2>{title}</h2>
                {body.split("\n").map((line) => <p key={line}>{line}</p>)}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
