"use client"

import { motion } from "framer-motion"
import { FileText, Download, Info } from "lucide-react"

const rtiDocuments = [
    { name: "RTI Manual – Section 4(1)(a): Organization, Functions & Duties", href: "/downloads/committee.pdf" },
    { name: "RTI Manual – Section 4(1)(b): Powers & Duties of Officers", href: "/downloads/constitution.pdf" },
    { name: "RTI Disclosure – Budget & Financial Details 2025-26", href: "/downloads/results/result-14.pdf" },
    { name: "RTI Disclosure – Budget & Financial Details 2024-25", href: "/downloads/results/result-15.pdf" },
    { name: "RTI Annual Return 2025", href: "/downloads/results/result-16.pdf" },
    { name: "RTI Annual Return 2024", href: "/downloads/results/result-17.pdf" },
]

export default function RTIPage() {
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
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">RIGHT TO INFORMATION</h1>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">
                            In compliance with the Right to Information Act, 2005, the National Rifle Association of India provides proactive disclosure of information to promote transparency and accountability.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-[#e8f0f8] rounded-xl border border-[#ccddf0] p-6 mb-10"
                    >
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-[#1e3a5f]/70 space-y-2">
                                <p><strong>Central Public Information Officer (CPIO):</strong> Mr. Rajiv Sharma</p>
                                <p><strong>Appellate Authority:</strong> Mr. Sunil Kumar</p>
                                <p><strong>Address:</strong> NRAI Headquarters, Dr. Karni Singh Shooting Range, Tughlakabad Institutional Area, New Delhi – 110062</p>
                                <p><strong>Email:</strong> rti@thenrai.in</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="space-y-3"
                    >
                        {rtiDocuments.map((item, i) => (
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
