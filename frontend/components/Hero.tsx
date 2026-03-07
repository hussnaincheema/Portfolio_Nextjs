"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-20 bg-zinc-50 dark:bg-[#0a0a0a]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
                    Welcome to my portfolio
                </span>
                <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-6 leading-tight">
                    I'm <span className="text-zinc-500 dark:text-zinc-400">Hussnain Cheema</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                    A passionate Software Engineer dedicated to building intuitive and impactful digital experiences.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
