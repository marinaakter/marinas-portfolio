import Container from "../ui/Container";
import Button from "../ui/Button";
import heroImg from "../../assets/hero.png";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#020617] pb-24 pt-10 text-white md:pb-32 md:pt-12">
            {/* Background glow blobs */}
            <div className="absolute -left-45 -top-45 h-105 w-105 rounded-full bg-fuchsia-600/20 blur-[120px]" />
            <div className="absolute -right-35 top-20 h-80 w-[320px] rounded-full bg-sky-500/20 blur-[120px]" />
            <div className="absolute -bottom-45 left-[35%] h-90 w-90 rounded-full bg-violet-500/10 blur-[120px]" />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[42px_42px]" />

            {/* Extra radial light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(59,130,246,0.14),transparent_22%)]" />

            <Container>
                <div className="relative z-10 grid items-center gap-14 md:grid-cols-2">
                    <div>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                            Smart SaaS Solutions For Modern Business
                        </span>

                        <h1 className="mt-6 text-[42px] font-bold leading-tight md:text-[64px]">
                            Build better
                            <br />
                            digital systems
                            <br />
                            with <span className="text-violet-400">confidence.</span>
                        </h1>

                        <p className="mt-6 max-w-140 text-lg leading-8 text-slate-300">
                            Powerful IT solutions for growing brands. Launch faster, automate
                            smarter, and scale your workflow with a modern SaaS experience.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button>Try A Live Demo</Button>

                            <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                                See How It Works
                            </button>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-300">
                            <div>
                                <p className="text-2xl font-bold text-white">15k+</p>
                                <p>Active Users</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">99.9%</p>
                                <p>Uptime Guarantee</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">24/7</p>
                                <p>Premium Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <div className="absolute h-105 w-105 rounded-full bg-violet-500/20 blur-[100px]" />

                        <img
                            src={heroImg}
                            alt="Hero"
                            className="relative z-10 w-full max-w-[720px] animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
                        />

                        <div className="absolute left-0 top-16 z-20 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md lg:block">
                            <p className="font-semibold">+28% Growth</p>
                            <p className="text-xs text-slate-300">This month analytics</p>
                        </div>

                        <div className="absolute bottom-16 right-4 z-20 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md lg:block">
                            <p className="font-semibold">Cloud Sync</p>
                            <p className="text-xs text-slate-300">Secure and real-time</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom curve */}
            <div className="absolute bottom-0 left-0 w-full leading-none">
                <svg
                    viewBox="0 0 1440 200"
                    className="h-auto w-full"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32V200H0Z" />
                </svg>
            </div>

            <style>
                {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-14px);
            }
          }
        `}
            </style>
        </section>
    );
}