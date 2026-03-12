import { motion } from "framer-motion";
import {
    HiOutlineArrowRight,
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
} from "react-icons/hi2";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

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
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

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
                    viewport={{ once: true, amount: 0.15 }}
                    className="relative z-10"
                >
                    <div className="mx-auto max-w-[860px] text-center">
                        {section?.badge && (
                            <motion.div variants={itemVariants}>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
                                    <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                                    {section.badge}
                                </div>
                            </motion.div>
                        )}

                        <motion.h2
                            variants={itemVariants}
                            className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[54px]"
                        >
                            {section?.title}{" "}
                            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                                {section?.highlight}
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-[17px]"
                        >
                            {section?.description}
                        </motion.p>
                    </div>

                    <div className="mt-12 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
                        <motion.div variants={itemVariants}>
                            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-5">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-sky-500/10 blur-3xl" />
                                <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />

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
                                        <button type="button" onClick={handlePrimaryClick}>
                                            <Button>{section?.primaryButton}</Button>
                                        </button>

                                        <a
                                            href={`mailto:${contactInfo?.email || ""}`}
                                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                                        >
                                            {section?.secondaryButton}
                                            <HiOutlineArrowRight className="text-base" />
                                        </a>
                                    </div>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        <a
                                            href={`mailto:${contactInfo?.email || ""}`}
                                            className="group/card rounded-[22px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/25 hover:bg-white/[0.06]"
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
                                        </a>

                                        <a
                                            href={phoneHref}
                                            className="group/card rounded-[22px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.06]"
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
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid gap-4">
                            {cards.map((card, index) => (
                                <div
                                    key={`${card?.title}-${index}`}
                                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(14,165,233,0.06)] sm:p-6"
                                >
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
                                </div>
                            ))}

                            <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 sm:p-6">
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
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}