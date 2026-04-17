"use client"

import { motion } from "framer-motion"
import { FileText, Download, Shield, Users } from "lucide-react"

const documents = [
    { name: "Brief on Sexual Harassment at Work Place", href: "/downloads/constitution.pdf" },
    { name: "Sexual Harassment Policy", href: "/downloads/committee.pdf" },
    { name: "POSH Act FAQs", href: "/downloads/results/result-28.pdf" },
    { name: "Internal Complaint Committee of NRAI under POSH Act", href: "/downloads/results/result-29.pdf" },
]

const committeeMembers = [
    { name: "Ms. Anjali Bhagwat", role: "Presiding Officer", designation: "Former International Shooter & Arjuna Awardee" },
    { name: "Mr. Rajesh Kumar", role: "Member", designation: "Senior Vice President, NRAI" },
    { name: "Ms. Priya Sharma", role: "Member", designation: "Legal Advisor" },
    { name: "Dr. Meena Gupta", role: "External Member", designation: "NGO Representative – Women's Rights Forum" },
]

export default function POSHActPage() {
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
                            <Shield className="w-8 h-8 text-amber-500" />
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f]">POSH ACT COMPLAINT COMMITTEE</h1>
                        </div>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="mt-4 text-[#1e3a5f]/60">
                            In compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, NRAI has constituted an Internal Complaint Committee (ICC) to address complaints of sexual harassment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-10"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Users className="w-5 h-5 text-[#1e3a5f]" />
                            <h2 className="text-xl font-bold text-[#1e3a5f]">Internal Complaint Committee Members</h2>
                        </div>
                        <div className="bg-[#f8fafc] rounded-xl border border-gray-200 overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#1e3a5f] text-white">
                                        <th className="text-left px-6 py-3 text-sm font-medium">Name</th>
                                        <th className="text-left px-6 py-3 text-sm font-medium">Role</th>
                                        <th className="text-left px-6 py-3 text-sm font-medium hidden md:table-cell">Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {committeeMembers.map((member, i) => (
                                        <tr key={member.name} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                                            <td className="px-6 py-4 text-sm font-medium text-[#1e3a5f]">{member.name}</td>
                                            <td className="px-6 py-4 text-sm text-[#1e3a5f]/70">{member.role}</td>
                                            <td className="px-6 py-4 text-sm text-[#1e3a5f]/50 hidden md:table-cell">{member.designation}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#e8f0f8] rounded-xl border border-[#ccddf0] p-6 mb-10"
                    >
                        <p className="text-sm text-[#1e3a5f]/70 leading-relaxed">
                            Any woman who has been subjected to sexual harassment at any NRAI-affiliated workplace, training camp, or competition venue may file a complaint with the Internal Complaint Committee within three months of the incident. The ICC will inquire into the complaint in accordance with the provisions of the POSH Act. All complaints will be handled with strict confidentiality.
                        </p>
                        <p className="text-sm text-[#1e3a5f]/70 mt-3">
                            <strong>Email:</strong> icc@thenrai.in
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Related Documents</h2>
                        <div className="space-y-3">
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
                                    <FileText className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                    <span className="text-[#1e3a5f] font-medium text-sm md:text-base group-hover:text-amber-600 transition-colors flex-grow">
                                        {item.name}
                                    </span>
                                    <Download className="w-4 h-4 text-[#1e3a5f]/20 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
