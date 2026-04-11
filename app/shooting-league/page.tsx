"use client"

import { motion } from "framer-motion"
import { Target, FileText, Download } from "lucide-react"

const sliDocuments = [
    { name: "SLI Fact Sheet April 25", href: "/downloads/sli/sli-fact-sheet.pdf" },
    { name: "SLI FAQ April 25", href: "/downloads/sli/sli-faq.pdf" },
    { name: "Eligibility for Submission of Expression of Interest for Indian Athletes for Participation", href: "/downloads/sli/sli-eligibility.pdf" },
    { name: "Request for Quote (RFQ) for Event Agency", href: "/downloads/sli/sli-rfq-event-agency.pdf" },
    { name: "Request for Quote (RFQ) for Delivery of the Shooting League of India (SLI) VR Championship", href: "/downloads/sli/sli-rfq-vr-championship.pdf" },
    { name: "Request for Quote (RFQ) for Event Management Agency for the Delivery of the Shooting League of India", href: "/downloads/sli/sli-rfq-event-management.pdf" },
]

export default function ShootingLeaguePage() {
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
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e3a5f]/20 bg-[#1e3a5f]/5 mb-6">
                            <Target className="w-4 h-4 text-[#1e3a5f]" />
                            <span className="text-sm font-semibold tracking-widest text-[#1e3a5f] uppercase">SLI</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Shooting League of India</h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                        {sliDocuments.map((item, i) => (
                            <a
                                key={item.name}
                                href={item.href}
                                download
                                className={`flex items-center gap-4 px-6 py-5 hover:bg-[#1e3a5f]/5 transition-colors group ${
                                    i !== sliDocuments.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                            >
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
