export type Language = "zh" | "en";
export type ProductKey = "energy-storage" | "solar" | "battery" | "accessories" | "other";

export const company = {
  nameZh: "北海蓝曜储能贸易有限公司",
  nameEn: "Beihai Lanyao Energy Storage Trading Co., Ltd.",
  dunsName: "Beihai Blue Yao Energy Storage Trading Co., Ltd",
  creditCode: "91450500MAKE3W165N",
  dunsCode: "514183869",
  qualification: "正规进出口货物收发货人、有限责任公司（自然人独资）、具备完整进出口贸易资质",
  region: "广西壮族自治区北海市海城区，归属北海海关管辖",
  addressZh: "北海市海城区北海大道189号嘉福文华苑13幢204号",
  addressEn: "Room 204, Building 13, Jiafu Wenhuayuan, No. 189 Beihai Avenue, Haicheng District, Beihai City",
  postalCode: "536000",
  phone: "13897662227",
  emailFallback: "bhyangyong2025@126.com",
};

export const nav = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/about", zh: "关于我们", en: "About" },
  { href: "/products", zh: "产品中心", en: "Products" },
  { href: "/services", zh: "业务服务", en: "Services" },
  { href: "/news", zh: "资讯中心", en: "Insights" },
  { href: "/contact", zh: "联系我们", en: "Contact" },
];

export const seo = {
  zh: {
    title: "北海蓝曜储能贸易有限公司 | 新能源储能进出口贸易服务商",
    description: "北海蓝曜储能贸易有限公司专注储能设备进出口、光伏产品贸易、锂电池外贸、家用储能批发和一站式新能源贸易服务。",
  },
  en: {
    title: "Beihai Lanyao Energy Storage Trading Co., Ltd. | New Energy Storage Trade",
    description: "Beihai Lanyao provides energy storage equipment export, solar product trade, lithium battery sourcing and one-stop new energy trade services.",
  },
};

export const labels = {
  zh: {
    consult: "立即咨询",
    products: "产品展示",
    learnMore: "了解更多",
    viewProducts: "查看产品",
    submitInquiry: "提交询盘",
    phone: "电话咨询",
    legal: "合规公示",
    privacy: "隐私政策",
    terms: "用户协议",
    readMore: "阅读全文",
  },
  en: {
    consult: "Inquire Now",
    products: "View Products",
    learnMore: "Learn More",
    viewProducts: "Products",
    submitInquiry: "Submit Inquiry",
    phone: "Call Us",
    legal: "Compliance",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    readMore: "Read More",
  },
};

export const home = {
  zh: {
    heroTitle: "深耕新能源储能贸易，赋能全球绿色低碳发展",
    heroSubtitle: "专注光伏、储能、锂电池与家用储能设备进出口，为全球采购商提供合规、高效的一站式贸易服务。",
    eyebrow: "新能源储能全品类进出口贸易服务商",
    stats: [
      { value: 4, suffix: "大类", label: "核心产品矩阵" },
      { value: 1, suffix: "站式", label: "采购与进出口服务" },
      { textValue: "北海海关", label: "属地管辖" },
    ],
  },
  en: {
    heroTitle: "Focus on New Energy Storage Trade, Empower Global Green Low-Carbon Development",
    heroSubtitle: "A compliant trade partner for solar, energy storage, lithium batteries and home storage systems across global procurement needs.",
    eyebrow: "Full-category new energy storage import and export trade partner",
    stats: [
      { value: 4, suffix: " lines", label: "Core product matrix" },
      { value: 1, suffix: "-stop", label: "Sourcing and trade service" },
      { textValue: "Beihai Customs", label: "Jurisdiction" },
    ],
  },
};

export const intro = {
  zh: "北海蓝曜储能贸易有限公司，坐落于广西北海市，是拥有正规进出口报关资质的专业化新能源贸易企业。公司主营光伏太阳能设备、储能系统、家用储能装置、锂电池及配套新能源产品的进出口贸易与国内贸易代理业务。依托北海优越的外贸区位优势，立足广西、辐射全国、面向全球，坚持以优质货源、合规贸易、高效服务为核心，为海内外客户提供一站式新能源产品采购与贸易解决方案。",
  en: "Beihai Lanyao Energy Storage Trading Co., Ltd. is a professional new energy trading company based in Beihai, Guangxi, with qualified import and export customs credentials. The company focuses on solar equipment, energy storage systems, home storage devices, lithium batteries and related new energy products, providing one-stop sourcing and trade solutions for domestic and overseas customers.",
};

