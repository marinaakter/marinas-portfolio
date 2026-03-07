export default function Clients() {
    const logos = [
        "/logos/logo1.png",
        "/logos/logo2.png",
        "/logos/logo3.png",
        "/logos/logo4.png",
        "/logos/logo5.png",
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                        Trusted by companies
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                        Brands That Trust Our Work
                    </h2>
                </div>

                {/* Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
                        >
                            <img
                                src={logo}
                                alt="client logo"
                                className="h-10 object-contain grayscale hover:grayscale-0 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}