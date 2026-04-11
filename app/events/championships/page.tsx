"use client"

import React from "react"
import { motion } from "framer-motion"
import { Trophy, Target, Globe, Medal, Flag } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const olympicMenEvents = [
    "50M Rifle 3 Position",
    "10M Rifle",
    "25M Rapid Fire Pistol",
    "10M Pistol",
    "Clay Pigeon Trap",
    "Clay Pigeon Skeet",
]

const olympicWomenEvents = [
    "50M Rifle 3 Position",
    "10M Rifle",
    "25M Pistol",
    "10M Pistol",
    "Clay Pigeon Trap",
    "Clay Pigeon Skeet",
]

const olympicMixedEvents = [
    "10M Air Rifle Mixed Team",
    "10M Air Pistol Mixed Team",
    "Trap Mixed Team",
    "Skeet Mixed Team",
]

const internationalMenEvents = [
    "50M Rifle 3 Position",
    "50M Rifle Prone",
    "10M Rifle",
    "25M Rapid Fire Pistol",
    "50M Pistol",
    "25M Standard Pistol",
    "10M Pistol",
    "25M Centre Fire Pistol",
    "Clay Pigeon Trap",
    "Clay Pigeon Double Trap",
    "Clay Pigeon Skeet",
    "300M Rifle 3 Position",
    "300M Rifle Prone",
    "300M Standard Rifle",
]

const internationalWomenEvents = [
    "50M Rifle 3 Position",
    "50M Rifle Prone",
    "10M Rifle",
    "25M Pistol",
    "10M Pistol",
    "Clay Pigeon Trap",
    "Clay Pigeon Double Trap",
    "Clay Pigeon Skeet",
    "300M Rifle 3 Position",
    "300M Rifle Prone",
]

const internationalMixedEvents = [
    "10M Air Rifle Mixed Team",
    "10M Air Pistol Mixed Team",
    "Trap Mixed Team",
    "Skeet Mixed Team",
]

