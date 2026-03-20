"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { ChevronRight } from "lucide-react";

const Services = () => {
    const servicesData = [
        {
            title: "App Development",
            desc: "I am a skilled Full Stack App Developer specializing in React Native, Node.js, Express.js, and MongoDB. With over two years of experience, I build high-performance mobile applications that are both intuitive and responsive. From designing smooth user interfaces to managing backend logic and database integration, I handle the entire development process. My goal is to deliver mobile solutions that are reliable, scalable, and tailored to real-world user requirements."
        },
        {
            title: "Web Development",
            desc: "As an accomplished Full Stack Web Developer, I specialize in React.js, Next.js, Node.js, and MongoDB. My skill set covers both front-end and back-end technologies, allowing me to build dynamic, responsive, and scalable web applications. I focus on creating seamless user experiences while ensuring efficient data handling and robust server-side functionality. Every project I work on is driven by a commitment to delivering innovative, high-quality solutions that truly meet client and user needs."
        },
        {
            title: "API Integration Services",
            desc: "As a Full Stack Web Developer experienced in React.js, Next.js, Node.js, and MongoDB, I also offer comprehensive API integration services. I specialize in connecting applications and systems through secure and efficient APIs. Whether it's integrating third-party services, connecting databases, or building custom API solutions, I ensure smooth communication between different platforms. My approach focuses on reliability, scalability, and creating connected digital ecosystems that enhance overall application functionality."
        },
        {
            title: "Native Features for React Native Apps",
            desc: "I specialize in integrating native device features into React Native applications to create powerful and engaging mobile experiences. From accessing the camera, GPS, and microphone to implementing biometric authentication, push notifications, and offline storage, I ensure your app feels truly native. Whether you need file system access, sensors integration, or background services, I bring deep expertise in bridging native code with React Native for smooth and high-performance results."
        },
        {
            title: "Complete App Deployment Services",
            desc: "I handle end-to-end deployment of React Native applications to both major app stores. From generating signed builds to managing certificates and provisioning profiles, I ensure your app reaches users smoothly on Apple App Store and Google Play Store. I also set up TestFlight and Internal Testing tracks for beta testing before public release."
        }
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const element = scrollRef.current;
            const scrollLeft = element.scrollLeft;
            const itemWidth = element.children[0]?.clientWidth || 0;
            const gap = 24; // gap-6 = 24px
            const totalWidth = itemWidth + gap;
            const index = Math.round(scrollLeft / totalWidth);
            setActiveIndex(Math.min(index, servicesData.length - 1));
        }
    };

    return (
        <Section id="services" title="Services" className="bg-transparent overflow-hidden">
            <div className="relative group max-w-[100vw]">
                {/* Swipe Indicator */}
                <div className="px-8 md:px-20 mb-8 flex items-center justify-between">
                    <div className="flex-1" /> {/* Spacer */}
                    <div className="flex gap-2 items-center text-zinc-400 group cursor-pointer">
                        <span className="text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Swipe to discover</span>
                        <ChevronRight className="w-6 h-6 animate-pulse text-zinc-300" />
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth px-8 md:px-20"
                >
                    {servicesData.map((service) => (
                        <div
                            key={service.title}
                            className="min-w-[85vw] md:min-w-[450px] p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 snap-center"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{service.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-6">{service.desc}</p>
                            </div>
                            <a
                                href="https://wa.me/923216447958"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-all w-fit mt-auto shadow-lg shadow-green-500/20"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Contact Me
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-4">
                    {servicesData.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? "w-8 bg-blue-500" : "w-2 bg-zinc-200 dark:bg-zinc-800"}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Services;
