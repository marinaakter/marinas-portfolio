export default function FloatingInfoCard({
    title,
    subtitle,
    className = "",
    variant = "default",
    style = {},
    children,
}) {
    const variants = {
        default: "border-white/10 bg-[#0f172a]/72",
        accent: "border-sky-400/20 bg-sky-500/10",
        dark: "border-white/10 bg-[#0f172a]/78",
    };

    return (
        <div
            className={[
                "rounded-2xl border px-3.5 py-2.5 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl",
                variants[variant] || variants.default,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={style}
        >
            {children ? (
                children
            ) : (
                <>
                    {title && <p className="font-semibold">{title}</p>}
                    {subtitle && (
                        <p className="mt-1 text-xs leading-5 text-slate-300">
                            {subtitle}
                        </p>
                    )}
                </>
            )}
        </div>
    );
}