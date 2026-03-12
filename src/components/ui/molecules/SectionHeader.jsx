import { FadeUp } from "../index";

export default function SectionHeader({
    badge,
    title,
    subtitle,
    align = "center",
    maxWidth = "max-w-3xl",
    className = "",
    titleClassName = "",
    subtitleClassName = "",
    badgeClassName = "",
}) {
    const alignClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
    };

    return (
        <div
            className={[
                "mx-auto flex flex-col",
                alignClasses[align] || alignClasses.center,
                maxWidth,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {badge && (
                <FadeUp delay={0.05}>
                    <div
                        className={[
                            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl",
                            badgeClassName,
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                        <span>{badge}</span>
                    </div>
                </FadeUp>
            )}

            {title && (
                <FadeUp delay={0.12}>
                    <h2
                        className={[
                            "mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl",
                            titleClassName,
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        {title}
                    </h2>
                </FadeUp>
            )}

            {subtitle && (
                <FadeUp delay={0.2}>
                    <p
                        className={[
                            "mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8",
                            subtitleClassName,
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        {subtitle}
                    </p>
                </FadeUp>
            )}
        </div>
    );
}