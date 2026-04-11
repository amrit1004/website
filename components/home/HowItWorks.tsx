import { Crosshair, UserCheck, Award } from "lucide-react"

const steps = [
    {
        icon: UserCheck,
        title: "1. Assessment",
        description: "Meet with our head coach for a skill evaluation and goal setting session."
    },
    {
        icon: Crosshair,
        title: "2. Training",
        description: "Follow a distinctive training plan with regular feedback and drills."
    },
    {
        icon: Award,
        title: "3. Excellence",
        description: "Competitions, detailed analytics, and continuous improvement."
    }
]

export function HowItWorks() {
    return (
        <section className="py-24 bg-[#e8f0f8] text-[#1e3a5f] border-t border-[#ccddf0]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">HOW IT WORKS</h2>
                    <p className="text-[#1e3a5f]/60">Your path to the podium starts here.</p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-[#1e3a5f]/20 via-[#1e3a5f] to-[#1e3a5f]/20" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-[#e8f0f8] ring-1 ring-[#1e3a5f]/50 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(30,58,95,0.15)]">
                                <step.icon className="w-10 h-10 text-[#1e3a5f]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-[#1e3a5f]/60 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
