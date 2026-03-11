import mock from "../../../data/mock";
import Container from "../atoms/Container";
import { HiStar, HiOutlineArrowRight } from "react-icons/hi";

export default function TestimonialsSection() {
    const testimonials = mock.testimonialsSection || {};
    const items = testimonials?.items || [];
    const stats = testimonials?.stats || [];

    const renderStars = (count = 5) => {
        return [...Array(count)].map((_, i) => (
            <HiStar key={i} className="text-yellow-400 text-[18px]" />
        ));
    };

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20 lg:py-24"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.04]" />

                <div className="absolute -left-24 top-8 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-0 top-24 h-[240px] w-[240px] rounded-full bg-violet-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px]" />
            </div>

            <Container>
                <div className="relative z-10">
                    <div className="mx-auto max-w-[820px] text-center">
                        {testimonials?.badge && (
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
                                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                                {testimonials.badge}
                            </div>
                        )}

                        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                            {testimonials?.title}{" "}
                            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                                {testimonials?.highlight}
                            </span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-slate-300 sm:text-base">
                            {testimonials?.description}
                        </p>
                    </div>

                    {!!items.length && (
                        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {items.map((item, index) => (
                                <div
                                    key={`${item.name}-${index}`}
                                    className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:shadow-[0_24px_80px_rgba(14,165,233,0.08)]"
                                >
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-sky-500/8 blur-3xl transition duration-300 group-hover:bg-sky-500/12" />

                                    <div className="relative z-10">
                                        <div className="flex gap-1">
                                            {renderStars(item.rating)}
                                        </div>

                                        <p className="mt-4 text-sm leading-7 text-slate-300">
                                            {item.review}
                                        </p>

                                        <div className="mt-6 flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs text-slate-400">
                                                    {item.role} • {item.company}
                                                </p>
                                            </div>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                                                <HiOutlineArrowRight className="text-sky-300 text-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!!stats.length && (
                        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 max-w-[720px] mx-auto">
                            {stats.map((stat, index) => (
                                <div
                                    key={`${stat.label}-${index}`}
                                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-5 py-6 text-center backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                                >
                                    <p className="text-2xl font-semibold text-white">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}