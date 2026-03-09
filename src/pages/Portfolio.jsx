import { useMemo, useState } from "react";
import Container from "../components/ui/atoms/Container";
import Button from "../components/ui/atoms/Button";
import mock from "../data/mock";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const page = mock.portfolioPage;

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return page.items;
    return page.items.filter((item) => item.category === activeFilter);
  }, [activeFilter, page.items]);

  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-[#020617] pb-28 pt-[96px] text-white md:-mt-[76px] md:pb-32 md:pt-[108px]">
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
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {page.hero.description}
            </p>
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

        <Container>
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {page.filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition ${activeFilter === tab
                      ? "border-sky-500 bg-sky-500 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                      {item.category}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a
                        href={item.liveLink}
                        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        Live Preview
                      </a>

                      <a
                        href={item.githubLink}
                        className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <div className="rounded-[32px] border border-slate-200 bg-[#020617] px-6 py-12 text-white shadow-[0_30px_80px_rgba(2,6,23,0.16)] md:px-10 md:py-16 lg:px-16">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {page.cta.title}
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;