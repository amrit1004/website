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
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900">
                    {/* Placeholder for Course Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <Badge className="mb-6 bg-primary text-black hover:bg-primary/90 text-lg px-4 py-1">{course.discipline}</Badge>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{course.title}</h1>
                    <div className="flex flex-wrap justify-center gap-6 text-lg text-neutral-300">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-primary" />
                            <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-primary border-primary">{course.level}</Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold mb-6">About this Course</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {course.description}
                        </p>
                    </section>

                    <Separator className="bg-white/10" />

                    <section>
                        <h2 className="text-3xl font-bold mb-6">What You Will Learn</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.tags.map((tag) => (
                                <li key={tag} className="flex items-start gap-3 text-neutral-300">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <span>Mastering {tag} techniques</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-neutral-300">
                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>Competition preparation strategies</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-300">
                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>Mental conditioning for peak performance</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 bg-neutral-900 border border-white/10 rounded-xl p-8 space-y-6">
                        <div className="text-center">
                            <span className="text-muted-foreground text-sm uppercase tracking-wide">Course Fee</span>
                            <p className="text-4xl font-bold text-primary mt-2">{course.price}</p>
                        </div>

                        <Button size="lg" className="w-full bg-primary text-black hover:bg-primary/90 text-lg h-14">
                            Enroll Now
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                            Limited slots available for {course.level} batch.
                        </p>

                        <Separator className="bg-white/10" />

                        <div className="space-y-4">
                            <h4 className="font-bold text-white">Includes:</h4>
                            <ul className="space-y-2 text-sm text-neutral-400">
                                <li>• 20+ Hours of range time</li>
                                <li>• Personal equipment assessment</li>
                                <li>• Video analysis of technique</li>
                                <li>• Official Salvo certification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
