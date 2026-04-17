"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const videos = [
    {
        id: "1",
        thumbnail: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800&auto=format&fit=crop",
        title: "50m Pistol Men Final — 2025",
        category: "ISSF",
        duration: "12:34",
    },
    {
        id: "2",
        thumbnail: "https://images.unsplash.com/photo-1584281722666-ce1a4578d052?q=80&w=800&auto=format&fit=crop",
        title: "Double Trap Men Final — 2025",
        category: "ISSF",
        duration: "15:20",
    },
    {
        id: "3",
        thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
        title: "10m Air Pistol Women Final",
        category: "ISSF",
        duration: "18:45",
    },
    {
        id: "4",
        thumbnail: "https://images.unsplash.com/photo-1461896836934-bd45ba48bc23?q=80&w=800&auto=format&fit=crop",
        title: "National Championship Highlights",
        category: "NRAI",
        duration: "8:12",
    },
    {
        id: "5",
        thumbnail: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=800&auto=format&fit=crop",
        title: "25m Rapid Fire Pistol — Semi Final",
        category: "ISSF",
        duration: "22:10",
    },
    {
        id: "6",
        thumbnail: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
        title: "Training Camp Documentary 2025",
        category: "NRAI",
        duration: "30:05",
    },
]

export function Videos() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return
        const amount = scrollRef.current.clientWidth * 0.6
        scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
    }

    return (
        <section className="py-24 bg-[#0d1f33]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">VIDEOS</h2>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="text-white/50 mt-4 max-w-lg">
                            Watch highlights, finals, and training sessions from top shooting events.
                        </p>
                    </div>
                    <Link href="/media/videos">
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold">
                            View All <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Horizontal scroll — hidden scrollbar */}
            <div className="relative container mx-auto px-4">
                <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {videos.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="min-w-[340px] md:min-w-[480px] group cursor-pointer"
                            onClick={() => setActiveVideo(video.id)}
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/80 group-hover:border-amber-400 transition-all duration-300">
                                        <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                                    </div>
                                </div>

                                {/* Duration badge */}
                                <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-black/70 text-white text-sm font-medium">
                                    {video.duration}
                                </div>

                                {/* Category badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                                    {video.category}
                                </div>
                            </div>

                            <h3 className="text-white font-semibold mt-4 text-lg group-hover:text-amber-400 transition-colors leading-snug">
                                {video.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Arrow Controls */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm z-10 w-12 h-12"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm z-10 w-12 h-12"
                >
                    <ChevronRight className="w-6 h-6" />
                </Button>
            </div>

            {/* Video Modal (placeholder) */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
                        onClick={() => setActiveVideo(null)}
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                                <p className="text-white/50 text-sm">Video player placeholder</p>
                                <p className="text-white font-semibold mt-2">
                                    {videos.find((v) => v.id === activeVideo)?.title}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
