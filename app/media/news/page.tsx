"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, ClipboardList, Megaphone, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredNews = [
    {
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
        category: "Registration",
        categoryColor: "bg-amber-500",
        icon: ClipboardList,
        title: "Online Shooter Registration Open for 2025–26 Season",
        description: "We are pleased to inform you that the Online Shooter Registration portal is now open for the 2025–26 season. All affiliated unit shooters are requested to complete their registration at the earliest.",
        date: "April 5, 2026",
    },
    {
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
        category: "Calendar",
        categoryColor: "bg-sky-500",
        icon: Calendar,
        title: "Shooting Calendar for Rifle / Pistol 2026 Released",
        description: "The provisional shooting calendar for 2026 has been published. Shooters are requested to check the tournament points carefully. In case of any discrepancy, please inform us.",
        date: "March 28, 2026",
    },
    {
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1200&auto=format&fit=crop",
        category: "Notice",
        categoryColor: "bg-red-500",
        icon: Megaphone,
        title: "Important Notice — National Championship Guidelines",
        description: "All participating shooters and team managers are hereby informed about the updated guidelines and schedule for the upcoming National Championship. Please review the attached circular.",
        date: "March 20, 2026",
    },
]

const allNews = [
    {
        image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800&auto=format&fit=crop",
        category: "Championship",
        categoryColor: "bg-emerald-500",
        icon: Trophy,
        title: "Indian Shooters Shine at ISSF World Cup 2026",
        date: "12 Apr 2026",
        description: "Indian shooting contingent bags 3 gold, 2 silver and 1 bronze medal at the ISSF World Cup held in Munich, Germany. The stellar performance puts India at the top of the medal tally.",
    },
    {
        image: "https://images.unsplash.com/photo-1461896836934-bd45ba48bc23?q=80&w=800&auto=format&fit=crop",
        category: "Selection",
        categoryColor: "bg-sky-500",
        icon: ClipboardList,
        title: "NRAI Announces Selection Trials Schedule for 2026 Season",
        date: "05 Apr 2026",
        description: "The National Rifle Association of India has released the complete schedule for selection trials across Rifle, Pistol and Shotgun disciplines for the 2026 international season.",
    },
    {
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
        category: "Championship",
        categoryColor: "bg-emerald-500",
        icon: Trophy,
        title: "69th National Shooting Championship Concluded Successfully",
        date: "28 Mar 2026",
        description: "The 69th National Shooting Championship Championships concluded at the Dr. Karni Singh Shooting Range with record participation from 28 state associations.",
    },
    {
        image: "https://images.unsplash.com/photo-1584281722666-ce1a4578d052?q=80&w=800&auto=format&fit=crop",
        category: "Development",
        categoryColor: "bg-amber-500",
        icon: Users,
        title: "NRAI Signs MoU with SAI for Grassroots Development",
        date: "15 Mar 2026",
        description: "NRAI and SAI have signed a Memorandum of Understanding to promote shooting sports at the grassroots level across India, with a focus on identifying talent from rural areas.",
    },
    {
        image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=800&auto=format&fit=crop",
        category: "Notice",
        categoryColor: "bg-red-500",
        icon: Megaphone,
        title: "New Coaching Certification Programme Launched",
        date: "01 Mar 2026",
        description: "NRAI launches a comprehensive coaching certification programme in collaboration with the International Shooting Sport Federation (ISSF) to develop world-class coaches in India.",
    },
    {
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
        category: "Championship",
        categoryColor: "bg-emerald-500",
        icon: Trophy,
        title: "India Secures Olympic Quota Places in Rifle Events",
        date: "18 Feb 2026",
        description: "Indian shooters have secured additional Olympic quota places in 10m Air Rifle and 50m Rifle 3 Positions events at the Asian Shooting Championship held in Changwon, South Korea.",
    },
    {
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
        category: "Notice",
        categoryColor: "bg-red-500",
        icon: Megaphone,
        title: "NRAI Annual General Body Meeting 2026",
        date: "05 Feb 2026",
        description: "The NRAI Annual General Body Meeting was held at New Delhi with representatives from all affiliated state associations. Key decisions regarding the upcoming season were discussed.",
    },
    {
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
        category: "Championship",
        categoryColor: "bg-emerald-500",
        icon: Trophy,
        title: "Junior Shooters Excel at Asian Junior Championship",
        date: "20 Jan 2026",
        description: "India's junior shooting team delivered an outstanding performance at the Asian Junior Championship, winning multiple medals across Rifle, Pistol and Shotgun events.",
    },
]

export default function NewsPage() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredNews.length)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length)
    }, [])

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [nextSlide])

    const current = featuredNews[currentSlide]

    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            {/* Featured News Carousel */}
            <section className="pt-24 pb-16 bg-[#0d1f33]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">NEWS & UPDATES</h1>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="text-white/50 mt-4 max-w-lg">
                            Stay updated with the latest announcements, schedules, and registrations.
                        </p>
                    </motion.div>

                    {/* Carousel */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-[16/7] md:aspect-[16/6]"
                            >
                                <img
                                    src={current.image}
                                    alt={current.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                                <div className="absolute inset-0 flex items-center">
                                    <div className="px-8 md:px-16 max-w-2xl">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white ${current.categoryColor} mb-4`}>
                                            <current.icon className="w-3.5 h-3.5" />
                                            {current.category}
                                        </span>
                                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                            {current.title}
                                        </h2>
                                        <p className="text-white/70 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
                                            {current.description}
                                        </p>
                                        <p className="text-white/40 text-sm">{current.date}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm z-10 w-12 h-12"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm z-10 w-12 h-12"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {featuredNews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    i === currentSlide ? "bg-amber-400 w-8" : "bg-white/30 hover:bg-white/50 w-2"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* All News Grid */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container mx-auto px-4">
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">All News</h2>
                        <div className="w-16 h-1 bg-amber-400" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {allNews.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1e3a5f]/30 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="aspect-[16/9] overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white ${item.categoryColor}`}>
                                                <item.icon className="w-3.5 h-3.5" />
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-xs text-[#1e3a5f]/40 mb-3">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {item.date}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-amber-600 transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#1e3a5f]/50 text-sm leading-relaxed line-clamp-3 flex-grow">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-sm font-semibold text-[#1e3a5f] group-hover:text-amber-500 transition-colors mt-4">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
