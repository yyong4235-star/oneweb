import type { Metadata } from "next";
import { Container, getLang, PageHero, Section, SiteShell } from "@/components/layout";
import { company, policyUpdated } from "@/content/site";

export const metadata: Metadata = {
  title: "隐私政策 | 北海蓝曜储能贸易有限公司",
  description: "北海蓝曜储能贸易有限公司隐私政策，适用于官网、APP、小程序及相关线上服务的信息处理规则。",
};

const email = process.env.CONTACT_TO_EMAIL || company.emailFallback;

const zhSections = [
  ["一、适用范围", `本隐私政策适用于${company.nameZh}官方网站、APP、微信小程序、H5 页面、客户服务系统以及与新能源产品贸易和设备服务相关的线上服务。相关服务可统称为“本服务”。若您不同意本政策，请停止浏览、提交询盘或使用相关功能。`],
  ["二、基本原则", "我们按照合法、正当、必要和诚信原则处理信息。官网、询盘表单、电话和邮箱咨询场景中，我们仅处理业务沟通所需的商务联系信息。APP 仅通过蓝牙接收设备运行数据，用于设备连接、数据显示和本地管理，不收集用户个人隐私信息，不上传用户个人数据，不用于广告、追踪或画像分析。"],
  ["三、官网和商务沟通信息", "当您浏览官网、提交询盘、拨打电话或发送邮件时，我们会根据您主动提交或访问服务的情况处理以下信息：姓名、公司名称、电子邮箱、联系电话、所在国家或地区、采购产品、预计数量、贸易需求、留言内容、提交时间、沟通记录、必要访问日志、浏览器类型、IP 地址、网络状态、错误日志以及为保障网站安全所需的基础运行信息。"],
  ["四、APP 设备数据与蓝牙权限", "APP 通过蓝牙与相关设备连接，并接收设备返回的运行数据，例如设备状态、运行参数、故障状态、连接状态等。上述数据用于设备连接、数据显示、本地查看和必要的设备管理。蓝牙权限仅用于发现、连接和通信相关设备，不用于定位、广告推送、后台监听、用户追踪或获取通讯录、短信、相册、摄像头等个人隐私信息。"],
  ["五、APP 不收集的个人隐私信息", "APP 不主动收集、存储或上传可识别个人身份的信息，包括但不限于身份证件信息、通讯录、短信、通话记录、相册内容、摄像头内容、精确地理位置、广告标识符、用户画像信息等。除非您主动通过官网、邮箱、电话或客服渠道向我们提交资料，否则 APP 本身不会向公司服务器提交个人隐私信息。"],
  ["六、信息使用目的", "官网和商务沟通信息用于回应询盘和咨询、进行产品选型、报价前沟通和贸易服务跟进、准备进出口贸易资料、报关报检沟通、物流咨询、资料发送、网站安全维护、故障排查、服务优化以及依法合规处理。APP 设备数据仅用于蓝牙设备连接、设备数据显示、本地运行和必要的设备服务支持。"],
  ["七、数据存储、删除与安全", "官网询盘信息会通过邮件发送至企业指定邮箱，并在实现商务沟通、合同履行、售后服务或依法留存所需期限内保存。APP 通过蓝牙接收的设备数据优先在用户设备本地处理和显示；如 APP 提供本地缓存、配置保存或导出功能，相关数据由用户在本地设备中管理。我们会采取合理的技术和管理措施保护信息安全。"],
  ["八、第三方 SDK 与服务", "官网使用或需要使用云平台托管、邮件发送服务 Resend、基础安全防护、网站统计、地图、文件存储等第三方服务时，相关服务仅用于网站运行、询盘通知、安全维护和基础运营。APP 不接入广告 SDK、跨应用追踪 SDK 或以出售个人信息为目的的数据服务。服务功能、第三方 SDK 或云服务发生变化时，我们会根据实际情况更新本政策，并在需要时取得您的授权。"],
  ["九、数据共享与披露", "我们不会主动向无关第三方共享您的个人信息或 APP 蓝牙设备数据。以下情形除外：取得您的明确同意；为完成您主动提出的询盘、物流、报关、售后或商务协作需要；根据法律法规、司法机关、行政机关或监管机构的合法要求；为保护用户、公司或他人的合法权益和安全。即使在上述情形下，我们也会尽量限制处理范围，仅处理实现相应目的所必要的信息。"],
  ["十、跨境商务沟通", "若您为海外采购商或代表境外机构提交询盘，您提供的信息可能用于跨境商务沟通、产品资料往来、贸易文件准备、物流咨询和后续服务跟进。我们会遵循中国大陆相关法律法规要求，采取合理措施保护信息安全，并默认不出售、出租您的个人信息。"],
  ["十一、儿童与未成年人隐私", "本服务主要面向企业采购商、贸易伙伴、新能源行业从业者、设备使用者及商业客户，不面向未成年人提供专门服务。若监护人发现未成年人向我们提交了个人信息，可通过本政策中的联系方式联系我们，我们将在核实后采取合理措施处理。"],
  ["十二、您的权利", "在适用法律允许的范围内，您可以要求查询、更正、复制、删除您的个人信息，撤回同意，或就个人信息处理规则提出咨询、投诉。由于 APP 蓝牙设备数据主要在本地处理，我们通常无法从服务器侧识别或访问您本地设备中的 APP 数据。"],
  ["十三、法律依据", "本政策以《中华人民共和国个人信息保护法》《中华人民共和国数据安全法》《中华人民共和国网络安全法》《中华人民共和国民法典》《中华人民共和国电子商务法》等中国大陆相关法律法规为主要合规口径。"],
  ["十四、政策更新", "我们可能因官网、APP、小程序功能变化，业务流程调整，第三方服务变化或法律法规要求更新本隐私政策。更新后的政策将在官网、APP、小程序或相关服务页面公示，并自页面标明的生效日期起生效。若发生重大变化，我们会在合理范围内通过页面提示、弹窗、公告或其他适当方式提醒您。"],
  ["十五、联系我们", `公司名称：${company.nameZh}\n统一社会信用代码：${company.creditCode}\n电话：${company.phone}\n地址：${company.addressZh}\n邮箱：${email}`],
];

