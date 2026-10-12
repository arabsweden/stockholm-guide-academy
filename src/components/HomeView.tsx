import React from "react";
import {
  Sparkles,
  PlayCircle,
  Smartphone,
  Video,
  FileText,
  Image as ImageIcon,
  Share2,
  DollarSign,
  BarChart3,
  MapPin,
  ArrowLeft,
  CheckCircle2,
  Compass,
  Award,
} from "lucide-react";
import { DEMO_PROJECT } from "../data/mockData";

interface HomeViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenDemo: () => void;
  onStartVideoCreation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateTab,
  onOpenDemo,
  onStartVideoCreation,
}) => {
  const quickFeatures = [
    {
      title: "صناعة فيديوهات الجولات",
      desc: "تحويل الأماكن والمعالم إلى قصص سينمائية تجذب المتابعين.",
      icon: Compass,
      color: "from-blue-500 to-indigo-600",
      tab: "course",
    },
    {
      title: "التصوير بالهاتف",
      desc: "تقنيات التصوير 9:16 بـ 4K، ضبط الإضاءة وحرية الحركة.",
      icon: Smartphone,
      color: "from-amber-500 to-yellow-600",
      tab: "course",
    },
    {
      title: "كتابة الهوك والتعليق",
      desc: "صناعة هوك خاطف في 2 ثانية وسيناريو صوتي ممتع.",
      icon: FileText,
      color: "from-emerald-500 to-teal-600",
      tab: "course",
    },
    {
      title: "المونتاج والتصدير",
      desc: "القص على الحركة، إضافة الترجمة العربية RTL وإزالة العلامات.",
      icon: Video,
      color: "from-purple-500 to-violet-600",
      tab: "course",
    },
    {
      title: "صناعة الثمبل والغلاف",
      desc: "تصاميم غلاف بجاذبية عالية CTR مع تباين الألوان السويدية.",
      icon: ImageIcon,
      color: "from-pink-500 to-rose-600",
      tab: "course",
    },
    {
      title: "النشر على المنصات",
      desc: "تكييف الفيديوهات لكل من TikTok، Reels، وYouTube.",
      icon: Share2,
      color: "from-cyan-500 to-blue-600",
      tab: "platform-adaptation",
    },
    {
      title: "الربح من المحتوى",
      desc: "بيع الجولات الخاصة، الأدلة الرقمية، والاستشارات السياحية.",
      icon: DollarSign,
      color: "from-amber-600 to-yellow-500",
      tab: "course",
    },
    {
      title: "تحليل الأداء والتطوير",
      desc: "قراءة معدلات الاحتفاظ بالمشاهدة ونسبة الإكمال لتطوير عملك.",
      icon: BarChart3,
      color: "from-orange-500 to-red-600",
      tab: "analytics",
    },
  ];

  return (
    <div className="space-y-12 py-4">
      {/* Geometric Balance Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Hero & Geometric Steps */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-8 bg-[#0A1128] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECC00]/10 border border-[#FECC00]/30 text-[#FECC00] text-xs font-mono font-bold mb-6">
              <Sparkles className="w-4 h-4 text-[#FECC00]" />
              <span>STOCKHOLM GUIDE ACADEMY | ARAB SWEDEN SINCE 2007</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              حوّل جولتك إلى <br />
              <span className="text-[#FECC00]">محتوى احترافي</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed mb-8">
              تعلّم كيف تختار الفكرة، تخطط للمسار، تصوّر، تكتب النص، تمنتج الفيديو، وتنشر على جميع منصات التواصل الاجتماعي مع المدرب رائد شهاب.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onStartVideoCreation}
                className="bg-[#FECC00] text-[#005293] px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:brightness-110 shadow-lg shadow-[#FECC00]/20 flex items-center gap-2.5 transition-all hover:scale-105"
              >
                <span>ابدأ صناعة الفيديو</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenDemo}
                className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/5 transition-all"
              >
                شاهد النماذج
              </button>

              <button
                onClick={() => onNavigateTab("course")}
                className="border border-[#FECC00]/40 text-[#FECC00] px-6 py-4 rounded-full font-bold text-base hover:bg-[#FECC00]/10 transition-all flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                <span>الدورة التدريبية</span>
              </button>
            </div>
          </section>

          {/* 4 Step Geometric Cards */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div
              onClick={() => onNavigateTab("course")}
              className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FECC00]/50 transition-colors cursor-pointer"
            >
              <div className="text-[#FECC00] font-mono font-bold mb-1">01</div>
              <div className="text-sm font-bold text-white">بناء الهوية</div>
              <div className="w-full bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                <div className="bg-[#FECC00] w-[80%] h-full"></div>
              </div>
            </div>

            <div
              onClick={() => onNavigateTab("course")}
              className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FECC00]/50 transition-colors cursor-pointer"
            >
              <div className="text-[#FECC00] font-mono font-bold mb-1">02</div>
              <div className="text-sm font-bold text-white">تخطيط الجولة</div>
              <div className="w-full bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                <div className="bg-[#FECC00] w-[45%] h-full"></div>
              </div>
            </div>

            <div
              onClick={() => onNavigateTab("course")}
              className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FECC00]/50 transition-colors cursor-pointer"
            >
              <div className="text-[#FECC00] font-mono font-bold mb-1">03</div>
              <div className="text-sm font-bold text-white">التصوير بالهاتف</div>
              <div className="w-full bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                <div className="bg-white/20 w-0 h-full"></div>
              </div>
            </div>

            <div
              onClick={() => onNavigateTab("course")}
              className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FECC00]/50 transition-colors cursor-pointer"
            >
              <div className="text-[#FECC00] font-mono font-bold mb-1">04</div>
              <div className="text-sm font-bold text-white">المونتاج والتصدير</div>
              <div className="w-full bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                <div className="bg-white/20 w-0 h-full"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Mentor & Production Tools */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Mentor Profile Card */}
          <div className="bg-[#002855] p-6 rounded-2xl border border-[#FECC00]/30 flex flex-col items-center text-center shadow-xl">
            <div className="w-24 h-24 bg-[#FECC00] rounded-full mb-4 border-4 border-white/10 overflow-hidden flex items-center justify-center shadow-lg">
              <span className="text-[#002855] text-3xl font-black">RS</span>
            </div>
            <h3 className="text-xl font-bold text-white">رائد شهاب</h3>
            <p className="text-xs text-[#FECC00] font-medium mb-3">صانع محتوى ودليل محلي - ستوكهولم</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              خبير في صناعة المحتوى السياحي في السويد منذ عام 2007. نساعدك في بناء علامتك التجارية وربح المال من شغفك بالسفر.
            </p>
          </div>

          {/* Tools Card */}
          <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-[#FECC00] uppercase mb-4 tracking-widest">
                أدوات الإنتاج الذكي
              </h4>
              <ul className="space-y-3">
                <li
                  onClick={() => onNavigateTab("prompts")}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <span className="bg-[#FECC00] p-2 rounded-lg text-[#002855] shrink-0 font-bold">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-white">مولد نصوص الفيديو (AI)</span>
                </li>
                <li
                  onClick={() => onNavigateTab("calendar")}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <span className="bg-[#FECC00] p-2 rounded-lg text-[#002855] shrink-0 font-bold">
                    <FileText className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-white">خطة المحتوى الأسبوعية</span>
                </li>
                <li
                  onClick={() => onNavigateTab("templates")}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <span className="bg-[#FECC00] p-2 rounded-lg text-[#002855] shrink-0 font-bold">
                    <Video className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-white">مكتبة القوالب والسكربتات</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <button
                onClick={() => onNavigateTab("packages")}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FECC00] text-xs font-bold transition-colors border border-[#FECC00]/20"
              >
                احجز استشارة مع رائد شهاب
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Feature Cards Grid */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            محاور التعلم والإنتاج المتكاملة
          </h2>
          <span className="text-xs text-[#FECC00] font-mono font-bold uppercase">8 MODULES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigateTab(feat.tab)}
                className="group relative p-5 rounded-2xl bg-[#002855]/60 border border-white/10 hover:border-[#FECC00]/50 shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FECC00] text-[#002855] flex items-center justify-center font-bold mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FECC00] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold text-[#FECC00] gap-1 group-hover:-translate-x-1 transition-transform">
                  <span>استكشف المحور</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical Tour Demo Showcase */}
      <section className="rounded-2xl bg-[#002855] border border-[#FECC00]/30 p-6 sm:p-8 text-white space-y-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FECC00]/20 text-[#FECC00] text-xs font-bold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>نموذج عملي جاهز للإنتاج</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{DEMO_PROJECT.title}</h3>
            <p className="text-xs text-slate-300 mt-1">المدينة: {DEMO_PROJECT.cityName} | المدة: {DEMO_PROJECT.duration}</p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-full bg-[#FECC00] text-[#002855] font-bold text-xs flex items-center gap-2 shadow-lg hover:brightness-110 transition-all"
          >
            <span>استعرض تفاصيل الجولة والسكربت</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
            <span className="text-[#FECC00] font-bold block">1. الهوك السريع (اول ثانيتين):</span>
            <p className="text-slate-200 font-medium italic">"{DEMO_PROJECT.hook}"</p>
          </div>
          <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
            <span className="text-[#FECC00] font-bold block">2. مسار الجولة المتسلسل:</span>
            <ul className="text-slate-300 space-y-1">
              {DEMO_PROJECT.suggestedRoute?.map((r, i) => (
                <li key={i} className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-2">
            <span className="text-[#FECC00] font-bold block">3. الهاشتاغات المركزة:</span>
            <div className="flex flex-wrap gap-1 pt-1">
              {DEMO_PROJECT.hashtags?.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-[#FECC00]/10 text-[#FECC00] text-[11px] font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
