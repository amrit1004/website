"use client"

import { motion } from "framer-motion"
import { BookOpen, Crown, UserCheck, Flag, Trophy } from "lucide-react"

const presidents = [
    { sno: 1, name: "Sh. G.V. Mavlankar", from: "17.04.51", to: "11.03.56" },
    { sno: 2, name: "Pt. Govind Ballabh Pant", from: "21.05.56", to: "06.03.60" },
    { sno: 3, name: "Sh. Lal Bahadur Shastri", from: "08.05.61", to: "10.01.66" },
    { sno: 4, name: "Sh. Y.B. Chavan", from: "15.05.67", to: "18.08.70" },
    { sno: 5, name: "Sh. M.K. Kaul", from: "18.08.70", to: "29.12.71" },
    { sno: 6, name: "Dr. G.S. Dhillon", from: "30.12.71", to: "02.09.74" },
    { sno: 7, name: "Dr. Jogendra Singh", from: "06.12.74", to: "16.02.79" },
    { sno: 8, name: "Shri Sajjan Singh Sethi", from: "16.02.79", to: "01.06.85" },
    { sno: 9, name: "Kumar Surendra Singh", from: "02.06.85", to: "12.01.99" },
    { sno: 10, name: "Sh. Digvijay Singh", from: "18.03.99", to: "24.06.2010" },
    { sno: 11, name: "Sh. Raninder Singh", from: "29.12.2010", to: "26.04.2023" },
    { sno: 12, name: "Sh. Kalikesh Narayan Singh Deo", from: "21.09.2024", to: "" },
]

const secretaryGenerals = [
    { sno: 1, name: "Sh. K.G. Prabhu", from: "17.04.1951", to: "08.09.1959" },
    { sno: 2, name: "Sh. Jogendra Singh", from: "09.09.1959", to: "08.09.1971" },
    { sno: 3, name: "Sh. Sajjan Singh Sethi", from: "30.12.1971", to: "17.08.1972" },
    { sno: 4, name: "Tikka Jagjit Singh Bedi", from: "18.08.1972", to: "29.08.1973" },
    { sno: 5, name: "Sh. Hardev Singh Kandhari", from: "29.08.1973", to: "21.12.1979" },
    { sno: 6, name: "Sh. Avtar Singh Sethi", from: "22.12.1979", to: "01.06.1985" },
    { sno: 7, name: "Sh. Baljit Singh Sethi", from: "02.06.1985", to: "09.01.2010" },
    { sno: 8, name: "Sh. DV Seetharama Rao", from: "06.04.2013", to: "18.09.2021" },
    { sno: 9, name: "K Sultan Singh", from: "18.09.2021", to: "04.12.2025" },
    { sno: 10, name: "Pawankumar Singh", from: "05.12.2025", to: "" },
]

const secretaries = [
    { sno: 1, name: "Capt. S.J. Dighe", from: "01.02.1959", to: "31.05.1967" },
    { sno: 2, name: "Maj. J.S. Randhawa", from: "01.06.1967", to: "15.10.1974" },
    { sno: 3, name: "Sh. M. Banerjee", from: "16.10.1974", to: "31.08.1975" },
    { sno: 4, name: "Col. Jaswant Singh", from: "01.09.1975", to: "21.06.1983" },
    { sno: 5, name: "Sh. Sangat Singh", from: "22.06.1983", to: "31.12.1986" },
    { sno: 6, name: "Sh. Rajiv Bhatia", from: "01.01.1987", to: "" },
]

