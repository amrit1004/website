"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Target } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e3a5f]/20 bg-[#1e3a5f]/5 mb-8"
                        >
                            <Target className="w-4 h-4 text-[#1e3a5f]" />
                            <span className="text-sm font-semibold tracking-widest text-[#1e3a5f] uppercase">
                                National Rifle Association of India
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1e3a5f] mb-6 leading-[1.1]"
                        >
                            Empowering India&apos;s{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                                Shooting Excellence
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-[#1e3a5f]/60 max-w-2xl mb-10 leading-relaxed"
                        >
                            The governing body of shooting sports in India — nurturing world-class
                            athletes, organizing national championships, and building a legacy of
                            precision and pride on the global stage.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-start gap-4"
                        >
                            <Link href="/events/championships">
                                <Button size="lg" className="h-14 px-8 text-base rounded-md bg-[#1e3a5f] text-white hover:bg-[#264a73] font-bold">
                                    View Championships
                                </Button>
                            </Link>
                            <Link href="/athletes/shooters">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-md border-[#1e3a5f]/30 text-[#1e3a5f] hover:bg-[#1e3a5f]/5 font-semibold">
                                    Explore Athletes
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 rounded-full border-2 border-[#1e3a5f]/10 animate-pulse" />
                            <div className="absolute -inset-8 rounded-full border border-[#1e3a5f]/5" />
                            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden border-4 border-[#1e3a5f]/20 shadow-2xl shadow-[#1e3a5f]/10">
                                <img
                                    src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1000&auto=format&fit=crop"
                                    alt="Shooter aiming at target"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                            </div>
                            {/* Crosshair decoration */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] pointer-events-none">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-[#1e3a5f]/15" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-[#1e3a5f]/15" />
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-8 bg-[#1e3a5f]/15" />
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-8 bg-[#1e3a5f]/15" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
