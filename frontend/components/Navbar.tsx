"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "About Me", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/#projects" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Contact Me", href: "/#contact" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const targetId = href.startsWith("/") ? href.split("#")[1] : href.replace("#", "");
        const elem = document.getElementById(targetId);
        
        if (elem) {
            e.preventDefault();
            setIsMobileMenuOpen(false); 
            
            const offset = 80;
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            
            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                setActive(targetId);
            }, 50);
        } else {
            // Let the browser handle navigation to the other page
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 dark:bg-white/80 bg-black/80 backdrop-blur-md px-8 py-4 border-b dark:border-zinc-200 border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold dark:text-black text-white leading-tight">
                            Hussnain Cheema
                        </h1>
                        <p className="text-sm dark:text-zinc-500 text-zinc-400 font-medium">
                            Software Engineer
                        </p>
                    </div>
                    {/* Hamburger Button */}
                    <button 
                        className="md:hidden p-2 dark:text-zinc-600 text-zinc-400 dark:hover:text-black hover:text-white transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-sm font-medium dark:text-zinc-600 dark:hover:text-black text-zinc-400 hover:text-white transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden mt-4 border-t border-zinc-200 dark:border-zinc-800"
                    >
                        <ul className="flex flex-col gap-4 pt-4 pb-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="block text-lg font-bold text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
