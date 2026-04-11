"use client"

import { motion } from "framer-motion"
import { Calendar, Download } from "lucide-react"

const calendarLinks = [
    { name: "Calendar 2022 - Shotgun Events", href: "/downloads/calendar/calendar-2022-shotgun.pdf" },
    { name: "Calendar 2022 - Rifle/Pistol Events", href: "/downloads/calendar/calendar-2022-rifle-pistol.pdf" },
    { name: "Calendar 2023 - Shotgun Events", href: "/downloads/calendar/calendar-2023-shotgun.pdf" },
    { name: "Calendar 2023 - Rifle/Pistol Events", href: "/downloads/calendar/calendar-2023-rifle-pistol.pdf" },
    { name: "Calendar 2024 - Shotgun Events", href: "/downloads/calendar/calendar-2024-shotgun.pdf" },
    { name: "Calendar 2024 - Rifle/Pistol Events", href: "/downloads/calendar/calendar-2024-rifle-pistol.pdf" },
    { name: "Calendar 2025 - Shotgun Events", href: "/downloads/calendar/calendar-2025-shotgun.pdf" },
    { name: "Calendar 2025 - Rifle/Pistol Events", href: "/downloads/calendar/calendar-2025-rifle-pistol.pdf" },
    { name: "Calendar 2026 - Shotgun Events", href: "/downloads/calendar/calendar-2026-shotgun.pdf" },
    { name: "Calendar 2026 - Rifle/Pistol Events", href: "/downloads/calendar/calendar-2026-rifle-pistol.pdf" },
]

export default function CalendarPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">SHOOTING CALENDAR</h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-[#1e3a5f]/50 mt-4">
                            Download the shooting event calendar for Shotgun and Rifle/Pistol disciplines.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                        {calendarLinks.map((item, i) => (
                            <a
                                key={item.name}
                                href={item.href}
                                download
                                className={`flex items-center justify-between px-6 py-4 hover:bg-[#1e3a5f]/5 transition-colors group ${
                                    i !== calendarLinks.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                    <span className="text-[#1e3a5f] font-medium text-sm md:text-base group-hover:text-amber-600 transition-colors">
                                        {item.name}
                                    </span>
                                </div>
                                <Download className="w-4 h-4 text-[#1e3a5f]/30 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
