"use client"

import { courses } from "@/data/courses"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, User } from "lucide-react"

export function FeaturedCourses() {
    const featured = courses.slice(0, 3)

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">POPULAR COURSES</h2>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Start your journey with our most sought-after training programs designed for all skill levels.
                        </p>
                    </div>
                    <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-black">
                        <Link href="/courses">View All Courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((course) => (
                        <Card key={course.id} className="bg-neutral-900 border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden flex flex-col">
                            <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/70">{course.discipline}</Badge>
                                </div>
                            </div>

                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline" className="border-primary/50 text-primary">{course.level}</Badge>
                                    <span className="text-white font-bold">{course.price}</span>
                                </div>
                                <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors line-clamp-1">{course.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground line-clamp-3">
                                    {course.description}
                                </p>
                            </CardContent>

                            <CardFooter className="flex flex-col gap-4 border-t border-white/5 pt-6 mt-auto">
                                <div className="flex items-center justify-between w-full text-sm text-neutral-400">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{course.instructor}</span>
                                    </div>
                                </div>
                                <Button className="w-full bg-white/10 text-white hover:bg-primary hover:text-black transition-all group-arrow">
                                    Details
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
