import React, { useState } from "react";
import {
  Shield,
  CreditCard,
  BookOpen,
  Layers,
  Users,
  HelpCircle,
  Save,
  Plus,
  CheckCircle2,
} from "lucide-react";

interface AdminPanelProps {
  proPriceAr: string;
  setProPriceAr: (price: string) => void;
  vipPriceAr: string;
  setVipPriceAr: (price: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  proPriceAr,
  setProPriceAr,
  vipPriceAr,
  setVipPriceAr,
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<"prices" | "courses" | "users" | "faqs">("prices");
  const [savedAlert, setSavedAlert] = useState<boolean>(false);

  // FAQ State
  const [faqs, setFaqs] = useState<{ q: string; a: string }[]>([
    {
      q: "هل الدورة مناسبة للمبتدئين الذين لا يملكون أجهزة تصوير احترافية؟",
      a: "نعم تماماً، الدورة مصممة بالكامل للتصوير عبر الهاتف المحمول (iPhone / Android).",
    },
    {
      q: "هل يمكنني بيع الجولات السياحية في السويد قانونياً؟",
      a: "تغطي الوحدة التاسعة الجوانب القانونية وتراخيص الدليل وتأسيس النشاط في السويد.",
    },
  ]);
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");

  const handleSavePrices = () => {
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQ || !newA) return;
    setFaqs([...faqs, { q: newQ, a: newA }]);
    setNewQ("");
    setNewA("");
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
          <Shield className="w-3.5 h-3.5" />
          <span>لوحة التحكم الإدارية للأكاديمية</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          إدارة الأسعار والوحدات والمشتركين
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          تعديل أسعار الباقات بدون قيم افتراضية ثابتة، متابعة تقدم الطلاب، وتحديث الأسئلة الشائعة.
        </p>
      </div>

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveAdminTab("prices")}
          className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-colors ${
            activeAdminTab === "prices"
              ? "bg-amber-500 text-slate-950 shadow"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>إدارة الأسعار</span>
        </button>

        <button
          onClick={() => setActiveAdminTab("faqs")}
          className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-colors ${
            activeAdminTab === "faqs"
              ? "bg-amber-500 text-slate-950 shadow"
              : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>الأسئلة الشائعة</span>
        </button>
      </div>

      {/* Prices Panel */}
      {activeAdminTab === "prices" && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            تحديد أسعار الباقات والخدمات الاستشارية
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <label className="font-bold text-slate-900 dark:text-white block">
                سعر الباقة المحترفة (Pro Creator):
              </label>
              <input
                type="text"
                value={proPriceAr}
                onChange={(e) => setProPriceAr(e.target.value)}
                placeholder="مثال: 990 SEK / سنوياً"
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-bold text-slate-900 dark:text-white"
              />
              <span className="text-[11px] text-slate-500 block">يظهر هذا السعر في صفحة الباقات للعملاء.</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <label className="font-bold text-slate-900 dark:text-white block">
                سعر الجلسة الخاصة مع RAED SHIHAB:
              </label>
              <input
                type="text"
                value={vipPriceAr}
                onChange={(e) => setVipPriceAr(e.target.value)}
                placeholder="مثال: 1500 SEK / 60 دقيقة"
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-bold text-slate-900 dark:text-white"
              />
              <span className="text-[11px] text-slate-500 block">يحدد تكلفة الاستشارة الفردية الخاصة.</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={handleSavePrices}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>حفظ وتحديث الأسعار</span>
            </button>

            {savedAlert && (
              <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>تم تحديث الأسعار على مستوى التطبيق بنجاح ✓</span>
              </span>
            )}
          </div>
        </div>
      )}

      {/* FAQs Panel */}
      {activeAdminTab === "faqs" && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            إدارة الأسئلة الشائعة
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-bold text-amber-500 block">س: {faq.q}</span>
                <p className="text-slate-700 dark:text-slate-300">ج: {faq.a}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddFaq} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
            <span className="font-bold text-slate-900 dark:text-white block">إضافة سؤال وجواب جديد:</span>
            <input
              type="text"
              placeholder="السؤال..."
              value={newQ}
              onChange={(e) => setNewQ(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
            />
            <textarea
              placeholder="الجواب الشافي..."
              value={newA}
              onChange={(e) => setNewA(e.target.value)}
              rows={2}
              className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>إضافة السؤال</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
