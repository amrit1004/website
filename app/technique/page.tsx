import Link from "next/link"
import { techniques } from "@/data/techniques"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Crosshair } from "lucide-react"

export default function TechniquePage() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-[#e8f0f8] text-[#1e3a5f] border-[#ccddf0]">RESOURCE LIBRARY</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a5f] mb-6">MASTER YOUR TECHNIQUE</h1>
                    <p className="text-[#1e3a5f]/60 text-lg max-w-2xl mx-auto">
                        Deep dive into the mechanics of 10m Air Pistol and Rifle shooting.
                        Our step-by-step guides break down every movement for perfection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {techniques.map((tech) => (
                        <Link key={tech.id} href={`/technique/${tech.slug}`} className="group">
                            <Card className="bg-[#e8f0f8] border-[#ccddf0] h-full hover:border-[#1e3a5f]/50 transition-all duration-300">
                                <div className="aspect-[4/3] bg-[#ccddf0] relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent z-10" />
                                    {/* Placeholder Graphic */}
                                    <Crosshair className="w-24 h-24 text-[#1e3a5f]/20 group-hover:text-[#1e3a5f]/30 transition-colors z-0" />

                                    <div className="absolute bottom-6 left-6 z-20">
                                        <Badge className="bg-[#1e3a5f] text-white hover:bg-[#264a73] mb-2">{tech.discipline}</Badge>
                                        <h2 className="text-3xl font-bold text-white group-hover:text-white/90 transition-colors">{tech.title}</h2>
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <p className="text-[#1e3a5f]/60 mb-6">
                                        {tech.description}
                                    </p>
                                    <div className="flex items-center text-[#1e3a5f] font-medium group-hover:translate-x-2 transition-transform">
                                        Start Learning <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
