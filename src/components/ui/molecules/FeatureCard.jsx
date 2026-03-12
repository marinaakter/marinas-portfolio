import { SecondaryCard, Button, Reveal } from "../index";

export default function FeatureCard({
    icon,
    eyebrow,
    title,
    description,
    points = [],
    buttonText,
    onClick,
    href,
    className = "",
    delay = 0,
}) {
    const content = (
        <SecondaryCard className={`h-full p-5 sm:p-6 ${className}`.trim()}>
            {icon && (
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                    {icon}
                </div>
            )}

            {eyebrow && (
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                    {eyebrow}
                </p>
            )}

            {title && (
                <h3 className="mt-2 text-xl font-semibold text-white">
                    {title}
                </h3>
            )}

            {description && (
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px]">
                    {description}
                </p>
            )}

            {points?.length > 0 && (
                <div className="mt-5 space-y-2.5">
                    {points.map((point, index) => (
                        <div
                            key={`${point}-${index}`}
                            className="flex items-start gap-3 text-sm text-slate-300"
                        >
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                            <span>{point}</span>
                        </div>
                    ))}
                </div>
            )}

            {(buttonText && (onClick || href)) && (
                <div className="mt-6">
                    {href ? (
                        <a href={href}>
                            <Button variant="secondary" className="w-full sm:w-auto">
                                {buttonText}
                            </Button>
                        </a>
                    ) : (
                        <Button
                            variant="secondary"
                            className="w-full sm:w-auto"
                            onClick={onClick}
                        >
                            {buttonText}
                        </Button>
                    )}
                </div>
            )}
        </SecondaryCard>
    );

    return (
        <Reveal delay={delay}>
            {content}
        </Reveal>
    );
}