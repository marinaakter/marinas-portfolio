import { useEffect, useRef, useState } from "react";
import mock from "@/data/mock";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
    HiCodeBracket,
    HiCommandLine,
    HiCircleStack,
    HiUserGroup,
    HiOutlineCodeBracketSquare,
    HiOutlineWindow,
    HiOutlineRocketLaunch,
    HiOutlineCpuChip,
} from "react-icons/hi2";
import { FaGithub, FaFigma, FaFire } from "react-icons/fa";
import { SiPostman, SiMongodb, SiVercel, SiNetlify } from "react-icons/si";
import {
    Section,
    SectionHeader,
    PrimaryCard,
    SecondaryCard,
    FloatingInfoCard,
    StatsCard,
    Button,
    Reveal,
} from "@/components/ui";

export default function AboutSection() {
    const overview = mock.aboutOverview || {};
    const about = mock.aboutPage || {};
    const clients = mock.clients || {};
    const contactInfo = mock.contactInfo || {};
    const heroStats = mock.hero?.stats || [];
    const aboutSectionHero = mock.aboutSectionHero || {};

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.12 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

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

    const storyParagraphs = about?.story?.paragraphs || overview?.paragraphs || [];
    const overviewCards = overview?.cards || [];
    const clientLogos = clients?.logos || [];
    const educationItems = about?.education?.items || [];
    const skillGroups = about?.skills?.groups || [];
    const toolItems = about?.tools?.items || [];
    const heroCards = aboutSectionHero?.cards || [];
    const heroHighlights = aboutSectionHero?.highlights || [];
    const heroFloatingCards = aboutSectionHero?.floatingCards || [];

    const getText = (item) => {
        if (typeof item === "string") return item;
        if (typeof item === "object" && item !== null) {
            return item.name || item.title || item.label || item.category || "Item";
        }
        return "Item";
    };

    const getKey = (item, index) => {
        if (typeof item === "string") return `${item}-${index}`;
        if (typeof item === "object" && item !== null) {
            return `${item.name || item.title || item.label || item.category || "item"}-${index}`;
        }
        return `item-${index}`;
    };

    const getHighlightClass = (index) => {
        if (index === 0) return "border-sky-400/15 bg-sky-500/10";
        if (index === 1) return "border-violet-400/15 bg-violet-500/10";
        return "border-emerald-400/15 bg-emerald-500/10";
    };

    const skillIconMap = {
        frontend: HiOutlineWindow,
        backend: HiCommandLine,
        database: HiCircleStack,
        softskills: HiUserGroup,
    };

    const toolIconMap = {
        vscode: HiOutlineCodeBracketSquare,
        github: FaGithub,
        postman: SiPostman,
        mongodb: SiMongodb,
        firebase: FaFire,
        vercel: SiVercel,
        netlify: SiNetlify,
        figma: FaFigma,
    };

    const getSkillIcon = (iconName) => skillIconMap[iconName] || HiCodeBracket;
    const getToolIcon = (iconName) => toolIconMap[iconName] || HiOutlineCpuChip;

    return (
        <Section
            id="about"
            className="relative overflow-hidden text-white"
            containerClassName="relative z-10"
            as="section"
        >
            <div
                ref={sectionRef}
                className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
                    }`}
            >
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute -left-20 top-10 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                    <div className="absolute right-0 top-24 h-[220px] w-[220px] rounded-full bg-violet-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                    <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px] md:h-[300px] md:w-[300px]" />
                </div>

                <SectionHeader
                    badge={overview?.badge || "About Me"}
                    title={overview?.title || "About Me"}
                    subtitle={overview?.description}
                    maxWidth="max-w-[880px]"
                />

                <div className="mt-12 grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:gap-8">
                    <Reveal delay={0.05}>
                        <PrimaryCard className="h-full p-3 sm:p-4 lg:p-5">
                            <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-[#07111f] via-[#0a1323] to-[#050b17] p-5 sm:p-6 lg:p-7">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-300">
                                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                                    {about?.hero?.badge || about?.title || "About"}
                                </div>

                                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-3xl">
                                    {about?.story?.title || "Building practical digital experiences"}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                                    {about?.story?.description || overview?.description}
                                </p>

                                {!!storyParagraphs.length && (
                                    <div className="mt-5 space-y-3.5">
                                        {storyParagraphs.map((paragraph, index) => (
                                            <p
                                                key={`paragraph-${index}`}
                                                className="text-sm leading-7 text-slate-300 md:text-base"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <SecondaryCard className="rounded-[18px] px-4 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                            Location
                                        </p>
                                        <p className="mt-2 text-sm font-medium text-white md:text-base">
                                            {contactInfo?.location || "Available worldwide"}
                                        </p>
                                    </SecondaryCard>

                                    <SecondaryCard className="rounded-[18px] px-4 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                            Working mode
                                        </p>
                                        <p className="mt-2 text-sm font-medium text-white md:text-base">
                                            {contactInfo?.workingMode || "Remote & flexible"}
                                        </p>
                                    </SecondaryCard>
                                </div>

                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <Button
                                        variant="primary"
                                        onClick={() => handleScroll("projects")}
                                        className="cursor-pointer sm:w-auto"
                                    >
                                        {mock?.hero?.primaryButton || "View My Work"}
                                    </Button>

                                    <Button
                                        variant="secondary"
                                        onClick={() => handleScroll("contact")}
                                        className="cursor-pointer sm:w-auto"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            {mock?.hero?.secondaryButton || "Let’s Talk"}
                                            <HiOutlineArrowRight className="text-base" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </PrimaryCard>
                    </Reveal>

                    <div className="grid gap-5">
                        <Reveal delay={0.1}>
                            <PrimaryCard className="p-3 sm:p-4">
                                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-[#07111f] via-[#0a1323] to-[#050b17] px-5 pb-6 pt-12 sm:px-6 sm:pb-7 sm:pt-14 lg:px-7 lg:pb-8 lg:pt-16">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%)]" />
                                    <div className="absolute -top-24 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
                                    <div className="absolute bottom-0 right-[-40px] h-[180px] w-[180px] rounded-full bg-violet-500/10 blur-[100px]" />

                                    <div className="relative z-10">
                                        {aboutSectionHero?.badge && (
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200 backdrop-blur-xl">
                                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.72)]" />
                                                {aboutSectionHero.badge}
                                            </div>
                                        )}

                                        {aboutSectionHero?.title && (
                                            <h3 className="mt-5 max-w-[13ch] text-2xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-3xl lg:text-[34px]">
                                                {aboutSectionHero.title}
                                            </h3>
                                        )}

                                        {aboutSectionHero?.description && (
                                            <p className="mt-3 max-w-[560px] text-sm leading-7 text-slate-300 sm:text-base">
                                                {aboutSectionHero.description}
                                            </p>
                                        )}

                                        {!!heroCards.length && (
                                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                                {heroCards.map((card, index) => (
                                                    <SecondaryCard
                                                        key={getKey(card, index)}
                                                        className="p-5"
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                                                <span
                                                                    className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-sky-400" : "bg-violet-400"
                                                                        }`}
                                                                />
                                                            </div>

                                                            <div className="min-w-0">
                                                                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                                    {card?.label}
                                                                </p>
                                                                <h4 className="mt-1 text-base font-semibold text-white sm:text-lg">
                                                                    {card?.title}
                                                                </h4>
                                                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                                                    {card?.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </SecondaryCard>
                                                ))}
                                            </div>
                                        )}

                                        {!!heroHighlights.length && (
                                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                                {heroHighlights.map((item, index) => (
                                                    <div
                                                        key={getKey(item, index)}
                                                        className={`rounded-[18px] border px-4 py-4 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 ${getHighlightClass(
                                                            index
                                                        )}`}
                                                    >
                                                        <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">
                                                            {item?.label}
                                                        </p>
                                                        <p className="mt-2 text-lg font-semibold text-white">
                                                            {item?.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {heroFloatingCards[0] && (
                                        <div className="pointer-events-none absolute left-4 top-4 z-20 hidden max-w-[240px] lg:block">
                                            <FloatingInfoCard
                                                title={heroFloatingCards[0]?.title}
                                                subtitle={heroFloatingCards[0]?.description}
                                            />
                                        </div>
                                    )}

                                    {heroFloatingCards[1] && (
                                        <div className="pointer-events-none absolute bottom-4 right-4 z-20 hidden max-w-[240px] lg:block">
                                            <FloatingInfoCard
                                                title={heroFloatingCards[1]?.title}
                                                subtitle={heroFloatingCards[1]?.description}
                                            />
                                        </div>
                                    )}
                                </div>
                            </PrimaryCard>
                        </Reveal>

                        {!!heroStats.length && (
                            <Reveal delay={0.15}>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2">
                                    {heroStats.map((stat, index) => (
                                        <StatsCard
                                            key={`${stat.label}-${index}`}
                                            value={stat.value}
                                            label={stat.label}
                                        />
                                    ))}
                                </div>
                            </Reveal>
                        )}

                        {!!overviewCards.length && (
                            <div className="grid gap-3">
                                {overviewCards.map((card, index) => (
                                    <Reveal key={getKey(card, index)} delay={0.18 + index * 0.06}>
                                        <SecondaryCard className="p-4">
                                            <p className="text-base font-semibold text-white sm:text-lg">
                                                {getText(card)}
                                            </p>
                                            <p className="mt-2 text-sm leading-7 text-slate-300">
                                                {typeof card === "object" && card !== null
                                                    ? card.description || card.category || ""
                                                    : ""}
                                            </p>
                                        </SecondaryCard>
                                    </Reveal>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <Reveal delay={0.22} className="mt-12">
                    <PrimaryCard className="p-4 sm:p-5 lg:p-6">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-[560px]">
                                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                                    {clients?.badge}
                                </span>
                                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                                    {clients?.title}
                                </h3>
                                <p className="mt-2.5 text-sm leading-7 text-slate-300 md:text-base">
                                    {clients?.description}
                                </p>
                            </div>

                            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-[520px] lg:grid-cols-5">
                                {clientLogos.map((client, index) => (
                                    <SecondaryCard
                                        key={getKey(client, index)}
                                        className="rounded-[16px] px-4 py-3 text-center text-sm font-medium text-slate-200"
                                    >
                                        {getText(client)}
                                    </SecondaryCard>
                                ))}
                            </div>
                        </div>
                    </PrimaryCard>
                </Reveal>

                <div className="mt-12 grid gap-6 xl:grid-cols-2">
                    <Reveal delay={0.26}>
                        <PrimaryCard className="p-4 sm:p-5 lg:p-6">
                            <h3 className="text-2xl font-semibold text-white">
                                {about?.education?.title}
                            </h3>
                            <p className="mt-2.5 text-sm leading-7 text-slate-300 md:text-base">
                                {about?.education?.description}
                            </p>

                            <div className="mt-6 space-y-3">
                                {educationItems.map((edu, index) => (
                                    <SecondaryCard
                                        key={getKey(edu, index)}
                                        className="p-4 sm:p-5"
                                    >
                                        <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-sky-300">
                                            {typeof edu === "object" && edu !== null ? edu.year : ""}
                                        </span>
                                        <h4 className="mt-3 text-lg font-semibold text-white">
                                            {typeof edu === "object" && edu !== null
                                                ? edu.degree || edu.title
                                                : getText(edu)}
                                        </h4>
                                        <p className="mt-1.5 text-sm leading-7 text-slate-300">
                                            {typeof edu === "object" && edu !== null
                                                ? edu.institution || edu.description || ""
                                                : ""}
                                        </p>
                                    </SecondaryCard>
                                ))}
                            </div>
                        </PrimaryCard>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <PrimaryCard className="p-4 sm:p-5 lg:p-6">
                            <h3 className="text-2xl font-semibold text-white">
                                {about?.skills?.title}
                            </h3>
                            <p className="mt-2.5 text-sm leading-7 text-slate-300 md:text-base">
                                {about?.skills?.description}
                            </p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {skillGroups.map((group, index) => {
                                    const SkillIcon =
                                        typeof group === "object" && group !== null
                                            ? getSkillIcon(group.icon)
                                            : HiCodeBracket;

                                    return (
                                        <SecondaryCard
                                            key={getKey(group, index)}
                                            className="p-5"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                                    <SkillIcon className="text-[22px]" />
                                                </div>

                                                <div>
                                                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                        Expertise
                                                    </p>
                                                    <h4 className="mt-1 text-lg font-semibold text-white">
                                                        {typeof group === "object" && group !== null
                                                            ? group.title || group.name
                                                            : getText(group)}
                                                    </h4>
                                                </div>
                                            </div>

                                            <ul className="mt-5 space-y-3">
                                                {(typeof group === "object" && group !== null
                                                    ? group.items || []
                                                    : []
                                                ).map((skill, skillIndex) => (
                                                    <li
                                                        key={getKey(skill, skillIndex)}
                                                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                                    >
                                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
                                                        <span>{getText(skill)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </SecondaryCard>
                                    );
                                })}
                            </div>
                        </PrimaryCard>
                    </Reveal>
                </div>

                <Reveal delay={0.34} className="mt-12">
                    <PrimaryCard className="p-4 sm:p-5 lg:p-6">
                        <h3 className="text-2xl font-semibold text-white">
                            {about?.tools?.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-7 text-slate-300 md:text-base">
                            {about?.tools?.description}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {toolItems.map((tool, index) => {
                                const ToolIcon =
                                    typeof tool === "object" && tool !== null
                                        ? getToolIcon(tool.icon)
                                        : HiOutlineRocketLaunch;

                                return (
                                    <SecondaryCard
                                        key={getKey(tool, index)}
                                        className="p-4"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                                <ToolIcon className="text-[20px]" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="truncate text-sm font-semibold text-white">
                                                    {typeof tool === "object" && tool !== null
                                                        ? tool.name
                                                        : getText(tool)}
                                                </p>
                                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                                                    {typeof tool === "object" && tool !== null
                                                        ? tool.category || "Tool"
                                                        : "Tool"}
                                                </p>
                                            </div>
                                        </div>
                                    </SecondaryCard>
                                );
                            })}
                        </div>
                    </PrimaryCard>
                </Reveal>
            </div>
        </Section>
    );
}