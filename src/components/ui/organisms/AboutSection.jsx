import { useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import mock from "../../../data/mock";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function AboutSection() {
    const overview = mock.aboutOverview || {};
    const about = mock.aboutPage || {};
    const clients = mock.clients || {};
    const contactInfo = mock.contactInfo || {};
    const heroStats = mock.hero?.stats || [];

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

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative overflow-hidden bg-[#020617] py-20 text-white md:py-24 lg:py-28"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />
                <div className="absolute -left-24 top-8 h-[260px] w-[260px] rounded-full bg-fuchsia-600/18 blur-[120px] md:h-[340px] md:w-[340px]" />
                <div className="absolute right-0 top-20 h-[240px] w-[240px] rounded-full bg-sky-500/14 blur-[110px] md:h-[320px] md:w-[320px]" />
                <div className="absolute bottom-10 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-violet-500/12 blur-[120px] md:h-[320px] md:w-[320px]" />
                <div className="absolute left-[10%] top-[18%] hidden h-4 w-4 rounded-full bg-sky-400/50 blur-[1px] lg:block" />
                <div className="absolute right-[12%] top-[26%] hidden h-5 w-5 rounded-full bg-violet-400/35 blur-[1px] lg:block" />
            </div>

            <Container>
                <div className="relative z-10">
                    <div
                        className={`mx-auto max-w-[900px] text-center transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                            <span>{overview?.badge || "About Me"}</span>
                        </div>

                        <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
                            {overview?.title || "About Me"}
                        </h2>

                        <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-[17px]">
                            {overview?.description}
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:gap-10">
                        <div
                            className={`transition-all duration-1000 delay-100 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.26)] backdrop-blur-2xl sm:p-5 md:p-7 lg:p-8">
                                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#07111f,#0a1323)] p-5 sm:p-6 lg:p-7">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                                        <span className="h-2 w-2 rounded-full bg-sky-400" />
                                        About Me
                                    </div>

                                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-3xl">
                                        {about?.story?.title || "Building practical digital experiences"}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                                        {about?.story?.description || overview?.description}
                                    </p>

                                    <div className="mt-6 space-y-4">
                                        {storyParagraphs.map((paragraph, index) => (
                                            <p
                                                key={`paragraph-${index}`}
                                                className="text-sm leading-7 text-slate-300 md:text-base"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">
                                            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                Location
                                            </p>
                                            <p className="mt-2 text-sm font-medium text-white md:text-base">
                                                {contactInfo?.location || "Available worldwide"}
                                            </p>
                                        </div>

                                        <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">
                                            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                Working mode
                                            </p>
                                            <p className="mt-2 text-sm font-medium text-white md:text-base">
                                                {contactInfo?.workingMode || "Remote & flexible"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <button
                                            type="button"
                                            onClick={() => handleScroll("projects")}
                                            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(14,165,233,0.24)] transition duration-300 hover:-translate-y-[1px]"
                                        >
                                            View My Work
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleScroll("contact")}
                                            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
                                        >
                                            Let’s Talk
                                            <HiOutlineArrowRight className="text-base" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5">
                            <div
                                className={`transition-all duration-1000 delay-150 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                            >
                                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-4">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%)]" />
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                    <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#07111f,#0a1323)] p-5 sm:p-6 lg:p-7">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:38px_38px] opacity-30" />

                                        <div className="relative z-10">
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                                                Available for projects
                                            </div>

                                            <h3 className="mt-5 max-w-[14ch] text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[34px]">
                                                Turning ideas into clean and scalable products
                                            </h3>

                                            <p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-300 sm:text-base">
                                                I focus on building user-friendly, fast, and maintainable web experiences
                                                that help brands grow online with confidence.
                                            </p>

                                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                                                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                        Primary focus
                                                    </p>
                                                    <p className="mt-2 text-base font-semibold text-white">
                                                        MERN Stack Development
                                                    </p>
                                                    <p className="mt-2 text-sm leading-6 text-slate-300">
                                                        Modern websites, dashboards, and scalable business solutions.
                                                    </p>
                                                </div>

                                                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                                                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                        Work style
                                                    </p>
                                                    <p className="mt-2 text-base font-semibold text-white">
                                                        Strategy + Execution
                                                    </p>
                                                    <p className="mt-2 text-sm leading-6 text-slate-300">
                                                        I care about both clean UI and stable implementation.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                                                <div className="rounded-[20px] border border-sky-400/15 bg-sky-500/10 px-4 py-4">
                                                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">
                                                        Delivery
                                                    </p>
                                                    <p className="mt-2 text-lg font-semibold text-white">
                                                        Fast
                                                    </p>
                                                </div>

                                                <div className="rounded-[20px] border border-violet-400/15 bg-violet-500/10 px-4 py-4">
                                                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">
                                                        Quality
                                                    </p>
                                                    <p className="mt-2 text-lg font-semibold text-white">
                                                        Premium
                                                    </p>
                                                </div>

                                                <div className="rounded-[20px] border border-emerald-400/15 bg-emerald-500/10 px-4 py-4">
                                                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300">
                                                        Support
                                                    </p>
                                                    <p className="mt-2 text-lg font-semibold text-white">
                                                        Reliable
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pointer-events-none absolute left-4 top-4 hidden rounded-2xl border border-white/10 bg-[#0f172a]/72 px-3.5 py-2.5 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block">
                                            <p className="font-semibold">Client-focused builds</p>
                                            <p className="mt-1 text-xs leading-5 text-slate-300">
                                                Clean process, strong communication
                                            </p>
                                        </div>

                                        <div className="pointer-events-none absolute bottom-5 right-5 hidden rounded-2xl border border-white/10 bg-[#0f172a]/72 px-3.5 py-2.5 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block">
                                            <p className="font-semibold">Safe updates</p>
                                            <p className="mt-1 text-xs leading-5 text-slate-300">
                                                Without breaking existing logic
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 sm:grid-cols-4 xl:grid-cols-2 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                            >
                                {heroStats.map((stat, index) => (
                                    <div
                                        key={`${stat.label}-${index}`}
                                        className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]"
                                        style={{ transitionDelay: `${index * 70}ms` }}
                                    >
                                        <p className="text-2xl font-semibold text-white">{stat.value}</p>
                                        <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-4">
                                {overviewCards.map((card, index) => (
                                    <div
                                        key={getKey(card, index)}
                                        className={`rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-all duration-1000 hover:-translate-y-1 hover:border-sky-400/20 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                            }`}
                                        style={{ transitionDelay: `${index * 100 + 260}ms` }}
                                    >
                                        <p className="text-lg font-semibold text-white">{getText(card)}</p>
                                        <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                                            {typeof card === "object" && card !== null
                                                ? card.description || card.category || ""
                                                : ""}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`mt-16 transition-all duration-1000 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-6 lg:p-7">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                <div className="max-w-[560px]">
                                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                                        {clients?.badge}
                                    </span>
                                    <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                                        {clients?.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                                        {clients?.description}
                                    </p>
                                </div>

                                <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-[520px] lg:grid-cols-5">
                                    {clientLogos.map((client, index) => (
                                        <div
                                            key={getKey(client, index)}
                                            className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-slate-200 backdrop-blur-xl"
                                        >
                                            {getText(client)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid gap-8 xl:grid-cols-2">
                        <div
                            className={`transition-all duration-1000 delay-400 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-6 lg:p-7">
                                <h3 className="text-2xl font-semibold text-white">
                                    {about?.education?.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                                    {about?.education?.description}
                                </p>

                                <div className="mt-8 space-y-4">
                                    {educationItems.map((edu, index) => (
                                        <div
                                            key={getKey(edu, index)}
                                            className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#07111f,#0a1323)] p-5"
                                        >
                                            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-sky-300">
                                                {typeof edu === "object" && edu !== null ? edu.year : ""}
                                            </span>
                                            <h4 className="mt-4 text-lg font-semibold text-white">
                                                {typeof edu === "object" && edu !== null ? edu.degree || edu.title : getText(edu)}
                                            </h4>
                                            <p className="mt-2 text-sm leading-7 text-slate-300">
                                                {typeof edu === "object" && edu !== null ? edu.institution || edu.description || "" : ""}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-6 lg:p-7">
                                <h3 className="text-2xl font-semibold text-white">
                                    {about?.skills?.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                                    {about?.skills?.description}
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    {skillGroups.map((group, index) => (
                                        <div
                                            key={getKey(group, index)}
                                            className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#07111f,#0a1323)] p-5"
                                        >
                                            <h4 className="text-lg font-semibold text-white">
                                                {typeof group === "object" && group !== null ? group.title || group.name : getText(group)}
                                            </h4>

                                            <ul className="mt-4 space-y-3">
                                                {(typeof group === "object" && group !== null ? group.items || [] : []).map((skill, skillIndex) => (
                                                    <li
                                                        key={getKey(skill, skillIndex)}
                                                        className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                                                    >
                                                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                                                        <span>{getText(skill)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`mt-16 transition-all duration-1000 delay-600 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-6 lg:p-7">
                            <h3 className="text-2xl font-semibold text-white">
                                {about?.tools?.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                                {about?.tools?.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {toolItems.map((tool, index) => (
                                    <span
                                        key={getKey(tool, index)}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:border-sky-400/20 hover:bg-white/[0.07]"
                                    >
                                        {getText(tool)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}