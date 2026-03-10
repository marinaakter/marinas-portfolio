import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import mock from "../../../data/mock";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState("#home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 16);

            const sections = [
                "home",
                "about",
                "services",
                "projects",
                "testimonials",
                "contact",
            ];

            const scrollPosition = window.scrollY + 140;

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveHash(`#${id}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (hash) => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveHash(hash);
            setMobileMenuOpen(false);
        }
    };

    const navItems = mock?.navigation?.navbar || [];
    const brandTopText =
        mock?.brand?.logoTextTop || mock?.brand?.shortName || "Marina";
    const brandBottomText =
        mock?.brand?.logoTextBottom || mock?.brand?.highlightName || "PORTFOLIO";
    const ctaText = mock?.navigation?.ctaButton || "Hire Me";
    const mobileMenuLabel = mock?.navigation?.mobileMenuLabel || "Toggle menu";
    const showHireButton = mock?.navigation?.showHireButton ?? true;

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "border-b border-white/10 bg-[#020617]/80 shadow-[0_14px_40px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
                    : "bg-[#020617]/92 backdrop-blur-xl"
                }`}
        >
            <Container>
                <div className="relative">
                    <div className="flex h-[70px] items-center justify-between md:h-[74px]">
                        <Link to="/" className="group flex min-w-0 items-center gap-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-white/5 shadow-[0_10px_30px_rgba(14,165,233,0.12)] transition-all duration-300 group-hover:scale-[1.03] group-hover:border-sky-400/30 md:h-11 md:w-11">
                                <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
                            </span>

                            <div className="min-w-0 leading-none">
                                <p className="truncate text-[10px] font-medium uppercase tracking-[0.3em] text-white/55 md:text-[11px]">
                                    {brandTopText}
                                </p>
                                <p className="mt-1 truncate text-[13px] font-semibold tracking-[0.14em] text-white md:text-[15px]">
                                    {brandBottomText}
                                </p>
                            </div>
                        </Link>

                        <nav className="hidden items-center lg:flex">
                            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
                                {navItems.map((item) => {
                                    const isActive = activeHash === item.path;

                                    return (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={() => handleScroll(item.path)}
                                            className={`group relative overflow-hidden rounded-full px-4 py-2.5 text-[14px] font-medium tracking-[0.01em] transition-all duration-300 ${isActive
                                                    ? "text-white"
                                                    : "text-slate-300 hover:text-white"
                                                }`}
                                        >
                                            <span
                                                className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive
                                                        ? "bg-gradient-to-r from-sky-500/18 via-cyan-400/10 to-sky-500/18 ring-1 ring-sky-400/20"
                                                        : "bg-transparent group-hover:bg-white/[0.05]"
                                                    }`}
                                            />

                                            <span className="relative z-10">{item.name}</span>

                                            <span
                                                className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-sky-400 transition-all duration-300 ${isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                                                    }`}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </nav>

                        <div className="flex items-center gap-2">
                            {showHireButton && (
                                <div className="hidden sm:block">
                                    <button type="button" onClick={() => handleScroll("#contact")}>
                                        <Button className="rounded-full px-4 py-2.5 text-sm font-semibold shadow-[0_12px_30px_rgba(14,165,233,0.18)] md:px-6">
                                            {ctaText}
                                        </Button>
                                    </button>
                                </div>
                            )}

                            <button
                                type="button"
                                aria-label={mobileMenuLabel}
                                onClick={() => setMobileMenuOpen((prev) => !prev)}
                                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-white transition-all duration-300 lg:hidden ${mobileMenuOpen
                                        ? "border-sky-400/30 bg-sky-500/10"
                                        : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                                    }`}
                            >
                                <span className="relative flex h-4 w-5 flex-col items-center justify-between">
                                    <span
                                        className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                                            }`}
                                    />
                                    <span
                                        className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                                            }`}
                                    />
                                    <span
                                        className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                                            }`}
                                    />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div
                        className={`absolute left-0 top-full z-40 w-full px-4 pt-2 lg:hidden transition-all duration-300 ease-out ${mobileMenuOpen
                                ? "pointer-events-auto visible translate-y-0 opacity-100"
                                : "pointer-events-none invisible -translate-y-2 opacity-0"
                            }`}
                    >
                        <div
                            className={`origin-top rounded-[28px] border border-white/10 bg-[#0b1120]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition-all duration-300 ease-out ${mobileMenuOpen ? "scale-100" : "scale-[0.98]"
                                }`}
                        >
                            <nav className="flex flex-col gap-1.5">
                                {navItems.map((item) => {
                                    const isActive = activeHash === item.path;

                                    return (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={() => handleScroll(item.path)}
                                            className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-300 ${isActive
                                                    ? "bg-sky-500/12 text-white ring-1 ring-sky-400/20"
                                                    : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            <span
                                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${isActive
                                                        ? "bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]"
                                                        : "bg-white/15"
                                                    }`}
                                            />
                                        </button>
                                    );
                                })}
                            </nav>

                            {showHireButton && (
                                <div className="mt-3 border-t border-white/10 pt-3 sm:hidden">
                                    <button
                                        type="button"
                                        onClick={() => handleScroll("#contact")}
                                        className="w-full"
                                    >
                                        <Button className="w-full rounded-full px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(14,165,233,0.18)]">
                                            {ctaText}
                                        </Button>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}