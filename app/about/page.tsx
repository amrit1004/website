"use client"

import { motion } from "framer-motion"
import { Trophy, Users, Shield, Globe, Medal, GraduationCap, Briefcase, Scale, Crosshair } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const internationalCompetitions = [
    { sno: 1, event: "Asian Rifle Pistol Championship", year: 2026 },
    { sno: 2, event: "ISSF Junior World Cup New Delhi, India", year: 2025 },
    { sno: 3, event: "ISSF World Cup Final New Delhi, India", year: 2024 },
    { sno: 4, event: "ISSF World Cup Bhopal, India", year: 2023 },
    { sno: 5, event: "ISSF World Cup New Delhi, India", year: 2021 },
    { sno: 6, event: "ISSF World Cup New Delhi, India", year: 2019 },
    { sno: 7, event: "ISSF World Cup Final New Delhi, India", year: 2017 },
    { sno: 8, event: "ISSF World Cup New Delhi, India", year: 2017 },
    { sno: 9, event: "12th South Asian Games Guwahati, Assam", year: 2016 },
    { sno: 10, event: "Asia Olympic Qualifying Shooting Championship Delhi", year: 2016 },
    { sno: 11, event: "8th Asian Airgun Championship Delhi", year: 2015 },
    { sno: 12, event: "2nd Asian Shotgun Championship Patiala", year: 2012 },
    { sno: 13, event: "Commonwealth Shooting Federation Championship Delhi", year: 2010 },
    { sno: 14, event: "XIX Commonwealth Games Delhi", year: 2010 },
    { sno: 15, event: "1st Afro-Asian Games (Shooting), Hyderabad", year: 2003 },
    { sno: 16, event: "Asian Clay Shooting Championship Delhi", year: 2003 },
    { sno: 17, event: "UIT World Cup (Shotgun) Delhi", year: 2003 },
    { sno: 18, event: "UIT World Cup (Shotgun) Delhi", year: 2000 },
    { sno: 19, event: "UIT World Cup (Shotgun) Delhi", year: 1997 },
    { sno: 20, event: "2nd South Asian Shooting Championship, Delhi", year: 1997 },
    { sno: 21, event: "VII SAF Games, Chennai", year: 1995 },
    { sno: 22, event: "1st Commonwealth Shooting Championship, Delhi", year: 1995 },
    { sno: 23, event: "IX Asian Games (Shooting), Delhi", year: 1982 },
]

