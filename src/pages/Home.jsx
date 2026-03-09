import Hero from "../components/ui/organisms/Hero";
import Clients from "../components/ui/organisms/Clients";
import ServicesSection from "../components/ui/organisms/ServicesSection";
import PortfolioSection from "../components/ui/organisms/PortfolioSection";
import TestimonialsSection from "../components/ui/organisms/TestimonialsSection";
import CTASection from "../components/ui/organisms/CTASection";

export default function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <ServicesSection />
            <PortfolioSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
}