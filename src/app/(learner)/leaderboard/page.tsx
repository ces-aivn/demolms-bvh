import { Trophy, Medal, Award } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RankingTable } from "@/components/learner/ranking-table";
import { BadgeGallery } from "@/components/learner/badge-gallery";
import { AchievementMilestones } from "@/components/learner/achievement-milestones";
import { leaderboard, badges } from "@/lib/mock-data";

const DEMO_USER = "user-01";

const podiumIcon = [
  <Trophy key="1" className="h-6 w-6 text-secondary" />,
  <Medal key="2" className="h-6 w-6 text-gray-400" />,
  <Award key="3" className="h-6 w-6 text-amber-600" />,
];

const podiumHeight = ["h-28", "h-20", "h-14"];
const podiumBg = [
  "bg-gradient-to-b from-secondary/30 to-secondary/10 border-secondary/50 shadow-inner",
  "bg-gradient-to-b from-gray-200 to-gray-100 border-gray-300 shadow-inner",
  "bg-gradient-to-b from-amber-200/70 to-amber-100 border-amber-400/50 shadow-inner",
];
const avatarRing = [
  "ring-secondary ring-offset-2",
  "ring-gray-400 ring-offset-2",
  "ring-amber-500 ring-offset-2",
];

export default function LeaderboardPage() {
  const top3 = leaderboard.slice(0, 3);

  return (
    <div>
      <PageHeader
        title="Bảng xếp hạng"
        description="Học viên xuất sắc trong hệ thống đào tạo BVHTTDL"
      />

      <Tabs defaultValue="ranking">
        <TabsList className="mb-6">
          <TabsTrigger value="ranking">Xếp hạng</TabsTrigger>
          <TabsTrigger value="badges">Huy hiệu</TabsTrigger>
          <TabsTrigger value="milestones">Thành tích</TabsTrigger>
        </TabsList>

        <TabsContent value="ranking">
          {/* Top 3 podium */}
          <Card className="mb-6 overflow-hidden border-0 shadow-lg">
            <div className="bg-gradient-to-br from-navy-50 via-white to-secondary/10 p-8">
              <h2 className="text-center text-xs font-bold text-navy/60 uppercase tracking-[0.2em] mb-8">
                Top 3 xuất sắc nhất
              </h2>
              {/* Podium layout: 2nd | 1st | 3rd */}
              <div className="flex items-end justify-center gap-6">
                {[1, 0, 2].map((idx) => {
                  const entry = top3[idx];
                  if (!entry) return null;
                  const displayRank = idx === 1 ? 2 : idx === 0 ? 1 : 3;
                  const isFirst = entry.rank === 1;
                  return (
                    <div key={entry.id} className={`flex flex-col items-center gap-2 ${isFirst ? "w-32" : "w-28"}`}>
                      <div className="flex flex-col items-center gap-1.5">
                        {podiumIcon[entry.rank - 1]}
                        <Avatar className={`${isFirst ? "h-16 w-16" : "h-12 w-12"} ring-2 ${avatarRing[entry.rank - 1]}`}>
                          <AvatarFallback className={`bg-primary text-white font-bold ${isFirst ? "text-xl" : "text-base"}`}>
                            {entry.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-xs font-semibold text-center leading-snug line-clamp-2">{entry.name}</p>
                        <p className={`font-bold text-primary ${isFirst ? "text-base" : "text-sm"}`}>{entry.points.toLocaleString("vi-VN")}đ</p>
                      </div>
                      <div className={`w-full rounded-t-xl border-2 flex items-center justify-center ${podiumHeight[entry.rank - 1]} ${podiumBg[entry.rank - 1]}`}>
                        <span className="text-3xl font-black text-foreground/20">{displayRank}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Full ranking table */}
          <Card className="mb-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Xếp hạng đầy đủ — Top 20</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Table header */}
              <div className="flex items-center gap-3 px-4 py-2 border-b bg-muted/40 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                <span className="w-6 text-center">#</span>
                <span className="w-8" />
                <span className="flex-1">Học viên</span>
                <span className="hidden sm:block w-10 text-right">KH</span>
                <span className="w-12 text-right">HH</span>
                <span className="w-16 text-right">Điểm</span>
              </div>
            </CardContent>
          </Card>
          <RankingTable entries={leaderboard} currentUserId={DEMO_USER} />
        </TabsContent>

        <TabsContent value="badges">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Bạn đã đạt <strong>{badges.filter((b) => b.earned).length}</strong>/{badges.length} huy hiệu.
              Tiếp tục học tập để mở khóa thêm!
            </p>
            <BadgeGallery badges={badges} />
          </div>
        </TabsContent>

        <TabsContent value="milestones">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Theo dõi tiến trình của bạn hướng tới các cột mốc học tập quan trọng.
            </p>
            <AchievementMilestones />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
