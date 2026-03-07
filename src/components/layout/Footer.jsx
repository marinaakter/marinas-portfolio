import { Link } from "react-router-dom";
import Container from "../ui/Container";
import logo from "../../assets/myLogo.png";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#020617] text-white">
            {/* background glow */}
            <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[140px]" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[140px]" />

            <Container>
                <div className="relative z-10 py-20">

                    {/* Top grid */}
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3">
                                <img src={logo} alt="logo" className="h-10 w-auto" />
                                <div className="leading-tight">
                                    <p className="text-lg font-bold text-white">Your</p>
                                    <p className="text-xs tracking-[0.25em] text-sky-400">
                                        IT SOLUTION
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
                                Modern SaaS solutions to help businesses launch faster,
                                automate smarter and scale their digital products.
                            </p>

                            {/* Social */}
                            <div className="mt-6 flex gap-4">
                                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                                    >
                                        {item[0]}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="text-lg font-semibold text-white">Product</h3>
                            <ul className="mt-6 space-y-4 text-sm text-slate-300">
                                <li>
                                    <Link to="/" className="transition hover:text-sky-400">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service" className="transition hover:text-sky-400">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="transition hover:text-sky-400">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/case-study" className="transition hover:text-sky-400">
                                        Case Study
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-lg font-semibold text-white">Company</h3>
                            <ul className="mt-6 space-y-4 text-sm text-slate-300">
                                <li>
                                    <Link to="/about" className="transition hover:text-sky-400">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="transition hover:text-sky-400">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="transition hover:text-sky-400">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition hover:text-sky-400">
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Join our newsletter
                            </h3>

                            <p className="mt-4 text-sm text-slate-300">
                                Get product updates and SaaS growth tips directly in your inbox.
                            </p>

                            <form className="mt-6 flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-sky-500"
                                />

                                <button
                                    type="submit"
                                    className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    Join
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
                        <p>© 2026 Your IT Solution. All rights reserved.</p>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-sky-400 transition">
                                Privacy
                            </a>
                            <a href="#" className="hover:text-sky-400 transition">
                                Terms
                            </a>
                            <a href="#" className="hover:text-sky-400 transition">
                                Support
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}