import mock from "@/data/mock";
import { HiStar, HiOutlineArrowRight } from "react-icons/hi";
import {
    Section,
    SectionHeader,
    PrimaryCard,
    StatsCard,
    Reveal,
} from "@/components/ui";

export default function TestimonialsSection() {
    const testimonials = mock.testimonialsSection || {};
    const items = testimonials?.items || [];
    const stats = testimonials?.stats || [];

    const renderStars = (count = 5) => {
        return [...Array(count)].map((_, i) => (
            <HiStar key={i} className="text-[18px] text-yellow-400" />
        ));
    };

    return (
        <Section
            id="testimonials"
            className="relative overflow-hidden text-white"
            containerClassName="relative z-10"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-24 top-8 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-0 top-24 h-[240px] w-[240px] rounded-full bg-violet-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px]" />
            </div>

            <SectionHeader
                badge={testimonials?.badge}
                title={
                    <>
                        {testimonials?.title}{" "}
                        <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                            {testimonials?.highlight}
                        </span>
                    </>
                }
                subtitle={testimonials?.description}
                maxWidth="max-w-[820px]"
            />

            {!!items.length && (
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <Reveal
                            key={`${item.name}-${index}`}
                            delay={index * 0.08}
                            distance={24}
                        >
                            <PrimaryCard className="group relative h-full overflow-hidden p-5">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-sky-500/8 blur-3xl transition duration-300 group-hover:bg-sky-500/12" />

                                <div className="relative z-10 flex h-full flex-col">
                                    <div className="flex gap-1">
                                        {renderStars(item.rating)}
                                    </div>

                                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                                        {item.review}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between gap-4">
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-semibold text-white">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {item.role} • {item.company}
                                            </p>
                                        </div>

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                                            <HiOutlineArrowRight className="text-lg text-sky-300" />
                                        </div>
                                    </div>
                                </div>
                            </PrimaryCard>
                        </Reveal>
                    ))}
                </div>
            )}

            {!!stats.length && (
                <div className="mx-auto mt-12 grid max-w-[720px] grid-cols-2 gap-4 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <Reveal
                            key={`${stat.label}-${index}`}
                            delay={0.06 + index * 0.08}
                        >
                            <StatsCard
                                value={stat.value}
                                label={stat.label}
                                className="px-5 py-6 text-center"
                            />
                        </Reveal>
                    ))}
                </div>
            )}
        </Section>
    );
}