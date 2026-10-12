export type Language = "ar" | "en" | "sv";
export type ThemeMode = "light" | "dark";

export type UserLevel = "beginner" | "intermediate" | "pro";

export type ContentNiche =
  | "travel"
  | "walking_tours"
  | "city_info"
  | "photography"
  | "restaurants"
  | "hotels"
  | "events"
  | "daily_life"
  | "social";

export type Platform =
  | "tiktok"
  | "instagram_reels"
  | "youtube_shorts"
  | "youtube_long"
  | "facebook"
  | "snapchat"
  | "instagram_stories"
  | "x"
  | "threads"
  | "linkedin"
  | "pinterest";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  level: UserLevel;
  niches: ContentNiche[];
  platforms: Platform[];
  completedLessonIds: string[];
  savedProjectIds: string[];
  hasProAccess: boolean;
  notes: Record<string, string>; // lessonId -> personal notes
}

export interface QuizQuestion {
  id: string;
  questionAr: string;
  questionEn: string;
  questionSv: string;
  optionsAr: string[];
  optionsEn: string[];
  optionsSv: string[];
  correctIndex: number;
}

export interface CourseLesson {
  id: string;
  titleAr: string;
  titleEn: string;
  titleSv: string;
  durationMinutes: number;
  videoUrl?: string;
  contentAr: string;
  contentEn: string;
  contentSv: string;
  practicalExerciseAr: string;
  downloadableChecklistAr: string[];
  quiz?: QuizQuestion;
}

export interface CourseUnit {
  id: number;
  titleAr: string;
  titleEn: string;
  titleSv: string;
  descriptionAr: string;
  iconName: string;
  lessons: CourseLesson[];
}

export interface ShotItem {
  shot: number;
  type: string;
  description: string;
  angle: string;
}

export interface EditingStep {
  time: string;
  action: string;
}

export interface TourProject {
  id: string;
  createdAt: string;
  title: string;
  cityName: string;
  placeName: string;
  startPoint: string;
  endPoint: string;
  keyStops: string;
  videoType: string;
  targetAudience: string;
  platform: Platform;
  duration: string;
  language: string;
  tone: string;
  objective: string;
  
  // Generated Content
  ideaAndGoal?: string;
  suggestedRoute?: string[];
  shotList?: ShotItem[];
  hook?: string;
  scriptAudio?: string;
  onScreenText?: string[];
  editingTimeline?: EditingStep[];
  musicMood?: string;
  thumbnailConcept?: string;
  alternativeTitles?: string[];
  caption?: string;
  hashtags?: string[];
  callToAction?: string;
  pinnedComment?: string;
  platformSpecificNotes?: Record<string, string>;
  shootingChecklist?: string[];
  prePublishingChecklist?: string[];
  repurposingIdeas?: string[];
}

export interface TourTemplate {
  id: string;
  titleAr: string;
  category: string;
  duration: string;
  descriptionAr: string;
  sampleRoute: string;
  keyHighlights: string[];
  suggestedHook: string;
  presetData: Partial<TourProject>;
}

export type KanbanStatus = "idea" | "planned" | "filmed" | "editing" | "ready" | "published";

export interface CalendarItem {
  id: string;
  title: string;
  location: string;
  platform: Platform;
  status: KanbanStatus;
  filmingDate?: string;
  publishDate?: string;
  postLink?: string;
  notes?: string;
  performanceViews?: number;
  nextSuggestedVideo?: string;
}

export interface AnalyticsData {
  totalVideos: number;
  totalViews: number;
  avgWatchTimeSeconds: number;
  completionRatePct: number;
  engagementRatePct: number;
  totalBookmarks: number;
  totalShares: number;
  totalComments: number;
  profileVisits: number;
  tourInquiries: number;
  directBookings: number;
  bestPlatform: string;
  bestDistrict: string;
  bestHookType: string;
  bestVideoLength: string;
}

export interface PromptResult {
  mainPrompt: string;
  negativePrompt: string;
  technicalSpecs: {
    aspectRatio: string;
    fps: string;
    lighting: string;
    camera: string;
  };
  usageGuideAr: string;
}
