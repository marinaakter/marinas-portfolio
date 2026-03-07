import { cn } from '../../utils/cn'

export default function Button({ children, className = '', ...props }) {
    return (
        <button
            className={cn(
                'rounded-xl bg-sky-600 px-6 py-3 text-white transition hover:opacity-90',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}