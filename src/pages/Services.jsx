import Container from "../components/ui/atoms/Container";
import Button from "../components/ui/atoms/Button";
import mock from "../data/mock";

export default function Services() {
  const page = mock.servicesPage;

  return (
    <>
      <section className="relative -mt-18 overflow-hidden bg-[#020617] pb-32 pt-24 text-white md:-mt-[76px] md:pb-36 md:pt-[108px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-sky-500/15 blur-[120px]" />
          <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
              {page.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {page.hero.title}
              <span className="text-violet-400"> {page.hero.highlight}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {page.hero.description}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button>{page.hero.primaryButton}</Button>

              <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                {page.hero.secondaryButton}
              </button>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {page.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 220" className="w-full" fill="white">
            <path d="M0,140L80,128C160,116,320,92,480,98C640,104,800,150,960,166C1120,182,1280,168,1360,156L1440,144V220H0Z" />
          </svg>
        </div>
      </section>

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
                {page.servicesIntro.badge}
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {page.servicesIntro.title}
              </h2>

              <p className="mt-4 text-slate-600 md:text-lg">
                {page.servicesIntro.description}
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {page.services.map((service) => (
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

      <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-28">
        <div className="absolute top-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1440 220" className="w-full" fill="#ffffff">
            <path d="M0,80L80,90C160,100,320,120,480,118C640,116,800,92,960,82C1120,72,1280,76,1360,80L1440,84V0H0Z" />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-[120px]" />
          <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[48px_48px]" />

        <Container>
          <div className="relative z-10 pt-20 md:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur">
                {page.process.badge}
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {page.process.title}
                <span className="text-violet-400"> {page.process.highlight}</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                {page.process.description}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {page.process.steps.map((step) => (
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

      <section className="relative overflow-hidden bg-white py-24 md:py-28">
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
                  {page.cta.badge}
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  {page.cta.title}
                  <span className="text-violet-400"> {page.cta.highlight}</span>
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                  {page.cta.description}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button>{page.cta.primaryButton}</Button>

                  <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                    {page.cta.secondaryButton}
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