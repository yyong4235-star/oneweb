const company = {
  legalNameVi: "CÔNG TY TNHH THIẾT BỊ ĐIỆN TỬ DJ",
  legalNameEn: "DJ ELECTRONIC EQUIPMENT COMPANY LIMITED",
  shortName: "DJ ELECTRONICS CO., LTD",
  foundedYear: "2019",
  address: "Số nhà 083, phố Tuệ Tĩnh, tổ 10 Kim Tân, Phường Lào Cai, Tỉnh Lào Cai, Việt Nam",
  phone: "+84 963 162 922",
  phoneHref: "+84963162922",
  email: "congtytnhhthietbidientudj@gmail.com",
};

const routes = ["home", "products", "manufacturing", "oem", "about", "contact"];

const copy = {
  vi: {
    metaTitle: "DJ ELECTRONICS CO., LTD | Sản xuất điện tử năng lượng mới tại Việt Nam",
    nav: {
      home: "Trang chủ",
      products: "Sản phẩm",
      manufacturing: "Sản xuất",
      oem: "OEM/ODM",
      about: "Giới thiệu",
      contact: "Liên hệ",
    },
    cta: {
      contact: "Liên hệ ngay",
      email: "Gửi email",
      call: "Gọi ngay",
      products: "Xem sản phẩm",
    },
    home: {
      eyebrow: "Đối tác phần cứng điện tử tại Việt Nam",
      title: "Sản xuất nguồn sạc, BMS và PCB/SMT cho ngành năng lượng mới",
      intro:
        "DJ ELECTRONICS CO., LTD cung cấp bộ sạc nhanh, hệ thống quản lý pin BMS, bảng bảo vệ pin lithium, gia công PCB/SMT và lắp ráp PACK cho khách hàng sản xuất điện tử, xe điện và lưu trữ năng lượng.",
      panelTitle: "Năng lực trọng tâm",
      metrics: [
        ["OEM / ODM", "Hỗ trợ dán nhãn, chỉnh sửa phương án và phát triển theo thông số riêng"],
        ["SMT + PACK", "Tích hợp gia công mạch, hàn linh kiện, lắp ráp pin và thành phẩm"],
        ["Giao hàng tại Việt Nam", "Phản hồi nhanh, thuận tiện cho doanh nghiệp nội địa và khách hàng xuyên biên giới"],
      ],
      sectionsTitle: "Giải pháp phần cứng cho khách hàng mua hàng và chuỗi cung ứng",
      sectionsIntro:
        "Website tập trung vào các hạng mục mà khách hàng B2B cần đánh giá trước khi hợp tác: sản phẩm, năng lực sản xuất, phương thức tùy chỉnh và kênh liên hệ rõ ràng.",
      highlights: [
        {
          title: "Nguồn sạc năng lượng mới",
          text: "Bộ sạc nhanh nhiều quy cách, sạc lưu trữ trên xe và nguồn sạc chuyên dụng cho thiết bị.",
          tags: ["Fast charger", "Energy storage", "Device power"],
        },
        {
          title: "BMS và bảng bảo vệ pin",
          text: "Giải pháp quản lý pin lithium, bảng bảo vệ thông dụng và bảng bảo vệ công suất lớn cho lưu trữ năng lượng.",
          tags: ["BMS", "Lithium battery", "Protection board"],
        },
        {
          title: "PCB/SMT và bán thành phẩm",
          text: "Gia công bảng mạch, dán linh kiện SMT và sản xuất bán thành phẩm cho các nhà máy thiết bị điện tử.",
          tags: ["PCB", "SMT", "Assembly"],
        },
      ],
      bandTitle: "Bạn cần đánh giá nhà cung cấp cho sản phẩm điện tử năng lượng mới?",
      bandText: "Gửi thông số, mẫu hoặc yêu cầu ứng dụng. Đội ngũ DJ sẽ phản hồi theo hướng OEM, ODM hoặc phát triển riêng.",
    },
    products: {
      eyebrow: "Danh mục sản phẩm",
      title: "Sản phẩm và dịch vụ sản xuất chính",
      intro:
        "Các hạng mục được tổ chức theo nhu cầu mua hàng thực tế: nguồn sạc, quản lý pin, bảng mạch và sản xuất bán thành phẩm.",
      items: [
        {
          title: "Bộ sạc nhanh năng lượng mới",
          description: "Các quy cách bộ sạc nhanh cho xe điện hai bánh, ba bánh, thiết bị lưu trữ và ứng dụng điện tử chuyên dụng.",
          applications: ["Xe điện hai / ba bánh", "Nguồn lưu trữ di động", "Thiết bị cần nguồn sạc riêng"],
          capabilities: ["OEM nhãn hiệu", "Điều chỉnh thông số", "Sản xuất số lượng lớn"],
        },
        {
          title: "Sạc lưu trữ trên xe và sạc thiết bị",
          description: "Nguồn sạc cho hệ thống lưu trữ trên xe, bộ nguồn thiết bị và các ứng dụng cần độ ổn định cao.",
          applications: ["Lưu trữ năng lượng", "Thiết bị công nghiệp", "Tổ hợp nguồn tùy chỉnh"],
          capabilities: ["Tối ưu hiệu suất", "Thiết kế theo công suất", "Lắp ráp thành phẩm"],
        },
        {
          title: "BMS quản lý pin lithium",
          description: "Hệ thống BMS và bảng bảo vệ pin lithium hỗ trợ quản lý an toàn cho bộ pin trong nhiều điều kiện sử dụng.",
          applications: ["Pin lithium", "Bộ pin lưu trữ", "Thiết bị điện di động"],
          capabilities: ["Phương án BMS", "Tùy chỉnh điện áp / dòng", "Tối ưu theo môi trường sử dụng"],
        },
        {
          title: "Bảng bảo vệ pin công suất lớn",
          description: "Bảng bảo vệ thông dụng và công suất lớn cho hệ thống pin lưu trữ cần vận hành ổn định.",
          applications: ["Lưu trữ dân dụng", "Nguồn dự phòng", "Tổ hợp pin công suất cao"],
          capabilities: ["Thiết kế bảo vệ", "Sản xuất theo đơn", "Kiểm soát chất lượng xuất xưởng"],
        },
        {
          title: "PCB và SMT",
          description: "Gia công bảng mạch, dán linh kiện bằng dây chuyền SMT tự động và hàn linh kiện theo yêu cầu sản phẩm.",
          applications: ["Nhà máy điện tử", "Thiết bị số", "Thiết bị công nghiệp"],
          capabilities: ["SMT", "Hàn linh kiện", "Kiểm tra bán thành phẩm"],
        },
        {
          title: "Bán thành phẩm mạch điện tử",
          description: "Sản xuất bán thành phẩm và cụm bảng mạch cho khách hàng cần năng lực gia công ổn định tại Việt Nam.",
          applications: ["Lắp ráp điện tử", "Gia công thuê ngoài", "Chuỗi cung ứng xuyên biên giới"],
          capabilities: ["Sản xuất theo đơn", "Đóng gói theo yêu cầu", "Giao hàng linh hoạt"],
        },
      ],
    },
    manufacturing: {
      eyebrow: "Năng lực sản xuất",
      title: "Từ phương án mạch đến thành phẩm lắp ráp",
      intro:
        "DJ kết hợp đội ngũ R&D, dây chuyền SMT và nhà máy PACK để kiểm soát nhiều khâu trong cùng một hệ thống sản xuất.",
      splitTitle: "Năng lực tích hợp giúp rút ngắn phản hồi chuỗi cung ứng",
      splitText:
        "Từ dán linh kiện, hàn, đóng gói pin đến lắp ráp thành phẩm, mô hình sản xuất khép kín giúp khách hàng kiểm soát tiến độ, chất lượng và chi phí tốt hơn.",
      capabilities: [
        { name: "R&D kỹ thuật", description: "Tiếp thu phương án nguồn và quản lý pin từ thị trường quốc tế, tối ưu độ ổn định và hiệu suất chuyển đổi.", customerValue: "Phù hợp khi khách hàng cần điều chỉnh thông số hoặc phát triển sản phẩm riêng." },
        { name: "SMT tự động", description: "Dây chuyền dán linh kiện hỗ trợ gia công PCB và các cụm mạch điện tử.", customerValue: "Giảm phụ thuộc vào nhiều nhà cung cấp rời rạc." },
        { name: "Hàn linh kiện", description: "Phối hợp với SMT để hoàn thiện bảng mạch, bán thành phẩm và cụm module.", customerValue: "Hỗ trợ đơn hàng linh hoạt từ bán thành phẩm đến thành phẩm." },
        { name: "PACK pin", description: "Nhà máy PACK tiêu chuẩn hỗ trợ lắp ráp bộ pin và đóng gói theo nhu cầu sản phẩm.", customerValue: "Phù hợp cho khách hàng trong ngành lưu trữ năng lượng và xe điện nhẹ." },
        { name: "Lắp ráp thành phẩm", description: "Tổ chức từ mạch, vỏ, pin đến thành phẩm nguồn sạc hoặc module điện tử.", customerValue: "Một đầu mối quản lý tiến độ sản xuất." },
        { name: "Kiểm soát xuất xưởng", description: "Tập trung kiểm tra chất lượng trước khi giao hàng để đảm bảo ổn định khi sản xuất số lượng lớn.", customerValue: "Giúp khách hàng giảm rủi ro khi mở rộng đơn hàng." },
      ],
    },
    oem: {
      eyebrow: "Hợp tác OEM / ODM",
      title: "Ba mô hình hợp tác cho khách hàng sản xuất và thương mại",
      intro:
        "DJ hỗ trợ từ dán nhãn thành phẩm đến tùy chỉnh thông số và phát triển phần cứng theo điều kiện sử dụng cụ thể.",
      modes: [
        { mode: "OEM", description: "Sản xuất thành phẩm theo nhận diện thương hiệu, yêu cầu ngoại quan và quy cách đóng gói của khách hàng.", bestFor: "Phù hợp với thương hiệu cần nguồn hàng ổn định và giao hàng nhanh." },
        { mode: "ODM", description: "Dựa trên phương án mạch hiện có của DJ, điều chỉnh cấu trúc, thông số hoặc đầu ra phần mềm theo nhu cầu.", bestFor: "Phù hợp với khách hàng muốn rút ngắn thời gian phát triển sản phẩm." },
        { mode: "Phát triển tùy chỉnh", description: "Thiết kế bộ sạc, BMS hoặc bảng bảo vệ từ đầu theo điều kiện sử dụng, điện áp, dòng điện và yêu cầu bảo vệ riêng.", bestFor: "Phù hợp với dự án có thông số đặc biệt hoặc môi trường sử dụng riêng." },
      ],
      processTitle: "Quy trình làm việc đề xuất",
      process: [
        ["Trao đổi yêu cầu", "Khách hàng gửi thông số, mẫu, bản vẽ hoặc tình huống sử dụng."],
        ["Đánh giá phương án", "DJ xác định nên dùng OEM, ODM hay phát triển tùy chỉnh."],
        ["Xác nhận mẫu", "Hai bên thống nhất cấu trúc, thông số, vật liệu và yêu cầu đóng gói."],
        ["Sản xuất và giao hàng", "Tổ chức sản xuất, kiểm soát chất lượng và giao hàng theo thỏa thuận."],
      ],
    },
    about: {
      eyebrow: "Về công ty",
      title: "Doanh nghiệp điện tử năng lượng mới đặt tại Lào Cai, Việt Nam",
      intro:
        "DJ ELECTRONICS CO., LTD được thành lập năm 2019, tập trung vào sản phẩm nguồn sạc, quản lý pin, gia công mạch điện tử và lắp ráp PACK.",
      body:
        "Công ty tích hợp nghiên cứu kỹ thuật, gia công bảng mạch, lắp ráp pin PACK và sản xuất thành phẩm. Với lợi thế nhà máy tại Việt Nam và kinh nghiệm trong phần cứng điện tử năng lượng mới, DJ cung cấp sản phẩm và dịch vụ sản xuất ổn định, có tính cạnh tranh cho khách hàng trong ngành năng lượng mới và điện tử.",
      facts: [
        ["Tên pháp lý", company.legalNameVi],
        ["Tên tiếng Anh", company.legalNameEn],
        ["Tên viết tắt", company.shortName],
        ["Thành lập", company.foundedYear],
        ["Địa chỉ", company.address],
      ],
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Gửi yêu cầu sản phẩm, thông số hoặc nhu cầu OEM/ODM",
      intro:
        "Liên hệ trực tiếp với DJ qua điện thoại hoặc email. Vui lòng gửi ngành ứng dụng, thông số điện áp / dòng điện, số lượng dự kiến và yêu cầu đóng gói nếu có.",
      details: {
        phone: "Điện thoại",
        email: "Email",
        address: "Địa chỉ",
      },
    },
  },
  en: {
    metaTitle: "DJ ELECTRONICS CO., LTD | Vietnam Power Electronics Manufacturing",
    nav: { home: "Home", products: "Products", manufacturing: "Manufacturing", oem: "OEM/ODM", about: "About", contact: "Contact" },
    cta: { contact: "Contact Sales", email: "Email Us", call: "Call Now", products: "View Products" },
    home: {
      eyebrow: "Vietnam-based power electronics partner",
      title: "Chargers, BMS and PCB/SMT manufacturing for new energy hardware",
      intro:
        "DJ ELECTRONICS CO., LTD supplies fast chargers, battery management systems, lithium battery protection boards, PCB/SMT assembly and PACK assembly for electronics, light EV and energy storage customers.",
      panelTitle: "Core capabilities",
      metrics: [["OEM / ODM", "Brand labeling, solution adjustment and development to customer parameters"], ["SMT + PACK", "Integrated PCB assembly, welding, battery packaging and finished product assembly"], ["Vietnam delivery", "Fast response for local companies and cross-border customers"]],
      sectionsTitle: "Hardware solutions for purchasing and supply chain teams",
      sectionsIntro: "The site focuses on what B2B buyers need to evaluate: product scope, production capability, customization options and clear contact channels.",
      highlights: [
        { title: "New energy chargers", text: "Fast chargers, vehicle energy storage chargers and dedicated power chargers for equipment applications.", tags: ["Fast charger", "Energy storage", "Device power"] },
        { title: "BMS and battery protection", text: "Lithium battery management systems, general protection boards and high-power storage battery protection boards.", tags: ["BMS", "Lithium battery", "Protection board"] },
        { title: "PCB/SMT and semi-finished boards", text: "PCB assembly, SMT placement and semi-finished circuit board production for electronics manufacturers.", tags: ["PCB", "SMT", "Assembly"] },
      ],
      bandTitle: "Need to evaluate a supplier for new energy electronics?",
      bandText: "Send specifications, samples or application requirements. DJ will respond with an OEM, ODM or custom development path.",
    },
    products: {
      eyebrow: "Product matrix",
      title: "Core products and manufacturing services",
      intro: "Product groups are organized around real purchasing needs: chargers, battery management, circuit boards and semi-finished production.",
      items: [
        { title: "New energy fast chargers", description: "Multiple charger specifications for two-wheelers, three-wheelers, energy storage devices and dedicated electronics applications.", applications: ["Two / three-wheel EV", "Portable energy storage", "Custom charging equipment"], capabilities: ["OEM branding", "Parameter adjustment", "Volume production"] },
        { title: "Vehicle storage and equipment chargers", description: "Charging power supplies for vehicle storage systems, equipment power modules and applications requiring stable output.", applications: ["Energy storage", "Industrial equipment", "Custom power assemblies"], capabilities: ["Efficiency optimization", "Power-based design", "Finished assembly"] },
        { title: "Lithium battery BMS", description: "BMS systems and lithium battery protection boards for safer battery pack management in varied operating conditions.", applications: ["Lithium batteries", "Storage battery packs", "Portable electric devices"], capabilities: ["BMS solutions", "Voltage / current customization", "Application-based optimization"] },
        { title: "High-power battery protection boards", description: "General and high-power protection boards for storage battery systems that require stable operation.", applications: ["Residential storage", "Backup power", "High-power battery packs"], capabilities: ["Protection design", "Made-to-order production", "Outgoing quality control"] },
        { title: "PCB and SMT", description: "PCB processing, automated SMT placement and component welding according to product requirements.", applications: ["Electronics factories", "Digital hardware", "Industrial control equipment"], capabilities: ["SMT", "Component welding", "Semi-finished inspection"] },
        { title: "Semi-finished circuit assemblies", description: "Semi-finished boards and circuit assemblies for customers needing stable manufacturing capacity in Vietnam.", applications: ["Electronics assembly", "Outsourced manufacturing", "Cross-border supply chains"], capabilities: ["Order-based production", "Custom packaging", "Flexible delivery"] },
      ],
    },
    manufacturing: {
      eyebrow: "Manufacturing capability",
      title: "From circuit solutions to finished assemblies",
      intro: "DJ combines R&D, SMT lines and PACK assembly to control several key stages within one production system.",
      splitTitle: "Integrated capability shortens supply chain response",
      splitText: "From SMT placement, welding and battery packaging to finished product assembly, an integrated model helps customers manage schedule, quality and cost.",
      capabilities: [
        { name: "Technical R&D", description: "Adopts advanced power and battery management solutions and improves stability and conversion efficiency.", customerValue: "Useful when parameters need adjustment or a custom product path is required." },
        { name: "Automated SMT", description: "SMT placement lines support PCB processing and electronic circuit assemblies.", customerValue: "Reduces reliance on fragmented suppliers." },
        { name: "Component welding", description: "Works with SMT to complete boards, semi-finished products and module assemblies.", customerValue: "Supports orders from semi-finished boards to finished products." },
        { name: "Battery PACK", description: "Standard PACK assembly supports battery pack assembly and packaging for product needs.", customerValue: "Fits energy storage and light EV customers." },
        { name: "Finished assembly", description: "Organizes boards, housing, batteries and finished charger or electronic module production.", customerValue: "One accountable production contact." },
        { name: "Outgoing quality control", description: "Focuses on pre-shipment quality checks to support stable volume production.", customerValue: "Reduces risk when customers scale orders." },
      ],
    },
    oem: {
      eyebrow: "OEM / ODM cooperation",
      title: "Three cooperation models for manufacturing and trading customers",
      intro: "DJ supports brand labeling, parameter adjustment and hardware development for specific operating conditions.",
      modes: [
        { mode: "OEM", description: "Finished product manufacturing according to customer branding, appearance and packaging requirements.", bestFor: "Best for brands needing stable supply and fast delivery." },
        { mode: "ODM", description: "Based on DJ's existing circuit solutions, structure, parameters or software output can be adjusted as needed.", bestFor: "Best for customers who want to shorten product development time." },
        { mode: "Custom development", description: "Develop chargers, BMS or protection boards from the ground up based on operating conditions, voltage, current and protection needs.", bestFor: "Best for projects with special parameters or unique use environments." },
      ],
      processTitle: "Suggested workflow",
      process: [["Requirement discussion", "Customer sends specifications, samples, drawings or application scenarios."], ["Solution review", "DJ identifies whether OEM, ODM or custom development fits best."], ["Sample confirmation", "Both sides confirm structure, parameters, materials and packaging requirements."], ["Production and delivery", "Production, quality control and delivery are arranged as agreed."]],
    },
    about: {
      eyebrow: "About us",
      title: "A new energy electronics company based in Lào Cai, Vietnam",
      intro: "DJ ELECTRONICS CO., LTD was established in 2019 and focuses on charging power supplies, battery management, PCB assembly and PACK assembly.",
      body: "The company integrates technical research, circuit board processing, battery PACK assembly and finished product manufacturing. With a Vietnam factory location and experience in new energy electronics hardware, DJ provides stable and competitive products and production services for new energy and electronics customers.",
      facts: [["Legal name", company.legalNameVi], ["English name", company.legalNameEn], ["Short name", company.shortName], ["Founded", company.foundedYear], ["Address", company.address]],
    },
    contact: {
      eyebrow: "Contact",
      title: "Send product requirements, specifications or OEM/ODM needs",
      intro: "Contact DJ directly by phone or email. Please include application industry, voltage / current parameters, estimated quantity and packaging requirements when available.",
      details: { phone: "Phone", email: "Email", address: "Address" },
    },
  },
  zh: {
    metaTitle: "DJ ELECTRONICS CO., LTD | 越南新能源电子硬件制造",
    nav: { home: "首页", products: "产品", manufacturing: "制造能力", oem: "OEM/ODM", about: "关于我们", contact: "联系" },
    cta: { contact: "立即联系", email: "发送邮件", call: "拨打电话", products: "查看产品" },
    home: {
      eyebrow: "越南本地电源电子硬件合作伙伴",
      title: "面向新能源硬件的充电器、BMS 与 PCB/SMT 制造服务",
      intro: "DJ ELECTRONICS CO., LTD 为电子制造、轻型电动车和储能客户提供快充充电器、BMS 管理系统、锂电池保护板、PCB/SMT 加工和 PACK 组装服务。",
      panelTitle: "核心能力",
      metrics: [["OEM / ODM", "支持贴牌、方案修改和按客户参数开发"], ["SMT + PACK", "整合电路板贴片、元器件焊接、电池封装和成品组装"], ["越南本地交付", "便于服务越南本地企业与跨境客户" ]],
      sectionsTitle: "为采购与供应链团队提供的硬件配套方案",
      sectionsIntro: "网站重点呈现 B2B 客户合作前需要评估的信息：产品范围、生产能力、定制方式和清晰的联系渠道。",
      highlights: [
        { title: "新能源充电器", text: "各类规格快充充电器、车载储能充电器和设备专用电源充电器。", tags: ["快充", "储能", "设备电源"] },
        { title: "BMS 与电池保护板", text: "锂电池管理系统、通用锂电池保护板和大功率储能电池保护板。", tags: ["BMS", "锂电池", "保护板"] },
        { title: "PCB/SMT 与半成品", text: "为电子设备厂商提供 PCB 加工、SMT 贴片和电路板半成品代工生产。", tags: ["PCB", "SMT", "组装"] },
      ],
      bandTitle: "需要评估新能源电子硬件供应商？",
      bandText: "发送参数、样品或应用需求。DJ 将根据情况提供 OEM、ODM 或专项定制开发建议。",
    },
    products: {
      eyebrow: "产品矩阵",
      title: "核心产品与制造服务",
      intro: "产品按采购需求组织：充电电源、电池管理、电路板加工和半成品代工。",
      items: [
        { title: "新能源快充充电器", description: "适用于两轮 / 三轮电动车、便携式储能和专用电子设备的多规格快充充电器。", applications: ["两轮 / 三轮电动车", "便携式储能", "专用充电设备"], capabilities: ["OEM 贴牌", "参数调整", "批量生产"] },
        { title: "车载储能与设备专用充电器", description: "适用于车载储能系统、设备电源模块和需要稳定输出的应用场景。", applications: ["储能系统", "工控设备", "定制电源组件"], capabilities: ["能效优化", "按功率设计", "成品组装"] },
        { title: "锂电池 BMS 管理系统", description: "为不同工况下的电池包提供 BMS 系统和锂电池保护板，提升电池管理安全性。", applications: ["锂电池", "储能电池包", "便携式电动设备"], capabilities: ["BMS 方案", "电压 / 电流定制", "按应用环境优化"] },
        { title: "大功率电池保护板", description: "为需要稳定运行的储能电池系统提供通用和大功率保护板。", applications: ["户用储能", "备用电源", "大功率电池组"], capabilities: ["保护方案设计", "按单生产", "出厂质量把控"] },
        { title: "PCB 与 SMT 贴片", description: "根据产品要求进行电路板加工、自动化 SMT 贴片和元器件焊接。", applications: ["电子设备工厂", "数码硬件", "工控设备"], capabilities: ["SMT", "元器件焊接", "半成品检测"] },
        { title: "电路板半成品代工", description: "为需要越南本地稳定制造能力的客户提供电路板半成品和组件生产。", applications: ["电子组装", "外协加工", "跨境供应链"], capabilities: ["按单生产", "按需包装", "灵活交付"] },
      ],
    },
    manufacturing: {
      eyebrow: "制造能力",
      title: "从电路方案到成品组装",
      intro: "DJ 结合研发团队、SMT 贴片线和 PACK 组装工厂，在同一生产体系中把控多个关键环节。",
      splitTitle: "一体化能力缩短供应链响应时间",
      splitText: "从贴片、焊接、电池封装到成品组装，一体化生产模式帮助客户更好地管理进度、质量和成本。",
      capabilities: [
        { name: "技术研发", description: "引入电源和电池管理方案技术，持续优化产品稳定性和能效转化。", customerValue: "适合需要调整参数或开发专属产品的客户。" },
        { name: "自动化 SMT", description: "SMT 贴片生产线支持 PCB 加工和电子电路组件生产。", customerValue: "减少客户对多个分散供应商的依赖。" },
        { name: "元器件焊接", description: "配合 SMT 完成电路板、半成品和模块组件。", customerValue: "支持从半成品到成品的不同订单需求。" },
        { name: "电池 PACK", description: "标准化 PACK 工厂支持电池组装和按产品需求进行封装。", customerValue: "适合储能和轻型电动车客户。" },
        { name: "成品组装", description: "组织电路板、外壳、电池和充电器或电子模块成品生产。", customerValue: "让客户用一个生产对接窗口管理进度。" },
        { name: "出厂质量控制", description: "交付前集中进行质量检查，支持稳定批量生产。", customerValue: "帮助客户在扩大订单时降低风险。" },
      ],
    },
    oem: {
      eyebrow: "OEM / ODM 合作",
      title: "面向生产和贸易客户的三种合作模式",
      intro: "DJ 支持从成品贴牌，到参数修改，再到按具体使用工况开发硬件方案。",
      modes: [
        { mode: "OEM", description: "依据客户品牌标识、外观要求和包装规范进行成品贴牌量产。", bestFor: "适合需要稳定货源和快速交付的品牌客户。" },
        { mode: "ODM", description: "依托 DJ 现有成熟电路方案，按需修改结构、参数或软件输出。", bestFor: "适合希望缩短产品开发周期的客户。" },
        { mode: "专项定制开发", description: "根据使用工况、电压、电流和特殊防护需求，从零开发充电器、BMS 或保护板。", bestFor: "适合参数特殊或使用环境有特殊要求的项目。" },
      ],
      processTitle: "建议合作流程",
      process: [["需求沟通", "客户发送参数、样品、图纸或使用场景。"], ["方案评估", "DJ 判断适合 OEM、ODM 还是专项定制开发。"], ["样品确认", "双方确认结构、参数、材料和包装要求。"], ["生产交付", "按约定组织生产、质量控制和交付。"]],
    },
    about: {
      eyebrow: "关于公司",
      title: "位于越南老街的新能源电子企业",
      intro: "DJ ELECTRONICS CO., LTD 成立于 2019 年，专注充电电源、电池管理、电路板加工和 PACK 组装。",
      body: "公司集技术研发、电路板加工、电池 PACK 组装和成品生产于一体。依托越南本地工厂区位优势和新能源电子硬件经验，DJ 为新能源和电子制造客户提供稳定、有竞争力的产品及生产服务。",
      facts: [["法定名称", company.legalNameVi], ["英文全称", company.legalNameEn], ["英文简写", company.shortName], ["成立时间", company.foundedYear], ["地址", company.address]],
    },
    contact: {
      eyebrow: "联系我们",
      title: "发送产品需求、参数或 OEM/ODM 合作需求",
      intro: "可通过电话或邮箱直接联系 DJ。建议在邮件中说明应用行业、电压 / 电流参数、预计数量和包装要求。",
      details: { phone: "电话", email: "电子邮箱", address: "地址" },
    },
  },
};

