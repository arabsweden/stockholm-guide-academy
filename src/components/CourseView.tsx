import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Lock,
  Download,
  Award,
  ChevronLeft,
  FileCheck,
  FileText,
  Sparkles,
} from "lucide-react";
import { COURSE_UNITS } from "../data/courseData";
import { CourseLesson, CourseUnit, UserProfile } from "../types";

interface CourseViewProps {
  user: UserProfile;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
  onStartVideoCreation: () => void;
}

export const CourseView: React.FC<CourseViewProps> = ({
  user,
  onUpdateUser,
  onStartVideoCreation,
}) => {
  const [activeUnitId, setActiveUnitId] = useState<number>(1);
  const [activeLesson, setActiveLesson] = useState<CourseLesson | null>(
    COURSE_UNITS[0].lessons[0]
  );
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [lessonNote, setLessonNote] = useState<string>("");

  const totalLessons = COURSE_UNITS.reduce(
    (acc, unit) => acc + unit.lessons.length,
    0
  );
  const completedCount = user.completedLessonIds.length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  const activeUnit = COURSE_UNITS.find((u) => u.id === activeUnitId) || COURSE_UNITS[0];

  const handleSelectLesson = (lesson: CourseLesson) => {
    setActiveLesson(lesson);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
    setLessonNote(user.notes[lesson.id] || "");
  };

  const handleToggleCompleteLesson = (lessonId: string) => {
    let updatedCompleted = [...user.completedLessonIds];
    if (updatedCompleted.includes(lessonId)) {
      updatedCompleted = updatedCompleted.filter((id) => id !== lessonId);
    } else {
      updatedCompleted.push(lessonId);
    }
    onUpdateUser({ completedLessonIds: updatedCompleted });
  };

  const handleSaveNote = () => {
    if (!activeLesson) return;
    const updatedNotes = { ...user.notes, [activeLesson.id]: lessonNote };
    onUpdateUser({ notes: updatedNotes });
  };

  return (
    <div className="space-y-8 py-4">
      {/* Course Header & Progress Bar */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>دورة صناعة محتوى الجولات والسفر المتكاملة</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold">
              10 وحدات تدريبية لبناء قناتك كدليل محلي
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              إعداد وتدريب: <span className="text-amber-400 font-bold">RAED SHIHAB - Stockholm Guide</span>
            </p>
          </div>

          <button
            onClick={() => setShowCertificate(!showCertificate)}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md shadow-amber-500/20 shrink-0"
          >
            <Award className="w-4 h-4" />
            <span>شهادة الإكمال الرقمية</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-xs font-semibold text-slate-300">
            <span>نسبة إكمال الدورة</span>
            <span className="text-amber-400 font-bold">{progressPct}% ({completedCount} من {totalLessons} درس)</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700">
            <div
              className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Certificate Modal / Drawer */}
      {showCertificate && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border-2 border-amber-500/50 text-white text-center space-y-4 shadow-2xl relative">
          <button
            onClick={() => setShowCertificate(false)}
            className="absolute top-4 left-4 text-slate-400 hover:text-white text-xs px-2 py-1 bg-slate-800 rounded"
          >
            إغلاق ✕
          </button>
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/40">
            <Award className="w-8 h-8" />
          </div>
          <span className="text-xs uppercase font-mono text-amber-400 tracking-widest">STOCKHOLM GUIDE ACADEMY</span>
          <h2 className="text-2xl sm:text-3xl font-black text-amber-300">شهادة إكمال دورة صناعة محتوى الجولات</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            تشهد أكاديمية Stockholm Guide بأن المتدرب/ة: <span className="font-bold text-white text-base underline">{user.name}</span> قد أتم/ت متطلبات الوحدات الـ 10 بنجاح.
          </p>
          <div className="pt-4 flex justify-center gap-8 text-xs text-slate-400 border-t border-slate-800">
            <div>
              <span className="block text-amber-400 font-bold">المشرف والمدرب الرئيسي</span>
              <span>RAED SHIHAB</span>
            </div>
            <div>
              <span className="block text-amber-400 font-bold">تاريخ الإصدار</span>
              <span>{new Date().toLocaleDateString("ar-EG")}</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500">ملاحظة: شهادة تدريبية رقمية صادرة من الأكاديمية لبناء سيرتك الذاتية في صناعة المحتوى.</p>
        </div>
      )}

      {/* Course Units Selector & Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Units Navigation List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white px-1 flex items-center gap-2">
            <span>الوحدات والدروس</span>
            <span className="text-xs text-amber-500 font-normal">({COURSE_UNITS.length} وحدات)</span>
          </h3>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {COURSE_UNITS.map((unit) => {
              const isCurrentUnit = unit.id === activeUnitId;
              const unitCompletedLessons = unit.lessons.filter((l) =>
                user.completedLessonIds.includes(l.id)
              ).length;

              return (
                <div
                  key={unit.id}
                  className={`rounded-2xl border transition-all ${
                    isCurrentUnit
                      ? "bg-slate-900 text-white border-amber-500 shadow-lg"
                      : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveUnitId(unit.id);
                      if (unit.lessons.length > 0) setActiveLesson(unit.lessons[0]);
                    }}
                    className="w-full p-4 text-right flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs text-amber-500 font-bold">{unit.titleAr.split(":")[0]}</div>
                      <h4 className="text-sm font-bold mt-0.5">{unit.titleAr.split(":")[1] || unit.titleAr}</h4>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                      {unitCompletedLessons}/{unit.lessons.length}
                    </span>
                  </button>

                  {/* Lessons list inside unit */}
                  {isCurrentUnit && (
                    <div className="px-3 pb-3 space-y-1.5 border-t border-slate-800/80 pt-2">
                      {unit.lessons.map((lesson) => {
                        const isSelected = activeLesson?.id === lesson.id;
                        const isDone = user.completedLessonIds.includes(lesson.id);

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => handleSelectLesson(lesson)}
                            className={`w-full p-2.5 rounded-xl text-xs text-right flex items-center justify-between transition-colors ${
                              isSelected
                                ? "bg-amber-500 text-slate-950 font-bold"
                                : "hover:bg-slate-800 text-slate-300"
                            }`}
                          >
                            <span className="truncate max-w-[200px]">{lesson.titleAr}</span>
                            {isDone ? (
                              <CheckCircle2 className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-emerald-400"}`} />
                            ) : (
                              <span className="text-[10px] opacity-70">{lesson.durationMinutes} د</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lesson Active Content View (8 cols) */}
        <div className="lg:col-span-8">
          {activeLesson ? (
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              {/* Lesson Title & Completion Toggle Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-amber-500">{activeUnit.titleAr}</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                    {activeLesson.titleAr}
                  </h2>
                </div>

                <button
                  onClick={() => handleToggleCompleteLesson(activeLesson.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    user.completedLessonIds.includes(activeLesson.id)
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-500 hover:text-slate-950"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {user.completedLessonIds.includes(activeLesson.id)
                      ? "تم إكمال الدرس ✓"
                      : "علامة كـ مكتمل"}
                  </span>
                </button>
              </div>

              {/* Text Content */}
              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-3 whitespace-pre-line">
                {activeLesson.contentAr}
              </div>

              {/* Practical Exercise Box */}
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-100 space-y-2">
                <div className="flex items-center gap-2 font-bold text-xs text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>تمرين عملي مخصص</span>
                </div>
                <p className="text-xs font-medium leading-relaxed">{activeLesson.practicalExerciseAr}</p>
              </div>

              {/* Downloadable Checklist */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-500" />
                    <span>قائمة الفحص الخاصة بالدرس (Checklist)</span>
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {activeLesson.downloadableChecklistAr.map((chk, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>{chk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quiz Section (if available) */}
              {activeLesson.quiz && (
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4 border border-amber-500/30">
                  <span className="text-xs font-bold text-amber-400 block">اختبار قصير لسلاسة الفهم:</span>
                  <p className="text-sm font-semibold">{activeLesson.quiz.questionAr}</p>

                  <div className="space-y-2">
                    {activeLesson.quiz.optionsAr.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedQuizOption(idx)}
                        className={`w-full p-3 rounded-xl text-xs text-right border transition-all ${
                          selectedQuizOption === idx
                            ? "border-amber-500 bg-amber-500/20 text-white font-bold"
                            : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {selectedQuizOption !== null && (
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => setQuizSubmitted(true)}
                        className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
                      >
                        تأكيد الإجابة
                      </button>

                      {quizSubmitted && (
                        <span className={`text-xs font-bold ${selectedQuizOption === activeLesson.quiz?.correctIndex ? "text-emerald-400" : "text-rose-400"}`}>
                          {selectedQuizOption === activeLesson.quiz?.correctIndex
                            ? "إجابة صحيحة! أحسنت 🎯"
                            : "إجابة غير دقيقة، حاول مرة أخرى!"}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Personal Notes Box */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span>ملاحظاتي الشخصية على هذا الدرس:</span>
                </label>
                <textarea
                  value={lessonNote}
                  onChange={(e) => setLessonNote(e.target.value)}
                  placeholder="سجل أفكارك المخصصة لجولاتك في هذا الدرس..."
                  rows={2}
                  className="w-full p-3 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={handleSaveNote}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs hover:bg-slate-700 font-semibold"
                >
                  حفظ الملاحظة
                </button>
              </div>

              {/* Action Link to Tour Studio */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-300 block">جاهز للتطبيق الميداني؟</span>
                  <span className="text-xs text-slate-300">جرب توليد أول خطة فيديو جولة حقيقية بالذكاء الاصطناعي الآن.</span>
                </div>
                <button
                  onClick={onStartVideoCreation}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shrink-0 hover:bg-amber-400"
                >
                  انتقل لأداة "أنشئ جولتك"
                </button>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 bg-slate-900 rounded-3xl">
              اختر درساً للبدء المباشر.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
