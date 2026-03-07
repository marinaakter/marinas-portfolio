import Container from "../ui/Container";

export default function Clients() {
    const clients = [
        { name: "Google", logo: "/logos/logo1.png" },
        { name: "Meta", logo: "/logos/logo2.png" },
        { name: "Microsoft", logo: "/logos/logo3.png" },
        { name: "YouTube", logo: "/logos/logo4.png" },
        { name: "Canva", logo: "/logos/logo5.png" },
    ];

    const marqueeClients = [...clients, ...clients];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-24">
            {/* Premium grid background */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* glow blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-80px] top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-[110px]" />
                <div className="absolute right-[-80px] bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[110px]" />
            </div>

            <Container>
                <div className="relative z-10">
                    {/* heading */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur">
                            Trusted by global brands
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Companies that trust our technology
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                            Helping businesses scale with powerful SaaS solutions and modern digital systems.
                        </p>
                    </div>

                    {/* marquee logos */}
                    <div className="relative mt-14 overflow-hidden">
                        {/* fade left */}
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent md:w-32" />

                        {/* fade right */}
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent md:w-32" />

                        <div className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-14 md:gap-20">
                            {marqueeClients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="flex min-w-[140px] items-center justify-center opacity-70 transition hover:opacity-100"
                                >
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-10 object-contain grayscale transition duration-300 hover:grayscale-0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* stats */}
                    <div className="mt-16 grid gap-4 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur md:grid-cols-3 md:p-8">
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

            <style>
                {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
            </style>
        </section>
    );
}