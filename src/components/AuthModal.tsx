import React, { useState } from "react";
import { User, X, CheckCircle2, Sparkles, LogIn } from "lucide-react";
import { UserProfile } from "../types";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUpdateUser,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [level, setLevel] = useState(currentUser.skillLevel);
  const [niche, setNiche] = useState(currentUser.contentNiche);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      name,
      email,
      skillLevel: level,
      contentNiche: niche,
    });
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-amber-500/30 text-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">تسجيل الدخول والملف الشخصي</h3>
            <p className="text-xs text-slate-400">خصص حسابك واحتفظ بمشاريع جولاتك في Stockholm Guide.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300 block mb-1">الاسم أو اسم القناة:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium"
            />
          </div>

          <div>
            <label className="font-bold text-slate-300 block mb-1">البريد الإلكتروني:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium"
            />
          </div>

          <div>
            <label className="font-bold text-slate-300 block mb-1">مستواك الحالي في صناعة المحتوى:</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium"
            >
              <option value="مبتدئ">مبتدئ (أول فيديو جولة)</option>
              <option value="متوسط">متوسط (أملك قناة وأصوّر دورياً)</option>
              <option value="متقدم">متقدم (دليل محلي / صانع محترف)</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-300 block mb-1">مجال المحتوى السياحي المفضل:</label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white font-medium"
            >
              <option value="جولات تاريخية ومعالم">جولات تاريخية ومعالم السويد</option>
              <option value="مطاعم ومقاهي واكتشاف">مطاعم ومقاهي</option>
              <option value="تسوق وأسواق">تسوق وموديلات</option>
              <option value="طبيعة وبحيرات">طبيعة وبحيرات</option>
              <option value="حياة يومية وهجرة">حياة يومية وهجرة السويد</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg"
          >
            {isSaved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                <span>تم الحفظ والتسجيل بنجاح!</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 text-slate-950" />
                <span>حفظ البيانات ومتابعة التعلم</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
