import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowRight, HiOutlineGlobeAlt } from "react-icons/hi";
import mock from "@/data/mock";
import {
    Section,
    SectionHeader,
    PrimaryCard,
    SecondaryCard,
    Button,
    Reveal,
} from "@/components/ui";

export default function PortfolioSection() {
    const portfolio = mock.portfolioSection || {};
    const projects = portfolio?.projects || [];

    const handleScroll = (id) => {
        const element = document.getElementById(id);

        if (element) {
            const navbarOffset = 90;
            const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };

    return (
        <Section id="projects" className="relative overflow-hidden text-white">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-20 top-10 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                <div className="absolute right-0 top-24 h-[220px] w-[220px] rounded-full bg-violet-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px] md:h-[300px] md:w-[300px]" />
            </div>

            <div className="relative z-10">
                <SectionHeader
                    badge={portfolio?.badge}
                    title={portfolio?.title}
                    subtitle={portfolio?.description}
                    maxWidth="max-w-[860px]"
                />

                {!!projects.length && (
                    <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:gap-6">
                        {projects.map((project, index) => (
                            <Reveal
                                key={project?.id || project?.slug || `${project?.title}-${index}`}
                                delay={index * 0.08}
                                distance={30}
                            >
                                <PrimaryCard className="group h-full p-3">
                                    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#08111f]">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <img
                                                src={project?.cover || project?.image}
                                                alt={project?.title || "Project"}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/88 via-[#020617]/18 to-transparent" />

                                            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                                                {project?.category && (
                                                    <span className="rounded-full border border-white/10 bg-[#0f172a]/75 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200 backdrop-blur-xl">
                                                        {project.category}
                                                    </span>
                                                )}

                                                {project?.metrics?.[0]?.value && (
                                                    <span className="rounded-full border border-white/10 bg-[#0f172a]/75 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200 backdrop-blur-xl">
                                                        {project.metrics[0].value}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-5 sm:p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="min-w-0">
                                                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                                        {project?.title}
                                                    </h3>
                                                    <p className="mt-2 text-sm leading-7 text-slate-300">
                                                        {project?.summary || project?.description}
                                                    </p>
                                                </div>

                                                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-300 group-hover:translate-x-1 sm:flex">
                                                    <HiOutlineArrowRight className="text-[20px]" />
                                                </div>
                                            </div>

                                            {!!project?.tech?.length && (
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {project.tech.map((tech, techIndex) => (
                                                        <span
                                                            key={`${tech}-${techIndex}`}
                                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-xl"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {!!project?.metrics?.length && (
                                                <div className="mt-5 grid grid-cols-3 gap-3">
                                                    {project.metrics.map((metric, metricIndex) => (
                                                        <SecondaryCard
                                                            key={`${metric.label}-${metricIndex}`}
                                                            className="px-3 py-3 text-center"
                                                        >
                                                            <p className="text-sm font-semibold text-white">
                                                                {metric.value}
                                                            </p>
                                                            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                                                                {metric.label}
                                                            </p>
                                                        </SecondaryCard>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                                                {project?.liveLink && (
                                                    <Button
                                                        as="a"
                                                        href={project.liveLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        variant="primary"
                                                        className="sm:w-auto"
                                                    >
                                                        <span className="inline-flex items-center gap-2">
                                                            <HiOutlineGlobeAlt className="text-base" />
                                                            {portfolio?.caseStudyButton || "View Details"}
                                                        </span>
                                                    </Button>
                                                )}

                                                {project?.githubLink && (
                                                    <Button
                                                        as="a"
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        variant="secondary"
                                                        className="sm:w-auto"
                                                    >
                                                        <span className="inline-flex items-center gap-2">
                                                            <FaGithub className="text-base" />
                                                            Code
                                                        </span>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </PrimaryCard>
                            </Reveal>
                        ))}
                    </div>
                )}

                {portfolio?.button && (
                    <Reveal delay={0.2} className="mt-10 flex justify-center">
                        <Button
                            variant="secondary"
                            onClick={() => handleScroll("contact")}
                            className="cursor-pointer"
                        >
                            <span className="inline-flex items-center gap-2">
                                {portfolio.button}
                                <HiOutlineArrowRight className="text-base" />
                            </span>
                        </Button>
                    </Reveal>
                )}
            </div>
        </Section>
    );
}