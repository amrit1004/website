"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1200&auto=format&fit=crop",
        alt: "Shooter aiming at target",
        caption: "National Championship 2025 — Rifle Event",
        album: "Championships",
    },
    {
        src: "https://images.unsplash.com/photo-1584281722666-ce1a4578d052?q=80&w=1200&auto=format&fit=crop",
        alt: "Shooting range facility",
        caption: "State-of-the-art Indoor Range",
        album: "Facilities",
    },
    {
        src: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=1200&auto=format&fit=crop",
        alt: "Sports medals and trophies",
        caption: "Medal Ceremony — Inter-State Championship",
        album: "Ceremonies",
    },
    {
        src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
        alt: "Athletes training",
        caption: "Youth Training Camp 2025",
        album: "Training",
    },
    {
        src: "https://images.unsplash.com/photo-1461896836934-bd45ba48bc23?q=80&w=1200&auto=format&fit=crop",
        alt: "Target shooting practice",
        caption: "Precision Practice Session",
        album: "Training",
    },
    {
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
        alt: "Sports facility exterior",
        caption: "Training Facility — Mohali Complex",
        album: "Facilities",
    },
    {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
        alt: "Competition event",
        caption: "ISSF World Cup 2026 — Munich",
        album: "Championships",
    },
    {
        src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
        alt: "Award ceremony",
        caption: "NRAI Annual Awards Ceremony 2025",
        album: "Ceremonies",
    },
    {
        src: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1200&auto=format&fit=crop",
        alt: "Championship event",
        caption: "69th National Shooting Championship 2026",
        album: "Championships",
    },
]

const albums = ["All", "Championships", "Training", "Facilities", "Ceremonies"]

export default function GalleryPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const [activeAlbum, setActiveAlbum] = useState("All")

    const totalSlides = galleryImages.length - 1

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    const openLightbox = (index: number) => {
        setLightboxIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => setLightboxOpen(false)

    const lightboxNext = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
    const lightboxPrev = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

    useEffect(() => {
        if (!lightboxOpen) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowRight") lightboxNext()
            if (e.key === "ArrowLeft") lightboxPrev()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [lightboxOpen])

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(next, 4000)
        return () => clearInterval(timer)
    }, [next])

    const filteredImages = activeAlbum === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.album === activeAlbum)

    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            {/* Featured Gallery Carousel */}
            <section className="pt-24 pb-16 bg-[#0d1f33]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">GALLERY</h1>
                        <div className="w-24 h-1 bg-amber-400" />
                        <p className="text-white/50 mt-4 max-w-lg">
                            Capturing the best moments from our events, championships, and training sessions.
                        </p>
                    </motion.div>

                    {/* Carousel — 2 images visible */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <motion.div
                                className="flex gap-6"
                                animate={{ x: `-${currentIndex * 50}%` }}
                                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            >
                                {galleryImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[calc(50%-12px)] cursor-pointer group relative"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                                                <div className="p-6 flex items-end justify-between w-full">
                                                    <p className="text-white text-base font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                        {image.caption}
                                                    </p>
                                                    <ZoomIn className="w-5 h-5 text-white/70 translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Carousel Controls */}
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm z-10 w-12 h-12"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm z-10 w-12 h-12"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: totalSlides }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === currentIndex ? "bg-amber-400 w-8" : "bg-white/30 hover:bg-white/50 w-2"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid with Album Filter */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">All Photos</h2>
                            <div className="w-16 h-1 bg-amber-400" />
                        </div>
                        {/* Album Filter */}
                        <div className="flex flex-wrap gap-2">
                            {albums.map((album) => (
                                <button
                                    key={album}
                                    onClick={() => setActiveAlbum(album)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeAlbum === album
                                            ? "bg-[#1e3a5f] text-white"
                                            : "bg-white text-[#1e3a5f]/60 border border-gray-200 hover:border-[#1e3a5f]/30 hover:text-[#1e3a5f]"
                                    }`}
                                >
                                    {album}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, i) => (
                                <motion.div
                                    key={image.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="group cursor-pointer"
                                    onClick={() => openLightbox(galleryImages.indexOf(image))}
                                >
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-gray-200 group-hover:border-[#1e3a5f]/30 group-hover:shadow-xl transition-all duration-300">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-5 w-full flex items-end justify-between">
                                                <div>
                                                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{image.album}</span>
                                                    <p className="text-white font-medium mt-1">{image.caption}</p>
                                                </div>
                                                <ZoomIn className="w-5 h-5 text-white/70 flex-shrink-0" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
                            className="absolute left-4 md:left-8 text-white/70 hover:text-white z-50"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-5xl max-h-[85vh] mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={galleryImages[lightboxIndex].src}
                                alt={galleryImages[lightboxIndex].alt}
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <p className="text-white text-center mt-4 text-lg">
                                {galleryImages[lightboxIndex].caption}
                            </p>
                        </motion.div>

                        <button
                            onClick={(e) => { e.stopPropagation(); lightboxNext() }}
                            className="absolute right-4 md:right-8 text-white/70 hover:text-white z-50"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
