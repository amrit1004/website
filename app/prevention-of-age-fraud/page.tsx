"use client"

import { motion } from "framer-motion"
import { ShieldCheck, FileText, Download, AlertTriangle } from "lucide-react"

const documents = [
    { name: "NRAI Policy on Prevention of Age Fraud in Shooting Sports", href: "/downloads/constitution.pdf" },
    { name: "Age Verification Guidelines for State Associations", href: "/downloads/results/result-25.pdf" },
    { name: "Age Fraud Complaint Form", href: "/downloads/results/result-26.pdf" },
    { name: "Circular: Mandatory Age Verification for Junior & Sub-Junior Categories", href: "/downloads/results/result-27.pdf" },
]

export default function PreventionOfAgeFraudPage() {
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
                            <ShieldCheck className="w-8 h-8 text-amber-500" />
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f]">PREVENTION OF AGE FRAUD</h1>
                        </div>
                        <div className="w-24 h-1 bg-amber-400" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="prose max-w-none mb-10"
                    >
                        <div className="bg-[#e8f0f8] rounded-xl border border-[#ccddf0] p-6 mb-8">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-[#1e3a5f]/70">
                                    The National Rifle Association of India is committed to ensuring fair competition across all age categories. Age fraud undermines the integrity of sport and is taken very seriously. Any individual found guilty of age fraud will face strict disciplinary action including suspension and disqualification.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-[#1e3a5f]/70 text-sm leading-relaxed">
                            <p>
                                As per the directives of the Ministry of Youth Affairs and Sports, Government of India, NRAI has adopted a zero-tolerance policy towards age fraud in shooting sports. All athletes participating in age-restricted categories (Sub-Junior, Junior, Youth) are required to submit valid age proof documents at the time of registration.
                            </p>
                            <p>
                                Accepted documents for age verification include birth certificate issued by the Municipal Authority, school leaving certificate, Aadhaar card, and passport. NRAI reserves the right to conduct independent age verification through bone ossification tests or other scientific methods when deemed necessary.
                            </p>
                            <p>
                                State Rifle Associations are responsible for verifying the age of athletes before forwarding entries to NRAI for national-level competitions. Any complaints regarding age fraud can be submitted in writing to the NRAI Secretary General along with supporting evidence.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
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
