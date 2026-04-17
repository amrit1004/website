"use client"

import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"

const documents = [
    { name: "Selection Criteria for International Competitions 2026 – Rifle & Pistol", href: "/downloads/results/result-1.pdf" },
    { name: "Selection Criteria for International Competitions 2026 – Shotgun", href: "/downloads/results/result-2.pdf" },
    { name: "Selection Criteria for Asian Games 2026", href: "/downloads/results/result-3.pdf" },
    { name: "Selection Criteria for World Championship 2025", href: "/downloads/results/result-4.pdf" },
    { name: "Selection Criteria for Commonwealth Games 2025", href: "/downloads/results/result-5.pdf" },
    { name: "Selection Criteria for Olympic Games – Rifle & Pistol", href: "/downloads/results/result-6.pdf" },
    { name: "Selection Criteria for Olympic Games – Shotgun", href: "/downloads/results/result-7.pdf" },
    { name: "General Selection Policy and Guidelines", href: "/downloads/results/result-8.pdf" },
]

export default function SelectionCriteriaPage() {
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
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">SELECTION CRITERIA</h1>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">
                            Official selection criteria documents for national and international shooting competitions.
                            Athletes are selected based on performance in selection trials conducted by NRAI.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-3"
                    >
                        {documents.map((item, i) => (
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
