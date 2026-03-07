"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-20 bg-transparent">
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
                {/* You can add a profile image here using /assets/images/hero-image.jpg */}
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10">
                    A passionate Software Engineer dedicated to building intuitive and impactful digital experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="/assets/cv/Hussnain Liaquat Ali.pdf"
                        download
                        className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
