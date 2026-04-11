"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Star, Users, FileText, Download, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const renownedShooters = [
    { category: "62nd NSSC List of Renowned Shooters", items: [
        { name: "62nd NSSC List of Renowned Shooters (Big Bore)", href: "/downloads/shooters/shooter-1.pdf" },
        { name: "62nd NSSC List of Renowned Shooters (Rifle/Pistol)", href: "/downloads/shooters/shooter-2.pdf" },
        { name: "62nd NSSC List of Renowned Shooters (Shotgun)", href: "/downloads/shooters/shooter-3.pdf" },
    ]},
    { category: "58th National Shooting Championship (R/P/S)", items: [
        { name: "58th National Shooting Championship (Big Bore)", href: "/downloads/shooters/shooter-4.pdf" },
        { name: "58th National Shooting Championship (Pistol)", href: "/downloads/shooters/shooter-5.pdf" },
        { name: "58th National Shooting Championship (Rifle)", href: "/downloads/shooters/shooter-6.pdf" },
        { name: "58th National Shooting Championship (Shotgun)", href: "/downloads/shooters/shooter-7.pdf" },
    ]},
    { category: "60th National Shooting Championship (R/P/S)", items: [
        { name: "List of Renowned Shooters (Big Bore)", href: "/downloads/shooters/shooter-8.pdf" },
        { name: "List of Renowned Shooters (Pistol)", href: "/downloads/shooters/shooter-9.pdf" },
        { name: "List of Renowned Shooters (Rifle)", href: "/downloads/shooters/shooter-10.pdf" },
        { name: "List of Renowned Shooters (Shotgun)", href: "/downloads/shooters/shooter-11.pdf" },
    ]},
    { category: "63rd National Shooting Championship 2019", items: [
        { name: "63rd NSSC List of Renowned Shooters (Pistol)", href: "/downloads/shooters/shooter-12.pdf" },
        { name: "63rd NSSC List of Renowned Shooters (Rifle)", href: "/downloads/shooters/shooter-13.pdf" },
        { name: "63rd NSSC List of Renowned Shooters (Shotgun)", href: "/downloads/shooters/shooter-14.pdf" },
    ]},
    { category: "59th NSSC List of Renowned Shooters (Shotgun)", items: [
        { name: "List of Renowned Shooters (Shotgun)", href: "/downloads/shooters/shooter-15.pdf" },
    ]},
    { category: "59th NSSC List of Renowned Shooters (Rifle/Pistol)", items: [
        { name: "59th NSSC List of Renowned Shooters (Rifle/Pistol)", href: "/downloads/shooters/shooter-16.pdf" },
    ]},
    { category: "59th NSSC List of Renowned Shooters (Big Bore)", items: [
        { name: "59th NSSC List of Renowned Shooters (Big Bore)", href: "/downloads/shooters/shooter-17.pdf" },
    ]},
    { category: "61st National Shooting Championship (R/P/S)", items: [
        { name: "61st National Shooting Championship (Big Bore)", href: "/downloads/shooters/shooter-18.pdf" },
        { name: "List of Renowned Shooters (Rifle/Pistol)", href: "/downloads/shooters/shooter-19.pdf" },
        { name: "List of Renowned Shooters (Shotgun)", href: "/downloads/shooters/shooter-20.pdf" },
    ]},
    { category: "64th National Shooting Championship 2021", items: [
        { name: "List of Renowned Shooters (Pistol)", href: "/downloads/shooters/shooter-21.pdf" },
        { name: "List of Renowned Shooters (Rifle)", href: "/downloads/shooters/shooter-22.pdf" },
        { name: "List of Renowned Shooters (Shotgun)", href: "/downloads/shooters/shooter-23.pdf" },
    ]},
    { category: "65th National Shooting Championship 2022", items: [
        { name: "65th National Shooting Championship Competitions in Pistol Events", href: "/downloads/shooters/shooter-24.pdf" },
        { name: "65th National Shooting Championship Competitions in Rifle Events", href: "/downloads/shooters/shooter-25.pdf" },
        { name: "65th National Shooting Championship Competitions in Shotgun Events", href: "/downloads/shooters/shooter-26.pdf" },
    ]},
]

