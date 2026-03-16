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
                {/* Mobile Title - Only visible on small screens to ensure it's at the very top */}
                <h2 className="text-4xl font-bold text-black dark:text-white mb-2 text-center md:hidden w-full order-1">
                    About <span className="text-zinc-400">Me</span>
                </h2>

                {/* Left side - Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center relative order-2 md:order-1">
                    {/* Image container - Redesigned with Green Accent */}
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] group transition-transform hover:scale-105 duration-500">
                        {/* Decorative Green Background - Offset L-Shape effect */}
                        <div className="absolute -bottom-6 -left-6 w-1/2 h-full bg-blue-500 rounded-3xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500"></div>
                        <div className="absolute -bottom-6 -left-6 w-full h-1/2 bg-blue-500 rounded-3xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-black flex items-center justify-end border-2 border-zinc-800 shadow-2xl">
                            <Image
                                src="/assets/images/hussnainProfile.jpg"
                                alt="Hussnain Cheema"
                                className="object-contain"
                                width={450}
                                height={450}
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right side - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col order-3 md:order-2">
                    {/* Desktop Title - Hidden on mobile, visible on medium+ screens */}
                    <h2 className="hidden md:block text-5xl font-bold text-black dark:text-white mb-4 text-left">
                        About <span className="text-zinc-400">Me</span>
                    </h2>
                     
                    <div className="mt-8 md:mt-0">
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
                </div>
            </motion.div>
        </section>
    );
};

export default About;