const firstInShooting = [
    "1st President of National Rifle Association of India — Shri G V Mavlankar",
    "1st Secretary General of National Rifle Association of India — Shri K G Prabhu",
    "1st National Shooting Championship Competitions — At Delhi in 1952",
    "1st All India G V Mavlankar Shooting Championship — At Ahmedabad during 1991",
    "1st Inter School Shooting Championship — At Haridwar in 1997",
    "1st Team was sent abroad during the year 1951 to Bisley, England",
    "1st Participation in Olympic Games — in XV Olympics 1952 at Helsinki (Finland) by Dr. Harihar Banerjee in Free Rifle 3 position and Prone position events",
    "1st Participation in World Championship — 1952 at Oslo",
    "1st Participation in Asian Games — in 1962 Jakarta, Indonesia",
    "1st Participation in Commonwealth Games — in 1978 at Edmonton",
    "1st Participation in SAF Games — 1991 Colombo, Sri Lanka",
    "1st Participation in World Cup — 1995 Nicosia, Cyprus",
    "1st Medal in World Championship — In 1962 by H H Dr. Karni Singhji at Cairo, Egypt",
    "1st Medal in Asian Games — In 1974 Silver medal by H.H. Maharaja Dr. Karni Singhji at VII Asian Games, Tehran (Iran) in Trap event",
    "1st Medal in Commonwealth Games — in 1982 team Silver and Bronze medal in Centre Fire Pistol (Ashok Pandit & Mohinder Lal) and Rapid Fire Pistol (Sharad Chauhan & R K Vij) event",
    "1st Medal in World Cup — in 1997 Bronze Medal by Mansher Singh in Trap event at New Delhi",
    "1st Gold Medal in Junior Men Category in World Championship — 1994 by Jaspal Rana at Milan in Standard Pistol event",
    "1st Medal in Junior Women in World Championship — A Bronze in 2002 by Raj Kumari in Sport Rifle Prone",
    "1st Gold Medal in Senior Category during World Championship — Abhinav Bindra in Air Rifle Men during 2006 at Zagreb",
    "1st Medal in Olympic Games — in 2004 Silver medal by Major R V S Rathore at Athens Olympic Games in Double Trap event",
    "1st Gold Medal in Asian Games — in 1978 by Mr. Randhir Singh at Bangkok in Trap event",
    "1st Gold Medal in Commonwealth Games — in 1990 by Ashok Pandit at Auckland, New Zealand in Centre Fire Pistol event",
    "1st Gold Medal in World Cup — in 2003 Anjali Bhagwat at World Cup, Atlanta in Air Rifle Women",
    "1st Olympic Finalist — Anjali Bhagwat 2000 Sydney Olympic Games in Air Rifle",
    "1st Champion of Champions — 2003 Milan Anjali Bhagwat Air Rifle Women",
    "1st Arjuna Awardee — H H Maharaja Dr. Karni Singh ji in 1961",
    "1st Rajiv Gandhi Khel Ratna Awardee — Mr. Abhinav Bindra in 2001",
    "1st Padmashree — Shri Jaspal Rana in 2001",
    "1st Dronacharya Awardee — Prof. Sunny Thomas in 2001",
    "1st shooter ranked as number 1 in World — Anjali Bhagwat in Air Rifle in the year 2002",
    "1st shooter to earn \"Quota Place\" for Olympic Games — Mansher Singh during Asian Shooting Championship at Jakarta in 1995 for Atlanta Olympic Games 1996",
    "1st Gold Medal in Olympic Games — Abhinav Bindra in 2008 at Beijing Olympic Games",
    "1st Olympic Games Jury — 2020 Tokyo Olympic Games — Shri Pawan Singh",
]

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
}

