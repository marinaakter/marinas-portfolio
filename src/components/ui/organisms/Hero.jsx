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
            className="relative -mt-[70px] overflow-hidden bg-[#020617] pb-16 pt-[112px] text-white md:-mt-[74px] md:pb-24 md:pt-[122px] lg:pb-24 lg:pt-[136px]"
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-transform duration-500"
                style={{
                    background: isDesktop
                        ? `radial-gradient(620px circle at ${50 + mousePosition.x * 10}% ${22 + mousePosition.y * 10
                        }%, rgba(59,130,246,0.16), transparent 42%),
               radial-gradient(420px circle at ${18 + mousePosition.x * 8}% ${18 + mousePosition.y * 8
                        }%, rgba(168,85,247,0.12), transparent 36%),
               radial-gradient(340px circle at ${82 + mousePosition.x * -8}% ${26 + mousePosition.y * 8
                        }%, rgba(34,211,238,0.08), transparent 38%)`
                        : `radial-gradient(420px circle at 50% 14%, rgba(59,130,246,0.12), transparent 46%),
               radial-gradient(280px circle at 18% 18%, rgba(168,85,247,0.1), transparent 38%)`,
                }}
            />

            <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px]" />

            <div className="absolute -left-20 top-8 h-[220px] w-[220px] rounded-full bg-fuchsia-600/18 blur-[100px] md:h-[300px] md:w-[300px] md:blur-[120px]" />
            <div className="absolute right-0 top-12 h-[220px] w-[220px] rounded-full bg-sky-500/14 blur-[100px] md:h-[280px] md:w-[280px] md:blur-[120px]" />
            <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] md:h-[260px] md:w-[260px] md:blur-[120px]" />

            <div className="absolute left-[8%] top-[18%] hidden h-3.5 w-3.5 rounded-full bg-sky-400/60 blur-[1px] lg:block animate-[floatY_6s_ease-in-out_infinite]" />
            <div className="absolute right-[12%] top-[26%] hidden h-5 w-5 rounded-full bg-violet-400/40 blur-[1px] lg:block animate-[floatY_7s_ease-in-out_infinite]" />
            <div className="absolute left-[18%] bottom-[18%] hidden h-4 w-4 rounded-full bg-fuchsia-400/40 blur-[1px] lg:block animate-[floatY_8s_ease-in-out_infinite]" />

            <Container>
                <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.92fr)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(540px,0.95fr)] xl:gap-14">
                    <div className="max-w-[680px] lg:max-w-[640px] xl:max-w-[700px]">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl md:px-5">
                            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                            <span>{hero.badge}</span>
                        </div>

                        <h1 className="mt-6 max-w-[12ch] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[54px] md:text-[62px] lg:max-w-none lg:text-[72px] xl:text-[78px]">
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
                    </div>

                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="absolute inset-x-8 top-12 h-[260px] rounded-full bg-sky-500/12 blur-[90px] sm:h-[320px] lg:inset-x-2 lg:top-10 lg:h-[360px]" />
                        <div className="absolute bottom-8 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-violet-500/12 blur-[90px] md:h-[260px] md:w-[260px]" />

                        <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px] xl:max-w-[620px]">
                            <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_36px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl" />

                            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 sm:p-4 md:p-5">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%)]" />
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <div className="relative rounded-[24px] border border-white/8 bg-[#08101f]/80 p-4 sm:p-5 md:p-6">
                                    <img
                                        src={heroImg}
                                        alt="Hero"
                                        className="relative z-10 mx-auto w-full max-w-[420px] drop-shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:max-w-[470px] lg:max-w-[520px] xl:max-w-[560px]"
                                        style={{
                                            transform: isDesktop
                                                ? `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8
                                                }px)`
                                                : "translate(0px, 0px)",
                                            transition: "transform 0.35s ease-out",
                                            animation: "floatImage 6s ease-in-out infinite",
                                        }}
                                    />
                                </div>

                                <div
                                    className="absolute left-4 top-4 z-20 hidden max-w-[210px] rounded-2xl border border-white/10 bg-[#0f172a]/72 px-4 py-3 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block"
                                    style={{
                                        transform: isDesktop
                                            ? `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5
                                            }px)`
                                            : "translate(0px, 0px)",
                                        transition: "transform 0.35s ease-out",
                                    }}
                                >
                                    <p className="font-semibold">{hero?.floatingCards?.[0]?.title}</p>
                                    <p className="mt-1 text-xs leading-5 text-slate-300">
                                        {hero?.floatingCards?.[0]?.subtitle}
                                    </p>
                                </div>

                                <div
                                    className="absolute bottom-4 right-4 z-20 hidden max-w-[210px] rounded-2xl border border-white/10 bg-[#0f172a]/72 px-4 py-3 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block"
                                    style={{
                                        transform: isDesktop
                                            ? `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5
                                            }px)`
                                            : "translate(0px, 0px)",
                                        transition: "transform 0.35s ease-out",
                                    }}
                                >
                                    <p className="font-semibold">{hero?.floatingCards?.[1]?.title}</p>
                                    <p className="mt-1 text-xs leading-5 text-slate-300">
                                        {hero?.floatingCards?.[1]?.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}