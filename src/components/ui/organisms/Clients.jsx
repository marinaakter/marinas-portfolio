import { useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import mock from "../../../data/mock";

export default function Clients() {
    const clients = mock.clients.logos;
    const marqueeClients = [...clients, ...clients];
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.18 }
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
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-24"
        >
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-[110px]" />
                <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[110px]" />
            </div>

            <Container>
                <div className="relative z-10">
                    <div
                        className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur">
                            {mock.clients.badge}
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                            {mock.clients.title}
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                            {mock.clients.description}
                        </p>
                    </div>

                    <div
                        className={`relative mt-14 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/70 px-4 py-6 shadow-sm backdrop-blur transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-50 to-transparent md:w-28" />

                        <div className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-10 md:gap-16">
                            {marqueeClients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="flex min-w-[120px] items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4 opacity-80 shadow-sm transition duration-300 hover:-translate-y-1 hover:opacity-100"
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-9 object-contain grayscale transition duration-300 hover:grayscale-0 md:h-10"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`mt-10 grid gap-4 md:grid-cols-3 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        {mock.clients.stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="rounded-[24px] border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                style={{
                                    transitionDelay: `${index * 90}ms`,
                                }}
                            >
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}