import { techniques } from "@/data/techniques"
import { TechniqueViewer } from "@/components/technique/TechniqueViewer"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return techniques.map((tech) => ({
        slug: tech.slug,
    }))
}

export default async function TechniqueDetailPage({ params }: PageProps) {
    const { slug } = await params
    const technique = techniques.find((t) => t.slug === slug)

    if (!technique) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white text-[#1e3a5f]">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#ccddf0] pt-20">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" asChild className="text-[#1e3a5f]/60 hover:text-[#1e3a5f]">
                            <Link href="/technique">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-lg font-bold">{technique.title}</h1>
                            <p className="text-xs text-[#1e3a5f]/60">{technique.discipline} Masterclass</p>
                        </div>
                    </div>

                    <Button className="hidden md:flex bg-[#1e3a5f] text-white hover:bg-[#264a73]">
                        Start Practice Mode
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-40 pb-20">
                <TechniqueViewer technique={technique} />
            </div>
        </div>
    )
}
