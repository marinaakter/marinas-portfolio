import {
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlinePaperAirplane,
} from "react-icons/hi2";
import mock from "@/data/mock";
import {
    Section,
    SectionHeader,
    PrimaryCard,
    SecondaryCard,
    Button,
    Reveal,
} from "@/components/ui";

const getInfoIcon = (title = "") => {
    const normalized = title.toLowerCase();

    if (normalized.includes("email")) return HiOutlineEnvelope;
    if (normalized.includes("phone")) return HiOutlinePhone;
    if (normalized.includes("location")) return HiOutlineMapPin;
    if (normalized.includes("response")) return HiOutlineClock;

    return HiOutlineEnvelope;
};

const Contact = () => {
    const page = mock.contactPage || {};
    const hero = page.hero || {};
    const infoCards = page.infoCards || [];
    const form = page.form || {};
    const availability = page.availability || {};

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Section
            id="contact"
            className="relative overflow-hidden text-white"
            containerClassName="relative z-10"
            as="section"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.04]" />
                <div className="absolute -left-24 top-8 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-0 top-24 h-[240px] w-[240px] rounded-full bg-violet-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px]" />
            </div>

            <SectionHeader
                badge={hero?.badge}
                title={hero?.title}
                subtitle={hero?.description}
                maxWidth="max-w-[840px]"
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                <div className="space-y-6">
                    {!!infoCards.length && (
                        <div className="grid gap-4 sm:grid-cols-2">
                            {infoCards.map((item, index) => {
                                const Icon = getInfoIcon(item?.title);

                                return (
                                    <Reveal
                                        key={`${item?.title}-${index}`}
                                        delay={0.06 + index * 0.08}
                                    >
                                        <SecondaryCard
                                            as="a"
                                            href={item?.href}
                                            className="group relative block overflow-hidden rounded-[24px] p-5"
                                        >
                                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                            <div className="absolute -right-8 top-0 h-24 w-24 rounded-full bg-sky-500/8 blur-3xl transition duration-300 group-hover:bg-sky-500/12" />

                                            <div className="relative z-10">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-300">
                                                    <Icon className="text-[22px]" />
                                                </div>

                                                <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                    {item?.title}
                                                </p>

                                                <h3 className="mt-2 break-words text-base font-medium text-white">
                                                    {item?.value}
                                                </h3>
                                            </div>
                                        </SecondaryCard>
                                    </Reveal>
                                );
                            })}
                        </div>
                    )}

                    <Reveal delay={0.18}>
                        <PrimaryCard className="group relative overflow-hidden p-5 sm:p-6">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-violet-500/8 blur-3xl transition duration-300 group-hover:bg-violet-500/12" />

                            <div className="relative z-10">
                                {availability?.title && (
                                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                                        {availability.title}
                                    </span>
                                )}

                                <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                                    Let’s build something clean and effective
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                                    {availability?.description}
                                </p>

                                {!!availability?.items?.length && (
                                    <div className="mt-6 space-y-3">
                                        {availability.items.map((item, index) => (
                                            <div
                                                key={`${item}-${index}`}
                                                className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-4"
                                            >
                                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
                                                <p className="text-sm leading-7 text-slate-200">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </PrimaryCard>
                    </Reveal>
                </div>

                <Reveal delay={0.12}>
                    <PrimaryCard className="group relative overflow-hidden p-4 sm:p-5">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-fuchsia-500/8 blur-3xl" />

                        <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                                        {form?.title}
                                    </h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                                        {form?.description}
                                    </p>
                                </div>

                                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-300 sm:flex">
                                    <HiOutlinePaperAirplane className="text-[22px]" />
                                </div>
                            </div>

                            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-200">
                                            {form?.fields?.name}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={form?.fields?.name}
                                            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-white/[0.06]"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-200">
                                            {form?.fields?.email}
                                        </label>
                                        <input
                                            type="email"
                                            placeholder={form?.fields?.email}
                                            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-white/[0.06]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-200">
                                        {form?.fields?.subject}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={form?.fields?.subject}
                                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-white/[0.06]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-200">
                                        {form?.fields?.message}
                                    </label>
                                    <textarea
                                        rows="7"
                                        placeholder={form?.fields?.message}
                                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-white/[0.06]"
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" variant="primary" className="sm:w-auto">
                                        {form?.button}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </PrimaryCard>
                </Reveal>
            </div>
        </Section>
    );
};

export default Contact;