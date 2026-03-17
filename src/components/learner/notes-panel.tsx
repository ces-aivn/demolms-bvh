"use client";

import { useState } from "react";
import { Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotesPanel() {
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleClear() {
    setNote("");
    setSaved(false);
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Ghi chú cá nhân cho bài học này</p>
        {note && (
          <Button variant="ghost" size="sm" className="h-7 gap-1 text-muted-foreground" onClick={handleClear}>
            <Trash2 className="h-3.5 w-3.5" />
            Xóa
          </Button>
        )}
      </div>
      <textarea
        value={note}
        onChange={(e) => { setNote(e.target.value); setSaved(false); }}
        placeholder="Nhập ghi chú của bạn ở đây..."
        rows={8}
        className="w-full resize-none rounded-lg border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
      <Button
        size="sm"
        variant={saved ? "outline" : "default"}
        className={saved ? "text-green-600 border-green-400" : "bg-primary hover:bg-primary-800"}
        onClick={handleSave}
        disabled={!note}
      >
        <Save className="h-3.5 w-3.5 mr-1.5" />
        {saved ? "Đã lưu!" : "Lưu ghi chú"}
      </Button>
    </div>
  );
}
