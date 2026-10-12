import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Initialize Gemini Client safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health Check API
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Tour Content Generator Endpoint
app.post("/api/gemini/generate-tour", async (req, res) => {
  try {
    const {
      cityName,
      placeName,
      startPoint,
      endPoint,
      keyStops,
      videoType,
      targetAudience,
      platform,
      duration,
      language,
      tone,
      objective,
      realFilming,
      aiGenerated,
      customContext,
    } = req.body;

    const ai = getGeminiClient();

    const prompt = `
أنت مساعد إنتاج محتوى الجولات والسفر الخاص بـ "Stockholm Guide Academy" وبأسلوب المدرب رائد شهاب (RAED SHIHAB - Stockholm Guide).
يرجى توليد خطة فيديو متكاملة مع التفاصيل التالية:

معلومات المدخلات:
- المدينة: ${cityName || "ستوكهولم"}
- المكان / المسار: ${placeName || "جولة وسط المدينة"}
- نقطة البداية: ${startPoint || "Hötorget"}
- نقطة النهاية: ${endPoint || "Kungsträdgården"}
- أهم المحطات: ${keyStops || "Drottninggatan, Sergels torg"}
- نوع الفيديو: ${videoType || "جولة مشي حقيقية"}
- الجمهور المستهدف: ${targetAudience || "السياح والمقيمين العربي"}
- المنصة الرئيسية: ${platform || "TikTok & Reels"}
- المدة المطلوبة: ${duration || "40 ثانية"}
- اللغة: ${language || "العربية"}
- نبرة المحتوى: ${tone || "حماسية، تفاعلية، بدليل محلي خبير"}
- الهدف من الفيديو: ${objective || "زيادة التفاعل وحجز جولات سياحية"}
- طريقة الإنتاج: ${realFilming ? "تصوير واقعي بالهاتف" : ""} ${aiGenerated ? "مولد بالذكاء الاصطناعي" : ""}
- سياق إضافي: ${customContext || "لا يوجد"}

المطلوب: قم بإرجاع الاستجابة بتنسيق JSON فقط بناءً على هذا الهيكل:
{
  "ideaAndGoal": "فكرة الفيديو والهدف منه باختصار ودقة",
  "targetAudience": "تفاصيل الجمهور المستهدف وكيف يلامسهم",
  "suggestedRoute": ["المحطة 1", "المحطة 2", "المحطة 3", "المحطة 4"],
  "shotList": [
    {"shot": 1, "type": "لقطة واسعة", "description": "وصف المشهد وما يتم تصويره", "angle": "زاوية عين الطائر / مشي"},
    {"shot": 2, "type": "لقطة متوسطة", "description": "وصف المشهد", "angle": "POV أفقية"},
    {"shot": 3, "type": "لقطة قريبة", "description": "وصف تفاصيل المكان أو الطعام/الافتتاحية", "angle": "ثابتة / تفاعلية"}
  ],
  "hook": "الهوك الجاذب خلال أول ثانيتين لجذب الانتباه فوراً",
  "scriptAudio": "نص السيناريو والتعليق الصوتي الكامل بالشكل الدقيق المناسب للزمن المطلوب",
  "onScreenText": ["نص الشاشة 1", "نص الشاشة 2", "نص الشاشة 3"],
  "editingTimeline": [
    {"time": "00:00 - 00:03", "action": "الهوك السريع مع لقطة خاطفة للأنظار وقص سريع"},
    {"time": "00:03 - 00:15", "action": "عرض المحطة الأولى بالمسار وتسريع الحركة 1.2x"},
    {"time": "00:15 - 00:30", "action": "المعلومة الرئيسية واللحظة الشخصية"},
    {"time": "00:30 - 00:40", "action": "الخاتمة وCall To Action واضح"}
  ],
  "musicMood": "الموسيقى والمؤثرات الصوتية المقترحة المرخصة",
  "thumbnailConcept": "وصف فكرة الثمبل/الغلاف مع العنوان المكتوب بخط عريض",
  "alternativeTitles": ["عنوان 1 جذاب", "عنوان 2 كشف سر", "عنوان 3 للمشاركات"],
  "caption": "وصف المنشور (Caption) المنظم وواضح",
  "hashtags": ["#ستوكهولم", "#السويد", "#جولات_سياحية", "#StockholmGuide"],
  "callToAction": "الدعوة لاتخاذ إجراء (CTA الرئيسي)",
  "pinnedComment": "التعليق المثبت لزيادة النقاش أو طلب الحجز",
  "platformSpecificNotes": {
    "tiktok": "ملاحظات وتكييف لتيك توك",
    "reels": "ملاحظات وتكييف لإنسغرام ريلز",
    "youtube": "ملاحظات وتكييف لليوتيوب شورتس"
  },
  "shootingChecklist": ["شحن الهاتف والميكروفون", "مسح العدسة", "التحقق من إضاءة الشمس", "التصوير بوضعية 9:16"],
  "prePublishingChecklist": ["إضافة الترجمة RTL", "موازنة الصوت والموسيقى", "اختيار الغلاف", "إضافة الموقع الجغرافي"],
  "repurposingIdeas": ["تحويل الجولة إلى بوست كاروسيل سويد", "إنشاء ثريد تويتر عن المسار", "قصة استوري مع صندوق أسئلة"]
}
`;

    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          systemInstruction:
            "أنت خبير صناعة محتوى الجولات والدليل السياحي بالسيد رائد شهاب. صمم الخطة باللغة العربية بأسلوب احترافي وعملي جداً دون حشو.",
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      return res.json({ success: true, data: parsed, source: "gemini" });
    } else {
      // Fallback smart structured response when GEMINI_API_KEY is not set yet
      const mockResult = generateMockTourData(cityName, placeName, startPoint, endPoint, keyStops, duration);
      return res.json({ success: true, data: mockResult, source: "built-in-engine" });
    }
  } catch (err: any) {
    console.error("Error in generate-tour:", err);
    res.status(500).json({ success: false, error: err?.message || "Internal Server Error" });
  }
});

