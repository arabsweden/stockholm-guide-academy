import React from "react";
import { Compass, Heart } from "lucide-react";

interface FooterProps {
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="bg-[#002855] border-t border-white/10 text-gray-300 py-10 px-4 mt-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FECC00] text-[#002855] font-black flex items-center justify-center text-sm">
              S
            </div>
            <span className="text-white font-black text-base uppercase tracking-tight text-[#FECC00]">Stockholm Guide Academy</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            منصة تعليمية وتطبيق ذكي يساعدك على تعلّم صناعة فيديوهات الجولات والسفر، وتحويلها إلى محتوى احترافي قابل للنشر والربح عبر منصات التواصل الاجتماعي.
          </p>
          <div className="text-xs font-bold text-[#FECC00] pt-1">
            RAED SHIHAB | Stockholm Guide <br />
            <span className="text-gray-400 text-[11px] font-normal">Arab Sweden Since 2007</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm mb-3">أقسام المنصة</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigateTab("home")} className="hover:text-[#FECC00] transition-colors">
                الصفحة الرئيسية
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTab("course")} className="hover:text-[#FECC00] transition-colors">
                الوحدات التدريبية (10 وحدات)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTab("tour-studio")} className="hover:text-[#FECC00] transition-colors">
                استوديو "أنشئ جولتك"
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTab("platform-adaptation")} className="hover:text-[#FECC00] transition-colors">
                تكييف منشورات المنصات
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTab("prompts")} className="hover:text-[#FECC00] transition-colors">
                مولد برومبتات الذكاء الاصطناعي
              </button>
            </li>
          </ul>
        </div>

        {/* Tools & Resources */}
        <div>
          <h4 className="text-white font-bold text-sm mb-3">الأدوات والقوالب</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigateTab("templates")} className="hover:text-[#FECC00] transition-colors">
                مكتبة القوالب الجاهزة
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTab("calendar")} className="hover:text-[#FECC00] transition-colors">
                تقويم المحتوى ولوحة Kanban
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTab("analytics")} className="hover:text-[#FECC00] transition-colors">
                لوحة تحليلات الأداء
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTab("packages")} className="hover:text-[#FECC00] transition-colors">
                جلسة خاصة مع رائد شهاب
              </button>
            </li>
          </ul>
        </div>

        {/* Legal & Local Guide Note */}
        <div>
          <h4 className="text-white font-bold text-sm mb-3">إرشادات وأخلاقيات</h4>
          <p className="text-xs text-gray-300 leading-relaxed mb-3">
            تلتزم الأكاديمية بقوانين الخصوصية وحقوق الطبع والموسيقى المرخصة في السويد والاتحاد الأوروبي.
          </p>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
            <span className="text-[#FECC00] font-bold block mb-1">دليل محلي خبير:</span>
            جميع التوصيات مبنية على خبرة جولات حقيقية ميدانية في ستوكهولم منذ عام 2007.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#FECC00]" />
          <span>© 2026 Stockholm Guide Academy - RAED SHIHAB. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>Hötorget → Sergels torg</span>
          <span className="text-[#FECC00] font-bold">Live Support Active</span>
        </div>
      </div>
    </footer>
  );
};
