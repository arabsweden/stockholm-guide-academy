import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { CourseView } from "./components/CourseView";
import { AITourStudioView } from "./components/AITourStudioView";
import { PlatformAdaptationView } from "./components/PlatformAdaptationView";
import { AIPromptGeneratorView } from "./components/AIPromptGeneratorView";
import { TemplatesView } from "./components/TemplatesView";
import { ContentCalendarView } from "./components/ContentCalendarView";
import { AnalyticsView } from "./components/AnalyticsView";
import { PackagesView } from "./components/PackagesView";
import { AdminPanel } from "./components/AdminPanel";
import { AuthModal } from "./components/AuthModal";
import { Language, ThemeMode, TourProject, TourTemplate, UserProfile } from "./types";
import { DEFAULT_USER_PROFILE, DEMO_PROJECT } from "./data/mockData";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [language, setLanguage] = useState<Language>("ar");
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [user, setUser] = useState<UserProfile>(DEFAULT_USER_PROFILE);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [savedProjects, setSavedProjects] = useState<TourProject[]>([DEMO_PROJECT]);

  // Admin Configurable Prices (Default to non-hardcoded negotiable string or blank negotiable)
  const [proPriceAr, setProPriceAr] = useState<string>("990 SEK / سنوياً");
  const [vipPriceAr, setVipPriceAr] = useState<string>("1500 SEK / جلسة 60 دقيقة");

  // Apply Theme class to HTML document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Apply Direction RTL/LTR according to language
  useEffect(() => {
    const root = document.documentElement;
    root.dir = language === "ar" ? "rtl" : "ltr";
    root.lang = language;
  }, [language]);

  const handleUpdateUser = (updated: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updated }));
  };

  const handleSaveProject = (project: TourProject) => {
    setSavedProjects((prev) => [project, ...prev.filter((p) => p.id !== project.id)]);
  };

  const handleUseTemplate = (template: TourTemplate) => {
    setCurrentTab("tour-studio");
  };

  const handleStartVideoCreation = () => {
    setCurrentTab("tour-studio");
  };

  const handleOpenDemo = () => {
    setCurrentTab("tour-studio");
  };

  return (
    <div className={`min-h-screen bg-slate-100 dark:bg-[#0A1128] text-slate-900 dark:text-slate-100 transition-colors font-sans selection:bg-[#FECC00] selection:text-[#002855] flex flex-col justify-between ${theme}`}>
      <div>
        {/* Navigation Header */}
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
          user={user}
          onOpenAuth={() => setIsAuthOpen(true)}
          onStartVideoCreation={handleStartVideoCreation}
        />

        {/* Main View Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {currentTab === "home" && (
            <HomeView
              onNavigateTab={setCurrentTab}
              onOpenDemo={handleOpenDemo}
              onStartVideoCreation={handleStartVideoCreation}
            />
          )}

          {currentTab === "course" && (
            <CourseView
              user={user}
              onUpdateUser={handleUpdateUser}
              onStartVideoCreation={handleStartVideoCreation}
            />
          )}

          {currentTab === "tour-studio" && (
            <AITourStudioView
              onSaveProject={handleSaveProject}
              savedProjects={savedProjects}
            />
          )}

          {currentTab === "platform-adaptation" && <PlatformAdaptationView />}

          {currentTab === "prompts" && <AIPromptGeneratorView />}

          {currentTab === "templates" && (
            <TemplatesView onUseTemplate={handleUseTemplate} />
          )}

          {currentTab === "calendar" && <ContentCalendarView />}

          {currentTab === "analytics" && <AnalyticsView />}

          {currentTab === "packages" && (
            <PackagesView proPriceAr={proPriceAr} vipPriceAr={vipPriceAr} />
          )}

          {currentTab === "admin" && (
            <AdminPanel
              proPriceAr={proPriceAr}
              setProPriceAr={setProPriceAr}
              vipPriceAr={vipPriceAr}
              setVipPriceAr={setVipPriceAr}
            />
          )}
        </main>
      </div>

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={user}
        onUpdateUser={handleUpdateUser}
      />

      {/* Footer */}
      <Footer onNavigateTab={setCurrentTab} />
    </div>
  );
}