export const products = [
  {
    key: "energy-storage" as ProductKey,
    titleZh: "储能设备",
    titleEn: "Energy Storage Equipment",
    descZh: "家用储能系统、商用储能设备、一体化储能装置，适配家庭、工商业和项目型采购。",
    descEn: "Home storage systems, commercial storage equipment and integrated storage units for household, C&I and project procurement.",
    sceneZh: "家庭备电、园区削峰填谷、离网供能、分布式能源配套",
    sceneEn: "Home backup, C&I peak shaving, off-grid supply, distributed energy systems",
  },
  {
    key: "solar" as ProductKey,
    titleZh: "光伏太阳能产品",
    titleEn: "Solar PV Products",
    descZh: "太阳能光伏板、发电配套设备与项目采购配套服务，覆盖多功率、多场景需求。",
    descEn: "Solar panels, generation accessories and procurement support for multiple capacities and application scenarios.",
    sceneZh: "屋顶光伏、地面电站、离网系统、海外项目采购",
    sceneEn: "Rooftop PV, ground-mounted plants, off-grid systems, overseas projects",
  },
  {
    key: "battery" as ProductKey,
    titleZh: "电池系列",
    titleEn: "Battery Series",
    descZh: "锂电池、储能电芯、动力电池及配套配件，支持多规格采购与贸易服务。",
    descEn: "Lithium batteries, storage cells, power batteries and accessories with multi-spec sourcing support.",
    sceneZh: "储能集成、动力配套、备电系统、设备维护替换",
    sceneEn: "Storage integration, power systems, backup power, maintenance replacement",
  },
  {
    key: "accessories" as ProductKey,
    titleZh: "新能源配套",
    titleEn: "New Energy Accessories",
    descZh: "新能源设备配件、储能光伏辅助器材、项目配套采购，提升供应链协同效率。",
    descEn: "New energy equipment parts, PV-storage auxiliary materials and project accessory procurement.",
    sceneZh: "系统集成、批量备货、工程项目、渠道贸易",
    sceneEn: "System integration, batch stocking, engineering projects, channel trade",
  },
];

export const advantages = [
  { zh: "资质齐全", en: "Complete Qualifications", bodyZh: "拥有正规海关报关资质、邓白氏编码和进出口贸易资质，信息公开透明。", bodyEn: "Qualified customs declaration credentials, D-U-N-S number and import-export trade capabilities." },
  { zh: "品类齐全", en: "Full Product Coverage", bodyZh: "覆盖光伏、储能、锂电池、新能源配套全系列产品，适配多场景采购。", bodyEn: "Covers solar, storage, lithium batteries and accessories for multi-scenario procurement." },
  { zh: "外贸专业", en: "Trade Expertise", bodyZh: "熟悉跨境贸易流程、报关协作、订单跟进和海外采购沟通节奏。", bodyEn: "Experienced in cross-border processes, customs support, order follow-up and buyer communication." },
  { zh: "服务完善", en: "End-to-End Service", bodyZh: "提供产品选型、货源对接、贸易代理、物流咨询与售后沟通支持。", bodyEn: "Supports product selection, sourcing, trade agency, logistics consultation and after-sales coordination." },
];

export const services = [
  { zh: "新能源设备进出口贸易", en: "New Energy Equipment Import & Export", bodyZh: "围绕储能、光伏、锂电池产品提供采购、报价、订单与出口流程协同。", bodyEn: "Procurement, quotation, order and export coordination for storage, solar and lithium battery products." },
  { zh: "国内贸易代理", en: "Domestic Trade Agency", bodyZh: "对接国内优质货源与供应链资源，支持批量采购和渠道合作。", bodyEn: "Connects quality domestic sources and supply chain resources for batch procurement and channel cooperation." },
  { zh: "报关报检协助", en: "Customs Support", bodyZh: "结合进出口资质与北海海关属地优势，协助客户推进合规贸易流程。", bodyEn: "Supports compliant trade processes with import-export credentials and local customs advantages." },
  { zh: "货源对接", en: "Sourcing Match", bodyZh: "根据产品规格、预算、目标市场和交期要求匹配合适供货方案。", bodyEn: "Matches supply options by specification, budget, target market and delivery schedule." },
  { zh: "订单全程跟进", en: "Order Follow-up", bodyZh: "从询盘、确认、生产备货到发运节点保持清晰沟通。", bodyEn: "Keeps clear communication from inquiry and confirmation to stocking and shipment milestones." },
  { zh: "跨境物流咨询", en: "Cross-border Logistics Consulting", bodyZh: "围绕出口地区、运输方式、包装和资料要求提供基础咨询。", bodyEn: "Provides basic consultation on export regions, shipping methods, packaging and documentation." },
  { zh: "产品选型定制咨询", en: "Product Selection Consulting", bodyZh: "针对家庭、商用、项目型应用协助梳理功率、容量和配套需求。", bodyEn: "Helps clarify power, capacity and accessory requirements for home, commercial and project applications." },
];

export const process = [
  { zh: "需求沟通", en: "Requirement Review" },
  { zh: "产品选型", en: "Product Match" },
  { zh: "报价确认", en: "Quotation" },
  { zh: "订单跟进", en: "Order Follow-up" },
  { zh: "通关物流", en: "Customs & Logistics" },
  { zh: "售后沟通", en: "After-sales Support" },
];

export const news = [
  { categoryZh: "行业资讯", categoryEn: "Industry", titleZh: "储能设备出口需求持续增长，供应链合规能力成为采购重点", titleEn: "Energy storage export demand keeps rising as compliance becomes a buyer priority", date: "2026-07-20" },
  { categoryZh: "外贸政策", categoryEn: "Trade Policy", titleZh: "新能源产品跨境采购应提前核对认证、包装与通关资料", titleEn: "New energy procurement should verify certification, packaging and customs documents early", date: "2026-07-16" },
  { categoryZh: "行业知识", categoryEn: "Knowledge", titleZh: "家用储能系统采购如何评估容量、功率与电池方案", titleEn: "How to evaluate capacity, power and battery options for home storage systems", date: "2026-07-10" },
  { categoryZh: "公司动态", categoryEn: "Company", titleZh: "北海蓝曜持续完善光伏、储能、锂电池产品贸易服务矩阵", titleEn: "Beihai Lanyao continues improving its solar, storage and lithium battery trade portfolio", date: "2026-07-01" },
];

export const policyUpdated = "2026年07月26日";
