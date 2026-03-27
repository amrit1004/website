"use client"

import { Target, Trophy, Users, Shield } from "lucide-react"

const features = [
    {
        icon: Target,
        title: "Precision Training",
        description: "Scientific approach to shooting technique using electronic targets and biomechanical analysis."
    },
    {
        icon: Trophy,
        title: "Proven Results",
        description: "Home to state and national champions. Our track record speaks for itself."
    },
    {
        icon: Users,
        title: "Expert Coaching",
        description: "Learn from certified coaches with years of competitive and instructional experience."
    },
    {
        icon: Shield,
        title: "Safe Environment",
        description: "Safety is our priority. Controlled environment suitable for all ages."
    },
]

export function ValueProps() {
    return (
        <section className="py-24 bg-neutral-950 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
