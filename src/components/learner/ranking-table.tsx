import { Trophy, Medal, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { LeaderboardEntry } from "@/types";

interface RankingTableProps {
  entries: LeaderboardEntry[];
  currentUserId?: string;
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="h-4 w-4 text-secondary" />;
  if (rank === 2) return <Medal className="h-4 w-4 text-gray-400" />;
  if (rank === 3) return <Award className="h-4 w-4 text-amber-600" />;
  return <span className="text-sm font-bold text-muted-foreground w-4 text-center">{rank}</span>;
}

export function RankingTable({ entries, currentUserId }: RankingTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="divide-y">
          {entries.map((entry) => {
            const isMe = entry.userId === currentUserId;
            return (
              <div
                key={entry.id}
                className={`flex items-center gap-3 px-4 py-3 transition-colors ${isMe ? "bg-primary/5 border-l-2 border-primary" : "hover:bg-muted/40"}`}
              >
                {/* Rank */}
                <div className="w-6 flex items-center justify-center shrink-0">
                  <RankBadge rank={entry.rank} />
                </div>

                {/* Avatar */}
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className={`text-xs font-bold ${isMe ? "bg-primary text-white" : "bg-primary-100 text-primary"}`}>
                    {entry.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${isMe ? "text-primary" : ""}`}>
                    {entry.name}
                    {isMe && <span className="ml-1.5 text-[10px] text-primary/70">(Bạn)</span>}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
                  <span className="hidden sm:block">{entry.coursesCompleted} KH</span>
                  <Badge variant="outline" className="text-[10px] h-4 px-1.5">
                    {entry.badgesEarned} HH
                  </Badge>
                  <span className="font-bold text-primary w-12 text-right">
                    {entry.points.toLocaleString("vi-VN")}đ
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
