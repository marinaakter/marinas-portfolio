import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build modern, high-performance websites and platforms focused on speed, scalability, and a polished user experience.",
    points: ["Responsive UI", "Clean architecture", "Performance focused"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "From wireframes to refined interfaces, we design intuitive digital experiences that feel premium and convert better.",
    points: ["User-first flows", "Modern visual systems", "Conversion-focused design"],
  },
  {
    number: "03",
    title: "Mobile App Solutions",
    description:
      "We create smooth and scalable mobile experiences that help brands stay connected with users across devices.",
    points: ["Cross-platform thinking", "Scalable product design", "Smooth user journeys"],
  },
  {
    number: "04",
    title: "Cloud & Automation",
    description:
      "We streamline operations with smart cloud integration and workflow automation built for modern business needs.",
    points: ["System integration", "Workflow automation", "Secure cloud solutions"],
  },
  {
    number: "05",
    title: "SEO & Growth Strategy",
    description:
      "We improve visibility, traffic, and conversion through data-driven digital growth planning and optimization.",
    points: ["Technical SEO", "Growth strategy", "Content optimization"],
  },
  {
    number: "06",
    title: "Product Strategy",
    description:
      "We help shape ideas into scalable digital products with the right mix of strategy, design, and engineering.",
    points: ["Roadmapping", "Feature planning", "Launch strategy"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We understand your business goals, users, challenges, and opportunities before designing the right solution.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We define the product direction, experience, architecture, and execution plan with a clear roadmap.",
  },
  {
    number: "03",
    title: "Design & Build",
    desc: "We craft premium interfaces and build modern, scalable systems with performance and usability in mind.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    desc: "After launch, we refine, improve, and optimize the product for long-term growth and measurable results.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-[#020617] pb-32 pt-[96px] text-white md:-mt-[76px] md:pb-36 md:pt-[108px]">
        {/* mouse-less premium glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-sky-500/15 blur-[120px]" />
          <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        </div>

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
              Premium digital services
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Services built for
              <span className="text-violet-400"> modern brands</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              We design and build premium digital products that help ambitious
              businesses launch faster, operate smarter, and grow with confidence.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button>Start Your Project</Button>

              <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                Book A Free Call
              </button>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">120+</p>
                <p className="mt-2 text-sm text-slate-400">Projects delivered</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="mt-2 text-sm text-slate-400">Business clients</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="mt-2 text-sm text-slate-400">Satisfaction rate</p>
              </div>
            </div>
          </div>
        </Container>

        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 220" className="w-full" fill="white">
            <path d="M0,140L80,128C160,116,320,92,480,98C640,104,800,150,960,166C1120,182,1280,168,1360,156L1440,144V220H0Z" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative overflow-hidden bg-white py-24 md:py-28">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
          <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
        </div>

        <Container>
          <div className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                What we do best
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Solutions crafted with strategy and execution
              </h2>

              <p className="mt-4 text-slate-600 md:text-lg">
                Every service is designed to solve real business problems with a
                balance of design quality, technical performance, and measurable impact.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 p-7 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl" />
                    <div className="absolute right-0 top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-sm font-semibold tracking-[0.2em] text-violet-600">
                        {service.number}
                      </span>

                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition group-hover:text-slate-900">
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

                    <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-28">
        {/* top curve */}
        <div className="absolute top-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 220" className="w-full" fill="#ffffff">
            <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
          <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <Container>
          <div className="relative z-10 pt-20 md:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                Our process
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                A clear process that keeps
                <span className="text-violet-400"> projects moving</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                We follow a refined process to ensure strategy, clarity, and premium
                execution at every stage of the project.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/30"
                >
                  <span className="text-sm font-semibold tracking-[0.2em] text-violet-300">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-24 md:py-28">
        {/* top curve */}
        <div className="absolute top-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 220" className="w-full" fill="#020617">
            <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
          </svg>
        </div>

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:48px_48px]" />

        <Container>
          <div className="relative z-10 pt-20 md:pt-24">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#020617] px-6 py-12 text-white shadow-[0_30px_80px_rgba(2,6,23,0.16)] md:px-10 md:py-16 lg:px-16">
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-sky-500/20 blur-[100px]" />
                <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-violet-500/20 blur-[110px]" />
              </div>

              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                  Ready to work together?
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  Let’s build a digital product your
                  <span className="text-violet-400"> audience will remember</span>
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                  Whether you need a premium website, SaaS platform, or a full
                  product strategy, we’re ready to help you move forward.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button>Start Your Project</Button>

                  <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}