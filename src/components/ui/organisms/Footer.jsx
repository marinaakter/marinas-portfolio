import { Link } from "react-router-dom";
import Container from "../atoms/Container";
import mock from "../../../data/mock";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#020617] text-white">
            <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[140px]" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[140px]" />

            <Container>
                <div className="relative z-10 py-20">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-3">
                            
                                <div className="leading-tight">
                                    <p className="text-lg font-bold text-white">
                                        {mock.brand.shortName}
                                    </p>
                                    <p className="text-xs tracking-[0.25em] text-sky-400">
                                        {mock.brand.highlightName}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
                                {mock.brand.description}
                            </p>
                            <div className="mt-6 flex gap-4">
                                {mock.socialLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                                    >
                                        {item.name[0]}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {mock.footer.productTitle}
                            </h3>
                            <ul className="mt-6 space-y-4 text-sm text-slate-300">
                                {mock.navigation.footerProduct.map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="transition hover:text-sky-400">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {mock.footer.companyTitle}
                            </h3>
                            <ul className="mt-6 space-y-4 text-sm text-slate-300">
                                {mock.navigation.footerCompany.map((item) => (
                                    <li key={item.name}>
                                        {item.path.startsWith("/") ? (
                                            <Link to={item.path} className="transition hover:text-sky-400">
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <a href={item.path} className="transition hover:text-sky-400">
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {mock.footer.newsletterTitle}
                            </h3>

                            <p className="mt-4 text-sm text-slate-300">
                                {mock.footer.newsletterDescription}
                            </p>

                            <form className="mt-6 flex gap-3">
                                <input
                                    type="email"
                                    placeholder={mock.footer.newsletterPlaceholder}
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-sky-500"
                                />

                                <button
                                    type="submit"
                                    className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    {mock.footer.newsletterButton}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
                        <p>{mock.brand.copyright}</p>

                        <div className="flex gap-6">
                            {mock.navigation.footerBottom.map((item) => (
                                <a key={item.name} href={item.path} className="hover:text-sky-400 transition">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}