let state = {
  lang: localStorage.getItem("dj-lang") || "vi",
  route: normalizeRoute(window.location.hash.replace("#", "")),
};

function normalizeRoute(route) {
  return routes.includes(route) ? route : "home";
}

function t() {
  return copy[state.lang];
}

function card(item, index) {
  const tags = [...(item.tags || []), ...(item.applications || []), ...(item.capabilities || [])]
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  return `
    <article class="card">
      <span class="icon">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.title || item.name || item.mode}</h3>
      <p>${item.text || item.description}</p>
      ${item.customerValue ? `<p><strong>${item.customerValue}</strong></p>` : ""}
      ${item.bestFor ? `<p><strong>${item.bestFor}</strong></p>` : ""}
      ${tags ? `<div class="tag-list">${tags}</div>` : ""}
    </article>
  `;
}

function sectionHead(data) {
  return `
    <div class="section-head">
      <div>
        <span class="eyebrow">${data.eyebrow}</span>
        <h2>${data.title}</h2>
      </div>
      <p>${data.intro}</p>
    </div>
  `;
}

function renderHome(data) {
  return `
    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="eyebrow">${data.home.eyebrow}</span>
          <h1>${data.home.title}</h1>
          <p>${data.home.intro}</p>
          <div class="hero-actions">
            <a class="primary-btn" href="#contact">${data.cta.contact}</a>
            <a class="secondary-btn" href="#products">${data.cta.products}</a>
          </div>
        </div>
        <aside class="hero-panel">
          <h2>${data.home.panelTitle}</h2>
          <div class="metric-grid">
            ${data.home.metrics.map(([label, text]) => `<div class="metric"><strong>${label}</strong><span>${text}</span></div>`).join("")}
          </div>
        </aside>
      </div>
    </section>
    <section class="section home-solutions">
      <div class="section-inner">
        <div class="section-head">
          <div>
            <span class="eyebrow">DJ ELECTRONICS</span>
            <h2>${data.home.sectionsTitle}</h2>
          </div>
          <p>${data.home.sectionsIntro}</p>
        </div>
        <div class="grid">${data.home.highlights.map(card).join("")}</div>
      </div>
    </section>
    ${renderContactBand(data)}
  `;
}

