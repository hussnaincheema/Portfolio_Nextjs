"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="pt-30 pb-35 px-8 md:px-20 bg-transparent overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
            >
                {/* Left side - Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center relative">
                    {/* Decorative circle */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

                    {/* Image container - Circular */}
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-3xl p-2 border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform hover:scale-105 duration-500">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 flex items-center justify-center">
                            <Image
                                src="/assets/images/hussnain.png"
                                alt="Hussnain Cheema"
                                className="object-contain"
                                width={400}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right side - Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
                        About Me
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        I am an accomplished <span className="text-black dark:text-white font-semibold">Full Stack Developer</span> specializing in <span className="text-black dark:text-white font-semibold">React Native</span>, <span className="text-black dark:text-white font-semibold">React.js</span>, and <span className="text-black dark:text-white font-semibold">Next.js</span>. With a strong expertise in both <span className="text-black dark:text-white font-semibold">Mobile and Web Development</span>, I craft scalable, high-performance applications that deliver seamless user experiences.
                    </p>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        My proficiency extends across the entire stack, from building robust backends with <span className="text-black dark:text-white font-semibold">Node.js</span> and <span className="text-black dark:text-white font-semibold">MongoDB</span> to integrating complex <span className="text-black dark:text-white font-semibold">API Services</span> and <span className="text-black dark:text-white font-semibold">Native Device Features</span>. I am dedicated to delivering high-quality, <span className="text-black dark:text-white font-semibold">production-ready solutions</span> through clean code architecture and end-to-end <span className="text-black dark:text-white font-semibold">App Deployment</span> excellence.
                    </p>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 italic border-l-4 border-blue-500 pl-4">
                        If you’re looking for a dedicated developer who can turn your ideas into reality, you’re in the right place!
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;