const medalsData = [
    { year: 1962, olympics: ["-", "-", "-"], wchamp: ["-", "1", "-"], wcup: ["-", "-", "-"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 1974, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["-", "1", "-"], cwg: ["-", "-", "-"] },
    { year: 1978, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["1", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 1982, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["-", "2", "1"], cwg: ["-", "1", "1"] },
    { year: 1986, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["-", "1", "2"], cwg: ["-", "-", "-"] },
    { year: 1990, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["-", "-", "1"], cwg: ["1", "1", "3"] },
    { year: 1994, olympics: ["-", "-", "-"], wchamp: ["1", "-", "-"], wcup: ["-", "-", "-"], asian: ["1", "-", "1"], cwg: ["3", "2", "2"] },
    { year: 1997, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "1", "1"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 1998, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["-", "2", "1"], cwg: ["4", "2", "1"] },
    { year: 2000, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "3", "2"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2001, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "1"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2002, olympics: ["-", "-", "-"], wchamp: ["-", "1", "-"], wcup: ["-", "3", "-"], asian: ["-", "2", "-"], cwg: ["14", "7", "3"] },
    { year: 2003, olympics: ["-", "-", "-"], wchamp: ["-", "1*", "1"], wcup: ["-", "3", "-"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2004, olympics: ["1", "-", "-"], wchamp: ["-", "1", "-"], wcup: ["-", "1", "-"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2005, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2006, olympics: ["-", "-", "-"], wchamp: ["3", "1", "2"], wcup: ["2", "1", "1"], asian: ["3", "6", "5"], cwg: ["16", "7", "4"] },
    { year: 2007, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "2"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2008, olympics: ["1", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["1", "-", "1"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2009, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["1", "4", "2"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2010, olympics: ["-", "-", "-"], wchamp: ["-", "2", "-"], wcup: ["-", "2", "-"], asian: ["-", "1", "2"], cwg: ["1", "14", "5", "2"] },
    { year: 2011, olympics: ["-", "-", "-"], wchamp: ["-", "-", "2"], wcup: ["1", "3", "2"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2012, olympics: ["-", "1", "1"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "-"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2013, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["1", "1", "1"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2014, olympics: ["-", "-", "-"], wchamp: ["-", "1", "1"], wcup: ["2", "3", "1"], asian: ["1", "1", "7"], cwg: ["5", "8", "4"] },
    { year: 2015, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["-", "-", "4"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2016, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["1", "3", "-"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2017, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["2", "2", "2"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2018, olympics: ["-", "-", "-"], wchamp: ["11", "9", "7"], wcup: ["4", "2", "4"], asian: ["2", "4", "3"], cwg: ["7", "4", "5"] },
    { year: 2019, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["16", "4", "2"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2021, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["16", "11", "9"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2022, olympics: ["-", "-", "-"], wchamp: ["14", "11", "17"], wcup: ["11", "13", "6"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2023, olympics: ["-", "-", "-"], wchamp: ["13", "7", "13"], wcup: ["8", "5", "12"], asian: ["7", "9", "6"], cwg: ["-", "-", "-"] },
    { year: 2024, olympics: ["-", "-", "3"], wchamp: ["-", "-", "-"], wcup: ["6", "6", "5"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
    { year: 2025, olympics: ["-", "-", "-"], wchamp: ["-", "-", "-"], wcup: ["9", "6", "7"], asian: ["-", "-", "-"], cwg: ["-", "-", "-"] },
]

const nationalEvents = [
    {
        title: "National Shooting Championship Competitions (NSCC)",
        items: [
            "Official Record (Rft/All) - All India G.V. Mavlankar Shooting Championship",
            "Official National Record (Full Bore Match) - 2019 (300 Bore Events)",
            "Events Calendar of the Shooting Championship Competitions",
        ],
    },
    {
        title: "All India G.V. Mavlankar Shooting Championship (AIGVMSC)",
        items: [
            "Official Records and Results",
            "Events Calendar and Schedule",
        ],
    },
    {
        title: "Kumar Surendra Singh Memorial Shooting Championship",
        items: [
            "Official Records UPR (2nd Half/2023)",
            "Match/Fixtures/Events Details",
        ],
    },
    {
        title: "All India Kumar Surendra Singh Memorial Inter School Shooting Championship",
        items: [
            "Official Records and Results",
            "Participation Guidelines for Schools",
        ],
    },
    {
        title: "Sardar Sajjan Singh Sethi Memorial Masters Shooting Championship",
        items: [
            "Dronacharya Singh Memorial Shooting Championship",
            "Official Records and Results",
        ],
    },
]

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
}

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function EventList({ title, events }: { title: string; events: string[] }) {
    return (
        <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 mb-4">{title}</h4>
            <div className="space-y-2">
                {events.map((event, i) => (
                    <div key={i} className="flex items-start gap-3 text-[#1e3a5f]/70">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center text-xs font-bold text-[#1e3a5f]">
                            {i + 1}
                        </span>
                        <span className="text-sm font-medium">{event}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function MedalBadge({ value, type }: { value: string; type: "G" | "S" | "B" }) {
    if (value === "-") return <span className="text-gray-300 text-xs">-</span>
    const colors = {
        G: "text-amber-500 font-bold",
        S: "text-gray-400 font-bold",
        B: "text-orange-700 font-bold",
    }
    return <span className={`text-xs ${colors[type]}`}>{value}</span>
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ChampionshipsPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">

            {/* Page Header */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">CHAMPIONSHIPS & EVENTS</h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-[#1e3a5f]/50 mt-4 max-w-2xl mx-auto">
                            Comprehensive details of shooting events, medal tallies, and national competitions organized by NRAI.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================ */}
            {/*  SECTION 1 — Olympic Games / World Cup Events                */}
            {/* ============================================================ */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-12">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                                <Trophy className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#1e3a5f]">Olympic Games / World Cup Events</h2>
                        </div>
                        <div className="w-24 h-1 bg-amber-400 ml-15 mt-3" />
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <EventList title="Men" events={olympicMenEvents} />
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <EventList title="Women" events={olympicWomenEvents} />
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <EventList title="Mixed Event" events={olympicMixedEvents} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================ */}
            {/*  SECTION 2 — International Shooting Events                   */}
            {/* ============================================================ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-12">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#1e3a5f]">International Shooting Events</h2>
                        </div>
                        <div className="w-24 h-1 bg-amber-400 ml-15 mt-3" />
                        <p className="text-[#1e3a5f]/50 mt-3 ml-15">
                            World Championship / Asian Games / CWG Games / Asian / Commonwealth Championship
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-200">
                            <EventList title="Men" events={internationalMenEvents} />
                        </div>
                        <div className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-200">
                            <EventList title="Women" events={internationalWomenEvents} />
                        </div>
                        <div className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-200">
                            <EventList title="Mixed Event" events={internationalMixedEvents} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================ */}
            {/*  SECTION 3 — Medals Won                                      */}
            {/* ============================================================ */}
            <section className="py-24 bg-[#0d1f33]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Medal className="w-8 h-8 text-amber-400" />
                            <h2 className="text-2xl md:text-4xl font-bold text-white">Medals Won by Indian Shooters</h2>
                        </div>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-white/40 mt-4 max-w-xl mx-auto">
                            Olympics / World Championship / World Cups / Asian Games / Commonwealth Games
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-center">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th rowSpan={2} className="px-3 py-3 text-xs font-bold text-white uppercase tracking-wider sticky left-0 bg-[#1e3a5f] z-10">Year</th>
                                        <th colSpan={3} className="px-2 py-2 text-xs font-bold text-white uppercase tracking-wider border-l border-white/10">Olympics</th>
                                        <th colSpan={3} className="px-2 py-2 text-xs font-bold text-white uppercase tracking-wider border-l border-white/10">W. Championship</th>
                                        <th colSpan={3} className="px-2 py-2 text-xs font-bold text-white uppercase tracking-wider border-l border-white/10">World Cup</th>
                                        <th colSpan={3} className="px-2 py-2 text-xs font-bold text-white uppercase tracking-wider border-l border-white/10">Asian Games</th>
                                        <th colSpan={3} className="px-2 py-2 text-xs font-bold text-white uppercase tracking-wider border-l border-white/10">C.W. Games</th>
                                    </tr>
                                    <tr className="border-b border-white/20">
                                        {Array.from({ length: 5 }).map((_, gi) => (
                                            <React.Fragment key={gi}>
                                                <th className={`px-2 py-2 text-xs font-bold text-amber-400 ${gi > 0 ? "border-l border-white/10" : ""}`}>G</th>
                                                <th className="px-2 py-2 text-xs font-bold text-gray-300">S</th>
                                                <th className="px-2 py-2 text-xs font-bold text-orange-400">B</th>
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {medalsData.map((row, i) => (
                                        <tr key={row.year} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                                            <td className="px-3 py-2.5 text-sm font-bold text-white sticky left-0 bg-[#0d1f33] z-10">{row.year}</td>
                                            {[row.olympics, row.wchamp, row.wcup, row.asian, row.cwg].map((group, gi) => (
                                                <React.Fragment key={gi}>
                                                    <td className={`px-2 py-2.5 ${gi > 0 ? "border-l border-white/5" : ""}`}>
                                                        <MedalBadge value={group[0]} type="G" />
                                                    </td>
                                                    <td className="px-2 py-2.5">
                                                        <MedalBadge value={group[1]} type="S" />
                                                    </td>
                                                    <td className="px-2 py-2.5">
                                                        <MedalBadge value={group[2]} type="B" />
                                                    </td>
                                                </React.Fragment>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================================================ */}
            {/*  SECTION 4 — National Events                                 */}
            {/* ============================================================ */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-12">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                                <Flag className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#1e3a5f]">National Events</h2>
                        </div>
                        <div className="w-24 h-1 bg-amber-400 ml-15 mt-3" />
                        <p className="text-[#1e3a5f]/50 mt-3 ml-15">
                            National Shooting Championship Competitions organized by NRAI annually.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nationalEvents.map((category, i) => (
                            <motion.div
                                key={category.title}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#1e3a5f]/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mb-5">
                                    <span className="text-white font-bold text-sm">{i + 1}</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 leading-tight">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-[#1e3a5f]/60 text-sm">
                                            <span className="text-amber-500 mt-1">&#8226;</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
