import {
    Hero,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    TestimonialsSection,
    CTASection,
    PageBackground,
} from "@/components/ui";

export default function Home() {
    return (
        <PageBackground>
            <main>
                <Hero />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <TestimonialsSection />
                <CTASection />
            </main>
        </PageBackground>
    );
}