import { useEffect, useRef, useState } from "react";

export default function Reveal({
    children,
    as: Tag = "div",
    className = "",
    delay = 0,
    duration = 0.8,
    distance = 24,
    threshold = 0.18,
    once = true,
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [once, threshold]);

    return (
        <Tag
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                    ? "translateY(0px)"
                    : `translateY(${distance}px)`,
                transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </Tag>
    );
}