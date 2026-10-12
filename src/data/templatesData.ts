import { TourTemplate } from "../types";

export const TOUR_TEMPLATES: TourTemplate[] = [
  {
    id: "tmpl-gamla-stan",
    titleAr: "جولة في البلدة القديمة (Gamla Stan)",
    category: "جولات مشي تاريخية",
    duration: "40 ثانية",
    descriptionAr: "قالب مخصص لاستعراض أزقة جملا ستان الزاهية، أضيق شارع في ستوكهولم (Mårten Trotzigs gränd)، والساحة التاريخية.",
    sampleRoute: "Stortorget → Mårten Trotzigs gränd → Kungliga Slottet",
    keyHighlights: ["أزقة ضيقة ملونة", "المباني التاريخية القرن الـ 17", "القصر الملكي السويدي"],
    suggestedHook: "هل تعلم أن أضيق شارع في ستوكهولم عرض متري واحد فقط؟ تعالوا نمشي فيه معاً!",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "البلدة القديمة Gamla Stan",
      startPoint: "ساحة Stortorget",
      endPoint: "القصر الملكي Kungliga Slottet",
      keyStops: "Mårten Trotzigs gränd, الساحات التاريخية",
      videoType: "جولة مشي حقيقية",
      duration: "40 ثانية",
      platform: "tiktok"
    }
  },
  {
    id: "tmpl-metro-to-lake",
    titleAr: "جولة من محطة المترو إلى البحيرة",
    category: "طبيعة ومواصلات",
    duration: "45 ثانية",
    descriptionAr: "استعراض خط السير السهل من إحدى محطات المترو الفنية في ستوكهولم حتى إطلالة البحيرة والشواطئ.",
    sampleRoute: "T-Centralen → Slussen → Monteliusvägen Viewpoint",
    keyHighlights: ["الفن في محطات المترو السويدية", "الإطلالة البانورامية على البحيرة", "أماكن استراحة مجانية"],
    suggestedHook: "أسهل طريقة للوصول إلى أجمل إطلالة غروب في السويد باستخدام المترو فقط!",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "إطلالة Monteliusvägen",
      startPoint: "محطة Slussen",
      endPoint: "مطل Monteliusvägen",
      keyStops: "المترو الفني، الإطلالة، الجسر الخشبي",
      videoType: "فيديو مواصلات وطبيعة",
      duration: "45 ثانية",
      platform: "instagram_reels"
    }
  },
  {
    id: "tmpl-hidden-spot",
    titleAr: "مكان مخفي في ستوكهولم",
    category: "أماكن سرية",
    duration: "30 ثانية",
    descriptionAr: "تسليط الضوء على حديقة سرية أو مقهى مخفي داخل أحد المباني التاريخية لا يعرفه إلا المقيمون الخبراء.",
    sampleRoute: "حديقة Rosendals Trädgård السريعة",
    keyHighlights: ["بيوت زجاجية دافئة", "كعك السويد التقليدي Fika", "هدوء وطبيعة خضراء"],
    suggestedHook: "هذا هو المقهى السري في السويد الذي لا يعرفه 95% من السياح!",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "حديقة ومقهى Rosendals Trädgård",
      startPoint: "Djurgården",
      endPoint: "المقهى الزجاجي",
      keyStops: "الحدائق الخضراء، جلسة الفيكا السويدية",
      videoType: "فيديو مكان مخفي",
      duration: "30 ثانية",
      platform: "tiktok"
    }
  },
  {
    id: "tmpl-shopping-street",
    titleAr: "شارع تسوق (Drottninggatan)",
    category: "تسوق وتجول",
    duration: "35 ثانية",
    descriptionAr: "جولة سريعة بين المتاجر الشهيرة، الهدايا التذكارية، والأجواء الحيوية لشارع التسوق الرئيسي.",
    sampleRoute: "Hötorget → Drottninggatan → Sergels torg",
    keyHighlights: ["المتاجر السويدية", "المقاهي المفتوحة", "شراء الهدايا التذكارية"],
    suggestedHook: "أين تشتري أجمل الهدايا السويدية بأسعار معقولة في ستوكهولم؟",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "شارع Drottninggatan",
      startPoint: "Hötorget",
      endPoint: "Sergels torg",
      keyStops: "متاجر الهدايا، محلات الفيلكا، الأجواء التجارية",
      videoType: "فيديو تسوق ونشاط حركي",
      duration: "35 ثانية",
      platform: "instagram_reels"
    }
  },
  {
    id: "tmpl-museum-palace",
    titleAr: "متحف أو قصر ملكي (Vasa Museum)",
    category: "ثقافة وتاريخ",
    duration: "50 ثانية",
    descriptionAr: "فيديو تعليمي ممتع يتناول قصة السفينة الأسطورية Vasa أو تفاصيل قصر Drottningholm.",
    sampleRoute: "مدخل متحف فازا → السفينة الضخمة → التماثيل الخشبية",
    keyHighlights: ["السفينة الغارقة عام 1628", "النقوش الخشبية الأصلية", "قصة العثور عليها"],
    suggestedHook: "سفينة خشبية غرقَت في أول 20 دقيقة، وبقيت قاع البحر 333 سنة! تعالوا نراها معاً.",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "متحف فازا Vasa Museum",
      startPoint: "جزيرة Djurgården",
      endPoint: "قاعة السفينة الأصلية",
      keyStops: "مدخل المتحف، الهيكل الخشبي، المعرض التفاعلي",
      videoType: "فيديو معلومات سياحية وثقافية",
      duration: "50 ثانية",
      platform: "youtube_shorts"
    }
  },
  {
    id: "tmpl-arab-restaurant",
    titleAr: "مطعم عربي أو مقهى في ستوكهولم",
    category: "طعام ومطاعم",
    duration: "40 ثانية",
    descriptionAr: "تجربة طعام عربي أو دمشقي دافئ في ستوكهولم مع التقييم الصريح والنظافة والموقع.",
    sampleRoute: "واجهة المطعم → تجهيز الأطباق → تجربة اللقمة الأولى → السعر والتقييم",
    keyHighlights: ["نكهة أصيلة في الغربة", "الضيافة العربية في السويد", "الأسعار والنظافة"],
    suggestedHook: "أين تأكل أفضل وجبة شامية دافئة في قلب ستوكهولم في طقس الشتاء؟",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "مطعم عربي مميز في ستوكهولم",
      startPoint: "الشارع الخارجي",
      endPoint: "طاولة الطعام",
      keyStops: "المدخل، التحضير، تجربة المذاق",
      videoType: "فيديو مطعم أو فندق",
      duration: "40 ثانية",
      platform: "tiktok"
    }
  },
  {
    id: "tmpl-private-tour-booking",
    titleAr: "إعلان حجز جولة خاصة مع Stockholm Guide",
    category: "ترويج وحجوزات",
    duration: "30 ثانية",
    descriptionAr: "فيديو تسويقي راقٍ يستعرض خدمات الجولات السياحية الخاصة المخصصة للعائلات والأفراد بدليل محلي خبير.",
    sampleRoute: "استعراض المشاهد الجمالية + الترحيب + رابط الاستمارة",
    keyHighlights: ["مسارات مخصصة بدون عناء", "سيارة أو مشي مريح", "معلومات تاريخية ودقيقة"],
    suggestedHook: "تخطط لزيارة السويد؟ لا تضيع وقتك في البحث، دعنا نصمم لك أجمل جولة خاصة بنفسنا!",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "جولات Stockholm Guide الخاصة",
      startPoint: "فندق الإقامة",
      endPoint: "معالم المدينة الرئيسية",
      keyStops: "الاستقبال، المسار المخصص، الصور الذكرية",
      videoType: "إعلان جولة مدفوعة",
      duration: "30 ثانية",
      platform: "instagram_reels"
    }
  },
  {
    id: "tmpl-local-guide-intro",
    titleAr: "فيديو تعريفي بدليل سياحي (RAED SHIHAB Style)",
    category: "بناء الهوية الشخصية",
    duration: "45 ثانية",
    descriptionAr: "تقديم نفسك كدليل محلي يمتلك الخبرة والشغف بالسويد منذ سنوات، وبناء الثقة المباشرة مع المتابعين.",
    sampleRoute: "الابتسامة أمام معلم ستوكهولم + رسالة الترحيب + الشغف",
    keyHighlights: ["خبرة طويلة منذ 2007", "معرفة بجميع أسرار المدن السويدية", "أسلوب راقٍ وودود"],
    suggestedHook: "أهلاً بكم! أنا رائد شهاب، دليلكم المحلي في ستوكهولم منذ أكثر من 17 سنة...",
    presetData: {
      cityName: "ستوكهولم",
      placeName: "معالم ستوكهولم البارزة",
      startPoint: "البلدة القديمة",
      endPoint: "مرفأ القوارب",
      keyStops: "الترحيب، التعريف بالرسالة، الترحيب بالزوار",
      videoType: "فيديو قصة شخصية وتعرفية",
      duration: "45 ثانية",
      platform: "instagram_reels"
    }
  }
];
