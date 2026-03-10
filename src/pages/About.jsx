import { useEffect, useRef, useState } from "react";
import Container from "../components/ui/atoms/Container";
import mock from "../data/mock";

export default function About() {
    const about = mock.aboutPage;
    const overview = mock.aboutOverview;
    const clients = mock.clients;
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.08 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const marqueeClients = [...clients.logos, ...clients.logos];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 md:py-28"
        >
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-sky-500/10 blur-[110px]" />
                <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[110px]" />
            </div>

            <Container>
                <div className="relative z-10">
                    {/* Top intro */}
                    <div
                        className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur">
                            {clients.badge}
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                            {clients.title}
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                            {clients.description}
                        </p>
                    </div>

                    {/* Logo strip */}
                    <div
                        className={`relative mt-14 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/70 px-4 py-6 shadow-sm backdrop-blur transition-all duration-1000 delay-100 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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

                    {/* Stats */}
                    <div
                        className={`mt-10 grid gap-4 sm:grid-cols-3 transition-all duration-1000 delay-150 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        {clients.stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="rounded-[24px] border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                style={{ transitionDelay: `${index * 90}ms` }}
                            >
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Story + overview cards */}
                    <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div
                            className={`transition-all duration-1000 delay-200 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div className="rounded-[30px] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur md:p-8">
                                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                                    {overview.badge}
                                </span>

                                <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                                    {overview.title}
                                </h3>

                                <p className="mt-4 text-base leading-8 text-slate-600">
                                    {overview.description}
                                </p>

                                <div className="mt-8 border-t border-slate-200 pt-6">
                                    <h4 className="text-xl font-semibold text-slate-900">
                                        {about.story.title}
                                    </h4>

                                    <p className="mt-3 text-slate-600 leading-7">
                                        {about.story.description}
                                    </p>

                                    <div className="mt-5 space-y-4">
                                        {about.story.paragraphs.map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className="text-slate-600 leading-7"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5">
                            {overview.cards.map((card, index) => (
                                <div
                                    key={card.title}
                                    className={`rounded-[24px] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur transition-all duration-1000 hover:-translate-y-1 hover:shadow-md ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${index * 100 + 250}ms` }}
                                >
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {card.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div
                        className={`mt-24 transition-all duration-1000 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                {about.education.title}
                            </h3>

                            <p className="mt-3 text-slate-600 leading-7">
                                {about.education.description}
                            </p>
                        </div>

                        <div className="relative mt-10 grid gap-6 md:grid-cols-3">
                            {about.education.items.map((edu, index) => (
                                <div
                                    key={`${edu.degree}-${edu.year}`}
                                    className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                    style={{ transitionDelay: `${index * 90}ms` }}
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500" />

                                    <div className="mt-2">
                                        <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                                            {edu.year}
                                        </span>

                                        <h4 className="mt-4 text-lg font-semibold leading-7 text-slate-900">
                                            {edu.degree}
                                        </h4>

                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {edu.institution}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div
                        className={`mt-24 transition-all duration-1000 delay-400 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                {about.skills.title}
                            </h3>

                            <p className="mt-3 text-slate-600 leading-7">
                                {about.skills.description}
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {about.skills.groups.map((group, index) => (
                                <div
                                    key={group.title}
                                    className="rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <h4 className="text-lg font-semibold text-slate-900">
                                        {group.title}
                                    </h4>

                                    <ul className="mt-5 space-y-3">
                                        {group.items.map((skill) => (
                                            <li
                                                key={skill}
                                                className="flex items-start gap-3 text-sm leading-7 text-slate-600 md:text-base"
                                            >
                                                <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div
                        className={`mt-24 transition-all duration-1000 delay-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                {about.tools.title}
                            </h3>

                            <p className="mt-3 text-slate-600 leading-7">
                                {about.tools.description}
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                            {about.tools.items.map((tool, index) => (
                                <div
                                    key={tool.name}
                                    className="group rounded-[22px] border border-slate-200 bg-white/90 p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                    style={{ transitionDelay: `${index * 70}ms` }}
                                >
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-violet-100 text-slate-700">
                                        <span className="text-sm font-bold">
                                            {tool.name.charAt(0)}
                                        </span>
                                    </div>

                                    <p className="font-medium text-slate-900">{tool.name}</p>
                                    <p className="mt-1 text-xs text-slate-500 md:text-sm">
                                        {tool.category}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expertise + values */}
                    <div className="mt-24 grid gap-8 lg:grid-cols-2">
                        <div
                            className={`rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-sm transition-all duration-1000 delay-600 md:p-8 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <h3 className="text-2xl font-bold text-slate-900">
                                Expertise
                            </h3>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {about.expertise.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div
                            className={`grid gap-5 transition-all duration-1000 delay-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            {about.values.map((value) => (
                                <div
                                    key={value.title}
                                    className="rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <h4 className="text-lg font-semibold text-slate-900">
                                        {value.title}
                                    </h4>
                                    <p className="mt-3 text-slate-600 leading-7">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
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