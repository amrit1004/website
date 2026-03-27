"use client"

import { useState } from "react"
import { testimonials } from "@/data/testimonials"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ArrowLeft, ArrowRight } from "lucide-react"
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
        <section className="py-24 bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">CHAMPIONS SPEAK</h2>
                    <div className="w-24 h-1 bg-primary mx-auto" />
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-primary/10">
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
                                <p className="text-xl md:text-3xl text-white font-medium leading-relaxed italic mb-8">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full bg-neutral-700 mb-2 border-2 border-primary" /> {/* Placeholder Avatar */}
                                    <h4 className="text-lg font-bold text-primary">{testimonials[currentIndex].name}</h4>
                                    <p className="text-sm text-neutral-400">{testimonials[currentIndex].role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-4 mt-12">
                        <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-white/10 hover:bg-white/10 text-white">
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={next} className="rounded-full border-white/10 hover:bg-white/10 text-white">
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
