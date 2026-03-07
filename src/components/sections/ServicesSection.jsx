import Button from "../ui/Button";
import Container from "../ui/Container";

const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "High-performance websites and platforms built for speed, scalability, and strong user engagement.",
    },
    {
        number: "02",
        title: "UI/UX Design",
        description:
            "Clean, conversion-focused interfaces designed to create seamless digital experiences and stronger brand trust.",
    },
    {
        number: "03",
        title: "Mobile App Solutions",
        description:
            "Modern mobile experiences with smooth performance, intuitive journeys, and cross-platform flexibility.",
    },
    {
        number: "04",
        title: "Cloud & Automation",
        description:
            "Secure cloud workflows, system integrations, and business automation to help teams move faster with less friction.",
    },
    {
        number: "05",
        title: "SEO & Growth Strategy",
        description:
            "Data-driven optimization and digital growth strategies that increase visibility, traffic, and qualified leads.",
    },
    {
        number: "06",
        title: "Product Strategy",
        description:
            "From idea to launch, we shape digital products with the right balance of business goals, design thinking, and engineering.",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative overflow-hidden bg-[#020617] py-20 text-white md:py-18">
            {/* background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
                <div className="absolute right-[-120px] top-28 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
            </div>

            {/* subtle grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

            <Container>
                <div className="relative z-10">
                    {/* heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                            Premium digital services
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                            Solutions designed for
                            <span className="text-violet-400"> ambitious brands</span>
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                            We blend strategy, design, and technology to craft digital products
                            that look exceptional, perform beautifully, and scale with confidence.
                        </p>
                    </div>

                    {/* premium layout */}
                    <div className="mt-14 grid gap-6 lg:grid-cols-12">
                        {/* left featured card */}
                        <div className="lg:col-span-5">
                            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-[90px]" />
                                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-sky-500/20 blur-[90px]" />

                                <div className="relative z-10">
                                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-violet-500/20 backdrop-blur">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            className="h-8 w-8 text-sky-300"
                                        >
                                            <path d="M4 6h16v12H4z" />
                                            <path d="M4 10h16" />
                                            <path d="M9 14l-2 2 2 2" />
                                            <path d="M15 14l2 2-2 2" />
                                        </svg>
                                    </div>

                                    <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                                        Featured service
                                    </p>

                                    <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
                                        End-to-end digital
                                        <br />
                                        product development
                                    </h3>

                                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                                        From brand identity and UX systems to full-stack development
                                        and optimization, we build polished products that help modern
                                        businesses move faster and stand out in crowded markets.
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <p className="text-2xl font-bold text-white">120+</p>
                                            <p className="mt-1 text-sm text-slate-400">
                                                Projects launched
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <p className="text-2xl font-bold text-white">8+</p>
                                            <p className="mt-1 text-sm text-slate-400">
                                                Years experience
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <Button>Discuss Your Project</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right service cards */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                            {services.map((service) => (
                                <div
                                    key={service.number}
                                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07]"
                                >
                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                        <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
                                        <div className="absolute right-0 top-8 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="text-sm font-semibold tracking-[0.2em] text-violet-300">
                                                {service.number}
                                            </span>

                                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition group-hover:text-white">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M7 17L17 7" />
                                                    <path d="M8 7h9v9" />
                                                </svg>
                                            </span>
                                        </div>

                                        <h3 className="mt-8 text-xl font-semibold text-white">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* bottom strip */}
                    <div className="mt-14 rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-6 backdrop-blur-xl md:p-8">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                                    Why choose us
                                </p>
                                <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                                    Premium execution with strategy-first thinking
                                </h3>
                                <p className="mt-3 text-slate-300 leading-7">
                                    We do more than build pretty interfaces. We create digital
                                    experiences that connect business goals with measurable results.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                                    <p className="text-xl font-bold text-white">Fast</p>
                                    <p className="mt-1 text-sm text-slate-400">Delivery</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                                    <p className="text-xl font-bold text-white">Smart</p>
                                    <p className="mt-1 text-sm text-slate-400">Systems</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                                    <p className="text-xl font-bold text-white">Scalable</p>
                                    <p className="mt-1 text-sm text-slate-400">Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}