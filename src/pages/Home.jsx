import Hero from "../components/layout/Hero";
import Clients from "../components/sections/Clients";
import ServicesSection from "../components/sections/ServicesSection";

export default function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <ServicesSection />
            
            {/* Trusted brands / stats / features / testimonials / CTA sections will come next */}
        </>
    );
}