"use client"

import { useState } from "react"
import { testimonials } from "@/data/testimonials"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">CHAMPIONS SPEAK</h2>
                    <div className="w-24 h-1 bg-amber-400 mx-auto" />
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Quote icon */}
                    <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-[#1e3a5f]/5">
                        <Quote className="w-32 h-32" />
                    </div>

                    <div className="relative z-10 min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <p className="text-xl md:text-3xl text-[#1e3a5f] font-medium leading-relaxed italic mb-10">
                                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                                </p>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full bg-[#1e3a5f]/10 mb-2 border-2 border-[#1e3a5f]/20" />
                                    <h4 className="text-lg font-bold text-[#1e3a5f]">{testimonials[currentIndex].name}</h4>
                                    <p className="text-sm text-[#1e3a5f]/50">{testimonials[currentIndex].role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-6 mt-12">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prev}
                            className="rounded-full border-[#1e3a5f]/20 hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] text-[#1e3a5f] w-12 h-12 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === currentIndex ? "bg-amber-400 w-8" : "bg-[#1e3a5f]/15 hover:bg-[#1e3a5f]/30 w-2"
                                    }`}
                                />
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={next}
                            className="rounded-full border-[#1e3a5f]/20 hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] text-[#1e3a5f] w-12 h-12 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
