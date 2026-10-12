import React, { useState } from "react";
import {
  Share2,
  Copy,
  Check,
  Smartphone,
  Video,
  FileText,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Platform } from "../types";

export const PlatformAdaptationView: React.FC = () => {
  const [baseText, setBaseText] = useState<string>(
    "جولة مشي ممتعة في قلب ستوكهولم من ساحة Hötorget مرورا بـ Drottninggatan وSergels torg حتى حديقة Kungsträdgården. استمتع بأجمل المعالم والمقاهي مع Stockholm Guide."
  );

  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("tiktok");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const platformsConfig: {
    id: Platform;
    nameAr: string;
    icon: string;
    aspectRatio: string;
    hookStyleAr: string;
    formatAdviceAr: string;
    adaptedCaptionAr: string;
    ctaAr: string;
    hashtagsAr: string[];
  }[] = [
    {
      id: "tiktok",
      nameAr: "TikTok",
      icon: "🎵",
      aspectRatio: "9:16 رأسية",
      hookStyleAr: "هوك حركي خاطف أول ثانية بقص القدمين أو أسئلة الانتباه السريعة.",
      formatAdviceAr: "فيديو رأسي 9:16 بدون علامة مائية + نص عربي مع اتجاه RTL وموسيقى تريند ترخيصية.",
      adaptedCaptionAr: `هل تخطط لزيارة ستوكهولم؟ 🇸🇪\nهذا هو أجمل مسار مشي مجاني في قلب المدينة:\n1. Hötorget\n2. Drottninggatan\n3. Sergels torg\n4. Kungsträdgården\n\nاحفظ الفيديو واشترك مع صديقك! 📌`,
      ctaAr: "تابع حساب Stockholm Guide للمزيد من أسرار السويد! 👇",
      hashtagsAr: ["#ستوكهولم", "#السويد", "#جولات_سياحية", "#StockholmGuide"],
    },
    {
      id: "instagram_reels",
      nameAr: "Instagram Reels",
      icon: "📸",
      aspectRatio: "9:16 رأسية",
      hookStyleAr: "بصري جذاب جداً مع إظهار زوايا الكاميرا الدافئة وتأثير الصوت النقية.",
      formatAdviceAr: "شارك الفيديو في Reels + نشر قصة (Story) تدعم الفيديو مع استطلاع رأي.",
      adaptedCaptionAr: `اكتشف قلب ستوكهولم مشياً على الأقدام 🇸🇪✨\nمسار متكامل يبدأ من سوق الفواكه ويصل إلى حديقة الملوك.\n\nتواصل معنا للحصول على خريطة الجولة كاملة عبر الرسائل الخاصة! 📌`,
      ctaAr: "احفظ المنشور وشاركه مع مسافر جديد السويد 📌",
      hashtagsAr: ["#ستوكهولم", "#السويد", "#StockholmGuide", "#سياحة_السويد"],
    },
    {
      id: "youtube_shorts",
      nameAr: "YouTube Shorts",
      icon: "🔴",
      aspectRatio: "9:16 رأسية",
      hookStyleAr: "عنوان قابل للبحث مع بداية صوتية مباشرة بدون مقدمات طويلة.",
      formatAdviceAr: "أضف اسم المدينة والموقع الجغرافي الدقيق مع توجيه برابط الجولة الطويلة بالوصف.",
      adaptedCaptionAr: `أجمل مسار مشي في ستوكهولم السويد 🇸🇪 | Stockholm Walking Tour`,
      ctaAr: "اشترك بالقناة لمشاهدة دليل السويد الشامل! 🔔",
      hashtagsAr: ["#Shorts", "#ستوكهولم", "#السويد", "#Stockholm"],
    },
    {
      id: "youtube_long",
      nameAr: "YouTube Long-Form",
      icon: "▶️",
      aspectRatio: "16:9 أفقية",
      hookStyleAr: "مقدمة سينمائية مكثفة 10 ثوانٍ تشمل أمتع مقتطفات الجولة كاملة.",
      formatAdviceAr: "فيديو أفقي شامل يتضمن فصول مقترحة (Chapters) وتعيين شاشة نهاية وغلاف CTR عالي.",
      adaptedCaptionAr: `دليل ستوكهولم الشامل | أجمل مسار مشي مجاني من Hötorget إلى Kungsträdgården 🇸🇪\n\nفي هذا الفيديو سآخذكم في جولة تفصيلية داخل العاصمة السويدية...`,
      ctaAr: "للحجز والجولات الخاصة تواصل عبر الرابط المرفق بالوصف 📌",
      hashtagsAr: ["#ستوكهولم", "#دليل_السويد", "#StockholmGuide", "#جولات_السويد"],
    },
    {
      id: "facebook",
      nameAr: "Facebook",
      icon: "🔵",
      aspectRatio: "9:16 أو 4:5",
      hookStyleAr: "سؤال تشجيعي يثير نقاش المتابعين والعائلات المهتمة بالهجرة أو السياحة.",
      formatAdviceAr: "نشر الفيديو بوضعية Reels أو منشور عادي مع فتح مساحة أسئلة وتفاعل بالتعليقات.",
      adaptedCaptionAr: `هل زرتم ستوكهولم من قبل؟ 🇸🇪\nشاركنا مكانك المفضل في السويد أو اسألنا عن أفضل أوقات الجولات السياحية!`,
      ctaAr: "انضم لمجموعة Stockholm Guide للتواصل المباشر مع المسافرين 👥",
      hashtagsAr: ["#السويد", "#ستوكهولم", "#StockholmGuide"],
    },
    {
      id: "snapchat",
      nameAr: "Snapchat Stories",
      icon: "👻",
      aspectRatio: "9:16 رأسية",
      hookStyleAr: "تقسيم القصة إلى مقاطع سريعة 5-10 ثوانٍ بأسلوب يوميات دافئ مباشر.",
      formatAdviceAr: "استخدم نصوصاً كبيرة بخط عريض، واطلب السحب لأعلى (Swipe Up) للحجز.",
      adaptedCaptionAr: `تغطية خاصة وجولة مشي من قلب ستوكهولم 🇸🇪 اسحب الشاشة للحصول على الخريطة!`,
      ctaAr: "اسحب الشاشة للوصول لرابط حجز الجولة الخاصة 📲",
      hashtagsAr: ["#ستوكهولم", "#السويد"],
    },
    {
      id: "linkedin",
      nameAr: "LinkedIn",
      icon: "💼",
      aspectRatio: "16:9 أو 1:1",
      hookStyleAr: "تحويل التجربة إلى قصة مهنية وملاحظة في صناعة المحتوى والسياحة المحلية.",
      formatAdviceAr: "إبراز الخبرة المحلية دون مبالغة، والتحدث عن تسويق الوجهات السياحية وتجربة الزائر.",
      adaptedCaptionAr: `كيف تؤثر جولات المشي الذكية على انطباع الزائر وصناعة السياحة المحلية في ستوكهولم؟ 🇸🇪\nرؤى من واقع خبرة 17 سنة كدليل ومصمم تجارب سفر مع Stockholm Guide.`,
      ctaAr: "يسعدني التواصل والتعاون في مجال الاستشارات السياحية وصناعة المحتوى. 🤝",
      hashtagsAr: ["#TourismStrategy", "#StockholmGuide", "#ContentCreation", "#Sweden"],
    },
    {
      id: "x",
      nameAr: "X (Twitter)",
      icon: "🐦",
      aspectRatio: "16:9 أو صور",
      hookStyleAr: "منشور مختصر أو ثريد (Thread) مرتب بأسهم توضيحية خالية من الحشو.",
      formatAdviceAr: "كتابة ثريد من 4 تغريدات متتالية تغطي محطات المسار من Hötorget إلى Kungsträdgården.",
      adaptedCaptionAr: `🧵 [ثريد] الخريطة الكاملة لأجمل مسار مشي مجاني في ستوكهولم 🇸🇪:\n1/4 البداية من سوق Hötorget...\n2/4 شارع Drottninggatan...\n3/4 ساحة Sergels torg...\n4/4 حديقة Kungsträdgården...`,
      ctaAr: "رتويت للمنشور ليعم النفع لجميع المسافرين للسويد! 🔄",
      hashtagsAr: ["#ستوكهولم", "#السويد", "#StockholmGuide"],
    },
  ];

  const activePlatConfig =
    platformsConfig.find((p) => p.id === selectedPlatform) || platformsConfig[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
          <Share2 className="w-3.5 h-3.5" />
          <span>استوديو التوزيع الاجتماعي المتعدد</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          تكييف منشور واحد لجميع منصات التواصل الاجتماعي
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          لا تكرر نفس النص حرفياً لكل المنصات! الأداة تكيّف الطول، الهوك، الـ CTA والهاشتاغات المحددة حسب خوارزميات كل شبكة.
        </p>
      </div>

      {/* Input Source Text */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-3 shadow-md">
        <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
          <span>فكرة أو نص الجولة الأساسي:</span>
          <span className="text-xs text-amber-500">سيتم تكييفه تلقائياً لجميع المنصات 👇</span>
        </label>
        <textarea
          value={baseText}
          onChange={(e) => setBaseText(e.target.value)}
          rows={3}
          className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs leading-relaxed focus:outline-none focus:border-amber-500"
        />
      </div>

      {/* Platform Tabs & Adapted Card View */}
      <div className="space-y-4">
        {/* Platform Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
          {platformsConfig.map((p) => {
            const isSelected = p.id === selectedPlatform;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPlatform(p.id)}
                className={`px-4 py-2.5 rounded-xl font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-400"
                }`}
              >
                <span>{p.icon}</span>
                <span>{p.nameAr}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Platform Detailed Preview */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{activePlatConfig.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{activePlatConfig.nameAr}</h3>
                <span className="text-xs text-amber-500 font-medium">مقاس الفيديو المطلوب: {activePlatConfig.aspectRatio}</span>
              </div>
            </div>

            <button
              onClick={() => handleCopy(activePlatConfig.adaptedCaptionAr, activePlatConfig.id)}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow hover:bg-amber-400"
            >
              {copiedKey === activePlatConfig.id ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
              <span>نسخ منشور {activePlatConfig.nameAr}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-amber-500 block">أسلوب الهوك المخصص للمنصة:</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activePlatConfig.hookStyleAr}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-blue-500 block">توجيه التصوير والتنسيق:</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activePlatConfig.formatAdviceAr}</p>
            </div>
          </div>

          {/* Adapted Caption Output */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-900 dark:text-white block">نص الكابشن المنسق والمكيف:</span>
            <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800">
              {activePlatConfig.adaptedCaptionAr}
            </div>
          </div>

          {/* CTA & Hashtags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-emerald-500 block">الدعوة لاتخاذ إجراء (CTA):</span>
              <p className="text-slate-800 dark:text-slate-200 font-bold">{activePlatConfig.ctaAr}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-amber-500 block">الهاشتاغات المحددة (4 هاشتاغات):</span>
              <div className="flex flex-wrap gap-1 pt-1">
                {activePlatConfig.hashtagsAr.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
