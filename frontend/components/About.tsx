"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="min-h-screen py-24 px-8 md:px-20 bg-white dark:bg-black">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
            >
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                            alt="Hussnain Cheema"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="mt-8 flex gap-4 w-full justify-center">
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-80 transition-opacity"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="/cv.pdf"
                            download
                            className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
                        About Me
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        I am a results-driven Software Engineer with a passion for building scalable, high-performance applications. With expertise in modern web technologies, I focus on creating seamless user experiences and robust backend systems.
                    </p>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        My approach combines technical excellence with a deep understanding of user needs, ensuring every project I work on delivers real value. I'm always looking for new challenges and opportunities to push the boundaries of what's possible in software development.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
