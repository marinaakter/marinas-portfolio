import Container from "../ui/Container";
import Button from "../ui/Button";

const projects = [
    {
        title: "Fintech SaaS Dashboard",
        category: "Web Application",
        image: "/projects/project1.png",
    },
    {
        title: "E-commerce Platform",
        category: "Full Stack Development",
        image: "/projects/project2.png",
    },
    {
        title: "AI Analytics Tool",
        category: "Product Design",
        image: "/projects/project3.png",
    },
];

export default function PortfolioSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-28">

            {/* grid background */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
            </div>

            <Container>
                <div className="relative z-10">

                    {/* heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                            Featured Projects
                        </span>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Work that drives real business results
                        </h2>

                        <p className="mt-4 text-slate-600 md:text-lg">
                            Explore some of our recent digital products built for ambitious companies.
                        </p>
                    </div>

                    {/* projects */}
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
                            >

                                {/* image */}
                                <div className="relative aspect-[16/11] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70" />
                                </div>

                                {/* content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transition duration-500 group-hover:translate-y-[-4px]">

                                    <p className="text-sm text-white/80">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-1 text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200">
                                        View Case Study →
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <Button>View Full Portfolio</Button>
                    </div>

                </div>
            </Container>
        </section>
    );
}