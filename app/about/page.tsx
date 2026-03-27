import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">FORGING ELITE SHOOTERS.</h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Salvo Shooters Arena was founded with a singular mission: to provide world-class shooting sports training in India. We combine traditional technique with modern technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-24">
                    <div className="bg-neutral-900 p-8 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                        <p className="text-neutral-400">
                            To create a pathway for Indian shooters to dominate on the Olympic stage. We believe in disciplined practice, data-driven coaching, and holistic development.
                        </p>
                    </div>
                    <div className="bg-neutral-900 p-8 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-bold text-primary mb-4">The Facility</h2>
                        <p className="text-neutral-400">
                            Located in the heart of Mohali, our arena features 20+ electronic target lanes (SIUS Ascor), a dedicated fitness studio, and a mental training lounge.
                        </p>
                    </div>
                </div>

                <Button asChild size="lg" className="bg-primary text-black hover:bg-primary/90">
                    <Link href="/contact">Visit Us Today</Link>
                </Button>
            </div>
        </div>
    )
}
