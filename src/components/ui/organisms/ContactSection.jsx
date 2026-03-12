import { motion } from "framer-motion";
import {
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlinePaperAirplane,
} from "react-icons/hi2";
import Container from "../components/ui/atoms/Container";
import Button from "../components/ui/atoms/Button";
import mock from "../data/mock";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.06,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

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

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20 lg:py-24"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.04]" />
                <div className="absolute -left-24 top-8 h-[220px] w-[220px] rounded-full bg-sky-500/10 blur-[120px]" />
                <div className="absolute right-0 top-24 h-[240px] w-[240px] rounded-full bg-violet-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/8 blur-[120px]" />
            </div>

            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    className="relative z-10"
                >
                    <div className="mx-auto max-w-[840px] text-center">
                        {hero?.badge && (
                            <motion.div variants={itemVariants}>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
                                    <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                                    {hero.badge}
                                </div>
                            </motion.div>
                        )}

                        <motion.h1
                            variants={itemVariants}
                            className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl"
                        >
                            {hero?.title}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-slate-300 sm:text-base"
                        >
                            {hero?.description}
                        </motion.p>
                    </div>

                    <div className="mt-12 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                        <motion.div variants={itemVariants} className="space-y-6">
                            {!!infoCards.length && (
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {infoCards.map((item, index) => {
                                        const Icon = getInfoIcon(item?.title);

                                        return (
                                            <a
                                                key={`${item?.title}-${index}`}
                                                href={item?.href}
                                                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:shadow-[0_24px_80px_rgba(14,165,233,0.08)]"
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
                                            </a>
                                        );
                                    })}
                                </div>
                            )}

                            <div className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-300 hover:border-violet-400/20 hover:shadow-[0_24px_80px_rgba(168,85,247,0.08)] sm:p-6">
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
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-5">
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

                                    <form className="mt-8 space-y-5">
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
                                            <Button type="submit">{form?.button}</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Contact;