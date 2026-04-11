import { courses } from "@/data/courses"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, User, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }))
}

export default async function CourseDetailPage({ params }: PageProps) {
    const { slug } = await params
    const course = courses.find((c) => c.slug === slug)

    if (!course) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white text-[#1e3a5f]">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#1e3a5f]">
                    {/* Placeholder for Course Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-[#1e3a5f]/80 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <Badge className="mb-6 bg-white text-[#1e3a5f] hover:bg-white/90 text-lg px-4 py-1">{course.discipline}</Badge>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">{course.title}</h1>
                    <div className="flex flex-wrap justify-center gap-6 text-lg text-white/80">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-white" />
                            <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-white" />
                            <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-white border-white">{course.level}</Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold mb-6">About this Course</h2>
                        <p className="text-lg text-[#1e3a5f]/60 leading-relaxed">
                            {course.description}
                        </p>
                    </section>

                    <Separator className="bg-[#ccddf0]" />

                    <section>
                        <h2 className="text-3xl font-bold mb-6">What You Will Learn</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.tags.map((tag) => (
                                <li key={tag} className="flex items-start gap-3 text-[#1e3a5f]/70">
                                    <CheckCircle className="w-5 h-5 text-[#1e3a5f] shrink-0 mt-1" />
                                    <span>Mastering {tag} techniques</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-[#1e3a5f]/70">
                                <CheckCircle className="w-5 h-5 text-[#1e3a5f] shrink-0 mt-1" />
                                <span>Competition preparation strategies</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#1e3a5f]/70">
                                <CheckCircle className="w-5 h-5 text-[#1e3a5f] shrink-0 mt-1" />
                                <span>Mental conditioning for peak performance</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 bg-[#e8f0f8] border border-[#ccddf0] rounded-xl p-8 space-y-6">
                        <div className="text-center">
                            <span className="text-[#1e3a5f]/60 text-sm uppercase tracking-wide">Course Fee</span>
                            <p className="text-4xl font-bold text-[#1e3a5f] mt-2">{course.price}</p>
                        </div>

                        <Button size="lg" className="w-full bg-[#1e3a5f] text-white hover:bg-[#264a73] text-lg h-14">
                            Enroll Now
                        </Button>

                        <p className="text-xs text-center text-[#1e3a5f]/60">
                            Limited slots available for {course.level} batch.
                        </p>

                        <Separator className="bg-[#ccddf0]" />

                        <div className="space-y-4">
                            <h4 className="font-bold text-[#1e3a5f]">Includes:</h4>
                            <ul className="space-y-2 text-sm text-[#1e3a5f]/60">
                                <li>20+ Hours of range time</li>
                                <li>Personal equipment assessment</li>
                                <li>Video analysis of technique</li>
                                <li>Official Salvo certification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
