import Hero from "../components/ui/organisms/Hero";
import ServicesSection from "../components/ui/organisms/ServicesSection";
import PortfolioSection from "../components/ui/organisms/PortfolioSection";
import TestimonialsSection from "../components/ui/organisms/TestimonialsSection";
import CTASection from "../components/ui/organisms/CTASection";
import About from "./About";

export default function Home() {
    return (
        <>
            <Hero />
            <About/>
            <ServicesSection />
            <PortfolioSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
}