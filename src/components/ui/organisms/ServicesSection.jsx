import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

export default function ServicesSection() {
    const section = mock.homeServices;

    return (
        <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-32">
            <div className="absolute top-0 left-0 w-full leading-none">
                <svg viewBox="0 0 1440 220" className="w-full" fill="#f8fafc">
                    <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
                </svg>
            </div>

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
                <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
            </div>

            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

            <Container>
                <div className="relative z-10 pt-20 md:pt-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                            {section.badge}
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                            {section.title}
                            <span className="text-violet-400"> {section.highlight}</span>
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                            {section.description}
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-12">
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
                                        {section.featured.eyebrow}
                                    </p>

                                    <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
                                        {section.featured.title}
                                    </h3>

                                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                                        {section.featured.description}
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        {section.featured.stats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                            >
                                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <Button>{section.featured.button}</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                            {section.items.map((service) => (
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

                    <div className="mt-14 rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-6 backdrop-blur-xl md:p-8">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                                    {section.bottomStrip.eyebrow}
                                </p>
                                <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                                    {section.bottomStrip.title}
                                </h3>
                                <p className="mt-3 leading-7 text-slate-300">
                                    {section.bottomStrip.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {section.bottomStrip.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center"
                                    >
                                        <p className="text-xl font-bold text-white">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}