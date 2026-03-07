"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [active, setActive] = useState("home");

    const navLinks = [
        { name: "About Me", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact Me", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md px-8 py-4 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-black dark:text-white leading-tight">
                    Hussnain Cheema
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                    Software Engineer
                </p>
            </div>
            <ul className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
