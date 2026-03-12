import { Link } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineHome, HiOutlineSparkles } from "react-icons/hi";
import mock from "../data/mock";

export default function NotFound() {
    const title = mock?.notFoundPage?.title || "404 - Page Not Found";

    return (
        <section className="relative flex min-h-screen overflow-hidden bg-[#020617] px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.04]" />
                <div className="absolute -left-20 top-10 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px] md:h-[320px] md:w-[320px]" />
                <div className="absolute right-0 top-24 h-[220px] w-[220px] rounded-full bg-violet-500/10 blur-[120px] md:h-[320px] md:w-[320px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px] md:h-[320px] md:w-[320px]" />
            </div>

            <div className="relative z-10 m-auto w-full max-w-4xl">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:p-6 lg:p-8">
                    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#07111f] via-[#0a1323] to-[#050b17] px-6 py-12 text-center sm:px-10 sm:py-16">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%)]" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                                <HiOutlineSparkles className="text-sky-300" />
                                <span>Oops! This page does not exist</span>
                            </div>

                            <h1 className="mt-6 text-6xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-7xl md:text-8xl">
                                404
                            </h1>

                            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
                                {title}
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                                The page you are looking for may have been moved, deleted, or the link might be incorrect.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/30 hover:bg-sky-500/20"
                                >
                                    <HiOutlineHome className="text-base" />
                                    Back to Home
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                                >
                                    <HiOutlineArrowLeft className="text-base" />
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}