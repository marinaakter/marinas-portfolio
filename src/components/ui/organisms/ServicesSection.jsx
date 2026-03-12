import mock from "../../../data/mock";
import Container from "../atoms/Container";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
    HiOutlineCodeBracket,
    HiOutlineGlobeAlt,
    HiOutlineWindow,
    HiOutlineWrenchScrewdriver,
    HiOutlinePaintBrush,
    HiOutlineBugAnt,
} from "react-icons/hi2";
import SectionReveal from "../../shared/SectionReveal";
import PremiumCard from "../../shared/PremiumCard";
import GlowButton from "../../shared/GlowButton";

export default function ServicesSection() {
    const services = mock.homeServices || {};
    const featured = services?.featured || {};
    const items = services?.items || [];
    const bottomStrip = services?.bottomStrip || {};

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

    const getServiceIcon = (title = "", index = 0) => {
        const normalized = title.toLowerCase();

        if (normalized.includes("mern")) return HiOutlineCodeBracket;
        if (normalized.includes("portfolio")) return HiOutlineGlobeAlt;
        if (normalized.includes("landing")) return HiOutlineWindow;
        if (normalized.includes("frontend")) return HiOutlinePaintBrush;
        if (normalized.includes("redesign")) return HiOutlineWrenchScrewdriver;
        if (normalized.includes("bug")) return HiOutlineBugAnt;

        const fallbackIcons = [
            HiOutlineCodeBracket,
            HiOutlineGlobeAlt,
            HiOutlineWindow,
            HiOutlinePaintBrush,
            HiOutlineWrenchScrewdriver,
            HiOutlineBugAnt,
        ];

        return fallbackIcons[index % fallbackIcons.length];
    };

    const getStripCardClass = (index) => {
        if (index === 0) return "border-sky-400/15 bg-sky-500/10";
        if (index === 1) return "border-violet-400/15 bg-violet-500/10";
        return "border-emerald-400/15 bg-emerald-500/10";
    };

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20 lg:py-24"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.04]" />
                <div className="absolute -left-20 top-10 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                <div className="absolute right-0 top-24 h-[220px] w-[220px] rounded-full bg-violet-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px] md:h-[300px] md:w-[300px]" />
            </div>

            <Container>
                <div className="relative z-10">
                    <SectionReveal className="mx-auto max-w-[860px] text-center">
                        {services?.badge && (
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                                <span>{services.badge}</span>
                            </div>
                        )}

                        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[54px]">
                            {services?.title}{" "}
                            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                                {services?.highlight}
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-[17px]">
                            {services?.description}
                        </p>
                    </SectionReveal>

                    <div className="mt-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:gap-8">
                        <SectionReveal delay={0.06}>
                            <PremiumCard className="p-3" glow="sky">
                                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#07111f] via-[#0a1323] to-[#050b17] p-5 sm:p-6 lg:p-7">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%)]" />
                                    <div className="absolute -top-24 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

                                    <div className="relative z-10">
                                        {featured?.eyebrow && (
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200 backdrop-blur-xl">
                                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.72)]" />
                                                {featured.eyebrow}
                                            </div>
                                        )}

                                        <h3 className="mt-5 max-w-[14ch] text-2xl font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-3xl lg:text-[34px]">
                                            {featured?.title}
                                        </h3>

                                        <p className="mt-3 max-w-[540px] text-sm leading-7 text-slate-300 sm:text-base">
                                            {featured?.description}
                                        </p>

                                        {!!featured?.stats?.length && (
                                            <div className="mt-6 grid grid-cols-2 gap-3">
                                                {featured.stats.map((stat, index) => (
                                                    <PremiumCard
                                                        key={`${stat.label}-${index}`}
                                                        className="px-4 py-4 text-center"
                                                        glow={index === 0 ? "sky" : "emerald"}
                                                    >
                                                        <p className="text-xl font-semibold text-white sm:text-2xl">
                                                            {stat.value}
                                                        </p>
                                                        <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                                            {stat.label}
                                                        </p>
                                                    </PremiumCard>
                                                ))}
                                            </div>
                                        )}

                                        {featured?.button && (
                                            <div className="mt-6">
                                                <GlowButton onClick={() => handleScroll("contact")}>
                                                    {featured.button}
                                                    <HiOutlineArrowRight className="text-base" />
                                                </GlowButton>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </PremiumCard>
                        </SectionReveal>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {items.map((service, index) => {
                                const Icon = getServiceIcon(service?.title, index);

                                return (
                                    <SectionReveal
                                        key={`${service?.title}-${index}`}
                                        delay={0.08 + index * 0.05}
                                    >
                                        <PremiumCard className="p-5" glow={index % 2 === 0 ? "sky" : "violet"}>
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                                    <Icon className="text-[22px]" />
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                        {service?.number}
                                                    </p>
                                                    <h3 className="mt-1 text-lg font-semibold text-white">
                                                        {service?.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                                {service?.description}
                                            </p>
                                        </PremiumCard>
                                    </SectionReveal>
                                );
                            })}
                        </div>
                    </div>

                    {!!bottomStrip?.items?.length && (
                        <SectionReveal delay={0.18} className="mt-10">
                            <PremiumCard className="p-4 sm:p-5 lg:p-6" glow="emerald">
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                                    <div className="max-w-[620px]">
                                        {bottomStrip?.eyebrow && (
                                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                                                {bottomStrip.eyebrow}
                                            </span>
                                        )}

                                        <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                                            {bottomStrip?.title}
                                        </h3>

                                        <p className="mt-2.5 text-sm leading-7 text-slate-300 md:text-base">
                                            {bottomStrip?.description}
                                        </p>
                                    </div>

                                    <div className="grid w-full gap-3 sm:grid-cols-3 lg:max-w-[480px]">
                                        {bottomStrip.items.map((item, index) => (
                                            <div
                                                key={`${item.title}-${index}`}
                                                className={`rounded-[18px] border px-4 py-4 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 ${getStripCardClass(
                                                    index
                                                )}`}
                                            >
                                                <p className="text-lg font-semibold text-white">
                                                    {item?.title}
                                                </p>
                                                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                                                    {item?.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PremiumCard>
                        </SectionReveal>
                    )}
                </div>
            </Container>
        </section>
    );
}