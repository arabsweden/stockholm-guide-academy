import React, { useState } from "react";
import {
  Video,
  Copy,
  Check,
  Sparkles,
  RotateCcw,
  Sliders,
  SlidersHorizontal,
  Code2,
} from "lucide-react";
import { PromptResult } from "../types";

export const AIPromptGeneratorView: React.FC = () => {
  const [toolName, setToolName] = useState<string>("Veo 3.1 / Google Flow");
  const [sceneDescription, setSceneDescription] = useState<string>(
    "جولة مشي دافئة في أزقة جملا ستان التاريخية في ستوكهولم مع مرشد سياحي يرتدي معطفاً خفيفاً وابتسامة واثقة"
  );
  const [aspectRatio, setAspectRatio] = useState<string>("9:16");
  const [style, setStyle] = useState<string>("Cinematic 4K 60fps, natural European sunlight, documentary feel");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const [promptResult, setPromptResult] = useState<PromptResult>({
    mainPrompt: `Ultra-realistic 4K video of a local guide leading a walking tour through the cobblestone historic streets of Gamla Stan Stockholm, natural golden hour sunlight, smooth eye-level tracking camera movement, 9:16 vertical portrait aspect ratio. Maximum facial and identity consistency with the uploaded reference image. Crisp architectural details, soft ambient Scandinavian city sound. --ar 9:16`,
    negativePrompt: "blurry, overexposed, plastic skin, unnatural facial distortions, low resolution, warped background, watermarks",
    technicalSpecs: {
      aspectRatio: "9:16",
      fps: "60fps",
      lighting: "Golden hour European natural sunlight",
      camera: "Smooth steady-cam tracking shot walking forward at eye-level",
    },
    usageGuideAr: "انسخ النص الإنجليزي أعلاه والصقه مباشرة في خانة Prompt داخل أداة Veo أو Midjourney للحصول على أعلى تطابق وواقعية سينمائية.",
  });

  const handleGeneratePrompt = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gemini/generate-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toolName,
          sceneDescription,
          style,
          aspectRatio,
        }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setPromptResult(json.data);
      }
    } catch (err) {
      console.error("Prompt generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
          <Code2 className="w-3.5 h-3.5" />
          <span>مولد الأوامر والبرومبتات الذكية</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          مولد البرومبتات لـ Veo 3.1, Google Flow & Midjourney
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          توليد برومبتات احترافية تضمن الحفاظ على الهوية البصرية ("Maximum facial and identity consistency") وزوايا الكاميرا وموسيقى الأجواء.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-lg h-fit">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <SlidersHorizontal className="w-4 h-4 text-amber-500" />
            <span>إعدادات البرومبت</span>
          </h3>

          <div className="text-xs">
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">الأداة المستهدفة:</label>
            <select
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            >
              <option value="Veo 3.1 / Google Flow">Veo 3.1 / Google Flow (فيديو)</option>
              <option value="Midjourney / Nano Banana">Midjourney / Nano Banana (صور)</option>
              <option value="CapCut AI Video">CapCut AI Video Editor</option>
              <option value="Gemini TTS Voiceover">Gemini TTS التعليق الصوتي</option>
            </select>
          </div>

          <div className="text-xs">
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">مقاس الصورة/الفيديو:</label>
            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            >
              <option value="9:16">9:16 (رأسي لـ TikTok & Reels)</option>
              <option value="16:9">16:9 (أفقي لـ YouTube)</option>
              <option value="1:1">1:1 (مربع)</option>
            </select>
          </div>

          <div className="text-xs">
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">وصف المشهد بالكامل:</label>
            <textarea
              value={sceneDescription}
              onChange={(e) => setSceneDescription(e.target.value)}
              rows={3}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="text-xs">
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">النمط البصري والإضاءة:</label>
            <input
              type="text"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <button
            onClick={handleGeneratePrompt}
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          >
            {loading ? (
              <RotateCcw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            <span>توليد البرومبت الاحترافي</span>
          </button>
        </div>

        {/* Output Prompt Result (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-500">البرومبت المولد بنجاح</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">جاهز للاستخدام مباشرة</h3>
            </div>

            <button
              onClick={() => handleCopy(promptResult.mainPrompt)}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow hover:bg-amber-400"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
              <span>نسخ البرومبت (English)</span>
            </button>
          </div>

          {/* Main Prompt Display */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-900 dark:text-white block">نص البرومبت النهائي (English Prompt):</span>
            <div className="p-4 rounded-2xl bg-slate-950 text-amber-300 font-mono text-xs leading-relaxed border border-slate-800">
              {promptResult.mainPrompt}
            </div>
          </div>

          {/* Negative Prompt */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-500 block">المحددات السلبية (Negative Prompt):</span>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-mono text-xs border border-slate-200 dark:border-slate-800">
              {promptResult.negativePrompt}
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">المقاس والسرعة:</span>
              <span className="font-bold text-slate-900 dark:text-white">{promptResult.technicalSpecs.aspectRatio} @ {promptResult.technicalSpecs.fps}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">الإضاءة والكاميرا:</span>
              <span className="font-bold text-slate-900 dark:text-white">{promptResult.technicalSpecs.lighting}</span>
            </div>
          </div>

          {/* Guide Ar */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200 text-xs">
            <span className="font-bold block mb-1">إرشادات الاستخدام:</span>
            <p>{promptResult.usageGuideAr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
