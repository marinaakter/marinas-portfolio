import SecondaryCard from "./SecondaryCard";

export default function StatsCard({
    value,
    label,
    className = "",
}) {
    return (
        <SecondaryCard
            className={`px-4 py-4 ${className}`.trim()}
        >
            <p className="text-xl font-semibold text-white sm:text-2xl">
                {value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400 sm:text-[11px]">
                {label}
            </p>
        </SecondaryCard>
    );
}