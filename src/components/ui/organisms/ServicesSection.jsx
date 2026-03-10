import { useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

export default function ServicesSection() {
    const homeSection = mock.homeServices;
    const page = mock.servicesPage;
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.12 }
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

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-32"
        >
            <div className="absolute top-0 left-0 w-full leading-none">
                <svg viewBox="0 0 1440 220" className="w-full" fill="#f8fafc">
                    <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
                </svg>
            </div>

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
                <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
            </div>

            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

            <Container>
                <div className="relative z-10 pt-16 md:pt-24">
                    {/* Top heading */}
                    <div
                        className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                            {page.hero.badge}
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                            {page.hero.title}
                            <span className="text-violet-400"> {page.hero.highlight}</span>
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                            {page.hero.description}
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <button type="button" onClick={() => handleScroll("contact")}>
                                <Button>{page.hero.primaryButton}</Button>
                            </button>

                            <button
                                type="button"
                                onClick={() => handleScroll("contact")}
                                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                            >
                                {page.hero.secondaryButton}
                            </button>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {page.hero.stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${index * 80 + 100}ms` }}
                                >
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured + services */}
                    <div className="mt-16 grid gap-6 lg:grid-cols-12">
                        <div
                            className={`lg:col-span-5 transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-[90px]" />
                                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-sky-500/20 blur-[90px]" />

                                <div className="relative z-10">
                                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-violet-500/20 backdrop-blur">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            className="h-8 w-8 text-sky-300"
                                        >
                                            <path d="M4 6h16v12H4z" />
                                            <path d="M4 10h16" />
                                            <path d="M9 14l-2 2 2 2" />
                                            <path d="M15 14l2 2-2 2" />
                                        </svg>
                                    </div>

                                    <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                                        {homeSection.featured.eyebrow}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">
                                        {homeSection.featured.title}
                                    </h3>

                                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                                        {homeSection.featured.description}
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        {homeSection.featured.stats.map((stat, index) => (
                                            <div
                                                key={stat.label}
                                                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20"
                                                style={{ transitionDelay: `${index * 70}ms` }}
                                            >
                                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <button type="button" onClick={() => handleScroll("contact")}>
                                            <Button>{homeSection.featured.button}</Button>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                            {page.services.map((service, index) => (
                                <div
                                    key={service.number}
                                    className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 90 + 180}ms`,
                                    }}
                                >
                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                        <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
                                        <div className="absolute right-0 top-8 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="text-sm font-semibold tracking-[0.2em] text-violet-300">
                                                {service.number}
                                            </span>

                                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition group-hover:text-white">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M7 17L17 7" />
                                                    <path d="M8 7h9v9" />
                                                </svg>
                                            </span>
                                        </div>

                                        <h3 className="mt-6 text-lg font-semibold text-white md:text-xl">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                                            {service.description}
                                        </p>

                                        {service.points?.length > 0 && (
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                {service.points.map((point) => (
                                                    <span
                                                        key={point}
                                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                                                    >
                                                        {point}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div
                        className={`mt-16 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                                {page.process.badge}
                            </span>

                            <h3 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                {page.process.title}
                                <span className="text-violet-400"> {page.process.highlight}</span>
                            </h3>

                            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                                {page.process.description}
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {page.process.steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/30"
                                    style={{ transitionDelay: `${index * 80}ms` }}
                                >
                                    <span className="text-sm font-semibold tracking-[0.2em] text-violet-300">
                                        {step.number}
                                    </span>

                                    <h4 className="mt-5 text-2xl font-semibold text-white">
                                        {step.title}
                                    </h4>

                                    <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom strip */}
                    <div
                        className={`mt-14 rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-6 backdrop-blur-xl transition-all duration-1000 delay-500 md:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                                    {homeSection.bottomStrip.eyebrow}
                                </p>
                                <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                                    {homeSection.bottomStrip.title}
                                </h3>
                                <p className="mt-3 leading-7 text-slate-300">
                                    {homeSection.bottomStrip.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {homeSection.bottomStrip.items.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-400/20"
                                        style={{ transitionDelay: `${index * 80}ms` }}
                                    >
                                        <p className="text-xl font-bold text-white">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA inside services */}
                    <div
                        className={`mt-16 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-1000 delay-700 md:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                                {page.cta.badge}
                            </span>

                            <h3 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                                {page.cta.title}
                                <span className="text-violet-400"> {page.cta.highlight}</span>
                            </h3>

                            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                                {page.cta.description}
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                                <button type="button" onClick={() => handleScroll("contact")}>
                                    <Button>{page.cta.primaryButton}</Button>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleScroll("contact")}
                                    className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                                >
                                    {page.cta.secondaryButton}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}