"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="min-h-screen py-24 px-8 md:px-20 bg-transparent overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
            >
                {/* Left side - Image and Buttons */}
                <div className="w-full md:w-1/2 flex flex-col items-center relative">
                    {/* Decorative circle - Fixed positioning to not get cut off */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
                    
                    {/* Image container with proper sizing and no cutoff */}
                    <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-3xl overflow-visible">
                        {/* Main image background with proper containment */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src="/assets/images/hussnain.png"
                                    alt="Hussnain Cheema"
                                    width={400}
                                    height={400}
                                    className="object-containe"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Text Content */}
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