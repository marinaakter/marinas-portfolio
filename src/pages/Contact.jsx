import Container from "../components/ui/atoms/Container";
import Button from "../components/ui/atoms/Button";
import mock from "../data/mock";

const Contact = () => {
  const page = mock.contactPage;

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
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              {page.infoCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block rounded-[24px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    {item.title}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {item.value}
                  </h3>
                </a>
              ))}

              <div className="rounded-[24px] border border-slate-200 bg-[#020617] p-6 text-white">
                <h3 className="text-xl font-semibold">{page.availability.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {page.availability.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {page.availability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                {page.form.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {page.form.description}
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      {page.form.fields.name}
                    </label>
                    <input
                      type="text"
                      placeholder={page.form.fields.name}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      {page.form.fields.email}
                    </label>
                    <input
                      type="email"
                      placeholder={page.form.fields.email}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    {page.form.fields.subject}
                  </label>
                  <input
                    type="text"
                    placeholder={page.form.fields.subject}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    {page.form.fields.message}
                  </label>
                  <textarea
                    rows="6"
                    placeholder={page.form.fields.message}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                  />
                </div>

                <Button type="submit">{page.form.button}</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;