// AI Prompt Generator for Veo, Midjourney, CapCut
app.post("/api/gemini/generate-prompt", async (req, res) => {
  try {
    const { toolName, sceneDescription, style, aspectRatio } = req.body;
    const ai = getGeminiClient();

    const promptText = `
Generate a highly detailed prompt for video/image synthesis tool: "${toolName || "Veo 3.1 / Midjourney"}".
Scene context: "${sceneDescription || "A walking tour in Gamla Stan Stockholm with historic colorful cobblestone streets"}".
Style: "${style || "Cinematic 4k, natural daylight, professional travel documentary style"}".
Aspect Ratio: "${aspectRatio || "9:16"}".

Constraints to strictly include in output:
- Aspect Ratio: ${aspectRatio || "9:16"}
- Character facial/identity preservation statement: "Maximum facial and identity consistency with the uploaded reference image."
- Camera movement, lighting, ambient sound cues, negative prompt filters.

Return JSON in this format:
{
  "mainPrompt": "full english prompt here",
  "negativePrompt": "blurry, low quality, distorted faces, unrealistic architecture",
  "technicalSpecs": {
    "aspectRatio": "${aspectRatio || "9:16"}",
    "fps": "30fps",
    "lighting": "Golden hour natural sunlight",
    "camera": "Smooth tracking walking shot, eye level"
  },
  "usageGuideAr": "إرشادات استخدام البرومبت باللغة العربية داخل الأداة"
}
`;

    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: promptText,
        config: {
          responseMimeType: "application/json",
        },
      });
      const data = JSON.parse(response.text || "{}");
      return res.json({ success: true, data, source: "gemini" });
    } else {
      return res.json({
        success: true,
        data: {
          mainPrompt: `Ultra-realistic 4K video of a guide leading a walking tour in ${sceneDescription || "Stockholm Old Town"}, cinematic camera movement, 9:16 portrait vertical orientation, natural Swedish sunlight, crisp architecture details, Maximum facial and identity consistency with the uploaded reference image. --ar 9:16`,
          negativePrompt: "blurry, overexposed, distorted facial features, plastic skin, watermark",
          technicalSpecs: {
            aspectRatio: aspectRatio || "9:16",
            fps: "30fps",
            lighting: "Soft natural European daylight",
            camera: "Smooth steady-cam tracking shot walking forward",
          },
          usageGuideAr: "انسخ النص أعلاه والصقه مباشرة في أداة توليد الفيديو أو الصور المقترحة للحصول على أفضل دقة.",
        },
        source: "built-in-engine",
      });
    }
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || "Prompt generation failed" });
  }
});

