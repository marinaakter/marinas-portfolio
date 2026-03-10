import { cn } from "../../../utils/cn";

export default function Button({
    children,
    className = "",
    icon,
    loading = false,
    ...props
}) {
    return (
        <button
            className={cn(
                "group relative cursor-pointer inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl",
                "bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 bg-[length:200%_200%]",
                "px-7 py-3 font-semibold text-white",
                "shadow-lg shadow-sky-500/30",
                "transition-all duration-300",
                "hover:scale-[1.04] hover:shadow-xl hover:shadow-sky-500/40",
                "active:scale-[0.97]",
                "animate-[gradientMove_6s_linear_infinite]",
                className
            )}
            {...props}
        >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

            {loading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}

            {!loading && children}

            {!loading && icon && (
                <span className="transition-transform group-hover:translate-x-1">
                    {icon}
                </span>
            )}

            <style>
                {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
        `}
            </style>
        </button>
    );
}