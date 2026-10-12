import { AnalyticsData, CalendarItem, TourProject, UserProfile } from "../types";

export const DEFAULT_USER_PROFILE: UserProfile = {
  id: "user-1",
  name: "صانع المحتوى المبدع",
  email: "creator@stockholmguide.se",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  level: "intermediate",
  niches: ["travel", "walking_tours", "city_info"],
  platforms: ["tiktok", "instagram_reels", "youtube_shorts"],
  completedLessonIds: ["u1-l1"],
  savedProjectIds: ["demo-project-1"],
  hasProAccess: true,
  notes: {
    "u1-l1": "ملاحظة شخصية: ترسيخ الاسم Stockholm Guide Raed Shihab كمرجع موثوق للسياحة في السويد.",
  },
};

export const DEMO_PROJECT: TourProject = {
  id: "demo-project-1",
  createdAt: "2026-07-21T12:00:00Z",
  title: "جولة وسط المدينة (Hötorget → Kungsträdgården)",
  cityName: "ستوكهولم",
  placeName: "مسار السويد التاريخي والتجاري",
  startPoint: "Hötorget (سوق الفواكه والزهور)",
  endPoint: "Kungsträdgården (حديقة الملوك)",
  keyStops: "Drottninggatan (شارع التسوق), Sergels torg (البرج الزجاجي)",
  videoType: "جولة مشي حقيقية بالهاتف",
  targetAudience: "السياح والمقيمون العرب في السويد والمهتمون بالسفر",
  platform: "tiktok",
  duration: "40 ثانية",
  language: "العربية",
  tone: "حماسية ودودة بأسلوب دليل محلي",
  objective: "زيادة الحجوزات والتفاعل مع الجمهور",

  ideaAndGoal: "جولة مشي مكثفة وسريعة تبرز جمال واجهة ستوكهولم السياحية من سوق Hötorget مروراً بـ Drottninggatan وSergels torg وصولاً إلى حديقة Kungsträdgården. الهدف: إبراز سهولة التنقل مشياً وتحفيز المتابعين على حفظ الخريطة وحجز جولة خاصة.",
  suggestedRoute: [
    "1. ساحة الفواكه والزهور في Hötorget",
    "2. شارع التسوق المشهور Drottninggatan",
    "3. ساحة Sergels torg والمسلة الزجاجية",
    "4. حديقة الملوك Kungsträdgården والمقهى الشهير",
  ],
  shotList: [
    {
      shot: 1,
      type: "لقطة قريبة تفاعلية",
      description: "البداية بمسك الهاتف بزاوية سيلفي مع إظهار ألوان سوق Hötorget خلفك.",
      angle: "سيلفي زاوية 45 درجة مع حركة مشي احترافية",
    },
    {
      shot: 2,
      type: "لقطة واسعة POV",
      description: "المشي نحو شارع Drottninggatan وإظهار حيوية المارة وحركة الشارع.",
      angle: "POV مستوى العين مع ثبات التثبيت",
    },
    {
      shot: 3,
      type: "لقطة حركية سريعة",
      description: "الانتقال إلى ساحة Sergels torg مع كشف البرج الزجاجي الشاهق.",
      angle: "زاوية من الأسفل إلى الأعلى (Low Angle)",
    },
    {
      shot: 4,
      type: "لقطة ختامية دافئة",
      description: "الوصول إلى حديقة Kungsträdgården والابتسامة نحو الكاميرا مع دعوتهم للمتابعة والحجز.",
      angle: "لقطة متوسطة مع خلفية الأشجار المضيئة",
    },
  ],
  hook: "تخيل أن تمشي في أجمل 10 دقائق بقلب ستوكهولم دون أن تصرف كرونة واحدة؟ تعالي نكتشف الخريطة معاً!",
  scriptAudio: "أهلاً بكم في ستوكهولم! اليوم سآخذكم في أجمل مسار مشي مجاني في قلب العاصمة السويدية. نبدأ من ساحة Hötorget حيث سوق الفواكه والزهور اليومية، ثم ندخل شارع Drottninggatan الأكثر حيوية. نمر بساحة Sergels torg مع المسلة الزجاجية الشهيرة، وننهي جولتنا بين أشجار ونوافير حديقة Kungsträdgården. احفظ الخريطة وتابع Stockholm Guide للجولة القادمة!",
  onScreenText: [
    "📍 مسار ستوكهولم السري مجاناً!",
    "1️⃣ ساحة Hötorget",
    "2️⃣ شارع Drottninggatan",
    "3️⃣ Sergels torg & Kungsträdgården",
    "احفظ الفيديو لجولتك القادمة 📌",
  ],
  editingTimeline: [
    { time: "00:00 - 00:03", action: "الهوك الخاطف + إظهار اسم المكان على الشاشة بخط عريض" },
    { time: "00:03 - 00:15", action: "استعراض الساحة وشارع التسوق مع تسريع 1.2x ومؤثر صوت مشي" },
    { time: "00:15 - 00:30", action: "الوصول للساحة الرئيسية والحديقة مع إبراز المعالم السياحية" },
    { time: "00:30 - 00:40", action: "الختام ودعوة الحجز مع إظهار الشعار RAED SHIHAB | Stockholm Guide" },
  ],
  musicMood: "إيقاع حاد ودافيء مزيج من الموسيقى السويدية الحديثة والألترا لو-فاي المبهجة (Upbeat Acoustic Travel)",
  thumbnailConcept: "صورة دافئة مع الساحة التاريخية في الخلفية، ونص عريض باللون الأصفر السويدي: 'أجمل مسار مشي في ستوكهولم'",
  alternativeTitles: [
    "أجمل مسار مشي مجاني في ستوكهولم 🇸🇪",
    "سر التجول في قلب العاصمة السويدية بـ 10 دقائق",
    "كيف تكتشف ستوكهولم كالمحترفين مع Stockholm Guide",
  ],
  caption: "هل تخطط لزيارة السويد قريباً؟ 🇸🇪\nهذا هو المسار الأسهل والأجمل لاكتشاف قلب ستوكهولم مشياً على الأقدام:\n1. Hötorget\n2. Drottninggatan\n3. Sergels torg\n4. Kungsträdgården\n\nاحفظ المنشور وشاركه مع صديقك المسافر! 📌\nللحجز والجولات الخاصة تواصل معنا عبر البايو.\n\n#ستوكهولم #السويد #جولات_سياحية #StockholmGuide",
  hashtags: ["#ستوكهولم", "#السويد", "#جولات_سياحية", "#StockholmGuide"],
  callToAction: "احفظ الفيديو وتابع حساب Stockholm Guide للمزيد من أسرار السويد!",
  pinnedComment: "ما هو أكثر مكان تحب زيارته في ستوكهولم؟ اكتب لي في التعليقات وسأرسل لك الخريطة كاملة! 👇",
  platformSpecificNotes: {
    tiktok: "ركز على أول ثانية بقص حركة القدمين، واستخدم الهاشتاغات الـ4 المحددة فقط.",
    reels: "ضعه في قائمة Reels وشارك القصة مع صندوق استطلاع للجمهور حول السفر للسويد.",
    youtube: "أضف الموقع الجغرافي دقيقاً وقدم رابط الحجز في أول سطر بالوصف.",
  },
  shootingChecklist: [
    "تنظيف عدسة كاميرا الهاتف بقماش الألياف",
    "تجهيز الميكروفون اللاسلكي والتحقق من عزل الهواء",
    "ضبط وضع التصوير على 4K 60fps ووضع الثبات (Action Mode)",
    "تجهيز خطة الطقس البديلة في حال المطر",
  ],
  prePublishingChecklist: [
    "مراجعة الترجمة العربية RTL وتأكيد المحاذاة",
    "تضمين الشعار: RAED SHIHAB | Stockholm Guide",
    "موازنة الصوت بنسبة -14 LUFS",
    "إضافة الموقع الجغرافي Stockholm, Sweden",
  ],
  repurposingIdeas: [
    "تحويل النقاط الـ4 إلى منشور Carousel صور على إنستغرام",
    "كتابة ثريد منصة X عن تاريخ الشارع التجاري",
    "نشر مقطع صوتي مخصص كتعليق صوتي تريند",
  ],
};

