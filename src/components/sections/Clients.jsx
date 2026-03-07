import Container from "../ui/Container";

export default function Clients() {
    const clients = [
        { name: "Google", logo: "/logos/logo1.png" },
        { name: "Meta", logo: "/logos/logo2.png" },
        { name: "Microsoft", logo: "/logos/logo3.png" },
        { name: "YouTube", logo: "/logos/logo4.png" },
        { name: "Canva", logo: "/logos/logo5.png" },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-24">
            {/* soft glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-sky-500/10 blur-[100px]" />
                <div className="absolute right-[-60px] bottom-0 h-56 w-56 rounded-full bg-violet-500/10 blur-[100px]" />
            </div>

            <Container>
                <div className="relative z-10">
                    {/* heading */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                            Trusted by global brands
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Companies that trust our technology
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                            Helping businesses scale with powerful SaaS solutions and modern digital
                            systems.
                        </p>
                    </div>

                    {/* logos */}
                    <div className="mt-12 grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center opacity-70 transition hover:opacity-100"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-10 object-contain grayscale transition hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>

                    {/* stats */}
                    <div className="mt-14 grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-3 md:p-8">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-slate-900">120+</p>
                            <p className="mt-2 text-sm text-slate-600">Projects delivered</p>
                        </div>

                        <div className="text-center">
                            <p className="text-3xl font-bold text-slate-900">50+</p>
                            <p className="mt-2 text-sm text-slate-600">Happy business clients</p>
                        </div>

                        <div className="text-center">
                            <p className="text-3xl font-bold text-slate-900">98%</p>
                            <p className="mt-2 text-sm text-slate-600">Client satisfaction rate</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}