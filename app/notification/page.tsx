"use client"

import { motion } from "framer-motion"
import { FileText, Download, Bell } from "lucide-react"

const notifications = [
    { name: "Notification for Selection Trials 5 & 6 Group A – Rifle & Pistol 2026", date: "10 Apr 2026", href: "/downloads/results/result-1.pdf" },
    { name: "Notification for Selection Trials 5 & 6 Group B – Rifle & Pistol 2026", date: "10 Apr 2026", href: "/downloads/results/result-2.pdf" },
    { name: "Notification for 69th National Shooting Championship – Shotgun 2026", date: "25 Mar 2026", href: "/downloads/results/result-3.pdf" },
    { name: "Notification for 69th National Shooting Championship – Rifle 2026", date: "20 Mar 2026", href: "/downloads/results/result-4.pdf" },
    { name: "Notification for Selection Trials 3 & 4 Group A 2026", date: "15 Feb 2026", href: "/downloads/results/result-5.pdf" },
    { name: "Notification for Selection Trials 3 & 4 Group B 2026", date: "15 Feb 2026", href: "/downloads/results/result-6.pdf" },
    { name: "Notification for India Open Shooting Competition 2026", date: "05 Jan 2026", href: "/downloads/results/result-7.pdf" },
    { name: "Notification for Selection Trials 1 & 2 – Shotgun 2026", date: "28 Dec 2025", href: "/downloads/results/result-8.pdf" },
    { name: "Notification for 68th National Shooting Championship – Rifle 2025", date: "15 Nov 2025", href: "/downloads/results/result-9.pdf" },
    { name: "Notification for 68th National Shooting Championship – Shotgun 2025", date: "10 Nov 2025", href: "/downloads/results/result-10.pdf" },
]

export default function NotificationPage() {
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
                            <Bell className="w-8 h-8 text-amber-500" />
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f]">NOTIFICATIONS</h1>
                        </div>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">
                            Stay updated with the latest official notifications from NRAI regarding competitions, selection trials, and other important announcements.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-3"
                    >
                        {notifications.map((item, i) => (
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
                                <FileText className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <div className="flex-grow">
                                    <span className="text-[#1e3a5f] font-medium text-sm md:text-base group-hover:text-amber-600 transition-colors block">
                                        {item.name}
                                    </span>
                                    <span className="text-[#1e3a5f]/40 text-xs">{item.date}</span>
                                </div>
                                <Download className="w-4 h-4 text-[#1e3a5f]/20 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
