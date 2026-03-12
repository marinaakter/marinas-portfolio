export default function FadeUp({
    children,
    as: Tag = "div",
    delay = 0,
    duration = 0.7,
    distance = 18,
    className = "",
    once = true,
}) {
    return (
        <Tag
            className={className}
            style={{
                opacity: 0,
                transform: `translateY(${distance}px)`,
                animation: `fadeUp ${duration}s ease ${delay}s forwards`,
                animationFillMode: "forwards",
            }}
            data-animate-once={once ? "true" : "false"}
        >
            {children}
        </Tag>
    );
}