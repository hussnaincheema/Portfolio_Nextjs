"use client";

import { motion } from "framer-motion";

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-zinc-50 dark:bg-black">
            {/* Floating Blobs */}
            <motion.div
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[10%] left-[15%] w-[35vw] h-[35vw] bg-blue-400/10 dark:bg-blue-600/5 blur-[80px] rounded-full"
            />

            <motion.div
                animate={{
                    x: [0, -50, 30, 0],
                    y: [0, 40, -30, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-purple-400/10 dark:bg-purple-600/5 blur-[100px] rounded-full"
            />

            <motion.div
                animate={{
                    x: [0, 30, -40, 0],
                    y: [0, 20, 50, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] right-[20%] w-[25vw] h-[25vw] bg-pink-400/10 dark:bg-pink-600/5 blur-[90px] rounded-full"
            />
        </div>
    );
};

export default Background;
