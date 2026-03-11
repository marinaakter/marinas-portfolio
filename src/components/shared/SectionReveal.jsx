import { motion } from "framer-motion";

export default function SectionReveal({
    children,
    delay = 0,
    y = 24,
    duration = 0.65,
    once = true,
    className = "",
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.2 }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}