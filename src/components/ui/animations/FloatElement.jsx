export default function FloatElement({
    children,
    as: Tag = "div",
    className = "",
    duration = 8,
    y = 10,
    x = 0,
    delay = 0,
    style = {},
}) {
    return (
        <Tag
            className={className}
            style={{
                animation: `floatElement ${duration}s ease-in-out ${delay}s infinite`,
                "--float-y": `${y}px`,
                "--float-x": `${x}px`,
                ...style,
            }}
        >
            {children}
        </Tag>
    );
}