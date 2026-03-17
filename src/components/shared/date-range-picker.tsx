"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Preset = "7d" | "30d" | "90d" | "custom";

interface DateRange {
  from: string;
  to: string;
}

interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange, preset: Preset) => void;
  className?: string;
}

const PRESETS: { label: string; key: Preset; days?: number }[] = [
  { label: "7 ngày", key: "7d", days: 7 },
  { label: "30 ngày", key: "30d", days: 30 },
  { label: "90 ngày", key: "90d", days: 90 },
  { label: "Tùy chỉnh", key: "custom" },
];

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

function today(): string {
  return new Date().toISOString().split("T")[0];
}

export function DateRangePicker({ value, onChange, className }: DateRangePickerProps) {
  const [active, setActive] = useState<Preset>("30d");
  const [from, setFrom] = useState(value?.from ?? daysAgo(30));
  const [to, setTo] = useState(value?.to ?? today());

  function handlePreset(preset: Preset, days?: number) {
    setActive(preset);
    if (days) {
      const f = daysAgo(days);
      const t = today();
      setFrom(f);
      setTo(t);
      onChange?.({ from: f, to: t }, preset);
    }
  }

  function handleCustomChange(field: "from" | "to", val: string) {
    const next = field === "from" ? { from: val, to } : { from, to: val };
    if (field === "from") setFrom(val);
    else setTo(val);
    setActive("custom");
    onChange?.(next, "custom");
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <div className="flex items-center gap-1 rounded-lg border p-1">
        {PRESETS.map((p) => (
          <Button
            key={p.key}
            variant={active === p.key ? "default" : "ghost"}
            size="sm"
            className="h-7 text-xs px-2.5"
            onClick={() => handlePreset(p.key, p.days)}
          >
            {p.label}
          </Button>
        ))}
      </div>
      {active === "custom" && (
        <div className="flex items-center gap-2">
          <Input
            type="date"
            value={from}
            onChange={(e) => handleCustomChange("from", e.target.value)}
            className="h-8 text-xs w-36"
          />
          <span className="text-muted-foreground text-xs">—</span>
          <Input
            type="date"
            value={to}
            onChange={(e) => handleCustomChange("to", e.target.value)}
            className="h-8 text-xs w-36"
          />
        </div>
      )}
    </div>
  );
}
