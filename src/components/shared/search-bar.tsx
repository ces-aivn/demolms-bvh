"use client";

import { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  defaultValue?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SearchBar({
  placeholder = "Tìm kiếm...",
  onSearch,
  defaultValue = "",
  className,
  size = "md",
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onSearch(e.target.value);
  }

  function handleClear() {
    setValue("");
    onSearch("");
    inputRef.current?.focus();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative flex items-center", className)}
    >
      <Search
        className={cn(
          "absolute left-3 text-muted-foreground pointer-events-none",
          size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"
        )}
      />
      <Input
        ref={inputRef}
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          "pl-9 pr-9",
          size === "sm" && "h-8 text-sm",
          size === "lg" && "h-12 text-base"
        )}
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 h-7 w-7 text-muted-foreground hover:text-foreground"
          onClick={handleClear}
        >
          <X className="h-3.5 w-3.5" />
        </Button>
      )}
    </form>
  );
}
