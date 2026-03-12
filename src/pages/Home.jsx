import Hero from "../components/ui/organisms/Hero";
import ServicesSection from "../components/ui/organisms/ServicesSection";
import PortfolioSection from "../components/ui/organisms/PortfolioSection";
import TestimonialsSection from "../components/ui/organisms/TestimonialsSection";
import CTASection from "../components/ui/organisms/CTASection";
import AboutSection from "../components/ui/organisms/AboutSection";



export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <TestimonialsSection />
            <CTASection />
            
        </>
    );
}