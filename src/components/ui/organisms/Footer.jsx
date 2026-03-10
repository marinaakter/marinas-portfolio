import Container from "../atoms/Container";
import mock from "../../../data/mock";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
        case "github":
            return <FaGithub size={18} />;
        case "linkedin":
            return <FaLinkedin size={18} />;
        case "facebook":
            return <FaFacebook size={18} />;
        case "instagram":
            return <FaInstagram size={18} />;
        default:
            return name[0];
    }
};

export default function Footer() {
    const handleScroll = (hash) => {
        if (!hash.startsWith("#")) return;

        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="relative overflow-hidden bg-[#020617] text-white">
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[140px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-[140px]" />

            <Container>
                <div className="relative z-10 py-20 md:py-24">
                    <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
                        {/* Brand */}
                        <div>
                            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sm font-bold text-white">
                                    {mock.brand.shortName?.charAt(0)}
                                </div>

                                <div className="leading-tight">
                                    <p className="text-lg font-bold text-white">
                                        {mock.brand.shortName}
                                    </p>
                                    <p className="text-[11px] tracking-[0.28em] text-sky-400">
                                        {mock.brand.highlightName}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
                                {mock.brand.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {mock.socialLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.name}
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:text-sky-400"
                                    >
                                        {getSocialIcon(item.name)}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Pages */}
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {mock.footer.productTitle}
                            </h3>

                            <ul className="mt-6 space-y-4 text-sm text-slate-300">
                                {mock.navigation.footerProduct.map((item) => (
                                    <li key={item.name}>
                                        <button
                                            type="button"
                                            onClick={() => handleScroll(item.path)}
                                            className="transition duration-300 hover:translate-x-1 hover:text-sky-400"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Information */}
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {mock.footer.companyTitle}
                            </h3>

                            <ul className="mt-6 space-y-4 text-sm text-slate-300">
                                {mock.navigation.footerCompany.map((item) => (
                                    <li key={item.name}>
                                        {item.path.startsWith("#") ? (
                                            <button
                                                type="button"
                                                onClick={() => handleScroll(item.path)}
                                                className="transition duration-300 hover:translate-x-1 hover:text-sky-400"
                                            >
                                                {item.name}
                                            </button>
                                        ) : (
                                            <a
                                                href={item.path}
                                                className="transition duration-300 hover:translate-x-1 hover:text-sky-400"
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-6">
                                <h3 className="text-lg font-semibold text-white">
                                    {mock.footer.newsletterTitle}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    {mock.footer.newsletterDescription}
                                </p>

                                <form className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
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
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
                        <p>{mock.brand.copyright}</p>

                        <div className="flex flex-wrap items-center justify-center gap-5 md:justify-end">
                            {mock.navigation.footerBottom.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    className="transition duration-300 hover:text-sky-400"
                                >
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