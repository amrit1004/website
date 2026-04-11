import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="py-24 bg-[#1e3a5f] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">READY TO AIM HIGHER?</h2>
                <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-white/80">
                    Book your first session today and experience world-class shooting training.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-[#1e3a5f] hover:bg-white/90 font-semibold">
                        Book Intro Session
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white text-white hover:bg-white/10">
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    )
}
