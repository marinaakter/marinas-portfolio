export default function ParallaxMouse({
    children,
    as: Tag = "div",
    className = "",
    x = 0,
    y = 0,
    strengthX = 6,
    strengthY = 6,
    transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
    style = {},
}) {
    return (
        <Tag
            className={className}
            style={{
                transform: `translate3d(${x * strengthX}px, ${y * strengthY}px, 0)`,
                transition,
                ...style,
            }}
        >
            {children}
        </Tag>
    );
}