export const MOCK_CALENDAR_ITEMS: CalendarItem[] = [
  {
    id: "cal-1",
    title: "جولة وسط المدينة (Hötorget → Kungsträdgården)",
    location: "ستوكهولم",
    platform: "tiktok",
    status: "ready",
    filmingDate: "2026-07-20",
    publishDate: "2026-07-22",
    notes: "تم تجهيز الفيديو وتصديره بدون علامة مائية",
    performanceViews: 14200,
    nextSuggestedVideo: "مطعم دمشقي مميز في ستوكهولم",
  },
  {
    id: "cal-2",
    title: "أسرار أضيق شارع في Gamla Stan",
    location: "البلدة القديمة ستوكهولم",
    platform: "instagram_reels",
    status: "filmed",
    filmingDate: "2026-07-21",
    publishDate: "2026-07-24",
    notes: "يحتاج إضافة التعليق الصوتي والترجمة العربية RTL",
  },
  {
    id: "cal-3",
    title: "قصة سفينة فازا Vasa Museum",
    location: "Djurgården",
    platform: "youtube_shorts",
    status: "planned",
    filmingDate: "2026-07-25",
    publishDate: "2026-07-27",
  },
  {
    id: "cal-4",
    title: "أجمل إطلالة غروب من Monteliusvägen",
    location: "Södermalm",
    platform: "tiktok",
    status: "idea",
    notes: "التصوير في الساعة 8 مساءً مع طقس صافٍ",
  },
];

