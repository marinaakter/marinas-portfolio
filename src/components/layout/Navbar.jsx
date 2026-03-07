import { ChevronDown } from 'lucide-react'

export default function Navbar() {
    return (
        <header className="border-b border-white/10">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 lg:px-10">
                <div className="flex items-center gap-14">
                    <a href="/" className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white">
                            <span className="text-lg font-semibold">S</span>
                        </div>
                        <span className="text-[18px] font-semibold text-white">
                            Spend.In
                        </span>
                    </a>

                    <nav className="hidden items-center gap-10 lg:flex">
                        <a
                            href="#"
                            className="flex items-center gap-1 text-[16px] font-medium text-white hover:text-violet-300"
                        >
                            Products <ChevronDown size={16} />
                        </a>
                        <a
                            href="#"
                            className="text-[16px] font-medium text-white hover:text-violet-300"
                        >
                            Benefit
                        </a>
                        <a
                            href="#"
                            className="text-[16px] font-medium text-white hover:text-violet-300"
                        >
                            How it Works
                        </a>
                        <a
                            href="#"
                            className="text-[16px] font-medium text-white hover:text-violet-300"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-1 text-[16px] font-medium text-white hover:text-violet-300"
                        >
                            Company <ChevronDown size={16} />
                        </a>
                    </nav>
                </div>

                <div className="hidden items-center gap-6 lg:flex">
                    <a
                        href="#"
                        className="text-[16px] font-medium text-white hover:text-violet-300"
                    >
                        Login
                    </a>
                    <button className="rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] px-7 py-3 text-[16px] font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
                        Get Demo
                    </button>
                </div>
            </div>
        </header>
    )
}