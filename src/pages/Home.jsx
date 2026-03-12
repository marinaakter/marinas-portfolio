import {
    Hero,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    CTASection,
} from "@/components/ui";

export default function Home() {
    return (
        <main className="landing-page-bg text-white">
            <Hero />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <TestimonialsSection />
            <CTASection />
        </main>
    );
}