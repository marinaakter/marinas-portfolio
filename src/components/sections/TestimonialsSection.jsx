import Container from "../ui/Container";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Marketing Director, NovaEdge",
        review:
            "Their team transformed our platform into a modern, conversion-focused experience. The process was smooth, strategic, and incredibly professional from start to finish.",
    },
    {
        name: "James Carter",
        role: "Founder, BrightLayer",
        review:
            "We needed a partner who understood both design and business. They delivered a product that not only looked premium but also improved engagement and lead quality.",
    },
    {
        name: "Ariana Brooks",
        role: "Product Manager, CloudSync",
        review:
            "From planning to launch, everything felt intentional and polished. Communication was excellent, timelines were respected, and the final result exceeded expectations.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-28">
            {/* top curve */}
            <div className="absolute top-0 left-0 w-full leading-none">
                <svg viewBox="0 0 1440 220" className="w-full" fill="#ffffff">
                    <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
                </svg>
            </div>

            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
                <div className="absolute right-[-100px] bottom-10 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
            </div>

            {/* subtle grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

            <Container>
                <div className="relative z-10 pt-20 md:pt-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                            Client testimonials
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                            Trusted by teams that expect
                            <span className="text-violet-400"> premium results</span>
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                            We partner with ambitious businesses to deliver modern digital
                            products that create impact, improve experience, and drive growth.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 lg:grid-cols-3">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07]"
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                    <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
                                    <div className="absolute right-0 top-8 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-1 text-violet-300">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="mt-6 text-base leading-8 text-slate-300">
                                        “{item.review}”
                                    </p>

                                    <div className="mt-8 border-t border-white/10 pt-5">
                                        <h3 className="text-lg font-semibold text-white">
                                            {item.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-6 backdrop-blur-xl md:p-8">
                        <div className="grid gap-6 text-center md:grid-cols-3 md:text-left">
                            <div>
                                <p className="text-3xl font-bold text-white">98%</p>
                                <p className="mt-2 text-slate-400">Client satisfaction rate</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-white">50+</p>
                                <p className="mt-2 text-slate-400">Long-term partnerships</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-white">120+</p>
                                <p className="mt-2 text-slate-400">Projects successfully launched</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}