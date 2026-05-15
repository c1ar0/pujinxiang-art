export type PortfolioImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type PortfolioSection = {
  id: 'packaging' | 'poster' | 'book' | 'cultural';
  order: string;
  title: string;
  english: string;
  route: string;
  cover: string;
  accent: string;
  tags: string[];
  summary: string;
  intro: string;
  concept: string;
  displayHint: string;
  mainTitle: string;
  mainDescription: string;
  mainImages: PortfolioImage[];
  secondaryTitle?: string;
  secondaryDescription?: string;
  secondaryImages?: PortfolioImage[];
  details: string[];
};

export const portfolioSections: PortfolioSection[] = [
  {
    id: 'packaging',
    order: '01',
    title: '包装设计',
    english: 'Packaging Design',
    route: '/sections/packaging/',
    cover: '/images/portfolio/packaging/cover.jpg',
    accent: '#e3452f',
    tags: ['敦煌文化', '九色鹿', '国潮插画', '洗护包装'],
    summary: '以敦煌九色鹿为视觉核心，为养元青洗护系列建立具有东方审美的包装系统。',
    intro: '这款养元青洗护系列以敦煌文化为设计灵感，提取九色鹿、祥云、日月等经典元素，并以国潮插画语言进行再设计。暖橙与米黄呼应敦煌壁画的温润质感，既保留传统韵味，也让包装更贴近现代消费语境。',
    concept: '包装上的九色鹿线条灵动飘逸，传递东方美学的优雅与神秘；系列物料从瓶身、盒体延展到礼盒与手提袋，使产品在货架展示、礼赠场景和品牌传播中保持统一的文化辨识度。',
    displayHint: '主系列优先展示九色鹿洗护包装，后续陈列其他包装练习作品。',
    mainTitle: '养元青九色鹿洗护系列',
    mainDescription: '围绕洗发露、育发液、礼盒与手提袋构建完整包装视觉。插画、纹样与展开结构共同形成系列化识别，让传统IP与日化产品产生更自然的连接。',
    mainImages: [
      { src: '/images/portfolio/packaging/main/01-product-effect.jpg', alt: '养元青洗发水与育发液包装效果图', caption: '系列包装主视觉效果' },
      { src: '/images/portfolio/packaging/main/02-bag-layout.jpg', alt: '九色鹿手提袋平面设计', caption: '手提袋平面展开' },
      { src: '/images/portfolio/packaging/main/03-bag-mockup.jpg', alt: '九色鹿手提袋样机效果', caption: '手提袋应用效果' },
      { src: '/images/portfolio/packaging/main/04-box-mockup.jpg', alt: '洗发水育发液盒子样机', caption: '产品盒体样机' },
      { src: '/images/portfolio/packaging/main/05-shampoo-layout.jpg', alt: '洗发露包装展开图', caption: '洗发露包装展开' },
      { src: '/images/portfolio/packaging/main/06-box-effect.jpg', alt: '包装盒效果图', caption: '包装盒视觉效果' },
      { src: '/images/portfolio/packaging/main/07-giftbox-top.jpg', alt: '礼盒顶部设计', caption: '礼盒顶部' },
      { src: '/images/portfolio/packaging/main/08-giftbox-bottom.jpg', alt: '礼盒底部设计', caption: '礼盒底部' },
      { src: '/images/portfolio/packaging/main/09-tonic-layout.jpg', alt: '育发液包装展开图', caption: '育发液包装展开' },
    ],
    secondaryTitle: '其他包装作品',
    secondaryDescription: '包含烟盒、药盒、藕粉、鲜花饼等包装临摹与应用练习，重点训练结构展开、样机表达与商业包装的视觉完整度。',
    secondaryImages: [
      { src: '/images/portfolio/packaging/others/01-烟盒.jpg', alt: '烟盒包装平面图', caption: '烟盒包装' },
      { src: '/images/portfolio/packaging/others/02-烟盒样机.jpg', alt: '烟盒包装样机', caption: '烟盒样机' },
      { src: '/images/portfolio/packaging/others/03-药品临摹样机.jpg', alt: '药品包装样机', caption: '药品包装样机' },
      { src: '/images/portfolio/packaging/others/04-药盒临摹彩色平面图.jpg', alt: '药盒包装平面图', caption: '药盒平面图' },
      { src: '/images/portfolio/packaging/others/05-藕粉彩色平面图.jpg', alt: '藕粉包装平面图', caption: '藕粉平面图' },
      { src: '/images/portfolio/packaging/others/06-藕粉样机.jpg', alt: '藕粉包装样机', caption: '藕粉样机' },
      { src: '/images/portfolio/packaging/others/07-鲜花饼 样机.jpg', alt: '鲜花饼包装样机', caption: '鲜花饼样机' },
      { src: '/images/portfolio/packaging/others/08-鲜花饼彩色平面图.jpg', alt: '鲜花饼包装平面图', caption: '鲜花饼平面图' },
    ],
    details: ['提取敦煌壁画与九色鹿文化符号，转化为适合洗护产品的图形语言。', '以暖橙、米黄为主色，强化东方美学与温润质感。', '通过瓶身、盒体、礼盒、手提袋形成完整系列包装系统。'],
  },
  {
    id: 'poster',
    order: '02',
    title: '海报设计',
    english: 'Poster Design',
    route: '/sections/poster/',
    cover: '/images/portfolio/poster/cover.jpg',
    accent: '#ef4444',
    tags: ['文明主题', '扁平插画', '公益海报', '视觉传播'],
    summary: '以城市、家庭与交通场景为线索，用扁平插画呈现文明行为主题海报。',
    intro: '这组文明主题海报以扁平插画风格呈现，分别聚焦城市、家庭、交通三大生活场景。画面采用清新柔和的色彩与简洁线条，塑造垃圾分类、家务劳动、搀扶老人过马路等文明行为。',
    concept: '海报标题与标语呼应主题，人物动作清晰、场景直观，整体风格温馨明快，旨在用亲近生活的视觉方式引导大众践行文明行为。',
    displayHint: '文明主题六张系列海报作为主项目，其他海报与视觉练习放在后段。',
    mainTitle: '文明主题扁平插画海报',
    mainDescription: '六张海报以统一人物比例、色彩系统与版式节奏构成系列。画面减少复杂透视，强调行为动作和主题口号，使公益信息更容易被快速理解。',
    mainImages: [
      { src: '/images/portfolio/poster/main/01-垃圾分类.jpg', alt: '垃圾分类文明主题海报', caption: '垃圾分类' },
      { src: '/images/portfolio/poster/main/02-打扫卫生.jpg', alt: '打扫卫生文明主题海报', caption: '打扫卫生' },
      { src: '/images/portfolio/poster/main/03-捡垃圾.jpg', alt: '捡垃圾文明主题海报', caption: '环境维护' },
      { src: '/images/portfolio/poster/main/04-看书.jpg', alt: '阅读主题文明海报', caption: '文明阅读' },
      { src: '/images/portfolio/poster/main/05-车让人.jpg', alt: '车让人交通文明海报', caption: '交通文明' },
      { src: '/images/portfolio/poster/main/06-过马路.jpg', alt: '搀扶老人过马路海报', caption: '过马路' },
    ],
    secondaryTitle: '其他海报与视觉练习',
    secondaryDescription: '补充展示低碳、咖啡、演唱会、特产、名片等不同主题的平面视觉练习，呈现多样化版式与风格探索。',
    secondaryImages: [
      { src: '/images/portfolio/poster/others/01-低碳.jpg', alt: '低碳主题海报', caption: '低碳主题' },
      { src: '/images/portfolio/poster/others/02-古风少女.jpg', alt: '古风少女视觉海报', caption: '古风少女' },
      { src: '/images/portfolio/poster/others/03-名片效果图（ai）.jpg', alt: 'AI名片效果图', caption: '名片效果 AI' },
      { src: '/images/portfolio/poster/others/04-名片效果图（ps).jpg', alt: 'PS名片效果图', caption: '名片效果 PS' },
      { src: '/images/portfolio/poster/others/05-咖啡.jpg', alt: '咖啡主题海报', caption: '咖啡主题' },
      { src: '/images/portfolio/poster/others/06-提前十分钟.jpg', alt: '提前十分钟主题海报', caption: '提前十分钟' },
      { src: '/images/portfolio/poster/others/07-演唱会.jpg', alt: '演唱会主题海报', caption: '演唱会' },
      { src: '/images/portfolio/poster/others/08-特产.jpg', alt: '特产主题海报', caption: '特产主题' },
      { src: '/images/portfolio/poster/others/09-精神粮食.jpg', alt: '精神粮食主题海报', caption: '精神粮食' },
    ],
    details: ['以扁平化人物和生活场景降低信息理解门槛。', '通过统一色调、标题区和插画语言形成系列感。', '公益主题表达克制清晰，注重信息传播效率。'],
  },
  {
    id: 'book',
    order: '03',
    title: '书籍设计',
    english: 'Book Design',
    route: '/sections/book/',
    cover: '/images/portfolio/book/cover.jpg',
    accent: '#d97706',
    tags: ['山城记忆', '旅行手册', '图文排版', '重庆'],
    summary: '以“山城记忆”为主题，构建兼具文艺感与实用性的重庆城市旅行画册。',
    intro: '本画册以“山城记忆”为主题，聚焦重庆独特的城市气质与人文魅力，通过分栏式图文排版，打造兼具文艺感与实用性的城市旅行手册。',
    concept: '设计以暖橙、米棕为主色调，呼应重庆山城日落的氛围感；封面将轻轨与江景两大标志性场景并置，搭配书法体标题与城市标语，奠定怀旧文艺的基调。',
    displayHint: '以封面与跨页内页组成完整阅读节奏，呈现城市旅行手册的版式系统。',
    mainTitle: '山城记忆城市旅行画册',
    mainDescription: '内页以高清实景图搭配文字攻略，展现洪崖洞夜景、李子坝穿楼轻轨、黄桷湾立交等城市名片。排版疏密有致，图文信息清晰易读，让读者在翻阅间感受山水之城的生活气息。',
    mainImages: [
      { src: '/images/portfolio/book/main/01-封底封面.jpg', alt: '山城记忆画册封面与封底', caption: '封面与封底' },
      { src: '/images/portfolio/book/main/02-4-5.jpg', alt: '山城记忆画册内页4-5', caption: '内页 04-05' },
      { src: '/images/portfolio/book/main/03-8-9.jpg', alt: '山城记忆画册内页8-9', caption: '内页 08-09' },
      { src: '/images/portfolio/book/main/04-12-13.jpg', alt: '山城记忆画册内页12-13', caption: '内页 12-13' },
      { src: '/images/portfolio/book/main/05-14-15.jpg', alt: '山城记忆画册内页14-15', caption: '内页 14-15' },
      { src: '/images/portfolio/book/main/06-16-17.jpg', alt: '山城记忆画册内页16-17', caption: '内页 16-17' },
    ],
    details: ['以城市地标构成内容线索，强化重庆的空间记忆。', '暖橙与米棕营造怀旧、旅行、日落的阅读氛围。', '跨页图文排版兼顾信息阅读与画册观赏性。'],
  },
  {
    id: 'cultural',
    order: '04',
    title: '文创设计',
    english: 'Cultural Creative Design',
    route: '/sections/cultural/',
    cover: '/images/portfolio/cultural/cover.jpg',
    accent: '#2563eb',
    tags: ['彝族花鼓舞', '民族图形', '文创工艺品', '图形提取'],
    summary: '从彝族花鼓舞的动作、服饰与乐器中提取图形，探索民族文化的现代文创表达。',
    intro: '本项目对彝族花鼓舞的舞蹈动作、服饰、乐器道具等特征进行分析，提取其中具有识别度的图形元素，为文创工艺品设计提供视觉参照。',
    concept: '彝族常用的红、蓝、黑、黄等色彩既来自自然环境，也承载民族信仰、历史记忆与社会身份。本设计将彝族花鼓舞与现代审美需求融合，尝试在图形、色彩和应用载体上实现传统文化的再设计。',
    displayHint: '以封面主视觉、成品展示与设计图稿共同呈现从文化提取到文创应用的过程。',
    mainTitle: '彝族花鼓舞文创工艺品设计',
    mainDescription: '项目围绕舞蹈姿态、服饰纹样、乐器道具与民族色彩展开设计，将传统民俗中的动态美转化为适合文创产品应用的图形语言。',
    mainImages: [
      { src: '/images/portfolio/cultural/cover.jpg', alt: '彝族花鼓舞文创设计封面', caption: '项目主视觉' },
      { src: '/images/portfolio/cultural/main/01-4d2a0a8e9699be47243e44a20a9c3fe5.jpg', alt: '文创设计成品展示', caption: '文创展示 01' },
      { src: '/images/portfolio/cultural/main/02-7f1f72942effe74c4cc5059e3a8fe273.jpg', alt: '文创设计应用展示', caption: '文创展示 02' },
      { src: '/images/portfolio/cultural/main/03-a0e78243dd19aaab0a0252a842573380.jpg', alt: '文创设计应用展示', caption: '文创展示 03' },
      { src: '/images/portfolio/cultural/main/04-b4321d438e374393375f3d6e8179841e.jpg', alt: '文创设计应用展示', caption: '文创展示 04' },
      { src: '/images/portfolio/cultural/main/05-e2da22d1849ead88f9ca234b76fa790f.jpg', alt: '文创设计应用展示', caption: '文创展示 05' },
    ],
    secondaryTitle: '设计图稿与元素推导',
    secondaryDescription: '通过图形草稿、色彩组合和造型推导呈现设计过程，让作品不仅停留在成品展示，也能看到文化元素转译的路径。',
    secondaryImages: [
      { src: '/images/portfolio/cultural/sketches/01-0ce62e2df5c4efd7bf9dca1411dfac8e.jpg', alt: '文创设计图稿', caption: '图稿 01' },
      { src: '/images/portfolio/cultural/sketches/02-34bda25658f804def79e1e5a1685ee71.jpg', alt: '文创设计图稿', caption: '图稿 02' },
      { src: '/images/portfolio/cultural/sketches/03-562e36e1c934362e60b980b259288683.jpg', alt: '文创设计图稿', caption: '图稿 03' },
      { src: '/images/portfolio/cultural/sketches/04-76158858f965e112b2766776e3e44ad0.jpg', alt: '文创设计图稿', caption: '图稿 04' },
      { src: '/images/portfolio/cultural/sketches/05-8684a05fddea0d641f7d86f8d916a23f.jpg', alt: '文创设计图稿', caption: '图稿 05' },
      { src: '/images/portfolio/cultural/sketches/06-948ea1b2f1f7cbae422a2a584d5f59c8.jpg', alt: '文创设计图稿', caption: '图稿 06' },
      { src: '/images/portfolio/cultural/sketches/07-9ab098dc814928b48971b6a5f20edd21.jpg', alt: '文创设计图稿', caption: '图稿 07' },
      { src: '/images/portfolio/cultural/sketches/08-a1868f83855b1ada9be4e798c50cecc2.jpg', alt: '文创设计图稿', caption: '图稿 08' },
    ],
    details: ['从舞蹈动作、服饰、乐器道具中提取可识别的民族视觉符号。', '以红、蓝、黑、黄等高识别色彩传达彝族文化气质。', '将民俗元素转化为适合现代文创产品的图形与应用系统。'],
  },
];

export const getSection = (id: string) => portfolioSections.find((section) => section.id === id);
