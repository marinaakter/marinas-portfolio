import {
    HiOutlineArrowRight,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
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

export default function CTASection() {
    const section = mock.ctaSection || {};
    const contactInfo = mock.contactInfo || {};
    const cards = section?.cards || [];

    const handlePrimaryClick = () => {
        if (contactInfo?.email) {
            window.location.href = `mailto:${contactInfo.email}`;
        }
    };

    const phoneHref = contactInfo?.phone
        ? `tel:${contactInfo.phone.replace(/\s+/g, "")}`
        : "#";

    return (
        <Section
            id="contact"
            className="relative overflow-hidden text-white"
            containerClassName="relative z-10"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-24 top-8 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-0 top-24 h-[240px] w-[240px] rounded-full bg-violet-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px]" />
            </div>

            <SectionHeader
                badge={section?.badge}
                title={
                    <>
                        {section?.title}{" "}
                        <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                            {section?.highlight}
                        </span>
                    </>
                }
                subtitle={section?.description}
                maxWidth="max-w-[860px]"
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
                <Reveal delay={0.06}>
                    <PrimaryCard className="group relative overflow-hidden p-4 sm:p-5">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-sky-500/10 blur-3xl" />
                        <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />

                        <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:p-8">
                            <div className="max-w-[680px]">
                                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                    {contactInfo?.responseTime}
                                </p>

                                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[36px]">
                                    {section?.primaryButton}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                                    {contactInfo?.workingMode}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <Button
                                    variant="primary"
                                    onClick={handlePrimaryClick}
                                    className="cursor-pointer sm:w-auto"
                                >
                                    <span className="inline-flex items-center gap-2">
                                        {section?.primaryButton}
                                        <HiOutlineArrowRight className="text-base" />
                                    </span>
                                </Button>

                                <Button
                                    as="a"
                                    href={`mailto:${contactInfo?.email || ""}`}
                                    variant="secondary"
                                    className="sm:w-auto"
                                >
                                    <span className="inline-flex items-center gap-2">
                                        {section?.secondaryButton}
                                        <HiOutlineArrowRight className="text-base" />
                                    </span>
                                </Button>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <SecondaryCard
                                    as="a"
                                    href={`mailto:${contactInfo?.email || ""}`}
                                    className="group/card block rounded-[22px] p-5"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-300">
                                        <HiOutlineEnvelope className="text-[22px]" />
                                    </div>

                                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                        Email
                                    </p>
                                    <p className="mt-2 break-all text-base font-semibold text-white">
                                        {contactInfo?.email}
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">
                                        {contactInfo?.responseTime}
                                    </p>
                                </SecondaryCard>

                                <SecondaryCard
                                    as="a"
                                    href={phoneHref}
                                    className="group/card block rounded-[22px] p-5"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-violet-300">
                                        <HiOutlinePhone className="text-[22px]" />
                                    </div>

                                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                        Phone
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-white">
                                        {contactInfo?.phone}
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">
                                        {contactInfo?.workingMode}
                                    </p>
                                </SecondaryCard>
                            </div>
                        </div>
                    </PrimaryCard>
                </Reveal>

                <div className="grid gap-4">
                    {cards.map((card, index) => (
                        <Reveal
                            key={`${card?.title}-${index}`}
                            delay={0.1 + index * 0.08}
                        >
                            <PrimaryCard className="group relative overflow-hidden p-5 sm:p-6">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <div
                                    className={`absolute -right-10 top-0 h-24 w-24 rounded-full blur-3xl ${index % 2 === 0 ? "bg-violet-500/10" : "bg-sky-500/10"
                                        }`}
                                />

                                <div className="relative z-10">
                                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                        {card?.label}
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold text-white">
                                        {card?.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">
                                        {card?.description}
                                    </p>
                                </div>
                            </PrimaryCard>
                        </Reveal>
                    ))}

                    <Reveal delay={0.24}>
                        <PrimaryCard className="group relative overflow-hidden p-5 sm:p-6">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />

                            <div className="relative z-10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-emerald-300">
                                    <HiOutlineMapPin className="text-[22px]" />
                                </div>

                                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                    Location
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold text-white">
                                    {contactInfo?.location}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    {contactInfo?.workingMode}
                                </p>
                            </div>
                        </PrimaryCard>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}