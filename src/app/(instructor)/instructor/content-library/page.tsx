"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { MediaGrid } from "@/components/instructor/media-grid";
import { UploadArea } from "@/components/instructor/upload-area";
import { ContentFilters } from "@/components/instructor/content-filters";
import { mediaItems } from "@/lib/mock-data";

type MediaType = "all" | "video" | "document" | "image";

export default function ContentLibraryPage() {
  const [typeFilter, setTypeFilter] = useState<MediaType>("all");
  const [search, setSearch] = useState("");

  const filtered = mediaItems.filter((item) => {
    const matchType = typeFilter === "all" || item.type === typeFilter;
    const matchSearch =
      !search || item.filename.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const counts = {
    all: mediaItems.length,
    video: mediaItems.filter((i) => i.type === "video").length,
    document: mediaItems.filter((i) => i.type === "document").length,
    image: mediaItems.filter((i) => i.type === "image").length,
  };

  return (
    <div className="space-y-5">
      <PageHeader
        title="Thư viện nội dung"
        description={`${counts.all} tệp · ${counts.video} video · ${counts.document} tài liệu · ${counts.image} hình ảnh`}
        actions={
          <Button className="bg-primary hover:bg-primary-800" size="sm">
            <Upload className="h-4 w-4 mr-1.5" />
            Tải lên tệp
          </Button>
        }
      />

      <UploadArea />

      <div className="space-y-4">
        <ContentFilters
          type={typeFilter}
          onTypeChange={setTypeFilter}
          search={search}
          onSearchChange={setSearch}
        />

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Hiển thị{" "}
            <span className="font-medium text-foreground">{filtered.length}</span>{" "}
            tệp
          </p>
        </div>

        <MediaGrid items={filtered} />
      </div>
    </div>
  );
}
