export default function PrimaryCard({
    children,
    className = "",
    hover = true,
}) {
    return (
        <div
            className={[
                "rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl",
                hover
                    ? "transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]"
                    : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </div>
    );
}