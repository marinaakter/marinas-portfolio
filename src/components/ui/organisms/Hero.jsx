import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import heroImg from "../../../assets/myHero.png";
import mock from "../../../data/mock";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        const handleMouseMove = (e) => {
            if (window.innerWidth < 1024) return;

            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;

            setMousePosition({ x, y });
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const hero = mock?.hero || {};

    return (
        <section
            id="home"
            className="relative -mt-[70px] bg-[#020617] pb-16 pt-[112px] text-white md:-mt-[74px] md:pb-24 md:pt-[122px] lg:pb-10 lg:pt-[118px]"
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-transform duration-500"
                style={{
                    background: isDesktop
                        ? `radial-gradient(700px circle at ${52 + mousePosition.x * 8}% ${18 + mousePosition.y * 8}%, rgba(56,189,248,0.14), transparent 42%),
                           radial-gradient(460px circle at ${18 + mousePosition.x * 7}% ${20 + mousePosition.y * 7}%, rgba(168,85,247,0.10), transparent 36%),
                           radial-gradient(420px circle at ${84 + mousePosition.x * -7}% ${24 + mousePosition.y * 7}%, rgba(34,211,238,0.08), transparent 38%)`
                        : `radial-gradient(420px circle at 50% 14%, rgba(59,130,246,0.12), transparent 46%),
                           radial-gradient(280px circle at 18% 18%, rgba(168,85,247,0.10), transparent 38%)`,
                }}
            />

            <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />
            <div className="absolute -left-20 top-8 h-[220px] w-[220px] rounded-full bg-fuchsia-600/18 blur-[100px] md:h-[300px] md:w-[300px] md:blur-[120px]" />
            <div className="absolute right-0 top-12 h-[220px] w-[220px] rounded-full bg-sky-500/14 blur-[100px] md:h-[280px] md:w-[280px] md:blur-[120px]" />
            <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] md:h-[260px] md:w-[260px] md:blur-[120px]" />

            <div
                className="absolute left-[8%] top-[18%] hidden h-3.5 w-3.5 rounded-full bg-sky-400/60 blur-[1px] lg:block"
                style={{
                    transform: isDesktop
                        ? `translate3d(${mousePosition.x * 6}px, ${mousePosition.y * 6}px, 0)`
                        : "translate3d(0px, 0px, 0)",
                    transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                    animation: "floatDotA 7s ease-in-out infinite",
                }}
            />
            <div
                className="absolute right-[12%] top-[26%] hidden h-5 w-5 rounded-full bg-violet-400/40 blur-[1px] lg:block"
                style={{
                    transform: isDesktop
                        ? `translate3d(${mousePosition.x * -8}px, ${mousePosition.y * 6}px, 0)`
                        : "translate3d(0px, 0px, 0)",
                    transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                    animation: "floatDotB 8s ease-in-out infinite",
                }}
            />
            <div
                className="absolute left-[18%] bottom-[18%] hidden h-4 w-4 rounded-full bg-fuchsia-400/40 blur-[1px] lg:block"
                style={{
                    transform: isDesktop
                        ? `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * -5}px, 0)`
                        : "translate3d(0px, 0px, 0)",
                    transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                    animation: "floatDotC 9s ease-in-out infinite",
                }}
            />

            <Container>
                {/* Mobile / Tablet version */}
                <div className="relative z-10 lg:hidden">
                    <div className="mx-auto max-w-[680px]">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl md:px-5">
                            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                            <span>{hero.badge}</span>
                        </div>

                        <h1 className="mt-6 max-w-[12ch] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[54px] md:text-[62px]">
                            {hero?.title?.line1}
                            <span className="block">{hero?.title?.line2}</span>
                            <span className="mt-1 block text-white/92">
                                {hero?.title?.prefix}{" "}
                                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                    {hero?.title?.highlight}
                                </span>
                            </span>
                        </h1>

                        <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-[17px]">
                            {hero.description}
                        </p>

                        {hero?.highlights?.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2.5">
                                {hero.highlights.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 backdrop-blur-lg sm:text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
                            <button type="button" onClick={() => handleScroll("projects")}>
                                <Button className="w-full rounded-full px-6 py-3 text-sm font-semibold shadow-[0_14px_40px_rgba(14,165,233,0.2)] sm:w-auto md:px-7">
                                    {hero.primaryButton}
                                </Button>
                            </button>

                            <button
                                type="button"
                                onClick={() => handleScroll("contact")}
                                className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] sm:w-auto md:px-7"
                            >
                                {hero.secondaryButton}
                            </button>
                        </div>

                        {hero?.trustText && (
                            <div className="mt-5 flex items-center gap-3 text-sm text-slate-400">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                <p>{hero.trustText}</p>
                            </div>
                        )}

                        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:mt-12">
                            {hero?.stats?.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
                                >
                                    <p className="text-xl font-semibold text-white sm:text-2xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="relative mt-12 flex items-center justify-center">
                            <div className="absolute inset-x-8 top-12 h-[260px] rounded-full bg-sky-500/12 blur-[90px] sm:h-[320px]" />
                            <div className="absolute bottom-8 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-violet-500/12 blur-[90px] md:h-[260px] md:w-[260px]" />

                            <div className="relative w-full max-w-[460px] sm:max-w-[520px]">
                                <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_36px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl" />

                                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 sm:p-4 md:p-5">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%)]" />
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                    <div className="relative rounded-[24px] border border-white/8 bg-[#08101f]/80 p-4 sm:p-5 md:p-6">
                                        <img
                                            src={heroImg}
                                            alt="Hero"
                                            className="relative z-10 mx-auto w-full max-w-[420px] drop-shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:max-w-[470px]"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0)",
                                                transition: "transform 0.35s ease-out",
                                                animation: "floatImageMobile 7s ease-in-out infinite",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop version */}
                <div className="relative z-10 hidden lg:flex lg:items-start">
                    <div className="grid w-full items-start gap-8 pt-6 pb-4 xl:grid-cols-[minmax(0,0.96fr)_minmax(500px,1.04fr)] 2xl:gap-10">
                        <div className="relative max-w-[600px] xl:max-w-[620px]">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                                <span>{hero.badge}</span>
                            </div>

                            <h1 className="mt-6 max-w-[13ch] text-[50px] font-semibold leading-[0.98] tracking-[-0.05em] text-white xl:text-[56px] 2xl:text-[60px]">
                                {hero?.title?.line1}
                                <span className="block text-white/96">{hero?.title?.line2}</span>
                                <span className="mt-2 block text-white/90">
                                    {hero?.title?.prefix}{" "}
                                    <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        {hero?.title?.highlight}
                                    </span>
                                </span>
                            </h1>

                            <div className="mt-5 max-w-[540px]">
                                <p className="text-[14px] leading-7 text-slate-300 xl:text-[15px] xl:leading-7">
                                    {hero.description}
                                </p>
                            </div>

                            {hero?.highlights?.length > 0 && (
                                <div className="mt-5 flex max-w-[540px] flex-wrap gap-2.5">
                                    {hero.highlights.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-200 backdrop-blur-xl xl:text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="mt-7 flex items-center gap-4">
                                <button type="button" onClick={() => handleScroll("projects")}>
                                    <Button className="rounded-full px-7 py-3.5 text-sm font-semibold shadow-[0_18px_45px_rgba(14,165,233,0.24)]">
                                        {hero.primaryButton}
                                    </Button>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleScroll("contact")}
                                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
                                >
                                    {hero.secondaryButton}
                                </button>
                            </div>

                            {hero?.trustText && (
                                <div className="mt-5 flex items-center gap-3 text-sm text-slate-400">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                    <p>{hero.trustText}</p>
                                </div>
                            )}

                            <div className="mt-4 grid max-w-[540px] grid-cols-4 gap-3">
                                {hero?.stats?.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
                                    >
                                        <p className="text-[20px] font-semibold leading-none text-white">
                                            {stat.value}
                                        </p>
                                        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="absolute right-[12%] top-[10%] h-[280px] w-[280px] rounded-full bg-sky-500/12 blur-[110px]" />
                            <div className="absolute bottom-[10%] left-[16%] h-[240px] w-[240px] rounded-full bg-violet-500/12 blur-[110px]" />

                            <div className="relative w-full max-w-[620px]">
                                <div className="absolute -inset-4 rounded-[38px] bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl" />

                                <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%)]" />
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                    <div className="relative rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#07111f,#0a1323)] p-6 xl:p-7">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:38px_38px] opacity-30" />

                                        <div
                                            className="absolute left-5 top-5 z-20 max-w-[180px] rounded-2xl border border-white/10 bg-[#0f172a]/72 px-3.5 py-2.5 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                                            style={{
                                                transform: isDesktop
                                                    ? `translate3d(${mousePosition.x * 4}px, ${mousePosition.y * 4}px, 0)`
                                                    : "translate3d(0px, 0px, 0)",
                                                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                                                animation: "floatCardA 7.5s ease-in-out infinite",
                                                willChange: "transform",
                                            }}
                                        >
                                            <p className="font-semibold">
                                                {hero?.floatingCards?.[0]?.title}
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-slate-300">
                                                {hero?.floatingCards?.[0]?.subtitle}
                                            </p>
                                        </div>

                                        <div
                                            className="absolute right-5 top-[24%] z-20 max-w-[175px] rounded-2xl border border-sky-400/20 bg-sky-500/10 px-3.5 py-2.5 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                                            style={{
                                                transform: isDesktop
                                                    ? `translate3d(${mousePosition.x * -3}px, ${mousePosition.y * 3}px, 0)`
                                                    : "translate3d(0px, 0px, 0)",
                                                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                                                animation: "floatCardB 8.5s ease-in-out infinite",
                                                willChange: "transform",
                                            }}
                                        >
                                            <p className="font-semibold">
                                                {hero?.floatingCards?.[2]?.title || "Safe Updates"}
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-slate-300">
                                                {hero?.floatingCards?.[2]?.subtitle ||
                                                    "Without breaking your logic"}
                                            </p>
                                        </div>

                                        <div
                                            className="absolute bottom-5 left-6 z-20 rounded-[20px] border border-white/10 bg-[#0f172a]/78 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                                            style={{
                                                transform: isDesktop
                                                    ? `translate3d(${mousePosition.x * 2.5}px, ${mousePosition.y * -2.5}px, 0)`
                                                    : "translate3d(0px, 0px, 0)",
                                                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                                                animation: "floatCardC 9s ease-in-out infinite",
                                                willChange: "transform",
                                            }}
                                        >
                                            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                                Build quality
                                            </p>
                                            <p className="mt-2 text-lg font-semibold text-white">
                                                Premium UI
                                            </p>
                                        </div>

                                        <div
                                            className="absolute bottom-6 right-5 z-20 max-w-[185px] rounded-2xl border border-white/10 bg-[#0f172a]/72 px-3.5 py-2.5 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                                            style={{
                                                transform: isDesktop
                                                    ? `translate3d(${mousePosition.x * -4}px, ${mousePosition.y * -4}px, 0)`
                                                    : "translate3d(0px, 0px, 0)",
                                                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                                                animation: "floatCardD 8s ease-in-out infinite",
                                                willChange: "transform",
                                            }}
                                        >
                                            <p className="font-semibold">
                                                {hero?.floatingCards?.[1]?.title}
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-slate-300">
                                                {hero?.floatingCards?.[1]?.subtitle}
                                            </p>
                                        </div>

                                        <div className="relative z-10 flex min-h-[430px] items-center justify-center xl:min-h-[450px]">
                                            <img
                                                src={heroImg}
                                                alt="Hero"
                                                className="mx-auto mt-3 w-full max-w-[400px] drop-shadow-[0_30px_100px_rgba(0,0,0,0.5)] xl:max-w-[430px]"
                                                style={{
                                                    transform: isDesktop
                                                        ? `translate3d(${mousePosition.x * 6}px, ${mousePosition.y * 6 + 6}px, 0)`
                                                        : "translate3d(0px, 6px, 0)",
                                                    transition:
                                                        "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s ease-out",
                                                    animation: "floatImageDesktop 8s ease-in-out infinite",
                                                    willChange: "transform",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-10 w-full bg-gradient-to-b from-transparent via-[#020617]/20 to-[#0f172a] md:h-12 lg:h-14" />

            <style>{`
                @keyframes floatDotA {
                    0%, 100% { margin-top: 0px; margin-left: 0px; opacity: 0.8; }
                    50% { margin-top: -8px; margin-left: 4px; opacity: 1; }
                }

                @keyframes floatDotB {
                    0%, 100% { margin-top: 0px; margin-left: 0px; opacity: 0.65; }
                    50% { margin-top: 10px; margin-left: -4px; opacity: 0.95; }
                }

                @keyframes floatDotC {
                    0%, 100% { margin-top: 0px; margin-left: 0px; opacity: 0.7; }
                    50% { margin-top: -6px; margin-left: 6px; opacity: 1; }
                }

                @keyframes floatImageMobile {
                    0%, 100% { transform: translate3d(0px, 0px, 0); }
                    50% { transform: translate3d(0px, -8px, 0); }
                }

                @keyframes floatImageDesktop {
                    0%, 100% { margin-top: 12px; }
                    50% { margin-top: 2px; }
                }

                @keyframes floatCardA {
                    0%, 100% { margin-top: 0px; margin-left: 0px; }
                    50% { margin-top: -10px; margin-left: 4px; }
                }

                @keyframes floatCardB {
                    0%, 100% { margin-top: 0px; margin-left: 0px; }
                    50% { margin-top: 8px; margin-left: -5px; }
                }

                @keyframes floatCardC {
                    0%, 100% { margin-top: 0px; margin-left: 0px; }
                    50% { margin-top: -7px; margin-left: 3px; }
                }

                @keyframes floatCardD {
                    0%, 100% { margin-top: 0px; margin-left: 0px; }
                    50% { margin-top: 9px; margin-left: -4px; }
                }
            `}</style>
        </section>
    );
}