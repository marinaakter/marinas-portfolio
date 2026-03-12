export default function Button({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    ...props
}) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

    const variants = {
        primary:
            "bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 text-white shadow-[0_14px_40px_rgba(14,165,233,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(14,165,233,0.30)]",
        secondary:
            "border border-white/12 bg-white/[0.04] text-white backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.08]",
        ghost: "text-white hover:bg-white/8",
    };

    const sizes = {
        sm: "px-4 py-2.5 text-sm",
        md: "px-6 py-3 text-sm md:px-7",
        lg: "px-7 py-3.5 text-base md:px-8",
    };

    return (
        <button
            type={type}
            className={[
                baseClasses,
                variants[variant] || variants.primary,
                sizes[size] || sizes.md,
                fullWidth ? "w-full" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {children}
        </button>
    );
}