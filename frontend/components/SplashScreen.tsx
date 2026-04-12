"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-50 dark:bg-black text-black dark:text-white"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center gap-8"
            >
                {/* Profile Image with modern rings */}
                <div className="relative">
                    <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-3 rounded-full border-t-2 border-l-2 border-blue-500 opacity-60"
                    />
                    <motion.div 
                        initial={{ rotate: 360 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 rounded-full border-b-2 border-r-2 border-green-500 opacity-40"
                    />
                    <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-9 rounded-full border-t-2 border-r-2 border-purple-500 opacity-30"
                    />
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
                        <Image
                            src="/assets/images/hussnainProfile.jpg"
                            alt="Hussnain Cheema"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center space-y-4">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight"
                    >
                        Welcome To My Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-zinc-500 dark:text-zinc-400 text-lg uppercase tracking-widest"
                    >
                        Loading Experience
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="flex items-center justify-center gap-2 mt-4"
                    >
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