// Helper mock generator for pre-filled or keyless states
function generateMockTourData(
  city = "ستوكهولم",
  place = "مسار السويد من Hötorget إلى Kungsträdgården",
  start = "Hötorget",
  end = "Kungsträdgården",
  stops = "Drottninggatan, Sergels torg",
  duration = "40 ثانية"
) {
  return {
    ideaAndGoal: `جولة مشي مكثفة وسريعة تبرز جمال واجهة ${city} السياحية من سوق ${start} مروراً بـ ${stops} وصولاً إلى حديقة ${end}. الهدف: جذب عشاق السفر وتحفيزهم على الحجز والتفاعل.`,
    targetAudience: "المسافرون العرب، السياح القادمون إلى السويد، والمقيمون المهتمون باكتشاف أماكن مشي ومطاعم مميزة.",
    suggestedRoute: [
      `1. ساحة الفواكه والزهور في ${start}`,
      "2. شارع التسوق المشهور Drottninggatan",
      "3. ساحة Sergels torg والمسلة الزجاجية",
      `4. حديقة الملوك ${end} والمقهى الشهير`,
    ],
    shotList: [
      {
        shot: 1,
        type: "لقطة قريبة تفاعلية",
        description: "البداية بمسك الهاتف بزاوية سيلفي مع إظهار ألوان ساحة Hötorget خلفك.",
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
    hook: "تخيل أن تمشي في أجمل 10 دقائق بقلب ستوكهولم دون أن تصرف كرونة واحدة؟ تعني هذه الخريطة السرية!",
    scriptAudio: `أهلاً بكم في ستوكهولم! اليوم سآخذكم في أجمل مسار مشي مجاني في قلب العاصمة السويدية. نبدأ من ساحة Hötorget حيث سوق الفواكه والزهور اليومية، ثم ندخل شارع Drottninggatan الأكثر حيوية. نمر بساحة Sergels torg مع المسلة الزجاجية الشهيرة، وننهي جولتنا بين أشجار ونوافير حديقة Kungsträdgården. حفظ الخريطة للفيديو وسجل معنا في جولات Stockholm Guide القادمة!`,
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
    thumbnailConcept: "صورة دافئة للوجوه مع الساحة التاريخية في الخلفية، ونص عريض باللون الأصفر السويدي: 'أجمل مسار مشي في ستوكهولم'",
    alternativeTitles: [
      "أجمل مسار مشي مجاني في ستوكهولم 🇸🇪",
      "سر التجول في قلب العاصمة السويدية بـ 10 دقائق",
      "كيف تكتشف ستوكهولم كالمحترفين مع Stockholm Guide",
    ],
    caption: `هل تخطط لزيارة السويد قريباً؟ 🇸🇪\nهذا هو المسار الأسهل والأجمل لاكتشاف قلب ستوكهولم مشياً على الأقدام:\n1. Hötorget\n2. Drottninggatan\n3. Sergels torg\n4. Kungsträdgården\n\nاحفظ المنشور وشاركه مع صديقك المسافر! 📌\nللحجز والجولات الخاصة تواصل معنا عبر البايو.\n\n#ستوكهولم #السويد #جولات_سياحية #StockholmGuide`,
    hashtags: ["#ستوكهولم", "#السويد", "#جولات_سياحية", "#StockholmGuide"],
    callToAction: "احفظ الفيديو وتابع حساب Stockholm Guide للمزيد من أسرار السويد!",
    pinnedComment: "ما هو أكثر مكان تحب زيارته في ستوكهولم؟ اكتب لي في التعليقات وسأرسل لك الخريطة كاملة! 👇",
    platformSpecificNotes: {
      tiktok: "ركز على أول ثانية بقص حركة القدمين، واستخدم الهاشتاغات الـ4 المحددة فقط.",
      reels: "ضعه في قائمة Reels وشارك القصة مع صندوق استطلاع للجمهور حول السفر للسويد.",
      youtube: "أضف الموقع الجغرافي دقيقاً وقدم رابط الحجز في أول سطر بالوصف.",
    },
    shootingChecklist: [
      "تنظيف عدسة كاميرا الهاتف قماش الألياف",
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
}

// Vite Server integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Stockholm Guide Academy] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
