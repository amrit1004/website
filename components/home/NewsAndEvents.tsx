"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, ClipboardList, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
    {
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
        category: "Registration",
        categoryColor: "bg-amber-500",
        icon: ClipboardList,
        title: "Online Shooter Registration Open",
        description: "We are pleased to inform you that the Online Shooter Registration portal is now open for the 2025–26 season. All affiliated unit shooters are requested to complete their registration at the earliest.",
        date: "April 5, 2026",
        href: "/contact",
    },
    {
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
        category: "Calendar",
        categoryColor: "bg-sky-500",
        icon: Calendar,
        title: "Shooting Calendar for Rifle / Pistol 2026",
        description: "The provisional shooting calendar for 2026 has been published. Shooters are requested to check the tournament points carefully. In case of any discrepancy, please inform us.",
        date: "March 28, 2026",
        href: "/courses",
    },
    {
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop",
        category: "Notice",
        categoryColor: "bg-red-500",
        icon: Megaphone,
        title: "Important Notice — National Championship",
        description: "All participating shooters and team managers are hereby informed about the updated guidelines and schedule for the upcoming National Championship. Please review the attached circular.",
        date: "March 20, 2026",
        href: "/about",
    },
]

export function NewsAndEvents() {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">NEWS & EVENTS</h2>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="text-[#1e3a5f]/50 mt-4 max-w-lg">
                            Stay updated with the latest announcements, schedules, and registrations.
                        </p>
                    </div>
                    <Link href="/media/news">
                        <Button variant="outline" className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-semibold">
                            View All News <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <Link href={item.href} className="block group h-full">
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1e3a5f]/30 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
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
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-sm text-[#1e3a5f]/40 mb-3">{item.date}</p>
                                        <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-amber-600 transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#1e3a5f]/50 text-sm leading-relaxed line-clamp-3 flex-grow">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-sm font-semibold text-[#1e3a5f] group-hover:text-amber-500 transition-colors mt-5">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
