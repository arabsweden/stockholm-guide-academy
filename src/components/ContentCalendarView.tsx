import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Plus,
  LayoutGrid,
  List,
  CheckCircle2,
  Clock,
  Video,
  ExternalLink,
} from "lucide-react";
import { MOCK_CALENDAR_ITEMS } from "../data/mockData";
import { CalendarItem, KanbanStatus, Platform } from "../types";

export const ContentCalendarView: React.FC = () => {
  const [calendarItems, setCalendarItems] = useState<CalendarItem[]>(MOCK_CALENDAR_ITEMS);
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");

  // New Item Form State
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newLocation, setNewLocation] = useState<string>("ستوكهولم");
  const [newPlatform, setNewPlatform] = useState<Platform>("tiktok");
  const [newFilmingDate, setNewFilmingDate] = useState<string>("");
  const [newPublishDate, setNewPublishDate] = useState<string>("");

  const kanbanColumns: { id: KanbanStatus; titleAr: string; color: string }[] = [
    { id: "idea", titleAr: "فكرة جديدة", color: "border-slate-500 text-slate-400" },
    { id: "planned", titleAr: "مخطط", color: "border-blue-500 text-blue-400" },
    { id: "filmed", titleAr: "تم التصوير", color: "border-amber-500 text-amber-400" },
    { id: "editing", titleAr: "مونتاج", color: "border-purple-500 text-purple-400" },
    { id: "ready", titleAr: "جاهز للنشر", color: "border-emerald-500 text-emerald-400" },
    { id: "published", titleAr: "منشور", color: "border-cyan-500 text-cyan-400" },
  ];

  const handleUpdateStatus = (itemId: string, newStatus: KanbanStatus) => {
    setCalendarItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, status: newStatus } : item))
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const item: CalendarItem = {
      id: `cal-${Date.now()}`,
      title: newTitle,
      location: newLocation,
      platform: newPlatform,
      status: "idea",
      filmingDate: newFilmingDate,
      publishDate: newPublishDate,
    };
    setCalendarItems([item, ...calendarItems]);
    setNewTitle("");
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>تقويم الإنتاج ولوحة Kanban</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">
            تقويم محتوى الجولات الأسبوعي والشهري
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            تابع حالة إنتاج فيديوهاتك من مرحلة الفكرة والتخطيط إلى التصوير والمونتاج والنشر.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* View Toggle */}
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
            <button
              onClick={() => setViewMode("kanban")}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                viewMode === "kanban" ? "bg-amber-500 text-slate-950" : "text-slate-300 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Kanban</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                viewMode === "list" ? "bg-amber-500 text-slate-950" : "text-slate-300 hover:text-white"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>قائمة</span>
            </button>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة فكرة فيديو</span>
          </button>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <form
          onSubmit={handleAddItem}
          className="p-6 rounded-3xl bg-slate-900 text-white border-2 border-amber-500/50 space-y-4 max-w-xl mx-auto shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-base text-amber-400">إضافة فيديو جديد للتقويم</h3>
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="text-xs space-y-1">
            <label className="font-bold block">اسم فكرة الفيديو:</label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="مثال: أسرار أضيق شارع في جملا ستان"
              className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold block mb-1">المكان / المنطقة:</label>
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="font-bold block mb-1">المنصة:</label>
              <select
                value={newPlatform}
                onChange={(e) => setNewPlatform(e.target.value as Platform)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
              >
                <option value="tiktok">TikTok</option>
                <option value="instagram_reels">Instagram Reels</option>
                <option value="youtube_shorts">YouTube Shorts</option>
                <option value="youtube_long">YouTube Long</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-bold block mb-1">تاريخ التصوير:</label>
              <input
                type="date"
                value={newFilmingDate}
                onChange={(e) => setNewFilmingDate(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="font-bold block mb-1">تاريخ النشر:</label>
              <input
                type="date"
                value={newPublishDate}
                onChange={(e) => setNewPublishDate(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              حفظ بالفهرس
            </button>
          </div>
        </form>
      )}

      {/* View Display */}
      {viewMode === "kanban" ? (
        /* Kanban Columns Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
          {kanbanColumns.map((col) => {
            const itemsInCol = calendarItems.filter((i) => i.status === col.id);
            return (
              <div
                key={col.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-3 space-y-3 min-w-[200px]"
              >
                <div className={`flex items-center justify-between border-b pb-2 ${col.color}`}>
                  <h4 className="font-bold text-xs">{col.titleAr}</h4>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-950 text-[10px] font-mono">
                    {itemsInCol.length}
                  </span>
                </div>

                <div className="space-y-2 min-h-[250px]">
                  {itemsInCol.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs hover:border-amber-500/50 transition-colors shadow-sm"
                    >
                      <span className="font-bold text-slate-900 dark:text-white block leading-tight">
                        {item.title}
                      </span>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 space-y-0.5">
                        <p>📍 {item.location}</p>
                        <p className="uppercase font-mono font-bold text-amber-500">📱 {item.platform}</p>
                        {item.publishDate && <p>📅 للنشر: {item.publishDate}</p>}
                      </div>

                      {/* Select Status Handler */}
                      <select
                        value={item.status}
                        onChange={(e) => handleUpdateStatus(item.id, e.target.value as KanbanStatus)}
                        className="w-full text-[10px] p-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-none font-semibold mt-1"
                      >
                        {kanbanColumns.map((c) => (
                          <option key={c.id} value={c.id}>
                            تغيير لـ: {c.titleAr}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* List View */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
          <table className="w-full text-xs text-right">
            <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">عنوان الفيديو</th>
                <th className="p-3">المكان</th>
                <th className="p-3">المنصة</th>
                <th className="p-3">الحالة الحالية</th>
                <th className="p-3">تاريخ النشر</th>
                <th className="p-3">المشاهدات الأجندة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {calendarItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-950/50">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{item.title}</td>
                  <td className="p-3 text-slate-600 dark:text-slate-400">{item.location}</td>
                  <td className="p-3 font-mono font-bold uppercase text-amber-500">{item.platform}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 font-bold">
                      {kanbanColumns.find((c) => c.id === item.status)?.titleAr}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-slate-500">{item.publishDate || "غير محدد"}</td>
                  <td className="p-3 font-mono text-emerald-400 font-bold">
                    {item.performanceViews ? `${item.performanceViews.toLocaleString()} مشاهدة` : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
