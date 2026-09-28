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

export const scenarios = [
  {
    key: "residential",
    iconName: "Home",
    titleZh: "家庭备电",
    titleEn: "Home Backup Power",
    descZh: "适配家用储能系统与光伏配套，满足家庭离网备电、削峰填谷与分布式自发自用需求。",
    descEn: "Home storage and solar systems for backup power, self-consumption and off-grid use.",
    tagsZh: ["家用储能系统", "阳台光伏", "户用逆变器"],
    tagsEn: ["Home ESS", "Balcony PV", "Residential inverter"],
  },
  {
    key: "commercial",
    iconName: "Building2",
    titleZh: "工商业储能",
    titleEn: "C&I Energy Storage",
    descZh: "工商业储能柜与集装箱储能系统，支持园区削峰填谷、需量管理与备用电源配置。",
    descEn: "C&I cabinets and containerized storage for peak shaving, demand management and backup.",
    tagsZh: ["工商业储能柜", "集装箱储能", "需量管理"],
    tagsEn: ["C&I cabinet", "Container ESS", "Demand management"],
  },
  {
    key: "offgrid",
    iconName: "Radio",
    titleZh: "离网与微网",
    titleEn: "Off-Grid & Microgrid",
    descZh: "面向无电或弱电网地区，提供光储一体离网解决方案的产品采购与贸易对接服务。",
    descEn: "PV-storage off-grid solutions for areas with no or weak grid access.",
    tagsZh: ["离网储能", "光储一体", "微网系统"],
    tagsEn: ["Off-grid ESS", "PV-storage", "Microgrid"],
  },
  {
    key: "project",
    iconName: "Warehouse",
    titleZh: "项目批量出口",
    titleEn: "Project Bulk Export",
    descZh: "大型光伏电站、储能项目整套设备采购与出口，依托北海海关优势推进全程合规贸易。",
    descEn: "Bulk procurement and export for utility-scale PV and storage projects via Beihai Customs.",
    tagsZh: ["批量采购", "设备出口", "EPC配套"],
    tagsEn: ["Bulk sourcing", "Equipment export", "EPC support"],
  },
];

export const targetMarkets = [
  { zh: "东南亚", en: "Southeast Asia", flagEmoji: "🌏" },
  { zh: "中东", en: "Middle East", flagEmoji: "🌍" },
  { zh: "非洲", en: "Africa", flagEmoji: "🌍" },
  { zh: "欧洲", en: "Europe", flagEmoji: "🌍" },
  { zh: "南美", en: "South America", flagEmoji: "🌎" },
  { zh: "南亚", en: "South Asia", flagEmoji: "🌏" },
];

export const serviceSupport = [
  {
    iconName: "MessageCircle",
    titleZh: "售前咨询",
    titleEn: "Pre-sale Consulting",
    descZh: "根据采购规格、预算与目标市场，协助梳理最适合的产品选型与贸易方案。",
    descEn: "Help you identify the right products and trade plan based on specs, budget and market.",
    href: "/contact",
  },
  {
    iconName: "FileDown",
    titleZh: "规格资料",
    titleEn: "Product Documents",
    descZh: "提供主流品牌储能、光伏与电池产品规格书，支持采购前技术核对与方案评估。",
    descEn: "Datasheets and specs for major brands to support pre-purchase technical evaluation.",
    href: "/contact",
  },
  {
    iconName: "HelpCircle",
    titleZh: "贸易FAQ",
    titleEn: "Trade FAQ",
    descZh: "常见贸易条款、HS Code、原产地证明与通关资料问题解答，降低合规风险。",
    descEn: "Answers on trade terms, HS codes, certificates of origin and customs documentation.",
    href: "/services",
  },
  {
    iconName: "Truck",
    titleZh: "物流跟踪",
    titleEn: "Logistics Support",
    descZh: "订单确认后全程跟进发运节点、清关进度与到货情况，保持透明沟通。",
    descEn: "Post-order tracking of shipment milestones, customs clearance and delivery status.",
    href: "/contact",
  },
];

export const processDetails = [
  { zh: "需求沟通", en: "Requirement Review", bodyZh: "明确产品规格、数量、目标市场与交期要求", bodyEn: "Clarify specs, quantities, target market and delivery timeline" },
  { zh: "产品选型", en: "Product Match", bodyZh: "匹配合适品牌与货源，提供选型建议", bodyEn: "Match suitable brands and supply sources with selection advice" },
  { zh: "报价确认", en: "Quotation", bodyZh: "提供含运费、税费的完整贸易报价", bodyEn: "Provide complete trade quotation including freight and duties" },
  { zh: "订单跟进", en: "Order Follow-up", bodyZh: "协调生产备货、核对资料、跟进进度", bodyEn: "Coordinate production, verify documents, follow up progress" },
  { zh: "通关物流", en: "Customs & Logistics", bodyZh: "依托北海海关资质推进合规出口清关", bodyEn: "Compliant export clearance via Beihai Customs credentials" },
  { zh: "售后沟通", en: "After-sales Support", bodyZh: "到货确认、问题处理与持续采购支持", bodyEn: "Delivery confirmation, issue handling and ongoing sourcing support" },
];

export const policyUpdated = "2026年07月26日";
