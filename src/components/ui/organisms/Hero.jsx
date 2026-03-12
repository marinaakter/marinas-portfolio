import { useEffect, useState } from "react";
import heroImg from "@/assets/myHero.png";
import mock from "@/data/mock";
import {
    Button,
    Container,
    StatsCard,
    FloatingInfoCard,
    ShowcaseImage,
    FadeUp,
    ParallaxMouse,
} from "@/components/ui";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
        setIsVisible(true);

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
            const navbarOffset = 90;
            const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };

    const hero = mock?.hero || {};

    return (
        <section
            id="home"
            className="relative overflow-hidden pb-16 pt-[104px] text-white sm:pt-[108px] md:pb-24 md:pt-[112px] lg:pb-16 lg:pt-[122px] xl:pt-[128px]"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-20 top-10 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                <div className="absolute right-0 top-24 h-[220px] w-[220px] rounded-full bg-violet-500/10 blur-[120px] md:h-[300px] md:w-[300px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px] md:h-[300px] md:w-[300px]" />
            </div>

            <ParallaxMouse
                x={mousePosition.x}
                y={mousePosition.y}
                strengthX={6}
                strengthY={6}
                className="absolute left-[8%] top-[18%] hidden h-3.5 w-3.5 rounded-full bg-sky-400/60 blur-[1px] lg:block"
                style={{ animation: "floatDotA 7s ease-in-out infinite" }}
            />
            <ParallaxMouse
                x={mousePosition.x}
                y={mousePosition.y}
                strengthX={-8}
                strengthY={6}
                className="absolute right-[12%] top-[26%] hidden h-5 w-5 rounded-full bg-violet-400/40 blur-[1px] lg:block"
                style={{ animation: "floatDotB 8s ease-in-out infinite" }}
            />
            <ParallaxMouse
                x={mousePosition.x}
                y={mousePosition.y}
                strengthX={5}
                strengthY={-5}
                className="absolute left-[18%] bottom-[18%] hidden h-4 w-4 rounded-full bg-fuchsia-400/40 blur-[1px] lg:block"
                style={{ animation: "floatDotC 9s ease-in-out infinite" }}
            />

            <Container>
                <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
                    <div
                        className={`max-w-[680px] transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        {hero?.badge && (
                            <FadeUp delay={0.05}>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                                    <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                                    <span>{hero.badge}</span>
                                </div>
                            </FadeUp>
                        )}

                        <FadeUp delay={0.12}>
                            <h1 className="mt-6 max-w-[13ch] text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[52px] md:text-[62px] lg:text-[58px] xl:text-[66px]">
                                {hero?.title?.line1}
                                <span className="block text-white/96">{hero?.title?.line2}</span>
                                <span className="mt-2 block text-white/90">
                                    {hero?.title?.prefix}{" "}
                                    <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        {hero?.title?.highlight}
                                    </span>
                                </span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-[17px] lg:max-w-[560px]">
                                {hero.description}
                            </p>
                        </FadeUp>

                        {hero?.highlights?.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {hero.highlights.map((item, index) => (
                                    <FadeUp key={`${item}-${index}`} delay={index * 0.08 + 0.15}>
                                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 backdrop-blur-lg sm:text-sm">
                                            {item}
                                        </span>
                                    </FadeUp>
                                ))}
                            </div>
                        )}

                        <FadeUp delay={0.24}>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <Button
                                    variant="primary"
                                    fullWidth
                                    onClick={() => handleScroll("projects")}
                                    className="cursor-pointer sm:w-auto"
                                >
                                    {hero.primaryButton}
                                </Button>

                                <Button
                                    type="button"
                                    variant="secondary"
                                    fullWidth
                                    onClick={() => handleScroll("contact")}
                                    className="cursor-pointer sm:w-auto"
                                >
                                    {hero.secondaryButton}
                                </Button>
                            </div>
                        </FadeUp>

                        {hero?.trustText && (
                            <FadeUp delay={0.3}>
                                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                    <p>{hero.trustText}</p>
                                </div>
                            </FadeUp>
                        )}

                        {hero?.stats?.length > 0 && (
                            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                                {hero.stats.map((stat, index) => (
                                    <FadeUp key={`${stat.label}-${index}`} delay={index * 0.08 + 0.25}>
                                        <StatsCard value={stat.value} label={stat.label} />
                                    </FadeUp>
                                ))}
                            </div>
                        )}
                    </div>

                    <div
                        className={`relative flex items-center justify-center transition-all duration-[1200ms] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="absolute inset-x-8 top-12 h-[260px] rounded-full bg-sky-500/10 blur-[100px] sm:h-[320px]" />
                        <div className="absolute bottom-8 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] md:h-[260px] md:w-[260px]" />

                        <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px]">
                            <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl lg:-inset-4 lg:rounded-[38px]" />

                            <ShowcaseImage
                                src={heroImg}
                                alt="Hero"
                                imageClassName="lg:mt-3"
                                imageStyle={{
                                    transform: isDesktop
                                        ? `translate3d(${mousePosition.x * 6}px, ${mousePosition.y * 6 + 6}px, 0)`
                                        : "translate3d(0px, 0px, 0)",
                                    transition:
                                        "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s ease-out",
                                    animation: isDesktop
                                        ? "floatImageDesktop 8s ease-in-out infinite"
                                        : "floatImageMobile 7s ease-in-out infinite",
                                }}
                            >
                                <ParallaxMouse
                                    x={mousePosition.x}
                                    y={mousePosition.y}
                                    strengthX={4}
                                    strengthY={4}
                                    className="absolute left-4 top-4 z-20 hidden max-w-[180px] lg:block"
                                    style={{ animation: "floatCardA 7.5s ease-in-out infinite" }}
                                >
                                    <FloatingInfoCard
                                        title={hero?.floatingCards?.[0]?.title}
                                        subtitle={hero?.floatingCards?.[0]?.subtitle}
                                    />
                                </ParallaxMouse>

                                <ParallaxMouse
                                    x={mousePosition.x}
                                    y={mousePosition.y}
                                    strengthX={-3}
                                    strengthY={3}
                                    className="absolute right-4 top-[20%] z-20 hidden max-w-[175px] lg:block"
                                    style={{ animation: "floatCardB 8.5s ease-in-out infinite" }}
                                >
                                    <FloatingInfoCard
                                        variant="accent"
                                        title={hero?.floatingCards?.[2]?.title || "Safe Updates"}
                                        subtitle={
                                            hero?.floatingCards?.[2]?.subtitle ||
                                            "Without breaking your logic"
                                        }
                                    />
                                </ParallaxMouse>

                                <ParallaxMouse
                                    x={mousePosition.x}
                                    y={mousePosition.y}
                                    strengthX={2.5}
                                    strengthY={-2.5}
                                    className="absolute bottom-5 left-5 z-20 hidden lg:block"
                                    style={{ animation: "floatCardC 9s ease-in-out infinite" }}
                                >
                                    <FloatingInfoCard variant="dark" className="rounded-[20px] px-4 py-3">
                                        <>
                                            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                                Build quality
                                            </p>
                                            <p className="mt-2 text-lg font-semibold text-white">
                                                Premium UI
                                            </p>
                                        </>
                                    </FloatingInfoCard>
                                </ParallaxMouse>

                                <ParallaxMouse
                                    x={mousePosition.x}
                                    y={mousePosition.y}
                                    strengthX={-4}
                                    strengthY={-4}
                                    className="absolute bottom-6 right-5 z-20 hidden max-w-[185px] lg:block"
                                    style={{ animation: "floatCardD 8s ease-in-out infinite" }}
                                >
                                    <FloatingInfoCard
                                        title={hero?.floatingCards?.[1]?.title}
                                        subtitle={hero?.floatingCards?.[1]?.subtitle}
                                    />
                                </ParallaxMouse>
                            </ShowcaseImage>
                        </div>
                    </div>
                </div>
            </Container>

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