import React, { useState } from "react";
import {
  Sparkles,
  MapPin,
  Copy,
  Check,
  Printer,
  Save,
  RotateCcw,
  Video,
  FileText,
  ListCheck,
  Share2,
  Sliders,
  Image as ImageIcon,
  Mic,
  Upload,
} from "lucide-react";
import { Platform, TourProject } from "../types";
import { DEMO_PROJECT } from "../data/mockData";

interface AITourStudioViewProps {
  onSaveProject: (project: TourProject) => void;
  savedProjects: TourProject[];
}

export const AITourStudioView: React.FC<AITourStudioViewProps> = ({
  onSaveProject,
  savedProjects,
}) => {
  // Form Inputs
  const [cityName, setCityName] = useState<string>("ستوكهولم");
  const [placeName, setPlaceName] = useState<string>("مسار السويد من Hötorget إلى Kungsträdgården");
  const [startPoint, setStartPoint] = useState<string>("Hötorget");
  const [endPoint, setEndPoint] = useState<string>("Kungsträdgården");
  const [keyStops, setKeyStops] = useState<string>("Drottninggatan, Sergels torg");
  const [videoType, setVideoType] = useState<string>("جولة مشي حقيقية");
  const [targetAudience, setTargetAudience] = useState<string>("السياح والمقيمين العرب في السويد");
  const [platform, setPlatform] = useState<Platform>("tiktok");
  const [duration, setDuration] = useState<string>("40 ثانية");
  const [language, setLanguage] = useState<string>("العربية");
  const [tone, setTone] = useState<string>("حماسية، تفاعلية بأسلوب دليل محلي");
  const [objective, setObjective] = useState<string>("حجز جولات سياحية خاصة وتفاعل بروابط البايو");
  const [realFilming, setRealFilming] = useState<boolean>(true);
  const [aiGenerated, setAiGenerated] = useState<boolean>(false);
  const [voiceInput, setVoiceInput] = useState<string>("");

  // Generation & State
  const [loading, setLoading] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<TourProject | null>(DEMO_PROJECT);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Pre-fill Stockholm Sample
  const handleLoadStockholmDemo = () => {
    setCityName(DEMO_PROJECT.cityName);
    setPlaceName(DEMO_PROJECT.placeName);
    setStartPoint(DEMO_PROJECT.startPoint);
    setEndPoint(DEMO_PROJECT.endPoint);
    setKeyStops(DEMO_PROJECT.keyStops);
    setVideoType(DEMO_PROJECT.videoType);
    setTargetAudience(DEMO_PROJECT.targetAudience);
    setPlatform(DEMO_PROJECT.platform);
    setDuration(DEMO_PROJECT.duration);
    setLanguage(DEMO_PROJECT.language);
    setTone(DEMO_PROJECT.tone);
    setObjective(DEMO_PROJECT.objective);
    setActiveProject(DEMO_PROJECT);
  };

  // Generate via Server API Endpoint
  const handleGenerateTour = async () => {
    setLoading(true);
    setSavedSuccess(false);

    try {
      const res = await fetch("/api/gemini/generate-tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
          customContext: voiceInput,
        }),
      });

      const json = await res.json();
      if (json.success && json.data) {
        const generatedData = json.data;
        const newProj: TourProject = {
          id: `proj-${Date.now()}`,
          createdAt: new Date().toISOString(),
          title: `${placeName || "جولة"} (${startPoint} → ${endPoint})`,
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
          ...generatedData,
        };
        setActiveProject(newProj);
      }
    } catch (err) {
      console.error("Failed to generate tour:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, idKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idKey);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const handleSaveToMyProjects = () => {
    if (activeProject) {
      onSaveProject(activeProject);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-8 py-4">
      {/* Top Banner */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>استوديو الذكاء الاصطناعي "أنشئ جولتك"</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">
            صمم خطة الفيديو وسكربت الجولة بـ 20 عنصراً
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            أدخل تفاصيل مكانك ليقوم المساعد بإنشاء الخطة واللقطات والهاشتاغات والسيناريو والتعليق المثبت آلياً.
          </p>
        </div>

        <button
          onClick={handleLoadStockholmDemo}
          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center gap-2 shrink-0 shadow-md"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>تعبئة نموذج ستوكهولم (Hötorget → Kungsträdgården)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Inputs Column (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-lg h-fit">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Sliders className="w-4 h-4 text-amber-500" />
            <span>مدخلات الجولة والفيديو</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">اسم المدينة:</label>
              <input
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="مثال: ستوكهولم"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">اسم المكان/المسار:</label>
              <input
                type="text"
                value={placeName}
                onChange={(e) => setPlaceName(e.target.value)}
                placeholder="مثال: وسط العاصمة السويدية"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">نقطة البداية:</label>
              <input
                type="text"
                value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
                placeholder="Hötorget"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">نقطة النهاية:</label>
              <input
                type="text"
                value={endPoint}
                onChange={(e) => setEndPoint(e.target.value)}
                placeholder="Kungsträdgården"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">أهم المحطات الوسطى:</label>
            <input
              type="text"
              value={keyStops}
              onChange={(e) => setKeyStops(e.target.value)}
              placeholder="Drottninggatan, Sergels torg"
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">نوع الفيديو:</label>
              <select
                value={videoType}
                onChange={(e) => setVideoType(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              >
                <option value="جولة مشي حقيقية">جولة مشي حقيقية</option>
                <option value="فيديو ترويجي بالذكاء الاصطناعي">فيديو ترويجي AI</option>
                <option value="فيديو هجين">فيديو هجين (حقيقي + AI)</option>
                <option value="فيديو معلومات سياحية">معلومات سياحية</option>
                <option value="فيديو مطعم أو فندق">مطعم / فندق</option>
                <option value="فيديو مكان مخفي">مكان مخفي سر</option>
                <option value="فيديو مواصلات">مواصلات وطرق</option>
                <option value="إعلان جولة مدفوعة">إعلان جولة خاصة</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">المنصة المستهدفة:</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value as Platform)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              >
                <option value="tiktok">TikTok (9:16)</option>
                <option value="instagram_reels">Instagram Reels (9:16)</option>
                <option value="youtube_shorts">YouTube Shorts (9:16)</option>
                <option value="youtube_long">YouTube Long (16:9)</option>
                <option value="facebook">Facebook Video</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">المدة المطلوبة:</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="40 ثانية"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">نبرة المحتوى:</label>
              <input
                type="text"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                placeholder="حماسية بأسلوب دليل محلي"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="text-xs space-y-2 pt-1">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={realFilming}
                  onChange={(e) => setRealFilming(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-500"
                />
                <span>تصوير حقيقي بالهاتف</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={aiGenerated}
                  onChange={(e) => setAiGenerated(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-500"
                />
                <span>مولد بالذكاء الاصطناعي</span>
              </label>
            </div>
          </div>

          <div className="text-xs">
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              ملاحظات أو تعليق صوتي إضافي:
            </label>
            <textarea
              value={voiceInput}
              onChange={(e) => setVoiceInput(e.target.value)}
              placeholder="اكتب أي معلومات محددة ترغب بإضافتها أو ملاحظة حول الجولة..."
              rows={2}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <button
            onClick={handleGenerateTour}
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin text-slate-950" />
                <span>جاري توليد الجولة بـ 20 عنصراً...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>أنشئ خطة الجولة الآن</span>
              </>
            )}
          </button>
        </div>

        {/* Output Results Column (7 cols) Print Container */}
        <div className="lg:col-span-7 space-y-6 print:col-span-12" id="tour-print-area">
          {activeProject ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              {/* Output Actions Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    حزمة الجولة المتكاملة جاهزة
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveToMyProjects}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs flex items-center gap-1.5 shadow"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{savedSuccess ? "تم الحفظ ✓" : "حفظ المشروع"}</span>
                  </button>

                  <button
                    onClick={handlePrintPdf}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-700"
                  >
                    <Printer className="w-3.5 h-3.5 text-amber-400" />
                    <span>طباعة / PDF</span>
                  </button>
                </div>
              </div>

              {/* Title & Idea */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-500">1. فكرة الفيديو والهدف</span>
                  <button
                    onClick={() => copyToClipboard(activeProject.ideaAndGoal || "", "idea")}
                    className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                  >
                    {copiedIndex === "idea" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>نسخ</span>
                  </button>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{activeProject.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  {activeProject.ideaAndGoal}
                </p>
              </div>

              {/* Hook (2-sec) */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>5. الهوك الجاذب (أول ثانيتين)</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard(activeProject.hook || "", "hook")}
                    className="text-xs text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1"
                  >
                    {copiedIndex === "hook" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>نسخ الهوك</span>
                  </button>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white italic">
                  "{activeProject.hook}"
                </p>
              </div>

              {/* Shot List Table */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-500 block">4. قائمة اللقطات (Shot List)</span>
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-xs text-right">
                    <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                      <tr>
                        <th className="p-2.5">اللقطة</th>
                        <th className="p-2.5">النوع</th>
                        <th className="p-2.5">الوصف والتعليمات</th>
                        <th className="p-2.5">الزاوية والتثبيت</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                      {activeProject.shotList?.map((shot, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-950/50">
                          <td className="p-2.5 font-bold text-amber-500">{shot.shot}</td>
                          <td className="p-2.5 font-semibold whitespace-nowrap">{shot.type}</td>
                          <td className="p-2.5">{shot.description}</td>
                          <td className="p-2.5 text-slate-500 dark:text-slate-400 whitespace-nowrap">{shot.angle}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Script & Voiceover Text */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-500">6. السيناريو والتعليق الصوتي الكامل</span>
                  <button
                    onClick={() => copyToClipboard(activeProject.scriptAudio || "", "script")}
                    className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                  >
                    {copiedIndex === "script" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>نسخ السيناريو</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {activeProject.scriptAudio}
                </div>
              </div>

              {/* Editing Timeline by Seconds */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-500 block">8. خطة المونتاج بالثواني (Timeline)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeProject.editingTimeline?.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[11px] font-bold shrink-0">
                        {step.time}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">{step.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caption & 4 Hashtags */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-500">12 & 13. وصف النشر والهاشتاغات الـ 4 المحددة</span>
                  <button
                    onClick={() => copyToClipboard(activeProject.caption || "", "caption")}
                    className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1"
                  >
                    {copiedIndex === "caption" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>نسخ الكابشن</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 whitespace-pre-line font-mono">
                  {activeProject.caption}
                </div>
              </div>

              {/* Checklists Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-emerald-500 block">18. قائمة فحص يوم التصوير:</span>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    {activeProject.shootingChecklist?.map((c, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-emerald-500">✓</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-amber-500 block">19. قائمة فحص ما قبل النشر:</span>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    {activeProject.prePublishingChecklist?.map((c, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-amber-500">✓</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 bg-slate-900 rounded-3xl border border-slate-800">
              قم بتنفيذ طلبك لإنشاء خطة فيديو الجولة الجاهزة للإنتاج.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