const enSections = [
  ["1. Scope", `This Privacy Policy applies to the official website, app, mini programs, H5 pages, customer service systems and online services provided by ${company.nameEn} for new energy product trade and device services.`],
  ["2. Core Principles", "We process information lawfully, properly and only as necessary. For website inquiries, phone and email consultation, we process business contact information needed for business communication. The app only receives device operating data through Bluetooth for device connection, data display and local management. The app does not collect personal privacy information, does not upload personal data, and is not used for advertising, tracking or profiling."],
  ["3. Website and Business Communication Information", "When you browse the website, submit an inquiry, call us or email us, we process information based on what you actively submit and how you access the service, such as your name, company, email, phone number, country or region, requested products, estimated quantity, trade requirements, message content, submission time, communication records, access logs, browser type, IP address, network status, error logs and basic operational information needed for website security."],
  ["4. App Device Data and Bluetooth Permission", "The app connects to relevant devices through Bluetooth and receives operating data returned by the device, such as device status, operating parameters, fault status and connection status. Bluetooth permission is used only to discover, connect and communicate with relevant devices. It is not used for location, advertising, background monitoring, user tracking, contacts, SMS, photos, camera content or other personal privacy information."],
  ["5. Personal Privacy Information Not Collected by the App", "The app does not actively collect, store or upload personally identifiable information, including identity documents, contacts, SMS, call logs, photos, camera content, precise location, advertising identifiers or user profiling information. Unless you actively submit materials through the website, email, phone or customer service channels, the app itself does not submit personal privacy information to company servers."],
  ["6. Purposes of Use", "Website and business communication information is used to respond to inquiries, discuss product selection, support quotation preparation, follow up trade services, prepare import and export documents, support customs and logistics communication, maintain website security, troubleshoot errors, improve services and comply with legal requirements. App device data is used only for Bluetooth device connection, device data display, local operation and necessary device service support."],
  ["7. Storage, Deletion and Security", "Website inquiry information is sent to the company contact email and retained as required for business communication, contract performance, after-sales service or legal retention. Device data received by the app through Bluetooth is primarily processed and displayed locally on the user's device. If local cache, settings or export functions are provided, such data is managed by the user on the local device."],
  ["8. Third-party SDKs and Services", "When the website uses cloud hosting, Resend email delivery, basic security protection, website analytics, maps or file storage services, those services are used only for website operation, inquiry notification, security maintenance and basic operations. The app does not integrate advertising SDKs, cross-app tracking SDKs or data services intended to sell personal information. If service functions, third-party SDKs or cloud services change, this policy will be updated accordingly and authorization will be obtained where required."],
  ["9. Sharing and Disclosure", "We do not actively share personal information or app Bluetooth device data with unrelated third parties, except with your consent, where necessary for your requested inquiry, logistics, customs, after-sales or business cooperation, where required by law or regulators, or to protect lawful rights and safety. Processing will be limited to what is necessary."],
  ["10. Cross-border Business Communication", "If you submit an inquiry as an overseas buyer or on behalf of an overseas organization, your information may be used for cross-border business communication, product document exchange, trade document preparation, logistics consultation and service follow-up."],
  ["11. Children and Minors", "The service is intended for business buyers, trade partners, new energy industry professionals, device users and commercial customers, and is not directed to minors."],
  ["12. Your Rights", "To the extent permitted by applicable law, you may request access, correction, copying, deletion, withdrawal of consent, or contact us with privacy questions or complaints. Since app Bluetooth device data is mainly processed locally, we usually cannot identify or access local app data from the server side."],
  ["13. Legal Basis", "This policy follows the Personal Information Protection Law, Data Security Law, Cybersecurity Law, Civil Code, E-commerce Law and other applicable laws and regulations of mainland China."],
  ["14. Updates", "We may update this policy due to changes in website, app or mini program functions, business processes, third-party services or legal requirements. The updated version will be published on the website, app, mini program or relevant service page."],
  ["15. Contact Us", `Company: ${company.nameEn}\nCredit Code: ${company.creditCode}\nPhone: ${company.phone}\nAddress: ${company.addressEn}\nEmail: ${email}`],
];

export default async function PrivacyPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> }) {
  const lang = getLang(await searchParams);
  const sections = lang === "zh" ? zhSections : enSections;
  return (
    <SiteShell lang={lang}>
      <PageHero title={lang === "zh" ? "隐私政策" : "Privacy Policy"} subtitle={lang === "zh" ? `更新日期：${policyUpdated}。本政策适用于官网、APP、小程序等线上服务。` : "This policy applies to the website, app, mini programs and online services."} lang={lang} />
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
