import { motion } from "framer-motion";

const defaultVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function SectionReveal({
    children,
    delay = 0,
    y = 24,
    duration = 0.65,
    once = true,
    amount = 0.2,
    className = "",
    staggerChildren = 0,
    delayChildren = 0,
    as: Component = "div",
}) {
    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            className={className}
            variants={{
                hidden: {
                    opacity: 0,
                    y,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                        staggerChildren,
                        delayChildren,
                    },
                },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
        >
            {children}
        </MotionComponent>
    );
}

export function RevealItem({
    children,
    className = "",
    y = 18,
    duration = 0.55,
    delay = 0,
    as: Component = "div",
}) {
    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            className={className}
            variants={{
                hidden: {
                    opacity: 0,
                    y,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}
        >
            {children}
        </MotionComponent>
    );
}