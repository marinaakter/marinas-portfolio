import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navItems = mock.navigation.navbar;

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "border-b border-white/10 bg-[#020617]/85 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
                    : "bg-[#020617]/92 backdrop-blur-xl"
                }`}
        >
            <Container>
                <div className="flex h-[68px] items-center justify-between md:h-[72px]">
                    <Link to="/" className="flex items-center gap-3">
                        

                        <div className="leading-none">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/95 md:text-[12px]">
                                {mock.brand.shortName}
                            </p>
                            <p className="mt-1 text-[13px] font-bold tracking-[0.22em] text-sky-400 md:text-[14px]">
                                {mock.brand.highlightName}
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `group relative rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${isActive
                                        ? "text-white"
                                        : "text-slate-300 hover:text-white"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">{item.name}</span>

                                        <span
                                            className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive
                                                    ? "bg-white/8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                                                    : "bg-transparent group-hover:bg-white/5"
                                                }`}
                                        />

                                        <span
                                            className={`absolute left-1/2 top-full mt-1 h-[2px] -translate-x-1/2 rounded-full bg-sky-400 transition-all duration-300 ${isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    <Button className="px-5 py-2.5 text-sm font-semibold md:px-6">
                        Start Free
                    </Button>
                </div>
            </Container>
        </header>
    );
}