const aspiringNRAI = [
    { name: "12th South Zone Shooting Championship 2021 (Shotgun)", href: "/downloads/shooters/shooter-27.pdf" },
    { name: "12th South Zone Shooting Championship 2021 (Rifle/Pistol)", href: "/downloads/shooters/shooter-28.pdf" },
    { name: "27th All India G.V. Mavalankar Shooting Championship (Big Bore) 2018", href: "/downloads/shooters/shooter-29.pdf" },
    { name: "27th All India G.V. Mavalankar Shooting Championship (Rifle/Pistol) 2017", href: "/downloads/shooters/shooter-30.pdf" },
    { name: "28th All India G.V. Mavalankar Shooting Championship (Big Bore) 2019", href: "/downloads/shooters/shooter-31.pdf" },
    { name: "28th All India G.V. Mavalankar Shooting Championship (Rifle/Pistol) 2019", href: "/downloads/shooters/shooter-32.pdf" },
    { name: "29th All India G.V. Mavalankar Shooting Championship (Rifle/Pistol) 2019", href: "/downloads/shooters/shooter-33.pdf" },
    { name: "29th All India G.V. Mavalankar Shooting Championship (Shotgun) 2019", href: "/downloads/shooters/shooter-34.pdf" },
    { name: "30th Mavalankar Shooting Championship Rifle/Pistol 2021", href: "/downloads/shooters/shooter-35.pdf" },
    { name: "30th Mavalankar Shooting Championship Shotgun 2021", href: "/downloads/shooters/shooter-36.pdf" },
    { name: "40th North Zone Shooting Championship (Rifle/Pistol/Shotgun) 2021", href: "/downloads/shooters/shooter-37.pdf" },
    { name: "5th East Zone Shooting Championship Rifle Pistol 2021", href: "/downloads/shooters/shooter-38.pdf" },
    { name: "8th North East Zone Shooting Championship Rifle Pistol Shotgun", href: "/downloads/shooters/shooter-39.pdf" },
    { name: "8th West Zone Shooting Championship Pistol 2021", href: "/downloads/shooters/shooter-40.pdf" },
    { name: "8th West Zone Shooting Championship Shotgun 2021", href: "/downloads/shooters/shooter-41.pdf" },
    { name: "XXV All India G.V. Mavalankar Shooting Championship Big Bore 2016", href: "/downloads/shooters/shooter-42.pdf" },
]

const aspiringState = [
    { name: "Aspiring Shooter List - Karnataka State 2015", href: "/downloads/shooters/shooter-43.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2016", href: "/downloads/shooters/shooter-44.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2017", href: "/downloads/shooters/shooter-45.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2018", href: "/downloads/shooters/shooter-46.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2019", href: "/downloads/shooters/shooter-47.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2021", href: "/downloads/shooters/shooter-48.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2021 50M Open Sight", href: "/downloads/shooters/shooter-49.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2021 Shotgun", href: "/downloads/shooters/shooter-50.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2024 Open Sight", href: "/downloads/shooters/shooter-51.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2024 Rifle Pistol", href: "/downloads/shooters/shooter-52.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2024 Shotgun", href: "/downloads/shooters/shooter-53.pdf" },
    { name: "Aspiring Shooter List - Karnataka State 2025", href: "/downloads/shooters/shooter-54.pdf" },
]

const ITEMS_PER_PAGE = 8

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
}

/* ------------------------------------------------------------------ */
/*  SECTION COMPONENT                                                  */
/* ------------------------------------------------------------------ */

function ShooterSection({
    title,
    icon: Icon,
    iconBg,
    description,
    children,
}: {
    title: string
    icon: React.ElementType
    iconBg: string
    description: string
    children: React.ReactNode
}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Header */}
                <div
                    className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-[#f8fafc] transition-colors"
                    onClick={() => setExpanded(!expanded)}
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a5f]">{title}</h2>
                            <p className="text-[#1e3a5f]/50 text-sm mt-1">{description}</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-[#1e3a5f]/40 hover:text-[#1e3a5f]">
                        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Content */}
                {expanded && <div className="border-t border-gray-100 p-6 md:p-8 pt-6">{children}</div>}
            </div>
        </motion.div>
    )
}

/* ------------------------------------------------------------------ */
/*  PAGINATED LIST                                                     */
/* ------------------------------------------------------------------ */

