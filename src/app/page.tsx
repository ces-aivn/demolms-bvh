import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { PlatformStats } from "@/components/landing/platform-stats";
import { DomainCategories } from "@/components/landing/domain-categories";
import { FeaturedCourses } from "@/components/landing/featured-courses";
import { PartnerOrgs } from "@/components/landing/partner-orgs";
import { Testimonials } from "@/components/landing/testimonials";
import { CtaSection } from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="public" />
      <main className="flex-1">
        <HeroSection />
        <PlatformStats />
        <DomainCategories />
        <FeaturedCourses />
        <PartnerOrgs />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
