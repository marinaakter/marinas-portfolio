import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import logo from "../../assets/myLogo.png";

export default function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/service" },
        { name: "Pricing", path: "/pricing" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Blog", path: "/blog" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10  backdrop-blur-xl">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="logo" className="h-11 w-auto" />

                        <div className="leading-tight">
                            <p className="text-[12px] font-semibold tracking-[0.25em] text-white">
                                YOUR
                            </p>
                            <p className="text-[14px] font-bold tracking-[0.18em] text-sky-400">
                                IT SOLUTION
                            </p>
                        </div>
                    </Link>

                    {/* Nav items */}
                    <nav className="hidden items-center gap-12 md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative text-[16px] font-medium transition ${isActive
                                        ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-violet-400 after:content-['']"
                                        : "text-slate-300 hover:text-white"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <Button className="px-7 py-3 text-[15px] font-semibold">
                        FREE TRIAL
                    </Button>

                </div>
            </Container>
        </header>
    );
}