function PaginatedList({ items }: { items: { name: string; href: string }[] }) {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE)
    const paginated = items.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    return (
        <>
            <div className="space-y-2">
                {paginated.map((item, i) => {
                    const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + i + 1
                    return (
                        <a
                            key={`${item.name}-${i}`}
                            href={item.href}
                            download
                            className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 group ${
                                i % 2 === 0
                                    ? "bg-[#f8fafc] border-gray-100 hover:border-[#1e3a5f]/30"
                                    : "bg-white border-gray-100 hover:border-[#1e3a5f]/30"
                            } hover:shadow-md`}
                        >
                            <span className="text-[#1e3a5f]/30 font-bold text-sm w-6 flex-shrink-0 text-right">{globalIndex}.</span>
                            <FileText className="w-4 h-4 text-amber-500 flex-shrink-0" />
                            <span className="text-[#1e3a5f] font-medium text-sm group-hover:text-amber-600 transition-colors flex-grow">
                                {item.name}
                            </span>
                            <Download className="w-4 h-4 text-[#1e3a5f]/20 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                        </a>
                    )
                })}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-9 h-9 border-gray-300 text-[#1e3a5f] disabled:opacity-30"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <Button
                            key={i}
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            size="icon"
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-9 h-9 ${
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
                        className="w-9 h-9 border-gray-300 text-[#1e3a5f] disabled:opacity-30"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </>
    )
}

/* ------------------------------------------------------------------ */
/*  CATEGORIZED LIST (for Renowned Shooters)                           */
/* ------------------------------------------------------------------ */

function CategorizedList({ categories }: { categories: typeof renownedShooters }) {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE)
    const paginated = categories.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    return (
        <>
            <div className="space-y-6">
                {paginated.map((cat) => (
                    <div key={cat.category}>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 mb-3">{cat.category}</h4>
                        <div className="space-y-2">
                            {cat.items.map((item, j) => (
                                <a
                                    key={`${item.name}-${j}`}
                                    href={item.href}
                                    download
                                    className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 group ${
                                        j % 2 === 0
                                            ? "bg-[#f8fafc] border-gray-100 hover:border-[#1e3a5f]/30"
                                            : "bg-white border-gray-100 hover:border-[#1e3a5f]/30"
                                    } hover:shadow-md`}
                                >
                                    <FileText className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                    <span className="text-[#1e3a5f] font-medium text-sm group-hover:text-amber-600 transition-colors flex-grow">
                                        {item.name}
                                    </span>
                                    <Download className="w-4 h-4 text-[#1e3a5f]/20 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-9 h-9 border-gray-300 text-[#1e3a5f] disabled:opacity-30"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <Button
                            key={i}
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            size="icon"
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-9 h-9 ${
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
                        className="w-9 h-9 border-gray-300 text-[#1e3a5f] disabled:opacity-30"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </>
    )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ShootersPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#1e3a5f] pt-10">
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">SHOOTERS</h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-[#1e3a5f]/50 mt-4 max-w-lg mx-auto">
                            Browse lists of Renowned, Aspiring, and Junior shooters across championships.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {/* Renowned Shooters */}
                        <ShooterSection
                            title="Renowned Shooters"
                            icon={Trophy}
                            iconBg="bg-amber-500"
                            description="National championship renowned shooter lists across all disciplines."
                        >
                            <CategorizedList categories={renownedShooters} />
                        </ShooterSection>

                        {/* Aspiring Shooters */}
                        <ShooterSection
                            title="Aspiring Shooters"
                            icon={Star}
                            iconBg="bg-[#1e3a5f]"
                            description="Aspiring shooter lists from NRAI championships and state associations."
                        >
                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-amber-400 rounded-full" />
                                        Aspiring Shooter List — NRAI
                                    </h3>
                                    <PaginatedList items={aspiringNRAI} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-amber-400 rounded-full" />
                                        Aspiring Shooter List — State
                                    </h3>
                                    <PaginatedList items={aspiringState} />
                                </div>
                            </div>
                        </ShooterSection>

                        {/* Junior Shooters */}
                        <ShooterSection
                            title="Junior Shooters"
                            icon={Users}
                            iconBg="bg-sky-500"
                            description="The list of junior shooters is incorporated under Renowned and Aspiring Shooters."
                        >
                            <div className="bg-[#f0f5fb] rounded-xl p-6 border border-[#ccddf0]">
                                <p className="text-[#1e3a5f]/60 leading-relaxed">
                                    The list of junior shooters is incorporated under the category of Renowned Shooters and Aspiring Shooters.
                                    Please refer to the respective sections above for junior shooter details.
                                </p>
                            </div>
                        </ShooterSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
