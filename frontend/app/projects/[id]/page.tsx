"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Github,
    Smartphone,
    Globe,
    CheckCircle2,
    User,
    Wrench,
    Code2,
    Apple
} from "lucide-react";
import { projects } from "@/constants/projectsData";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

export default function ProjectDetail() {
    const { id } = useParams();
    const router = useRouter();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="text-blue-500 hover:underline"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-transparent relative overflow-x-hidden">
            <Background />
            <Navbar />

            <div className="pt-32 pb-20 px-8 md:px-20 max-w-7xl mx-auto">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-zinc-500 hover:text-black dark:hover:text-white mb-12 transition-colors group"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </motion.button>

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold uppercase tracking-widest">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
                            {project.fullDescription}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {project.links.android && (
                                <a
                                    href={project.links.android}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                                >
                                    <Smartphone className="w-5 h-5" />
                                    Google Play
                                </a>
                            )}
                            {project.links.ios && (
                                <a
                                    href={project.links.ios}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                                >
                                    <Apple className="w-5 h-5" />
                                    App Store
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 border-2 border-zinc-200 dark:border-zinc-800 text-black dark:text-white rounded-full font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Quick Info Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <User className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="font-bold text-zinc-400 uppercase text-xs tracking-widest mb-2">My Role</h3>
                            <p className="text-lg font-bold text-black dark:text-white">{project.role}</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <Code2 className="w-8 h-8 text-purple-500 mb-4" />
                            <h3 className="font-bold text-zinc-400 uppercase text-xs tracking-widest mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-sm font-bold text-black dark:text-white">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm col-span-1 sm:col-span-2">
                            <Wrench className="w-8 h-8 text-orange-500 mb-4" />
                            <h3 className="font-bold text-zinc-400 uppercase text-xs tracking-widest mb-2">Tools Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tools.map(tool => (
                                    <span key={tool} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold">Project <span className="text-zinc-400">Gallery</span></h2>
                        <p className="text-sm text-zinc-400 italic">Scroll horizontally to view more</p>
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                        {project.images.map((img, idx) => (
                            <div
                                key={idx}
                                className="flex-none snap-center relative rounded-[32px] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-black/5 dark:bg-black/40 w-[85vw] md:w-[1000px] h-[500px]"
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    fill
                                    className="object-contain p-4 md:p-8"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Detailed Features */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <h2 className="text-4xl font-bold mb-12">Key <span className="text-zinc-400">Features</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 group">
                                <div className="flex-none w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-snug pt-1">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer-like Contact Prompt */}
            <section className="py-24 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Interested in this project?</h2>
                    <p className="text-xl text-zinc-500 mb-10">Let's discuss how I can bring similar expertise to your vision.</p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                    >
                        Start a Conversation
                        <ChevronRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
