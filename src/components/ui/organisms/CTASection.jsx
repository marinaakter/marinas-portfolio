import { useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

export default function CTASection() {
    const section = mock.ctaSection;
    const contactInfo = mock.contactInfo;
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handlePrimaryClick = () => {
        window.location.href = `mailto:${contactInfo.email}`;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const phoneHref = contactInfo?.phone
        ? `tel:${contactInfo.phone.replace(/\s+/g, "")}`
        : "#";

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-24 md:py-28"
        >
            <div className="absolute top-0 left-0 w-full leading-none">
                <svg viewBox="0 0 1440 220" className="w-full" fill="#020617">
                    <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
                </svg>
            </div>

            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
            </div>

            <Container>
                <div className="relative z-10 pt-16 md:pt-24">
                    <div
                        className={`relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#020617] px-6 py-12 text-white shadow-[0_30px_80px_rgba(2,6,23,0.16)] transition-all duration-1000 md:px-10 md:py-16 lg:px-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-sky-500/20 blur-[100px]" />
                            <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-violet-500/20 blur-[110px]" />
                            <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />
                        </div>

                        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                                    {section.badge}
                                </span>

                                <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                    {section.title}
                                    <span className="text-violet-400"> {section.highlight}</span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                                    {section.description}
                                </p>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <button type="button" onClick={handlePrimaryClick}>
                                        <Button>{section.primaryButton}</Button>
                                    </button>

                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                                    >
                                        {section.secondaryButton}
                                    </a>
                                </div>

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
                                    >
                                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                                            Email
                                        </p>
                                        <p className="mt-3 break-all text-base font-semibold text-white">
                                            {contactInfo.email}
                                        </p>
                                    </a>

                                    <a
                                        href={phoneHref}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
                                    >
                                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                                            Phone
                                        </p>
                                        <p className="mt-3 text-base font-semibold text-white">
                                            {contactInfo.phone}
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                {section.cards.map((card, index) => (
                                    <div
                                        key={card.title}
                                        className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                                            {card.label}
                                        </p>
                                        <p className="mt-3 text-2xl font-bold text-white">
                                            {card.title}
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">
                                            {card.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}