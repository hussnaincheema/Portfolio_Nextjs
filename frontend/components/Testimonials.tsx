"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronRight, MessageSquare } from "lucide-react";
import { testimonials, Testimonial } from "@/constants/testimonialsData";
import Section from "./Section";

const Testimonials = () => {
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
            setActiveIndex(Math.min(index, testimonials.length - 1));
        }
    };

    return (
        <Section id="testimonials" title="Testimonials" className="bg-transparent overflow-hidden">
            <div className="relative group max-w-[100vw]">
                {/* Header & Swipe Indicator */}
                <div className="px-8 md:px-20 mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                        <h3 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                            What <span className="text-zinc-500 dark:text-zinc-400">People Say</span>
                        </h3>
                    </div>
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
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            whileHover={{ y: -5 }}
                            className="min-w-[85vw] md:min-w-[500px] p-10 bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 snap-center relative overflow-hidden group/card"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover/card:opacity-20 transition-opacity">
                                <Quote className="w-20 h-20 text-blue-500" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col">
                                {/* Author Info at Top */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-2xl border-2 border-blue-500/20 shadow-lg">
                                        {testimonial.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-black dark:text-white uppercase tracking-tight">{testimonial.name}</h4>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-500 font-medium line-clamp-1">{testimonial.role}</p>
                                        <p className="text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest mt-1">{testimonial.date}</p>
                                    </div>
                                </div>

                                {/* Testimonial Text at Bottom */}
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <div className="flex items-center gap-1 mb-4 text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed italic font-medium">
                                            "{testimonial.text}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-4">
                    {testimonials.map((_, i) => (
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

export default Testimonials;
