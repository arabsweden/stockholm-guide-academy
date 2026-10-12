import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  Search,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Clock,
} from "lucide-react";
import { TOUR_TEMPLATES } from "../data/templatesData";
import { TourTemplate } from "../types";

interface TemplatesViewProps {
  onUseTemplate: (template: TourTemplate) => void;
}

export const TemplatesView: React.FC<TemplatesViewProps> = ({ onUseTemplate }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");

  const categories = [
    "الكل",
    "جولات مشي تاريخية",
    "أماكن سرية",
    "تسوق وتجول",
    "ثقافة وتاريخ",
    "طعام ومطاعم",
    "ترويج وحجوزات",
    "بناء الهوية الشخصية",
  ];

  const filteredTemplates = TOUR_TEMPLATES.filter((tmpl) => {
    const matchesCategory =
      selectedCategory === "الكل" || tmpl.category === selectedCategory;
    const matchesQuery =
      tmpl.titleAr.includes(searchQuery) ||
      tmpl.descriptionAr.includes(searchQuery) ||
      tmpl.sampleRoute.includes(searchQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>مكتبة القوالب السياحية الجاهزة</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          قوالب جولات جاهزة للتعديل والحفظ بنقرة واحدة
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          اختر قالب الجولة المناسب لمدينتك وموضوعك وابدأ تخصيصه فوراً في استوديو صناعة الفيديو.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن قالب..."
            className="w-full pl-3 pr-9 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((tmpl) => (
          <div
            key={tmpl.id}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-lg hover:shadow-2xl group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[11px] font-bold">
                  {tmpl.category}
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{tmpl.duration}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                {tmpl.titleAr}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {tmpl.descriptionAr}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="text-amber-500 font-bold block flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>المسار العينة:</span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{tmpl.sampleRoute}</span>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                <span className="text-amber-600 dark:text-amber-400 font-bold block">الهوك المقترح:</span>
                <p className="text-slate-900 dark:text-slate-100 italic">"{tmpl.suggestedHook}"</p>
              </div>
            </div>

            <button
              onClick={() => onUseTemplate(tmpl)}
              className="mt-6 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md group-hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>استخدم هذا القالب في الاستوديو</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