export const MOCK_ANALYTICS: AnalyticsData = {
  totalVideos: 28,
  totalViews: 384500,
  avgWatchTimeSeconds: 34,
  completionRatePct: 68.4,
  engagementRatePct: 9.2,
  totalBookmarks: 18400,
  totalShares: 7200,
  totalComments: 3100,
  profileVisits: 14500,
  tourInquiries: 86,
  directBookings: 24,
  bestPlatform: "TikTok",
  bestDistrict: "Gamla Stan (البلدة القديمة)",
  bestHookType: "هوك السر والأرقام المباشرة",
  bestVideoLength: "35 - 45 ثانية",
};

export const FAQS_LIST = [
  {
    qAr: "هل أحتاج إلى كاميرا احترافية باهظة لتصوير فيديوهات السفر؟",
    aAr: "لا مطلقاً! 90% من أنجح فيديوهات الجولات في السويد والعالم تم تصويرها بالهواتف الذكية (iPhone / Samsung). المهم هو تنظيف العدسة، استخدام ميكروفون لاسلكي ذو عازل هواء، والتصوير بإضاءة طبيعية.",
  },
  {
    qAr: "كيف أضمن احترام الخصوصية أثناء التصوير في السويد؟",
    aAr: "القوانين الأوروبية والسويدية تمنع تصوير وجوه الأطفال والناس عن قرب دون إذن. تجنب التثبيت على شخص محدد، واستخدم زوايا التصوير المفتوحة أو تصوير الحركة من الخلف POV.",
  },
  {
    qAr: "هل تقدم الأكاديمية ضمانات بأرباح معينة من الجولات؟",
    aAr: "لا توفر الأكاديمية أي إغراءات أو ضمانات أرباح وهمية. نحن نمنحك الخطة والأدوات العلمية والخبرة الميدانية المباشرة لرائد شهاب منذ عام 2007 لتطوير عملك ودخلك الحقيقي.",
  },
];