function renderProducts(data) {
  return `
    <section class="section dark">
      <div class="section-inner">
        ${sectionHead(data.products)}
        <div class="grid">${data.products.items.map(card).join("")}</div>
      </div>
    </section>
    ${renderContactBand(data)}
  `;
}

function renderManufacturing(data) {
  return `
    <section class="section">
      <div class="section-inner split">
        <div class="split-copy">
          <span class="eyebrow">${data.manufacturing.eyebrow}</span>
          <h2>${data.manufacturing.splitTitle}</h2>
          <p>${data.manufacturing.splitText}</p>
          <a class="primary-btn" href="#contact">${data.cta.contact}</a>
        </div>
        <div class="split-media" style="background-image:url('https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1200&q=82')"></div>
      </div>
    </section>
    <section class="section alt">
      <div class="section-inner">
        ${sectionHead(data.manufacturing)}
        <div class="grid">${data.manufacturing.capabilities.map(card).join("")}</div>
      </div>
    </section>
  `;
}

function renderOem(data) {
  return `
    <section class="section dark">
      <div class="section-inner">
        ${sectionHead(data.oem)}
        <div class="grid">${data.oem.modes.map(card).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="section-inner split">
        <div class="split-media" style="background-image:url('https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1200&q=82')"></div>
        <div class="split-copy">
          <h2>${data.oem.processTitle}</h2>
          <div class="process-list">
            ${data.oem.process.map(([title, text]) => `<div class="process-item"><div><h3>${title}</h3><p>${text}</p></div></div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAbout(data) {
  return `
    <section class="section">
      <div class="section-inner split">
        <div class="split-copy">
          <span class="eyebrow">${data.about.eyebrow}</span>
          <h2>${data.about.title}</h2>
          <p>${data.about.intro}</p>
          <p>${data.about.body}</p>
        </div>
        <div class="split-media" style="background-image:url('https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=82')"></div>
      </div>
    </section>
    <section class="section alt">
      <div class="section-inner">
        <div class="contact-details">
          ${data.about.facts.map(([label, value]) => `<div class="detail-card"><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContact(data) {
  return `
    <section class="section dark">
      <div class="section-inner">
        ${sectionHead(data.contact)}
        <div class="contact-details">
          <div class="detail-card"><span>${data.contact.details.phone}</span><a href="tel:${company.phoneHref}">${company.phone}</a></div>
          <div class="detail-card"><span>${data.contact.details.email}</span><a href="mailto:${company.email}">${company.email}</a></div>
          <div class="detail-card"><span>${data.contact.details.address}</span><strong>${company.legalNameVi}</strong><strong>${company.legalNameEn}</strong><strong>${company.address}</strong></div>
        </div>
      </div>
    </section>
  `;
}

function renderContactBand(data) {
  return `
    <section class="section home-contact-flow">
      <div class="section-inner">
        <div class="contact-band">
          <div class="prism-layer" aria-hidden="true">
            <span class="prism-core"></span>
            <span class="prism-ray prism-ray-a"></span>
            <span class="prism-ray prism-ray-b"></span>
          </div>
          <div>
            <h2>${data.home.bandTitle}</h2>
            <p>${data.home.bandText}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function render() {
  const data = t();
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
  document.title = data.metaTitle;
  document.querySelector(".header-cta").textContent = data.cta.contact;

  document.querySelectorAll("[data-route]").forEach((link) => {
    const route = link.dataset.route;
    link.textContent = data.nav[route];
    link.setAttribute("aria-current", route === state.route ? "page" : "false");
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === state.lang));
  });

  const renderers = {
    home: renderHome,
    products: renderProducts,
    manufacturing: renderManufacturing,
    oem: renderOem,
    about: renderAbout,
    contact: renderContact,
  };
  document.querySelector("#app").innerHTML = renderers[state.route](data);
  document.querySelector("#app").focus({ preventScroll: true });
}

window.addEventListener("hashchange", () => {
  state.route = normalizeRoute(window.location.hash.replace("#", ""));
  document.querySelector(".site-header").dataset.open = "false";
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  render();
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("dj-lang", state.lang);
    render();
  });
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  const header = document.querySelector(".site-header");
  const isOpen = header.dataset.open === "true";
  header.dataset.open = String(!isOpen);
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(!isOpen));
});

window.addEventListener("scroll", () => {
  document.querySelector(".site-header").dataset.elevated = String(window.scrollY > 8);
});

if (!window.location.hash) {
  window.location.hash = "home";
} else {
  render();
}
