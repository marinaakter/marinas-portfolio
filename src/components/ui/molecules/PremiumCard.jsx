export default function PremiumCard({
    children,
    className = "",
    glow = "sky",
    hover = true,
}) {
    const glowMap = {
        sky: "bg-sky-500/10 group-hover:bg-sky-500/15",
        violet: "bg-violet-500/10 group-hover:bg-violet-500/15",
        emerald: "bg-emerald-500/10 group-hover:bg-emerald-500/15",
        fuchsia: "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/15",
    };

    return (
        <div
            className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(10,19,35,0.96))] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 ${hover
                    ? "hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(14,165,233,0.08)]"
                    : ""
                } ${className}`}
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div
                className={`absolute -right-10 top-0 h-24 w-24 rounded-full blur-3xl transition duration-300 ${glowMap[glow] || glowMap.sky
                    }`}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}