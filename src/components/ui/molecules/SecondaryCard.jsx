export default function SecondaryCard({
    children,
    className = "",
    hover = true,
    as = "div",
    ...props
}) {
    const Component = as;

    return (
        <Component
            className={[
                "rounded-[22px] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl",
                hover
                    ? "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                    : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {children}
        </Component>
    );
}