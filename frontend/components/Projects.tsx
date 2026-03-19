"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Globe, ChevronRight } from "lucide-react";
import { projects, Project } from "@/constants/projectsData";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="min-w-[85vw] md:min-w-[450px] bg-zinc-900/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-[32px] border border-zinc-200/10 dark:border-zinc-800/50 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col snap-center h-full"
        >
            {/* Top - Image */}
            <div className="relative h-64 md:h-72 overflow-hidden bg-black/20">
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className={`${project.category === "Mobile App" ? "object-contain p-6" : "object-contain p-2"} group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Bottom - Content */}
            <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        {project.category === "Mobile App" ? (
                            <Smartphone className="w-4 h-4 text-blue-500" />
                        ) : (
                            <Globe className="w-4 h-4 text-purple-500" />
                        )}
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-tight">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center justify-between w-full px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-[1.02] transition-all mt-auto shadow-lg shadow-white/10 group/btn"
                >
                    <span className="text-sm shadow-black">View Detail</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const mobileProjects = projects.filter(p => p.category === "Mobile App");
    const webProjects = projects.filter(p => p.category === "Web App");

    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const webScrollRef = useRef<HTMLDivElement>(null);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
    const [webActiveIndex, setWebActiveIndex] = useState(0);

    const handleScroll = (element: HTMLDivElement | null, setter: (index: number) => void) => {
        if (element) {
            const scrollLeft = element.scrollLeft;
            const itemWidth = element.children[0]?.clientWidth || 0;
            const gap = 24; // gap-6 = 24px
            const totalWidth = itemWidth + gap;
            const index = Math.round(scrollLeft / totalWidth);
            setter(Math.min(index, element.children.length - 1));
        }
    };

    return (
        <section id="projects" className="py-24 bg-transparent overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="px-8 md:px-20 mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                            Featured <span className="text-zinc-500 dark:text-zinc-400">Projects</span>
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                            A selected collection of my professional work in mobile and web development.
                        </p>
                    </motion.div>
                </div>

                {/* Mobile Apps Row */}
                <div className="mb-32">
                    <div className="px-8 md:px-20 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <h3 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
                            <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                            <span className="text-black dark:text-white">Mobile Applications</span>
                        </h3>
                        <div className="flex gap-2 items-center text-zinc-400 group cursor-pointer">
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Swipe to discover</span>
                            <ChevronRight className="w-6 h-6 animate-pulse text-blue-500" />
                        </div>
                    </div>
                    <div
                        ref={mobileScrollRef}
                        onScroll={() => handleScroll(mobileScrollRef.current, setMobileActiveIndex)}
                        className="flex gap-6 overflow-x-auto px-8 md:px-20 pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
                    >
                        {mobileProjects.map((project: Project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-3 mt-4">
                        {mobileProjects.map((_, i: number) => (
                            <div
                                key={i}
                                className={`h-1.5 transition-all duration-300 rounded-full ${i === mobileActiveIndex ? "w-8 bg-blue-500" : "w-2 bg-zinc-200 dark:bg-zinc-800"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Web Apps Row */}
                <div>
                    <div className="px-8 md:px-20 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <h3 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
                            <Globe className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                            <span className="text-black dark:text-white">Web Development</span>
                        </h3>
                        <div className="flex gap-2 items-center text-zinc-400 group cursor-pointer">
                            <span className="text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Swipe to discover</span>
                            <ChevronRight className="w-6 h-6 animate-pulse text-purple-500" />
                        </div>
                    </div>
                    <div
                        ref={webScrollRef}
                        onScroll={() => handleScroll(webScrollRef.current, setWebActiveIndex)}
                        className="flex gap-6 overflow-x-auto px-8 md:px-20 pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
                    >
                        {webProjects.map((project: Project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-3 mt-4">
                        {webProjects.map((_, i: number) => (
                            <div
                                key={i}
                                className={`h-1.5 transition-all duration-300 rounded-full ${i === webActiveIndex ? "w-8 bg-purple-500" : "w-2 bg-zinc-200 dark:bg-zinc-800"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
