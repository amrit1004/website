"use client"

import { motion } from "framer-motion"
import { FileText, Download, Mail } from "lucide-react"

const newsletters = [
    { name: "NRAI Newsletter – April 2026", href: "/downloads/results/result-1.pdf" },
    { name: "NRAI Newsletter – March 2026", href: "/downloads/results/result-2.pdf" },
    { name: "NRAI Newsletter – February 2026", href: "/downloads/results/result-3.pdf" },
    { name: "NRAI Newsletter – January 2026", href: "/downloads/results/result-4.pdf" },
    { name: "NRAI Newsletter – December 2025", href: "/downloads/results/result-5.pdf" },
    { name: "NRAI Newsletter – November 2025", href: "/downloads/results/result-6.pdf" },
    { name: "NRAI Newsletter – October 2025", href: "/downloads/results/result-7.pdf" },
    { name: "NRAI Newsletter – September 2025", href: "/downloads/results/result-8.pdf" },
    { name: "NRAI Newsletter – August 2025", href: "/downloads/results/result-9.pdf" },
    { name: "NRAI Newsletter – July 2025", href: "/downloads/results/result-10.pdf" },
]

export default function NewsletterPage() {
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
                            <Mail className="w-8 h-8 text-amber-500" />
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f]">NEWSLETTER</h1>
                        </div>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">
                            Monthly newsletters from the National Rifle Association of India covering competition results, athlete profiles, upcoming events, and important announcements.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-3"
                    >
                        {newsletters.map((item, i) => (
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
