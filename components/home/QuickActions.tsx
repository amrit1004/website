"use client"

import { ClipboardList, CalendarDays, Megaphone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const actions = [
    {
        icon: ClipboardList,
        title: "Registration",
        description: "Register for upcoming competitions, memberships, and training programs.",
        href: "/contact",
        color: "from-amber-400 to-amber-500",
    },
    {
        icon: CalendarDays,
        title: "Calendar",
        description: "View the full schedule of events, championships, and training sessions.",
        href: "/courses",
        color: "from-sky-400 to-sky-500",
    },
    {
        icon: Megaphone,
        title: "Notices",
        description: "Stay updated with the latest announcements, circulars, and bulletins.",
        href: "/about",
        color: "from-emerald-400 to-emerald-500",
    },
]

export function QuickActions() {
    return (
        <section className="py-16 bg-[#f8fafc] border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">Quick Actions</h2>
                    <p className="text-[#1e3a5f]/50 mt-2">Get started with what you need</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {actions.map((action, i) => (
                        <motion.div
                            key={action.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <Link href={action.href} className="block group">
                                <div className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#1e3a5f]/30 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <action.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{action.title}</h3>
                                    <p className="text-sm text-[#1e3a5f]/50 leading-relaxed mb-4">{action.description}</p>
                                    <div className="flex items-center text-sm font-semibold text-[#1e3a5f] group-hover:text-amber-500 transition-colors">
                                        Go to {action.title}
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
