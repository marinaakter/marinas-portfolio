import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import heroImg from "../../../assets/Hero.png";
import mock from "../../../data/mock";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const hero = mock.hero;

    return (
        <section className="relative -mt-[72px] overflow-hidden bg-[#020617] pb-24 pt-[92px] text-white md:-mt-[76px] md:pb-32 md:pt-[104px]">
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-transform duration-200"
                style={{
                    background: `radial-gradient(500px circle at ${50 + mousePosition.x * 20}% ${28 + mousePosition.y * 20
                        }%, rgba(59,130,246,0.16), transparent 40%),
          radial-gradient(400px circle at ${20 + mousePosition.x * 10}% ${18 + mousePosition.y * 10
                        }%, rgba(168,85,247,0.14), transparent 35%)`,
                }}
            />

            <div className="absolute -left-32 top-0 h-[320px] w-[320px] animate-pulse rounded-full bg-fuchsia-600/20 blur-[120px]" />
            <div className="absolute right-0 top-24 h-[280px] w-[280px] animate-pulse rounded-full bg-sky-500/20 blur-[120px]" />
            <div className="absolute bottom-10 left-1/2 h-[240px] w-[240px] -translate-x-1/2 animate-pulse rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="absolute left-[8%] top-[20%] h-4 w-4 animate-[floatY_5s_ease-in-out_infinite] rounded-full bg-sky-400/70" />
            <div className="absolute right-[12%] top-[30%] h-6 w-6 animate-[floatY_6s_ease-in-out_infinite] rounded-full bg-violet-400/60" />
            <div className="absolute left-[18%] bottom-[22%] h-5 w-5 animate-[floatY_7s_ease-in-out_infinite] rounded-full bg-fuchsia-400/50" />
            <div className="absolute right-[24%] bottom-[18%] h-3 w-3 animate-[floatY_4.5s_ease-in-out_infinite] rounded-full bg-cyan-300/70" />

            <Container>
                <div className="relative z-10 grid items-center gap-12 md:grid-cols-2 lg:gap-14">
                    <div className="pt-6 md:pt-10">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                            {hero.badge}
                        </span>

                        <h1 className="mt-6 text-[40px] font-bold leading-tight md:text-[56px] lg:text-[64px]">
                            {hero.title.line1}
                            <br />
                            {hero.title.line2}
                            <br />
                            {hero.title.prefix}{" "}
                            <span className="text-violet-400">{hero.title.highlight}</span>
                        </h1>

                        <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300 md:text-lg">
                            {hero.description}
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button>{hero.primaryButton}</Button>

                            <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                                {hero.secondaryButton}
                            </button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-300 md:gap-10">
                            {hero.stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex justify-center md:justify-end">
                        <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[120px]" />

                        <img
                            src={heroImg}
                            alt="Hero"
                            className="relative z-10 w-full max-w-[640px] drop-shadow-[0_25px_80px_rgba(0,0,0,0.45)] lg:max-w-[720px]"
                            style={{
                                transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`,
                                transition: "transform 0.2s ease-out",
                                animation: "floatImage 5s ease-in-out infinite",
                            }}
                        />

                        <div
                            className="absolute left-0 top-16 z-20 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md lg:block"
                            style={{
                                transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
                                transition: "transform 0.2s ease-out",
                            }}
                        >
                            <p className="font-semibold">{hero.floatingCards[0].title}</p>
                            <p className="text-xs text-slate-300">{hero.floatingCards[0].subtitle}</p>
                        </div>

                        <div
                            className="absolute bottom-16 right-4 z-20 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md lg:block"
                            style={{
                                transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px)`,
                                transition: "transform 0.2s ease-out",
                            }}
                        >
                            <p className="font-semibold">{hero.floatingCards[1].title}</p>
                            <p className="text-xs text-slate-300">{hero.floatingCards[1].subtitle}</p>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="absolute bottom-0 left-0 w-full leading-none">
                <svg viewBox="0 0 1440 200" className="w-full" fill="white">
                    <path d="M0,120L80,110C160,100,320,80,480,90C640,100,800,140,960,150C1120,160,1280,140,1360,130L1440,120V200H0Z" />
                </svg>
            </div>

            <style>
                {`
          @keyframes floatImage {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          @keyframes floatY {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
            100% { transform: translateY(0px); }
          }
        `}
            </style>
        </section>
    );
}