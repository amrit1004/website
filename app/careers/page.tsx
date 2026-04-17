"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Clock, FileText, Download } from "lucide-react"

const openings = [
    {
        title: "National Coach – Rifle",
        location: "New Delhi",
        type: "Full-time",
        description: "NRAI is looking for an experienced rifle coach to join the national coaching staff. The candidate should have international coaching experience and relevant certifications.",
        href: "/downloads/results/result-21.pdf",
    },
    {
        title: "National Coach – Pistol",
        location: "New Delhi",
        type: "Full-time",
        description: "We are seeking a qualified pistol coach with proven track record in developing elite-level shooters for international competitions.",
        href: "/downloads/results/result-22.pdf",
    },
    {
        title: "Sports Physiotherapist",
        location: "New Delhi",
        type: "Full-time",
        description: "NRAI requires a sports physiotherapist to support national team athletes during training camps and competitions.",
        href: "/downloads/results/result-23.pdf",
    },
    {
        title: "Administrative Officer",
        location: "New Delhi",
        type: "Full-time",
        description: "Seeking an organized and detail-oriented administrative officer to manage day-to-day operations at the NRAI headquarters.",
        href: "/downloads/results/result-24.pdf",
    },
]

export default function CareersPage() {
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
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">CAREERS</h1>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">
                            Join the National Rifle Association of India and be part of the team that supports Indian shooting sports at the highest level. Explore current openings below.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-6"
                    >
                        {openings.map((job, i) => (
                            <div
                                key={job.title}
                                className="bg-[#f8fafc] rounded-xl border border-gray-200 p-6 hover:border-[#1e3a5f]/30 hover:shadow-md transition-all duration-200"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#1e3a5f]/50 mb-3">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" /> {job.type}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#1e3a5f]/60">{job.description}</p>
                                    </div>
                                    <a
                                        href={job.href}
                                        download
                                        className="flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white rounded-lg text-sm font-medium hover:bg-[#264a73] transition-colors flex-shrink-0"
                                    >
                                        <FileText className="w-4 h-4" />
                                        Download Details
                                    </a>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12 bg-[#e8f0f8] rounded-xl border border-[#ccddf0] p-6 text-center"
                    >
                        <Briefcase className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                        <p className="text-sm text-[#1e3a5f]/70">
                            To apply, please download the job details and send your resume to <strong>careers@thenrai.in</strong> with the position title in the subject line.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