const annualCompetitions = [
    "National Shooting Championship Competitions (NSCC)",
    "All India G.V. Mavlankar Shooting Championship (AIGVMSC)",
    "Sardar Sajjan Singh Sethi Memorial Masters Shooting Championship",
    "Kumar Surendra Singh Memorial Shooting Championship",
    "All India Kumar Surendra Singh Memorial Inter School Shooting Championship",
]

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            {/* Leadership & Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">INTRODUCTION</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                    </motion.div>

                    {/* Leadership Cards */}
                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-[#f0f5fb] rounded-2xl p-8 border border-[#ccddf0] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-1">President</p>
                                <p className="text-xl font-bold text-[#1e3a5f]">Shri Kalikesh Narayan Singh Deo</p>
                            </div>
                        </div>
                        <div className="bg-[#f0f5fb] rounded-2xl p-8 border border-[#ccddf0] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-1">Secretary General</p>
                                <p className="text-xl font-bold text-[#1e3a5f]">Shri Pawankumar Singh</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Introduction Text */}
                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 text-[#1e3a5f]/70 text-lg leading-relaxed">
                        <p>
                            The National Rifle Association of India is affiliated to International Shooting Sport Federation, Asian Shooting Confederation, Commonwealth Shooting Federation, South Asian Shooting Confederation and Indian Olympic Association.
                        </p>
                        <p>
                            In India shooting sports have shown a steady progress and there has been a remarkable rise since 1994. Our shooters have won many medals in International Competitions such as Olympic Games, World Championship, Commonwealth and Asian Games/Championship.
                        </p>
                        <p>
                            We have a network of <strong className="text-[#1e3a5f]">53 affiliated State Associations and Units</strong>. Regular competitions are being held at National, State, District and Club levels. Some of the Universities have recently given recognition to this sport. This will contribute in developing talent and encouraging the youth to take up Shooting as a career sport. We will then be able to pick up best talent from grass root level.
                        </p>
                        <p>
                            There are two basic requirements for the promotion of this sport i.e. availability of shooting ranges and precision arms and ammunition. During the last few years many ranges have come up throughout the country. There are many international level shooting ranges in India. Ranges at Delhi, Pune, Trivandrum and Patiala (for shotgun events only) have the capacity to conduct any international competition. These ranges are equipped with the latest version of Electronic Target System.
                        </p>
                        <p>
                            The Government has relaxed import policy and now deserving marksmen (Renowned Shooters) can import arms and ammunition of their event without paying custom duty. No import license is now required for air weapons and any individual can import these without payment of custom duty. These incentives will certainly attract many youngsters to take up shooting as a career sport. The process of acquiring the arm license has also been simplified and any aspiring shooter can apply for an arm license to acquire an arm to pursue his/her shooting. The renowned shooters can keep up to 10 weapons under the prescribed norms.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* International Competitions Table */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">INTERNATIONAL COMPETITIONS HELD IN INDIA</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-[#1e3a5f]/50 mt-4 max-w-lg mx-auto">
                            A proud history of hosting world-class shooting events on Indian soil.
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#1e3a5f] text-white">
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Competition</th>
                                        <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider w-24">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {internationalCompetitions.map((comp, i) => (
                                        <tr
                                            key={comp.sno}
                                            className={`border-b border-gray-100 hover:bg-[#1e3a5f]/5 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}
                                        >
                                            <td className="px-6 py-4 text-sm font-bold text-amber-600">{comp.sno}</td>
                                            <td className="px-6 py-4 text-sm text-[#1e3a5f] font-medium">{comp.event}</td>
                                            <td className="px-6 py-4 text-sm text-center text-[#1e3a5f]/70 font-semibold">{comp.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Organisation of Competitions */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4">COMPETITIONS BY NRAI</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                        <p className="text-[#1e3a5f]/50 mt-4 max-w-lg mx-auto">
                            NRAI organizes the following shooting competitions annually.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {annualCompetitions.map((comp, i) => (
                            <motion.div
                                key={comp}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-[#f0f5fb] rounded-2xl p-6 border border-[#ccddf0] hover:border-[#1e3a5f]/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">{i + 1}</span>
                                </div>
                                <p className="text-[#1e3a5f] font-semibold">{comp}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4 text-[#1e3a5f]/70 text-base leading-relaxed bg-[#f8fafc] rounded-2xl p-8 border border-gray-100">
                        <p>
                            Participation in competitions at S.No. 1 and 2 is as per rules laid down in NRAI Match Book. The participation in competitions at S.No. 3 and 4 is based on the performance during National Championship (NSCC). Participation in Inter School Championship is open to school children below the age of 19 years through respective State Rifle Associations. Circulars for these competitions are issued from time to time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Information Grid — National Squad, Coaches, etc. */}
            <section className="py-24 bg-[#0d1f33]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">PROGRAMS & INITIATIVES</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* National Squad */}
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <Medal className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">National Squad</h3>
                            </div>
                            <p className="text-white/50 leading-relaxed">
                                Qualifying Standards for the National Squad have been laid down and are updated from time to time based on prevailing performance of the shooters. Those who meet the required standards are enlisted in the National Squad and given regular training under International/National Coaches. Their boarding and lodging expenses during special coaching camps are met by the Government. They are also issued free ammunition, clay targets and targets. Their performance is closely watched and those who do not maintain desired standards are dropped from the National Squad.
                            </p>
                        </motion.div>

                        {/* International Coaches */}
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">International Coaches</h3>
                            </div>
                            <p className="text-white/50 leading-relaxed">
                                From time to time, we have invited various reputed international coaches in Trap, Skeet, Rifle and Pistol events. At present services of six international coaches are being provided to our shooters. This ensures world-class guidance and training methodologies are available to India&apos;s top shooting talent.
                            </p>
                        </motion.div>

                        {/* International Exposure */}
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">International Exposure</h3>
                            </div>
                            <p className="text-white/50 leading-relaxed">
                                We have been able to convince the Government that shooting is a sport which can win medals in International Competitions. The Government has been very liberal and has allowed the shooters to participate in various prestigious competitions. This international exposure will prove very useful in the long run. Our shooters have given excellent performance in all international competitions including Olympic Games. Abhinav Bindra won the Gold medal in 2008 Olympic Games in Air Rifle Men event.
                            </p>
                        </motion.div>

                        {/* Selection Process */}
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <Crosshair className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Selection Process</h3>
                            </div>
                            <p className="text-white/50 leading-relaxed">
                                Selection of shooters for international competitions is strictly based on merit and according to Selection Policy. Regular selection trials are held both for National squad shooters and others. The selection is based on the scores achieved in selection trials, Nationals and International meets. The Selection Committee comprising of President and Secretary General of NRAI, National Coach and an ex-eminent shooter approves the final selection.
                            </p>
                        </motion.div>

                        {/* Education */}
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Admission in Schools & Colleges</h3>
                            </div>
                            <p className="text-white/50 leading-relaxed">
                                Many prestigious Schools and Colleges have reserved some vacancies for sports persons and many of the shooters have been admitted based on their performance. This is encouraging the younger generation to take up shooting sport as a career.
                            </p>
                        </motion.div>

                        {/* Employment */}
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Employment Opportunities</h3>
                            </div>
                            <p className="text-white/50 leading-relaxed">
                                Shooting has become very popular among the masses. As a result, many of our talented shooters have been given employment by Corporate Houses, Army, BSF, CISF, ONGC, Indian Airlines, Railways etc. This is a great incentive to the shooters and will prove very beneficial towards promotion of Shooting Sport in the country.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ISSF Judges & Olympic Games */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* ISSF Judges */}
                        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                                    <Scale className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1e3a5f]">ISSF Judges Licences</h3>
                            </div>
                            <p className="text-[#1e3a5f]/60 leading-relaxed">
                                It is necessary to have qualified jury/judges to conduct shooting competitions according to rules and regulations laid down by the international body. We in India have a large number of officials holding &quot;A&quot; and &quot;B&quot; ISSF Judges licenses to conduct the shooting competitions. These licenses have been granted to the officials after their successful clearance of tests conducted by ISSF. Our officials are being deputed to various international competitions as juries. The NRAI also issues &quot;C&quot; licenses to the officials and conducts courses to train them.
                            </p>
                        </motion.div>

                        {/* Olympic Games */}
                        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                                    <Trophy className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1e3a5f]">Olympic Games</h3>
                            </div>
                            <p className="text-[#1e3a5f]/60 leading-relaxed">
                                Shooting is one of the major disciplines in Olympic Games. The total number of shooters from all over the World has been restricted to 390. At present there are 15 Rifle, Pistol and Shotgun events in the Olympic Games for men and women. Shooters earn &quot;Quota Places&quot; during designated competitions and are only allowed to participate in Olympic Games through this qualification pathway.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#f0f5fb]">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Be Part of India&apos;s Shooting Legacy</h2>
                        <p className="text-[#1e3a5f]/50 max-w-xl mx-auto mb-8">
                            Whether you are an aspiring shooter or a seasoned marksman, explore opportunities to train, compete, and represent India.
                        </p>
                        <Button asChild size="lg" className="bg-[#1e3a5f] text-white hover:bg-[#264a73] h-14 px-8 text-base font-bold rounded-md">
                            <Link href="/contact">Get In Touch</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
