import { BookOpen, GraduationCap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface InstructorCardProps {
  name: string;
  orgName: string;
  courseCount?: number;
  bio?: string;
}

export function InstructorCard({ name, orgName, courseCount = 3, bio }: InstructorCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14 shrink-0">
            <AvatarFallback className="bg-primary text-white text-xl font-bold">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">{name}</h3>
            <p className="text-sm text-muted-foreground">{orgName}</p>
            <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <BookOpen className="h-3.5 w-3.5" />
                {courseCount} khóa học
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap className="h-3.5 w-3.5" />
                Giảng viên cao cấp
              </span>
            </div>
          </div>
        </div>
        {bio && (
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{bio}</p>
        )}
      </CardContent>
    </Card>
  );
}
