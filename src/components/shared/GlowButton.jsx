export default function GlowButton({
    children,
    onClick,
    href,
    target,
    rel,
    variant = "primary",
    className = "",
}) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

    const variants = {
        primary:
            "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-[0_18px_45px_rgba(14,165,233,0.24)] hover:-translate-y-[1px]",
        secondary:
            "border border-white/12 bg-white/[0.04] text-white backdrop-blur-xl hover:-translate-y-[1px] hover:border-white/25 hover:bg-white/[0.08]",
    };

    const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <a href={href} target={target} rel={rel} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" onClick={onClick} className={classes}>
            {children}
        </button>
    );
}