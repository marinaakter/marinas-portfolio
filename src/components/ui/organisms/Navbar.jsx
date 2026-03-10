import { useEffect, useMemo, useRef, useState } from "react";
import Button from "../atoms/Button";
import mock from "../../../data/mock";
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineArrowRight } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [manualActive, setManualActive] = useState(null);

    const manualScrollTargetRef = useRef(null);
    const navItems = useMemo(() => mock.navigation.navbar || [], []);

    useEffect(() => {
        const handleScrollState = () => {
            setIsScrolled(window.scrollY > 12);
        };

        const sectionIds = navItems
            .map((item) => item.path?.replace("#", ""))
            .filter(Boolean);

        const handleActiveSection = () => {
            if (manualActive && manualScrollTargetRef.current) {
                const targetElement = document.getElementById(manualScrollTargetRef.current);

                if (targetElement) {
                    const navbarOffset = 90;
                    const targetTop =
                        targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset;

                    if (Math.abs(window.scrollY - targetTop) <= 8) {
                        setActiveSection(manualScrollTargetRef.current);
                        setManualActive(null);
                        manualScrollTargetRef.current = null;
                    }
                }

                return;
            }

            const scrollPosition = window.scrollY + 140;

            for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
                const id = sectionIds[i];
                const element = document.getElementById(id);

                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(id);
                    return;
                }
            }

            setActiveSection("home");
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        handleScrollState();
        handleActiveSection();

        window.addEventListener("scroll", handleScrollState);
        window.addEventListener("scroll", handleActiveSection);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScrollState);
            window.removeEventListener("scroll", handleActiveSection);
            window.removeEventListener("resize", handleResize);
        };
    }, [navItems, manualActive]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleScroll = (hash) => {
        if (!hash?.startsWith("#")) return;

        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            const navbarOffset = 90;
            const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

            manualScrollTargetRef.current = id;
            setManualActive(id);
            setActiveSection(id);
            setIsOpen(false);

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full">
                <div
                    className={`flex h-[74px] w-full items-center justify-between border-b px-4 transition-all duration-300 md:px-6 lg:px-8 ${isScrolled
                            ? "border-white/12 bg-[#020617]/58 shadow-[0_18px_50px_rgba(2,6,23,0.26)] backdrop-blur-2xl"
                            : "border-white/10 bg-transparent"
                        }`}
                >
                    {/* Brand */}
                    <button
                        type="button"
                        onClick={() => handleScroll("#home")}
                        className="group flex cursor-pointer items-center gap-3"
                        aria-label="Go to home"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition duration-300 group-hover:border-sky-400/30">
                            {mock.brand.shortName?.charAt(0)}
                        </div>

                        <div className="text-left leading-tight">
                            <p className="text-base font-bold text-white">
                                {mock.brand.shortName}
                            </p>
                            <p className="text-[10px] tracking-[0.28em] text-sky-400">
                                {mock.brand.highlightName}
                            </p>
                        </div>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex lg:items-center lg:gap-2">
                        <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
                            {navItems.map((item) => {
                                const itemId = item.path.replace("#", "");
                                const isActive = activeSection === itemId;

                                return (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() => handleScroll(item.path)}
                                        className={`cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ${isActive
                                                ? "bg-white text-slate-900 shadow-sm"
                                                : "text-slate-200 hover:bg-white/[0.06] hover:text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:items-center lg:gap-3">
                        {mock.navigation.showHireButton && (
                            <button
                                type="button"
                                onClick={() => handleScroll("#contact")}
                                className="cursor-pointer"
                            >
                                <Button className="rounded-full px-6 py-3 text-sm font-semibold shadow-[0_18px_45px_rgba(14,165,233,0.24)]">
                                    <span className="inline-flex items-center gap-2">
                                        {mock.navigation.ctaButton}
                                        <HiOutlineArrowRight className="text-base" />
                                    </span>
                                </Button>
                            </button>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={mock.navigation.mobileMenuLabel}
                        className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl transition duration-300 hover:border-sky-400/30 lg:hidden"
                    >
                        {isOpen ? (
                            <HiOutlineX className="text-2xl" />
                        ) : (
                            <HiOutlineMenuAlt3 className="text-2xl" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
                    }`}
            >
                <div
                    className={`absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setIsOpen(false)}
                />

                <div
                    className={`absolute right-0 top-0 flex h-full w-full max-w-[360px] flex-col border-l border-white/10 bg-[#020617]/95 px-6 pb-8 pt-24 shadow-[0_20px_80px_rgba(2,6,23,0.5)] backdrop-blur-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="pointer-events-none absolute -top-10 right-0 h-48 w-48 rounded-full bg-sky-500/15 blur-[100px]" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-violet-500/15 blur-[100px]" />

                    <div className="relative z-10">
                        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
                            <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] px-3 py-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sm font-bold text-white">
                                    {mock.brand.shortName?.charAt(0)}
                                </div>

                                <div className="leading-tight">
                                    <p className="text-base font-bold text-white">
                                        {mock.brand.shortName}
                                    </p>
                                    <p className="text-[10px] tracking-[0.28em] text-sky-400">
                                        {mock.brand.highlightName}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                {navItems.map((item, index) => {
                                    const itemId = item.path.replace("#", "");
                                    const isActive = activeSection === itemId;

                                    return (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={() => handleScroll(item.path)}
                                            className={`flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition duration-300 ${isActive
                                                    ? "bg-white text-slate-900"
                                                    : "bg-white/[0.03] text-slate-200 hover:bg-white/[0.06] hover:text-white"
                                                }`}
                                            style={{
                                                transitionDelay: `${index * 40}ms`,
                                            }}
                                        >
                                            <span>{item.name}</span>
                                            <HiOutlineArrowRight className="text-base" />
                                        </button>
                                    );
                                })}
                            </div>

                            {mock.navigation.showHireButton && (
                                <div className="mt-5">
                                    <button
                                        type="button"
                                        onClick={() => handleScroll("#contact")}
                                        className="w-full cursor-pointer"
                                    >
                                        <Button className="w-full rounded-2xl py-3 text-sm font-semibold">
                                            <span className="inline-flex items-center gap-2">
                                                {mock.navigation.ctaButton}
                                                <HiOutlineArrowRight className="text-base" />
                                            </span>
                                        </Button>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}