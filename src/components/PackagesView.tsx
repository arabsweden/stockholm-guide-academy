import React, { useState } from "react";
import {
  CreditCard,
  CheckCircle2,
  Calendar,
  Send,
  Sparkles,
  User,
  ShieldAlert,
} from "lucide-react";

interface PackagesViewProps {
  proPriceAr: string;
  vipPriceAr: string;
}

export const PackagesView: React.FC<PackagesViewProps> = ({ proPriceAr, vipPriceAr }) => {
  const [sessionName, setSessionName] = useState<string>("");
  const [sessionEmail, setSessionEmail] = useState<string>("");
  const [sessionPhone, setSessionPhone] = useState<string>("");
  const [sessionTopic, setSessionTopic] = useState<string>("تطوير قناة المحتوى السياحي والحصول على رخصة دليل");
  const [requestedDate, setRequestedDate] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitSession = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
          <CreditCard className="w-3.5 h-3.5" />
          <span>الباقات والخدمات الاستشارية</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          اختر الباقة المناسبة للارتقاء بمحتواك السياحي
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          انضم لأكاديمية Stockholm Guide أو احجز جلسة توجيه خاصة مباشرة مع المدرب والدليل المحلي رائد شهاب.
        </p>
      </div>

      {/* Plans Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold inline-block">
              المستوى المجاني
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">الباقة الأساسية</h3>
            <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">
              مجاناً
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              تصفح الوحدات التعليمية الأساسية وتجربة استوديو الذكاء الاصطناعي مع نماذج ستوكهولم الجاهزة.
            </p>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>وصول للدروس المجانية من الدورة</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>توليد خطط جولات أساسية</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>حفظ حتى 3 مشاريع في حسابك</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs">
            الباقة المفعلة حالياً
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-slate-900 rounded-3xl border-2 border-amber-500 p-6 space-y-6 shadow-2xl text-white relative flex flex-col justify-between">
          <div className="absolute -top-3.5 right-6 px-3 py-1 bg-amber-500 text-slate-950 font-black text-[11px] rounded-full shadow">
            الأكثر إقبالاً ⭐
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold inline-block">
              باقة صانع المحتوى المحترف
            </span>
            <h3 className="text-2xl font-bold">Pro Creator Plan</h3>
            <div className="text-3xl font-black text-amber-400 font-mono">
              {proPriceAr}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              الوصول الكامل لجميع الوحدات الـ 10، المولدات الذكية المتقدمة، شهادة الإكمال الرقمية وتكييف المنصات.
            </p>

            <ul className="space-y-2 text-xs text-slate-200 border-t border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>الوصول غير المحدود لـ 10 وحدات تدريبية</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>توليد غير محدود لخطط الجولات والبرومبتات</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>شهادة إكمال رقمية صادرة باسمك</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>تصدير الخطط بصيغ PDF مطبوعة</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20">
            الانضمام للباقة المحترفة
          </button>
        </div>

        {/* VIP Consulting Session */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold inline-block">
              استشارة خاصة 1:1
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">جلسة مع RAED SHIHAB</h3>
            <div className="text-3xl font-black text-slate-900 dark:text-white font-mono">
              {vipPriceAr}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              جلسة فيديو خاصة مباشرة لمدة 60 دقيقة لتصميم استراتيجيتك، مراجعة قناتك، وإرشادات الجولات الميدانية في السويد.
            </p>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>تحليل شامل لقناتك ومحتواك الحالي</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>إرشادات التراخيص والجولات الميدانية</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>خطة تسويق خاصة لبيع جولاتك</span>
              </li>
            </ul>
          </div>

          <a href="#consulting-form" className="w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs">
            احجز الجلسة أدناه 👇
          </a>
        </div>
      </div>

      {/* Private Session Booking Form */}
      <div id="consulting-form" className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-10 text-white space-y-6 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">طلب جلسة خاصة مع RAED SHIHAB</h3>
            <p className="text-xs text-slate-400">احجز موعدك المباشر مع رائد شهاب لمناقشة مشروعك وتطوير قناتك في السويد.</p>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500 text-emerald-300 text-center space-y-2">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold">تم استلام طلب الجلسة بنجاح!</h4>
            <p className="text-xs text-slate-300">
              سيتواصل معك فريق Stockholm Guide عبر البريد أو الواتساب لتأكيد الموعد والتفاصيل.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitSession} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">الاسم الكامل:</label>
                <input
                  type="text"
                  required
                  value={sessionName}
                  onChange={(e) => setSessionName(e.target.value)}
                  placeholder="اسمك الكامل"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">البريد الإلكتروني:</label>
                <input
                  type="email"
                  required
                  value={sessionEmail}
                  onChange={(e) => setSessionEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">رقم الواتساب:</label>
                <input
                  type="tel"
                  required
                  value={sessionPhone}
                  onChange={(e) => setSessionPhone(e.target.value)}
                  placeholder="+46..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">موضوع الاستشارة الرئيسي:</label>
                <input
                  type="text"
                  value={sessionTopic}
                  onChange={(e) => setSessionTopic(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">التاريخ المفضل للجلسة:</label>
                <input
                  type="date"
                  required
                  value={requestedDate}
                  onChange={(e) => setRequestedDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>ارسال طلب الحجز والانتظار</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
