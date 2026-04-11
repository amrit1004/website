"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const allResults = [
    { name: "Selection Trial 3 and 4 in Rifle Events Group B 2026", year: 2026, href: "/downloads/results/result-1.pdf" },
    { name: "Selection Trial 3 & 4 in Pistol Group B 2026", year: 2026, href: "/downloads/results/result-2.pdf" },
    { name: "0755 India Open Competition in Rifle & Pistol NR Events 2026", year: 2026, href: "/downloads/results/result-3.pdf" },
    { name: "Selection Trial 3 Group A", year: 2026, href: "/downloads/results/result-4.pdf" },
    { name: "Selection Trials 1 & 2 for Shotgun 2026 New Delhi 28-01-2026 - 06-02-2026", year: 2026, href: "/downloads/results/result-5.pdf" },
    { name: "Selection Trial 1 and 2 Group A 2026", year: 2026, href: "/downloads/results/result-6.pdf" },
    { name: "4th Digvijay Singh Memorial Shooting Championship (Shotgun) 2026", year: 2026, href: "/downloads/results/result-7.pdf" },
    { name: "Selection Trial 1 and 2 Group B 2026", year: 2026, href: "/downloads/results/result-8.pdf" },
    { name: "68th NSCC Rifle 2025", year: 2025, href: "/downloads/results/result-9.pdf" },
    { name: "68th NSCC Shotgun 2025", year: 2025, href: "/downloads/results/result-10.pdf" },
    { name: "67th NSCC Rifle 2024", year: 2024, href: "/downloads/results/result-11.pdf" },
    { name: "67th NSCC Pistol 2024", year: 2024, href: "/downloads/results/result-12.pdf" },
    { name: "67th NSCC Shotgun 2024", year: 2024, href: "/downloads/results/result-13.pdf" },
    { name: "Selection Trial 5 & 6 Group A 2025", year: 2025, href: "/downloads/results/result-14.pdf" },
    { name: "Selection Trial 5 & 6 Group B 2025", year: 2025, href: "/downloads/results/result-15.pdf" },
    { name: "3rd Digvijay Singh Memorial Shooting Championship 2025", year: 2025, href: "/downloads/results/result-16.pdf" },
    { name: "All India G.V. Mavlankar Shooting Championship 2025", year: 2025, href: "/downloads/results/result-17.pdf" },
    { name: "Kumar Surendra Singh Memorial Shooting Championship 2025", year: 2025, href: "/downloads/results/result-18.pdf" },
    { name: "Selection Trial 3 & 4 Group A 2025", year: 2025, href: "/downloads/results/result-19.pdf" },
    { name: "Selection Trial 3 & 4 Group B 2025", year: 2025, href: "/downloads/results/result-20.pdf" },
    { name: "66th NSCC Rifle 2023", year: 2023, href: "/downloads/results/result-21.pdf" },
    { name: "66th NSCC Pistol 2023", year: 2023, href: "/downloads/results/result-22.pdf" },
    { name: "66th NSCC Shotgun 2023", year: 2023, href: "/downloads/results/result-23.pdf" },
    { name: "All India G.V. Mavlankar Shooting Championship 2024", year: 2024, href: "/downloads/results/result-24.pdf" },
    { name: "Selection Trial 1 & 2 Group A 2024", year: 2024, href: "/downloads/results/result-25.pdf" },
    { name: "Selection Trial 1 & 2 Group B 2024", year: 2024, href: "/downloads/results/result-26.pdf" },
    { name: "2nd Digvijay Singh Memorial Shooting Championship 2024", year: 2024, href: "/downloads/results/result-27.pdf" },
    { name: "65th NSCC Rifle 2022", year: 2022, href: "/downloads/results/result-28.pdf" },
    { name: "65th NSCC Pistol 2022", year: 2022, href: "/downloads/results/result-29.pdf" },
    { name: "65th NSCC Shotgun 2022", year: 2022, href: "/downloads/results/result-30.pdf" },
]

const ITEMS_PER_PAGE = 10

const years = Array.from(new Set(allResults.map((r) => r.year))).sort((a, b) => b - a)

export default function ResultsPage() {
    const [selectedYear, setSelectedYear] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const filtered = selectedYear ? allResults.filter((r) => r.year === selectedYear) : allResults
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
    const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    const handleYearChange = (year: number | null) => {
        setSelectedYear(year)
        setCurrentPage(1)
    }

    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                    >
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">LATEST RESULTS</h1>
                            <div className="w-24 h-1 bg-amber-400" />
                        </div>

                        {/* Year Filter */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-[#1e3a5f]/50">Filter By:</span>
                            <select
                                value={selectedYear ?? ""}
                                onChange={(e) => handleYearChange(e.target.value ? Number(e.target.value) : null)}
                                className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f]"
                            >
                                <option value="">-- Select Year --</option>
                                {years.map((y) => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                    </motion.div>

                    {/* Results List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-3"
                    >
                        {paginated.length === 0 ? (
                            <div className="text-center py-16 text-[#1e3a5f]/40">
                                No results found for the selected year.
                            </div>
                        ) : (
                            paginated.map((item, i) => {
                                const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + i + 1
                                return (
                                    <a
                                        key={`${item.name}-${i}`}
                                        href={item.href}
                                        download
                                        className={`flex items-center gap-4 px-6 py-5 rounded-xl border transition-all duration-200 group ${
                                            i % 2 === 0
                                                ? "bg-[#f8fafc] border-gray-200 hover:border-[#1e3a5f]/30"
                                                : "bg-white border-gray-200 hover:border-[#1e3a5f]/30"
                                        } hover:shadow-md`}
                                    >
                                        <span className="text-[#1e3a5f]/30 font-bold text-sm w-8 flex-shrink-0">
                                            {globalIndex}.
                                        </span>
                                        <FileText className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                        <span className="text-[#1e3a5f] font-medium text-sm md:text-base group-hover:text-amber-600 transition-colors flex-grow">
                                            {item.name}
                                        </span>
                                        <Download className="w-4 h-4 text-[#1e3a5f]/20 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                                    </a>
                                )
                            })
                        )}
                    </motion.div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-10 h-10 border-gray-300 text-[#1e3a5f] disabled:opacity-30"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Button>

                            {Array.from({ length: totalPages }).map((_, i) => (
                                <Button
                                    key={i}
                                    variant={currentPage === i + 1 ? "default" : "outline"}
                                    size="icon"
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 ${
                                        currentPage === i + 1
                                            ? "bg-[#1e3a5f] text-white hover:bg-[#264a73]"
                                            : "border-gray-300 text-[#1e3a5f] hover:bg-[#1e3a5f]/5"
                                    }`}
                                >
                                    {i + 1}
                                </Button>
                            ))}

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 border-gray-300 text-[#1e3a5f] disabled:opacity-30"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