function RollTable({
    title,
    icon: Icon,
    data,
}: {
    title: string
    icon: React.ElementType
    data: { sno: number; name: string; from: string; to: string }[]
}) {
    return (
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">{title}</h3>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#1e3a5f] text-white">
                                <th className="px-4 md:px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-16">S.No</th>
                                <th className="px-4 md:px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Name</th>
                                <th className="px-4 md:px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">From</th>
                                <th className="px-4 md:px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, i) => (
                                <tr
                                    key={row.sno}
                                    className={`border-b border-gray-100 hover:bg-[#1e3a5f]/5 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}
                                >
                                    <td className="px-4 md:px-6 py-4 text-sm font-bold text-amber-600">{row.sno}</td>
                                    <td className="px-4 md:px-6 py-4 text-sm text-[#1e3a5f] font-medium">{row.name}</td>
                                    <td className="px-4 md:px-6 py-4 text-sm text-center text-[#1e3a5f]/70">{row.from}</td>
                                    <td className="px-4 md:px-6 py-4 text-sm text-center text-[#1e3a5f]/70">
                                        {row.to || <span className="text-amber-600 font-semibold">Present</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
}

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            {/* History Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">HISTORY OF NRAI</h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-[#1e3a5f]/50 mt-4 max-w-2xl mx-auto">
                            A legacy of excellence in Indian shooting sports since 1951.
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6 text-[#1e3a5f]/70 text-lg leading-relaxed">
                        <p>
                            National Rifle Association of India (NRAI) was founded in 1951 with a view to promote and popularize the shooting sports in India. The first speaker of Lok Sabha, Sh. G.V. Mavlankar was the founder and the first president of NRAI followed by Sh. Govind Vallabh Pant, Sh. Lal Bahadur Shastri, Sh. Y.B. Chauhan, Sh. G.S. Dhillon, Sh. Joginder Singh, and so on and so forth. Presently the president of NRAI is Shri Kalikesh Narayan Singh Deo.
                        </p>
                        <p>
                            Shooting (Hunting) in medieval times originated as a means of survival, as it was practiced to hunt animals and birds to supplement food requirement. As a result of Industrial Revolution and increased agricultural output, hunting for food became less necessary. However, affluent people continued to hunt as part of recreation. To preserve Wild Life and put an end to indiscriminate poaching, the Government has almost banned hunting. Some of these people took to target shooting as a sport.
                        </p>
                        <p>
                            Shooting has a varied history in Indian Sport and Society, ranging from being a sport for Royalty in the past; it is now a major competitive sport among the masses. This sport is extremely popular all over the World.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Formation Section */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">THE FORMATION</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6 text-[#1e3a5f]/70 text-lg leading-relaxed">
                        <p>
                            The National Rifle Association of India (NRAI) was formed on <strong className="text-[#1e3a5f]">17th April 1951</strong> with the aim of development of Shooting Sport in India and to impart training to civilians for self-defence.
                        </p>
                        <p>
                            <strong className="text-[#1e3a5f]">Shri G.V. Mavlankar</strong> was its founder President who was also the first Speaker of Lok Sabha. He was a great visionary and with his untiring efforts and matchless zeal the Association grew from strength to strength. Pandit Jawahar Lal Nehru called him &quot;Father of the Lok Sabha&quot; so he was also the Father of Shooting Sport in India.
                        </p>
                        <p>
                            The NRAI has the honour of having Shri Govind Ballabh Pant, Shri Lal Bahadur Shastri (former Prime Minister), Shri Y.B. Chauhan (Home Minister), Shri G.S. Dhillon (Speaker Lok Sabha), Shri Joginder Singh (former Governor of Rajasthan), Sardar Sajjan Singh Sethi and Kumar Surendra Singh as its Presidents.
                        </p>
                        <p>
                            The Lok Sabha in 1953 passed a resolution and entrusted NRAI to impart training through its rifle associations all over India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Roll of Presidents */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <RollTable title="Roll of Presidents" icon={Crown} data={presidents} />
                </div>
            </section>

            {/* Roll of Secretary Generals */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <RollTable title="Roll of Secretary Generals" icon={UserCheck} data={secretaryGenerals} />
                </div>
            </section>

            {/* Roll of Secretaries */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <RollTable title="Roll of Secretaries" icon={UserCheck} data={secretaries} />
                </div>
            </section>

            {/* First in Indian Shooting */}
            <section className="py-24 bg-[#0d1f33]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Trophy className="w-8 h-8 text-amber-400" />
                            <h2 className="text-3xl md:text-5xl font-bold text-white">FIRSTS IN INDIAN SHOOTING</h2>
                        </div>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-white/40 mt-4 max-w-lg mx-auto">
                            Landmark achievements that shaped India&apos;s shooting legacy.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {firstInShooting.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ duration: 0.4, delay: i * 0.03 }}
                                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
                            >
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">
                                    {i + 1}
                                </span>
                                <p className="text-white/70 leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
