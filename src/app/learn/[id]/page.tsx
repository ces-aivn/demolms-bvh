import { notFound } from "next/navigation";
import { getCourseById, getUserCourseProgress } from "@/lib/mock-data";
import { LearnPageClient } from "./learn-page-client";

interface Props { params: { id: string } }

const DEMO_USER = "user-01";

export default function LearnPage({ params }: Props) {
  const course = getCourseById(params.id);
  if (!course) notFound();

  const progress = getUserCourseProgress(DEMO_USER, course.id);

  return <LearnPageClient course={course} progress={progress ?? null} />;
}
