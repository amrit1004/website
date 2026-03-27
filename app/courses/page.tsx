"use client"

import { useState } from "react"
import { courses } from "@/data/courses"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, SlidersHorizontal, User, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All")
    const [selectedLevel, setSelectedLevel] = useState<string>("All")

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesDiscipline = selectedDiscipline === "All" || course.discipline === selectedDiscipline
        const matchesLevel = selectedLevel === "All" || course.level === selectedLevel

        return matchesSearch && matchesDiscipline && matchesLevel
    })

    return (
        <div className="min-h-screen bg-black py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">OUR COURSES</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Comprehensive training programs designed to take you from beginner to podium finisher.
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    <div className="relative flex-grow max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search courses..."
                            className="pl-10 bg-neutral-900 border-white/10 text-white focus:ring-primary h-12"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2 bg-neutral-900 p-1 rounded-lg border border-white/10">
                            {["All", "Pistol", "Rifle"].map((disc) => (
                                <button
                                    key={disc}
                                    onClick={() => setSelectedDiscipline(disc)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedDiscipline === disc
                                            ? "bg-primary text-black shadow-sm"
                                            : "text-muted-foreground hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {disc}
                                </button>
                            ))}
                        </div>

                        <div className="h-8 w-[1px] bg-white/10 hidden lg:block" />

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground mr-2">Level:</span>
                            {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setSelectedLevel(level)}
                                    className={`text-sm font-medium px-3 py-1 rounded-full border transition-all ${selectedLevel === level
                                            ? "border-primary text-primary bg-primary/10"
                                            : "border-transparent text-muted-foreground hover:text-white"
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <motion.div
                                    key={course.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="bg-neutral-900 border-white/10 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                                        <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <Badge className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/70">{course.discipline}</Badge>
                                            </div>
                                        </div>

                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="outline" className="border-primary/50 text-primary">{course.level}</Badge>
                                                <span className="text-white font-bold">{course.price}</span>
                                            </div>
                                            <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">{course.title}</CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow">
                                            <p className="text-muted-foreground line-clamp-3 mb-4">
                                                {course.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {course.tags.slice(0, 3).map(tag => (
                                                    <span key={tag} className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">{tag}</span>
                                                ))}
                                            </div>
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
                                            <Button className="w-full bg-white/10 text-white hover:bg-primary hover:text-black transition-all group-arrow" asChild>
                                                <Link href={`/courses/${course.slug}`}>
                                                    View Details <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-arrow-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
                                <Button variant="link" onClick={() => { setSearchTerm(""); setSelectedDiscipline("All"); setSelectedLevel("All") }} className="text-primary mt-2">
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
