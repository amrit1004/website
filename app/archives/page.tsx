"use client"

import { motion } from "framer-motion"
import { FileText, Download, Archive } from "lucide-react"

const archives = [
    { name: "Annual Report 2024-25", href: "/downloads/results/result-11.pdf" },
    { name: "Annual Report 2023-24", href: "/downloads/results/result-12.pdf" },
    { name: "Annual Report 2022-23", href: "/downloads/results/result-13.pdf" },
    { name: "NRAI General Body Meeting Minutes 2025", href: "/downloads/results/result-14.pdf" },
    { name: "NRAI General Body Meeting Minutes 2024", href: "/downloads/results/result-15.pdf" },
    { name: "NRAI General Body Meeting Minutes 2023", href: "/downloads/results/result-16.pdf" },
    { name: "Audited Financial Statements 2024-25", href: "/downloads/results/result-17.pdf" },
    { name: "Audited Financial Statements 2023-24", href: "/downloads/results/result-18.pdf" },
    { name: "Audited Financial Statements 2022-23", href: "/downloads/results/result-19.pdf" },
    { name: "NRAI Election Results 2024", href: "/downloads/results/result-20.pdf" },
    { name: "Shooting Calendar Archive 2022", href: "/downloads/calendar/calendar-2022-rifle-pistol.pdf" },
    { name: "Shooting Calendar Archive 2023", href: "/downloads/calendar/calendar-2023-rifle-pistol.pdf" },
]

export default function ArchivesPage() {
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
                        <div className="flex items-center gap-3 mb-4">
                            <Archive className="w-8 h-8 text-amber-500" />
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f]">ARCHIVES</h1>
                        </div>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">
                            Access past annual reports, meeting minutes, financial statements, and other archived documents of the National Rifle Association of India.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-3"
                    >
                        {archives.map((item, i) => (
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
