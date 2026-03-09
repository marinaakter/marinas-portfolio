import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

export default function PortfolioSection() {
    const section = mock.portfolioSection;

    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-28">
            <div className="absolute top-0 left-0 w-full leading-none">
                <svg viewBox="0 0 1440 220" className="w-full" fill="#020617">
                    <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
                </svg>
            </div>

            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
            </div>

            <Container>
                <div className="relative z-10 pt-20 md:pt-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                            {section.badge}
                        </span>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            {section.title}
                        </h2>

                        <p className="mt-4 text-slate-600 md:text-lg">{section.description}</p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {section.projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
                            >
                                <div className="relative aspect-[16/11] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transition duration-500 group-hover:translate-y-[-4px]">
                                    <p className="text-sm text-white/80">{project.category}</p>

                                    <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>

                                    <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200">
                                        {section.caseStudyButton} →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button>{section.button}</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}