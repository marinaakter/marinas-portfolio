import Container from "../atoms/Container";

export default function Section({
    id,
    children,
    className = "",
    containerClassName = "",
    spaced = true,
    as: Tag = "section",
}) {
    return (
        <Tag
            id={id}
            className={[
                "relative",
                spaced ? "section-padding" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <Container className={containerClassName}>
                {children}
            </Container>
        </Tag>
    );
}