import { useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

export default function PortfolioSection() {
    const section = mock.portfolioSection;
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
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

    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    return (
        <>
            <section
                id="projects"
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
                    <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
                    <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
                </div>

                <Container>
                    <div className="relative z-10 pt-16 md:pt-24">
                        <div
                            className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                }`}
                        >
                            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                                {section.badge}
                            </span>

                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                                {section.title}
                            </h2>

                            <p className="mt-4 text-slate-600 md:text-lg">{section.description}</p>
                        </div>

                        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {section.projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 100 + 120}ms`,
                                    }}
                                >
                                    <div className="relative aspect-[16/11] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transition duration-500 group-hover:translate-y-[-4px]">
                                        <p className="text-sm text-white/80">{project.category}</p>

                                        <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>

                                        <button
                                            type="button"
                                            onClick={() => openModal(project)}
                                            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
                                        >
                                            {section.caseStudyButton}
                                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            className={`mt-16 text-center transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <button type="button" onClick={() => handleScroll("contact")}>
                                <Button>{section.button}</Button>
                            </button>
                        </div>
                    </div>
                </Container>
            </section>

            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white shadow-[0_30px_80px_rgba(2,6,23,0.35)] animate-[modalUp_.28s_ease]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                        >
                            ✕
                        </button>

                        <div className="grid lg:grid-cols-2">
                            <div className="relative h-full min-h-[280px] lg:min-h-full">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="h-full w-full object-cover lg:rounded-l-[28px]"
                                />
                            </div>

                            <div className="p-6 md:p-8">
                                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                                    {selectedProject.category}
                                </span>

                                <h3 className="mt-5 text-2xl font-bold text-slate-900 md:text-3xl">
                                    {selectedProject.title}
                                </h3>

                                <p className="mt-4 text-base leading-8 text-slate-600">
                                    {selectedProject.description}
                                </p>

                                {selectedProject.tech && selectedProject.tech.length > 0 && (
                                    <div className="mt-8">
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                            Tech Stack
                                        </h4>

                                        <div className="mt-4 flex flex-wrap gap-3">
                                            {selectedProject.tech.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedProject.features && selectedProject.features.length > 0 && (
                                    <div className="mt-8">
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                            Key Features
                                        </h4>

                                        <ul className="mt-4 space-y-3">
                                            {selectedProject.features.map((feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 text-slate-600"
                                                >
                                                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-500" />
                                                    <span className="leading-7">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href={selectedProject.liveLink || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                                    >
                                        Live Preview
                                    </a>

                                    <a
                                        href={selectedProject.githubLink || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes modalUp {
                    0% {
                        opacity: 0;
                        transform: translateY(24px) scale(0.98);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </>
    );
}