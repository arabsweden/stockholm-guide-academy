import React from "react";
import {
  Globe,
  Moon,
  Sun,
  Video,
  User,
  Compass,
  BookOpen,
  Sparkles,
  Layers,
  Calendar as CalendarIcon,
  BarChart,
  Shield,
  CreditCard,
  Share2,
} from "lucide-react";
import { Language, ThemeMode, UserProfile } from "../types";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  user: UserProfile;
  onOpenAuth: () => void;
  onStartVideoCreation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  theme,
  setTheme,
  user,
  onOpenAuth,
  onStartVideoCreation,
}) => {
  const isRtl = language === "ar";

  const navItems = [
    { id: "home", labelAr: "الرئيسية", labelEn: "Home", labelSv: "Hem", icon: Compass },
    { id: "course", labelAr: "الدورة التدريبية", labelEn: "Course", labelSv: "Kurs", icon: BookOpen },
    { id: "tour-studio", labelAr: "أنشئ جولتك", labelEn: "Tour Studio", labelSv: "Rundtursstudio", icon: Sparkles },
    { id: "platform-adaptation", labelAr: "منصات التواصل", labelEn: "Platforms", labelSv: "Plattformar", icon: Share2 },
    { id: "prompts", labelAr: "مولد البرومبتات", labelEn: "AI Prompts", labelSv: "AI Prompter", icon: Video },
    { id: "templates", labelAr: "مكتبة القوالب", labelEn: "Templates", labelSv: "Mallar", icon: Layers },
    { id: "calendar", labelAr: "تقويم المحتوى", labelEn: "Calendar", labelSv: "Kalender", icon: CalendarIcon },
    { id: "analytics", labelAr: "التحليلات", labelEn: "Analytics", labelSv: "Analys", icon: BarChart },
    { id: "packages", labelAr: "الباقات والاستشارات", labelEn: "Pricing", labelSv: "Priser", icon: CreditCard },
    { id: "admin", labelAr: "الإدارة", labelEn: "Admin", labelSv: "Admin", icon: Shield },
  ];

  const getLabel = (item: (typeof navItems)[0]) => {
    if (language === "en") return item.labelEn;
    if (language === "sv") return item.labelSv;
    return item.labelAr;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A1128]/95 backdrop-blur border-b border-[#FECC00]/20 text-white shadow-xl">
      {/* Top Banner Branding */}
      <div className="bg-gradient-to-r from-[#002855] via-[#0A1128] to-[#005293] px-4 py-1 text-xs text-center border-b border-[#FECC00]/20 flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse font-mono text-[#FECC00]">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>RAED SHIHAB | Stockholm Guide</span>
          <span className="hidden sm:inline text-slate-300">| Arab Sweden Since 2007</span>
        </div>
        <div className="flex items-center space-x-3 space-x-reverse">
          <span className="text-[#FECC00]/90 text-[11px] hidden md:inline">
            {language === "ar" ? "أكاديمية صناعة محتوى الجولات والسفر الاحترافية" : "Travel & Tour Content Creation Academy"}
          </span>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <div
          onClick={() => setCurrentTab("home")}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 bg-[#FECC00] rounded-lg flex items-center justify-center text-[#005293] font-black text-xl shadow-lg shadow-[#FECC00]/20 group-hover:scale-105 transition-transform">
            S
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black tracking-tight leading-none uppercase text-[#FECC00]">
              Stockholm Guide Academy
            </h1>
            <p className="text-[11px] text-slate-300 font-medium mt-0.5">Arab Sweden Since 2007</p>
          </div>
        </div>

        {/* Center Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#002855]/60 p-1 rounded-xl border border-white/10">
          {navItems.slice(0, 7).map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#FECC00] text-[#002855] shadow-md shadow-[#FECC00]/20 font-bold"
                    : "text-slate-300 hover:text-[#FECC00] hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{getLabel(item)}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Main Primary CTA Button */}
          <button
            onClick={onStartVideoCreation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FECC00] text-[#005293] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#FECC00]/20 hover:scale-105 active:scale-100 transition-all"
            id="start-video-btn"
          >
            <Sparkles className="w-4 h-4 text-[#005293]" />
            <span className="whitespace-nowrap">ابدأ صناعة الفيديو</span>
          </button>

          {/* Language Switcher */}
          <div className="relative group">
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium flex items-center gap-1 border border-white/10">
              <Globe className="w-3.5 h-3.5 text-[#FECC00]" />
              <span className="uppercase">{language}</span>
            </button>
            <div className={`absolute top-full ${isRtl ? "left-0" : "right-0"} mt-1 hidden group-hover:block bg-[#002855] border border-[#FECC00]/30 rounded-lg shadow-xl p-1 z-50 text-xs w-28`}>
              <button
                onClick={() => setLanguage("ar")}
                className={`w-full text-right px-2 py-1.5 rounded hover:bg-white/10 flex items-center justify-between ${
                  language === "ar" ? "text-[#FECC00] font-bold" : "text-slate-300"
                }`}
              >
                <span>العربية</span>
                <span>AR</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`w-full text-left px-2 py-1.5 rounded hover:bg-white/10 flex items-center justify-between ${
                  language === "en" ? "text-[#FECC00] font-bold" : "text-slate-300"
                }`}
              >
                <span>English</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage("sv")}
                className={`w-full text-left px-2 py-1.5 rounded hover:bg-white/10 flex items-center justify-between ${
                  language === "sv" ? "text-[#FECC00] font-bold" : "text-slate-300"
                }`}
              >
                <span>Svenska</span>
                <span>SV</span>
              </button>
            </div>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FECC00] border border-white/10 transition-colors"
            title="تبديل المظهر"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Profile / Auth Button */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs text-slate-200 transition-colors"
            id="user-profile-btn"
          >
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt={user.name} className="w-5 h-5 rounded-full object-cover" />
            ) : (
              <User className="w-4 h-4 text-[#FECC00]" />
            )}
            <span className="hidden sm:inline font-medium max-w-[90px] truncate">{user.name}</span>
          </button>
        </div>
      </div>

      {/* Sub Mobile Navigation Bar */}
      <div className="lg:hidden bg-[#0A1128] border-t border-white/10 px-2 py-1.5 overflow-x-auto flex items-center gap-1.5 no-scrollbar text-xs">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md whitespace-nowrap font-medium transition-all ${
                isActive
                  ? "bg-[#FECC00] text-[#002855] font-bold shadow-sm"
                  : "text-slate-300 bg-white/5 hover:bg-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{getLabel(item)}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
