"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
    title?: string;
}

const Section = ({ id, children, className = "", title }: SectionProps) => {
    return (
        <section id={id} className={`py-24 px-8 md:px-20 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                {title && (
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black dark:text-white text-center">
                        {title}
                    </h2>
                )}
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
