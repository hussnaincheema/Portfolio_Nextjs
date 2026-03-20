"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Layout, Smartphone, Zap, Database, Github, Terminal, Hexagon, Server, Leaf, Network } from "lucide-react";

const Skills = () => {
    const technicalSkills = [
        { name: "JavaScript", icon: <Code2 className="w-5 h-5 text-yellow-500" /> },
        { name: "TypeScript", icon: <Terminal className="w-5 h-5 text-blue-600" /> },
        { name: "React js", icon: <Globe className="w-5 h-5 text-blue-500" /> },
        { name: "React Native (CLI, Expo)", icon: <Smartphone className="w-5 h-5 text-cyan-500" /> },
        { name: "Node Js", icon: <Hexagon className="w-5 h-5 text-green-600" /> },
        { name: "Express Js", icon: <Server className="w-5 h-5 text-zinc-500 dark:text-zinc-400" /> },
        { name: "MongoDB", icon: <Leaf className="w-5 h-5 text-emerald-500" /> },
        { name: "Socket.io", icon: <Network className="w-5 h-5 text-zinc-900 dark:text-white" /> },
        { name: "Firebase", icon: <Zap className="w-5 h-5 text-orange-500" /> },
        { name: "Supabase", icon: <Database className="w-5 h-5 text-emerald-500" /> },
        { name: "Redux", icon: <Cpu className="w-5 h-5 text-purple-500" /> },
        { name: "Tailwind Css", icon: <Layout className="w-5 h-5 text-sky-400" /> },
        { name: "Context API", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
        { name: "Git & GitHub", icon: <Github className="w-5 h-5 text-zinc-800 dark:text-zinc-200" /> },
    ];

    const otherSkills = [
        "Android & iOS Deployment",
        "Reusable Components",
        "Performance Optimization",
        "Problem Solving",
        "API Integration",
        "App Navigation (React Navigation/ Expo Router)",
        "Bug Fixing & Troubleshooting",
        "Responsive UI Design",
        "Animations",
        "Push Notifications",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="pt-25 pb-24 px-8 md:px-20 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Technical <span className="text-zinc-500 dark:text-zinc-400">Expertise</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                        Divided into core technology stack and professional specializations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Skills Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                            Core Technologies
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {technicalSkills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </div>
                                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Other Skills Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
                            Specializations & Others
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {otherSkills.map((skill) => (
                                <motion.div
                                    key={skill}
                                    variants={itemVariants}
                                    className="p-4 bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl flex items-center gap-4 hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                >
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-zinc-600 dark:text-zinc-400 font-medium whitespace-pre-wrap">
                                        {skill}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
