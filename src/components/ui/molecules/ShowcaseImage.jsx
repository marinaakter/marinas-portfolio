export default function ShowcaseImage({
    src,
    alt = "Showcase",
    className = "",
    imageClassName = "",
    style = {},
    imageStyle = {},
    children,
}) {
    return (
        <div
            className={[
                "relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_36px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-4 lg:rounded-[34px] lg:shadow-[0_40px_120px_rgba(0,0,0,0.45)]",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={style}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.88),rgba(10,19,35,0.78))] p-4 sm:p-5 lg:rounded-[28px] lg:p-7">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:38px_38px] opacity-30" />

                {children}

                <div className="relative z-10 flex min-h-[320px] items-center justify-center sm:min-h-[360px] lg:min-h-[450px]">
                    <img
                        src={src}
                        alt={alt}
                        className={[
                            "mx-auto w-full max-w-[320px] drop-shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:max-w-[380px] lg:mt-3 lg:max-w-[430px]",
                            imageClassName,
                        ]
                            .filter(Boolean)
                            .join(" ")}
                        style={imageStyle}
                    />
                </div>
            </div>
        </div>
    );
}