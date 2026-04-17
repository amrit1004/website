"use client"

import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"

const downloads = [
    { name: "NRAI Committee Members List", href: "/downloads/committee.pdf" },
    { name: "NRAI Constitution", href: "/downloads/constitution.pdf" },
    { name: "Shooting Calendar 2026 – Rifle & Pistol", href: "/downloads/calendar/calendar-2026-rifle-pistol.pdf" },
    { name: "Shooting Calendar 2026 – Shotgun", href: "/downloads/calendar/calendar-2026-shotgun.pdf" },
    { name: "Shooting Calendar 2025 – Rifle & Pistol", href: "/downloads/calendar/calendar-2025-rifle-pistol.pdf" },
    { name: "Shooting Calendar 2025 – Shotgun", href: "/downloads/calendar/calendar-2025-shotgun.pdf" },
    { name: "Shooting Calendar 2024 – Rifle & Pistol", href: "/downloads/calendar/calendar-2024-rifle-pistol.pdf" },
    { name: "Shooting Calendar 2024 – Shotgun", href: "/downloads/calendar/calendar-2024-shotgun.pdf" },
    { name: "Shooting Calendar 2023 – Rifle & Pistol", href: "/downloads/calendar/calendar-2023-rifle-pistol.pdf" },
    { name: "Shooting Calendar 2023 – Shotgun", href: "/downloads/calendar/calendar-2023-shotgun.pdf" },
    { name: "Shooting Calendar 2022 – Rifle & Pistol", href: "/downloads/calendar/calendar-2022-rifle-pistol.pdf" },
    { name: "Shooting Calendar 2022 – Shotgun", href: "/downloads/calendar/calendar-2022-shotgun.pdf" },
]

export default function DownloadsPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">DOWNLOADS</h1>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">Download official NRAI documents, calendars, and forms.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-3"
                    >
                        {downloads.map((item, i) => (
                            <a
                                key={item.name}
                                href={item.href}
                                download
                                className={`flex items-center gap-4 px-6 py-5 rounded-xl border transition-all duration-200 group ${
                                    i % 2 === 0
                                        ? "bg-[#f8fafc] border-gray-200 hover:border-[#1e3a5f]/30"
                                        : "bg-white border-gray-200 hover:border-[#1e3a5f]/30"
                                } hover:shadow-md`}
                            >
                                <span className="text-[#1e3a5f]/30 font-bold text-sm w-8 flex-shrink-0">
                                    {i + 1}.
                                </span>
                                <FileText className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <span className="text-[#1e3a5f] font-medium text-sm md:text-base group-hover:text-amber-600 transition-colors flex-grow">
                                    {item.name}
                                </span>
                                <Download className="w-4 h-4 text-[#1e3a5f]/20 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
