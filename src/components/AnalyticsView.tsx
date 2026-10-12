import React from "react";
import {
  BarChart3,
  Eye,
  Clock,
  Bookmark,
  Share2,
  TrendingUp,
  MapPin,
  Calendar,
  Sparkles,
  Info,
} from "lucide-react";
import { MOCK_ANALYTICS } from "../data/mockData";

export const AnalyticsView: React.FC = () => {
  const data = MOCK_ANALYTICS;

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>لوحة تحليلات الأداء والجولات</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          مؤشرات تفاعل الجمهور وتنمية الحجوزات
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          تتبع الأرقام الأساسية التي تحدد نجاح الفيديوهات وتحويل المتابعين إلى زوار وجولات خاصة.
        </p>
      </div>

      {/* Primary KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">إجمالي المشاهدات</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white font-mono flex items-center justify-between">
            <span>{data.totalViews.toLocaleString()}</span>
            <Eye className="w-5 h-5 text-amber-500" />
          </div>
          <span className="text-[11px] text-emerald-500 font-semibold block">+18.4% عن الشهر الماضي</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">متوسط مدة المشاهدة</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white font-mono flex items-center justify-between">
            <span>{data.avgWatchTimeSeconds} ثانية</span>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-[11px] text-amber-500 font-semibold block">معدل إكمال {data.completionRatePct}%</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">حفظ الفيديوهات (Bookmarks)</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white font-mono flex items-center justify-between">
            <span>{data.totalBookmarks.toLocaleString()}</span>
            <Bookmark className="w-5 h-5 text-purple-500" />
          </div>
          <span className="text-[11px] text-emerald-500 font-semibold block">مؤشر قوي لحجز الجولات</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">الحجوزات المباشرة</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white font-mono flex items-center justify-between">
            <span>{data.directBookings} جولة</span>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <span className="text-[11px] text-slate-500 font-semibold block">من {data.tourInquiries} استفسار وطلب</span>
        </div>
      </div>

      {/* Detailed Insights Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Performing Attributes */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-lg">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>أفضل عوامل النجاح في قناتك</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">أعلى منصة تفاعلاً:</span>
              <span className="font-bold text-amber-500 font-mono text-sm">{data.bestPlatform}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">أعلى منطقة مشاهدة في ستوكهولم:</span>
              <span className="font-bold text-slate-900 dark:text-white">{data.bestDistrict}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">نمط الهوك الأقوى لجذب الجمهور:</span>
              <span className="font-bold text-slate-900 dark:text-white">{data.bestHookType}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">أفضل مدة فيديو مفضلة:</span>
              <span className="font-bold text-emerald-500 font-mono">{data.bestVideoLength}</span>
            </div>
          </div>
        </div>

        {/* Shares & Secondary Metrics */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-lg">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Share2 className="w-4 h-4 text-amber-500" />
            <span>المشاركات والتفاعل الفعال</span>
          </h3>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-1">المشاركات (Shares)</span>
              <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                {data.totalShares.toLocaleString()}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-1">التعليقات والمناقشات</span>
              <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                {data.totalComments.toLocaleString()}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-1">زيارات الملف الشخصي</span>
              <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                {data.profileVisits.toLocaleString()}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-1">معدل التفاعل الإجمالي</span>
              <span className="text-xl font-bold font-mono text-amber-500">{data.engagementRatePct}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Box */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-xs flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-slate-200 block">تنويه إحصائي وشفافية البيانات:</span>
          <p className="leading-relaxed">
            البيانات المدخلة يدويًا تقديرية لأغراض التخطيط الداخلي، ولا يدّعي التطبيق وجود اتصال مباشر بالمنصات إلا عند توفر ربط API رسمي ومصرح به من حسابك.
          </p>
        </div>
      </div>
    </div>
  );
};
