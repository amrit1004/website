"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Crosshair } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black px-4">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />
                {/* Placeholder for Hero Image/Video */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1595188682220-413158461778?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
            </div>

            <div className="relative z-10 container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8"
                >
                    <Crosshair className="w-4 h-4" />
                    <span className="text-sm font-medium tracking-wide">ELITE SHOOTING ACADEMY</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
                >
                    FORGE YOUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F7D886] to-primary">
                        LEGACY
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Master the art of precision at Mohali’s premier shooting arena.
                    World-class coaching, state-of-the-art ranges, and a community of champions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-black hover:bg-primary/90">
                        Start Your Journey
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10">
                        Explore Facilities
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
            </motion.div>
        </section>
    )
}
