import { CourseUnit } from "../types";

export const COURSE_UNITS: CourseUnit[] = [
  {
    id: 1,
    titleAr: "الوحدة 1: بناء الهوية",
    titleEn: "Unit 1: Brand Identity",
    titleSv: "Modul 1: Varumärkesidentitet",
    descriptionAr: "تعلم كيفية اختيار اسم الحساب، تحديد مجال المحتوى، كتابة Bio احترافي، وبناء هوية بصرية ثابتة كدليل محلي.",
    iconName: "UserCheck",
    lessons: [
      {
        id: "u1-l1",
        titleAr: "اختيار اسم الحساب والجمهور المستهدف",
        titleEn: "Account Name & Target Audience",
        titleSv: "Konto Namn & Målgrupp",
        durationMinutes: 12,
        contentAr: `في هذه المادة ستتعلم كيفية اختيار اسم يعكس خبرتك المحلية دون مبالغة. يجب أن يحتوي اسمك على مجال عملك أو مدينتك (مثل: Stockholm Guide | Raed Shihab).\nتحديد جمهورك بدقة (سياح، مقيمون جدد، عشاق السفر) هو خطوتك الأولى لصناعة محتوى يثير اهتمامهم فوراً.`,
        contentEn: "Learn how to choose an account name that reflects your local expertise and define your target audience.",
        contentSv: "Lär dig välja ett kontonamn som speglar din lokala kännedom och definiera din målgrupp.",
        practicalExerciseAr: "اكتب 3 مقترحات لأسماء حسابك على المنصات وحدد جمهورك المستهدف في فقرة واحدة.",
        downloadableChecklistAr: [
          "تأكد أن الاسم سهل الحفظ والبحث",
          "تجنب استخدام أرقام عشوائية أو رموز معقدة",
          "تأكد من توفر الاسم على TikTok وInstagram وYouTube",
          "ربط الاسم باسم المدينة أو التخصص السياحي"
        ],
        quiz: {
          id: "q1-1",
          questionAr: "ما هو أفضل نمط لكتابة Bio احترافي لدليل سياحي؟",
          questionEn: "What is the best format for a local guide bio?",
          questionSv: "Vad är det bästa formatet för en lokal guides bio?",
          optionsAr: [
            "قائمة طويلة بالأرقام والأرباح",
            "رسالة موجهة للجمهور + التخصص + خريطة/رابط الحجز + CTA واضح",
            "اقتباسات شعرية عامة دون تحديد مكان الجولات",
            "ترك البايو فارغاً للاعتماد على الصور"
          ],
          optionsEn: ["Long list of numbers", "Target message + Specialty + Booking Link + Clear CTA", "Generic quotes", "Empty bio"],
          optionsSv: ["Lång lista med siffror", "Riktat meddelande + Specialitet + Bokningslänk + Tydlig CTA", "Allmänna citat", "Tom bio"],
          correctIndex: 1
        }
      },
      {
        id: "u1-l2",
        titleAr: "كتابة Bio احترافي وبناء Call to Action",
        titleEn: "Professional Bio & CTA Setup",
        titleSv: "Professionell Bio & CTA-inställning",
        durationMinutes: 15,
        contentAr: `الـ Bio هو بطاقة عملك الأولى. يتكون من 4 أسطر:\n1. من أنت وماذا تقدم؟ (دليل محلي في ستوكهولم منذ 2007)\n2. ما هي القيمة للمتابع؟ (أسرار ومسارات السويد السياحية)\n3. إنجاز أو صفة حقيقية (جولات مشي خاصة وثقافة سويدية)\n4. دعوة لاتخاذ إجراء CTA (احجز جولتك القادمة عبر الرابط 👇)`,
        contentEn: "Structure your bio with clear value proposition and strong Call To Action.",
        contentSv: "Bygg din bio med tydligt värdeerjudande och stark Call To Action.",
        practicalExerciseAr: "قم بتدوين نص الـ Bio المخصص لحسابك بـ 4 أسطر مع وضع رابط نموذج الحجز.",
        downloadableChecklistAr: [
          "سطر 1: الهوية والتخصص",
          "سطر 2: القيمة اليومية للمتابع",
          "سطر 3: الشغف المحلي",
          "سطر 4: رابط مباشر للخدمة أو الحجز"
        ]
      }
    ]
  },
  {
    id: 2,
    titleAr: "الوحدة 2: اختيار فكرة الفيديو",
    titleEn: "Unit 2: Video Ideation",
    titleSv: "Modul 2: Videoidéer",
    descriptionAr: "تحويل الأماكن السياحية إلى قصص مشوقة، اكتشاف احتياجات الجمهور، وبناء تقويم محتوى أسبوعي وشريطة أفكار متجددة.",
    iconName: "Lightbulb",
    lessons: [
      {
        id: "u2-l1",
        titleAr: "تحويل المكان السياحي إلى قصة سينمائية",
        titleEn: "Turning Places into Stories",
        titleSv: "Förvandla platser till berättelser",
        durationMinutes: 18,
        contentAr: `المشاهد لا يريد رؤية مبنى قديم فقط، بل يريد معرفة السر خلفه! بدلاً من القول 'هذا قصر Drottningholm'، استخدم طريقة القصة: 'لماذا يسمى هذا القصر بقصر الملكة ولماذا أصرت على بنائه هنا؟'. تحويل الحقائق الجافة إلى تجربة بصرية يضمن أعلى نسبة احتفاظ بالمشاهدة.`,
        contentEn: "Learn how to turn cold historical facts into emotional and intriguing visual stories.",
        contentSv: "Lär dig förvandla kalla fakta till fängslande och visuella berättelser.",
        practicalExerciseAr: "اختر مكاناً شهيراً في مدينتك واكتب 3 طرق مختلفة لتقديمه كقصة.",
        downloadableChecklistAr: [
          "ابحث عن حقيقة مخفية عن المكان",
          "ربط المكان بتجربة إنسانية أو تاريخية",
          "استخدم أسئلة الانتباه في البداية",
          "اجعل المكان بطلاً للقصة وليس مجرد خلفية"
        ],
        quiz: {
          id: "q2-1",
          questionAr: "ما هو المفتاح الرئيسي لجعل فيديو الجولة يتصدر المنصات؟",
          questionEn: "What is the key to making a tour video go viral?",
          questionSv: "Vad är nyckeln till att göra en rundtursvideo populär?",
          optionsAr: [
            "استخدام كاميرا احترافية بآلاف الدولارات فقط",
            "إيجاد هوك قوي في أول ثانيتين وتحويل المكان لقصة ممتعة",
            "تكرار نفس الموسيقى في كل الفيديوهات دون تغيير",
            "التصوير دون أي تعليق صوتي"
          ],
          optionsEn: ["Expensive camera", "Strong hook in 2 seconds + Storytelling", "Same background music", "No voiceover"],
          optionsSv: ["Dyr kamera", "Starkt hook på 2 sekunder + Berättande", "Samma bakgrundsmusik", "Ingen speakerröst"],
          correctIndex: 1
        }
      }
    ]
  },
  {
    id: 3,
    titleAr: "الوحدة 3: تخطيط الجولة",
    titleEn: "Unit 3: Tour Route Planning",
    titleSv: "Modul 3: Ruttsplanering",
    descriptionAr: "إعداد نقاط البداية والنهاية، ترتيب محطات التصوير دون العودة للخلف، قائمة تجهيزات الطقس والمعدات.",
    iconName: "MapPin",
    lessons: [
      {
        id: "u3-l1",
        titleAr: "تخطيط المسار دون هدر الوقت (مثال Hötorget إلى Kungsträdgården)",
        titleEn: "Efficient Route Planning Strategy",
        titleSv: "Effektiv ruttplanering",
        durationMinutes: 20,
        contentAr: `أكبر خطأ يرتكبه صانع المحتوى هو التنقل العشوائي! المسار الذكي يتكون من خط مستقيم سلس:\n1. نقطة البداية (Hötorget - المترو والسوق)\n2. المحطة الوسطى 1 (شارع المشاة Drottninggatan)\n3. المحطة الوسطى 2 (ساحة Sergels torg والمسلة الزجاجية)\n4. نقطة الختام (حديقة Kungsträdgården).\nبهذا الترتيب تصوّر كل اللقطات في اتجاه واحد دون تكرار أو تعب.`,
        contentEn: "Master linear route planning for smooth shooting and zero backtracking.",
        contentSv: "Lär dig linjär ruttplanering för smidig fotografering utan omvägar.",
        practicalExerciseAr: "صمم مسار مشي من 4 محطات متتالية في مدينتك واكتب خطة الطقس البديلة.",
        downloadableChecklistAr: [
          "تأكيد نقاط البداية والنهاية على الخريطة",
          "فحص حالة الطقس وحركة مشاة الشارع",
          "تحديد أقوى مشهد لتصويره مرتين",
          "خطة الطقس البديلة (متحف أو مقهى دافئ)"
        ]
      }
    ]
  },
  {
    id: 4,
    titleAr: "الوحدة 4: التصوير بالهاتف",
    titleEn: "Unit 4: Mobile Filming",
    titleSv: "Modul 4: Mobilfilmning",
    descriptionAr: "التصوير الرأسي 9:16 والأفقي 16:9، تثبيت الحركة، استخدام الميكروفون اللاسلكي، والحرص على الخصوصية.",
    iconName: "Smartphone",
    lessons: [
      {
        id: "u4-l1",
        titleAr: "قواعد التصوير بالهاتف 9:16 وإعدادات الصوت",
        titleEn: "Mobile Settings & Mic Rig",
        titleSv: "Mobilinställningar & Mikrofon",
        durationMinutes: 22,
        contentAr: `لتصوير فيديوهات قصيرة احترافية:\n- اضبط كاميرا هاتفك على 4K 60fps وقم بتفعيل خيار 'Grid' لتوازن الشبكة.\n- امسح عدسة الهاتف بقماش مخصص قبل كل لقطة.\n- استخدم ميكروفون لاسلكي مع عازل الهواء (Windproof) خاصة في طقس السويد المتقلب.\n- احرص على عدم تصوير وجوه الأطفال أو المارة بشكل مباشر لاحترام الخصوصية والقوانين الأوروبية.`,
        contentEn: "Optimize mobile video settings, lens cleanliness, and wireless microphone audio quality.",
        contentSv: "Optimera mobilinställningar, linsrengöring och trådlös mikrofonljudkvalitet.",
        practicalExerciseAr: "قم بتصوير 3 لقطات مختلفة (واسعة، متوسطة، قريبة) باستخدام هاتفك بوضعية 9:16 واستمع لجودة الصوت.",
        downloadableChecklistAr: [
          "مسح العدسة بقماش ناعم",
          "تفعيل وضع Action Mode / التثبيت البصري",
          "تركيب الميكروفون واختبار الصوت قبل البدء",
          "التصوير بالإضاءة الطبيعية المواجهة للشمس"
        ]
      }
    ]
  },
  {
    id: 5,
    titleAr: "الوحدة 5: الهوك وكتابة السيناريو",
    titleEn: "Unit 5: Hooks & Scriptwriting",
    titleSv: "Modul 5: Hooks & Manus",
    descriptionAr: "جذب المشاهد خلال أول ثانيتين، كتابة سيناريو متناسق مع التعليق الصوتي، وتضمين أسلوب رائد شهاب الدافيء.",
    iconName: "FileText",
    lessons: [
      {
        id: "u5-l1",
        titleAr: "صناعة الهوك الجاذب والتعليق الصوتي",
        titleEn: "Creating Captivating Hooks & Voiceovers",
        titleSv: "Skapa fängslande hooks & speakerröst",
        durationMinutes: 25,
        contentAr: `الهوك هو الـ 2 ثانية الأولى التي تمنع المشاهد من تجاوز الفيديو!\nأمثلة لهوكات ناجحة للجولات:\n- 'هذا هو المكان السري الذي لا يعرفه 90% من زوار ستوكهولم...'\n- 'أجمل جولة مشي مجانية يمكنك تجربتها اليوم في السويد'\n- 'لماذا يزور الجميع هذا الشارع بالذات؟ تعالوا نكتشف السبب!'\nاتباع الهوك بالقصة السريعة والتعليق الصوتي الهادئ بلمسة شامية سويدية يعطي انطباعاً موثوقاً كدليل محلي.`,
        contentEn: "Master 2-second hooks and friendly, engaging voiceover pacing.",
        contentSv: "Mästra 2-sekunders hooks och vänlig, engagerande speakerröst.",
        practicalExerciseAr: "اكتب 3 صيغ مختلفة لهوك يتحدث عن مطعم أو معلم في مدينتك.",
        downloadableChecklistAr: [
          "اختيار هوك يبدأ بسؤال أو سر أو معلومة سريعة",
          "تحديد مدة التعليق الصوتي بدقة (120-140 كلمة بالدقيقة)",
          "إضافة لحظة شخصية صادقة أثناء الحديث",
          "إنهاء السيناريو بـ CTA واضح صريح"
        ]
      }
    ]
  },
  {
    id: 6,
    titleAr: "الوحدة 6: المونتاج",
    titleEn: "Unit 6: Video Editing",
    titleSv: "Modul 6: Videoredigering",
    descriptionAr: "قص اللقطات، ضبط السرعة، إضافة الموسيقى المرخصة، وتوليد ترجمة عربية RTL ومؤثرات حركية.",
    iconName: "Video",
    lessons: [
      {
        id: "u6-l1",
        titleAr: "مونتاج الفيديو السريع وإضافة الترجمة RTL",
        titleEn: "Pacing Cuts & RTL Arabic Subtitles",
        titleSv: "Klipptempo & RTL Arabiska undertexter",
        durationMinutes: 30,
        contentAr: `المونتاج الاحترافي يعتمد على الإيقاع السريع (Dynamic Cuts).\n- لا تترك أي لقطة تزيد عن 2.5 ثانية دون تغيير الزاوية أو الحركة.\n- أضف الموسيقى التفاعلية وخفض صوتها إلى -18dB عند حدوث التعليق الصوتي.\n- الترجمة النصية على الشاشة (Subtitles) تزيد نسبة المشاهدة بنسبة 40% لأن الكثيرين يشاهدون دون صوت. احرص على محاذاة الخط العربي للوسط وتفعيل اتجاه RTL.`,
        contentEn: "Learn fast dynamic cutting, sound balancing, and RTL centered Arabic text captions.",
        contentSv: "Lär dig snabb dynamisk klippning, ljudbalansering och centrerade arabiska undertexter (RTL).",
        practicalExerciseAr: "قم بتجميع 5 لقطات وقصها على إيقاع الموسيقى وأضف نصوص الشاشة باللغة العربية.",
        downloadableChecklistAr: [
          "حذف المشاهد المهزوزة وتكرار الوجوه",
          "القص مع حركة الأقدام أو الانتقال الضوئي",
          "ضبط الصوت: التعليق (-3dB) والموسيقى (-18dB)",
          "تصدير الفيديو بنظافة وبدون أي علامات مائية"
        ]
      }
    ]
  },
  {
    id: 7,
    titleAr: "الوحدة 7: تصميم الثمبل والغلاف",
    titleEn: "Unit 7: Thumbnail & Cover Design",
    titleSv: "Modul 7: Omslagsdesign",
    descriptionAr: "اختيار الصورة الرئيسية، إظهار الوجه والمكان، اختيار خط عريض وتباين ألوان جذاب لـ TikTok وReels.",
    iconName: "Image",
    lessons: [
      {
        id: "u7-l1",
        titleAr: "صناعة غلاف يجذب النقرات (Click-Through Rate)",
        titleEn: "High CTR Thumbnail Rules",
        titleSv: "Tummarktsregler för hög CTR",
        durationMinutes: 16,
        contentAr: `الغلاف هو الباب الرئيسي لفيديوهاتك! قواعد الغلاف الناجح:\n1. تعبير وجه واضع أو معلم سياحي بارز وواضح.\n2. نص قصير جداً من 2 إلى 4 كلمات فقط (مثال: 'أجمل مسار مشي!').\n3. استخدام ألوان عالية التباين (مثل الأصفر السويدي والأزرق الملكي أو الأبيض على خلفية داكنة).\n4. ملاءمة المقاسات الرسمية لكل منصة (9:16 لـ TikTok وReels، و16:9 لـ YouTube).`,
        contentEn: "Design high CTR thumbnails with facial expressions, bold text, and vibrant color contrast.",
        contentSv: "Designa omslag med hög CTR, ansiktsuttryck, fet text och livfull färgkontrast.",
        practicalExerciseAr: "صمم فكرة غلاف باستخدام نص من 3 كلمات وصورة مكثفة مع تطبيق الألوان السويدية.",
        downloadableChecklistAr: [
          "التركيز على صورة عالية الوضوح",
          "استخدام خط عربي عريض ومقروء",
          "التباين العالي بين النص والخلفية",
          "اختيار الإطار الأقوى في الفيديو كغلاف"
        ]
      }
    ]
  },
  {
    id: 8,
    titleAr: "الوحدة 8: النشر والتوزيع",
    titleEn: "Unit 8: Publishing & Distribution",
    titleSv: "Modul 8: Publicering & Distribution",
    descriptionAr: "اختيار الهاشتاغات الـ 4 المحددة، كتابة Caption قصير، التعليق المثبت، وجدول النشر الأسبوعي.",
    iconName: "Share2",
    lessons: [
      {
        id: "u8-l1",
        titleAr: "استراتيجية النشر المتعدد بدون تكرار مجاني",
        titleEn: "Multi-Platform Distribution Masterclass",
        titleSv: "Strategي för flerplattformspublicering",
        durationMinutes: 20,
        contentAr: `لا تقم بنشر نفس النص والهاشتاغات على كل المنصات بشكل آلي! لكل منصة لغتها:\n- TikTok: هوك سريع، 4 هاشتاغات مركزة (#ستوكهولم #السويد #جولات_سياحية #StockholmGuide)، وتفاعل مع التعليقات خلال أول ساعة.\n- Instagram Reels: كابشن منظم، دعوة للحفظ والاستوري، وإضافة زر زر الموقع.\n- YouTube Shorts: عنوان مخصص للبحث برابط الحجز في أول الوصف.`,
        contentEn: "Tailor captions, hashtags, and CTA strategy for each unique social platform.",
        contentSv: "Anpassa bildtexter, hashtags och CTA för varje unik social plattform.",
        practicalExerciseAr: "أنشئ 3 نسخ مخصصة لنفس الفيديو لـ TikTok وReels وYouTube Shorts.",
        downloadableChecklistAr: [
          "تكييف الكابشن حسب المنصة",
          "وضع 4 هاشتاغات دقيقة ومحددة",
          "إضافة موقع الجولة الصحيح",
          "تثبيت تعليق تفاعلي أسفل الفيديو"
        ]
      }
    ]
  },
  {
    id: 9,
    titleAr: "الوحدة 9: الربح من المحتوى",
    titleEn: "Unit 9: Monetization Strategies",
    titleSv: "Modul 9: Monetiseringsstrategier",
    descriptionAr: "بيع جولات المشي الخاصة، تقديم الاستشارات السياحية، الباقات، التسويق بالعمولة، والأدلة الرقمية دون وعود زنيفة.",
    iconName: "DollarSign",
    lessons: [
      {
        id: "u9-l1",
        titleAr: "تحويل المحتوى المجاني إلى خدمات سياحية مدفوعة",
        titleEn: "Monetizing Walking Tours & Guides",
        titleSv: "Monetisera vandringsturer & guider",
        durationMinutes: 25,
        contentAr: `كيف تربح من قناتك كدليل محلي بشكل أخلاقي ومستدام؟\n1. بيع جولات مشي خاصة للمجموعات والعائلات (Stockholm Private Tours).\n2. تقديم الاستشارات السياحية وتخطيط خريطة الرحلات (Travel Itinerary Planning).\n3. التعاون مع الفنادق والمطاعم المحلية الموثوقة.\n4. بيع أدلة الخرائط الرقمية (Digital PDF Guides).\nنظامنا لا يعطي وعوداً أو أرقاماً خيالية، بل يبني نموذج عرض سعر (Quote Proposal) احترافي يضمن ثقة العميل.`,
        contentEn: "Monetize ethically through private walking tours, custom itineraries, digital guides, and brand partnerships.",
        contentSv: "Monetisera etiskt genom privata vandringsturer, skräddarsydda resplaner och digitala guider.",
        practicalExerciseAr: "صمم باقة جولة مشي خاصة لمدة ساعتين واكتب نموذج عرض سعر يتضمن ما تمسكه الجولة وما لا تمسكه.",
        downloadableChecklistAr: [
          "إعداد جدول أسعار واضح للخدمات",
          "بناء نموذج استقبال طلبات الحجز عبر الاستمارة",
          "توضيح الشروط والأحكام وسياسة الإلغاء",
          "تقديم قيمة مجانية مستمرة لبناء الثقة"
        ]
      }
    ]
  },
  {
    id: 10,
    titleAr: "الوحدة 10: التحليل والتطوير",
    titleEn: "Unit 10: Analytics & Optimization",
    titleSv: "Modul 10: Analys & Optimering",
    descriptionAr: "متابعة معدل الاحتفاظ بالمشاهدة في أول 3 ثوانٍ، نسبة الإكمال، النقرات، وتحديد نقاط الخروج لتطوير الفيديو القادم.",
    iconName: "BarChart3",
    lessons: [
      {
        id: "u10-l1",
        titleAr: "قراءة التحليلات وتحسين الفيديوهات القادمة",
        titleEn: "Reading Analytics & Retention Graphs",
        titleSv: "Läs analys & behållningsgrafer",
        durationMinutes: 20,
        contentAr: `الأرقام هي البوصلة الحقيقية لصانع المحتوى!\n- إذا انخفض منحنى المشاهدة في أول 3 ثوانٍ: مشكلتك في الهوك أو جودة الصورة البدائية.\n- إذا كان هناك هبوط مفاجئ في المنتصف: قمت بحشو معلومات غير مهمة أو تباطأ المونتاج.\n- نسبة الحفظ والمشاركة هي المؤشر الأقوى لرضا الجمهور وزيادة حجز الجولات.`,
        contentEn: "Analyze drop-off points, viewer retention curves, and bookmarks to continuously improve content.",
        contentSv: "Analysera avhoppsnpunkter, behållningskurvor och bokmärken för att ständigt förbättra innehållet.",
        practicalExerciseAr: "ادخل إلى تحليلات آخر فيديو لك وسجل معدل الاحتفاظ واكتب 3 تحسينات للفيديو القادم.",
        downloadableChecklistAr: [
          "فحص الاحتفاظ خلال أول 3 ثوانٍ",
          "مقارنة نسبة الإكمال بين الفيديوهات القصيرة والطويلة",
          "متابعة استفسارات الحجوزات الواردة من كل فيديو",
          "تعديل خطة الأسبوع القادم بناءً على أفضل هوك"
        ]
      }
    ]
  }
];
