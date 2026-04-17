"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
    {
        name: "About",
        children: [
            { name: "About NRAI", href: "/about" },
            { name: "History", href: "/about/history" },
            { name: "Committee", href: "/downloads/committee.pdf", download: true },
            { name: "Constitution", href: "/downloads/constitution.pdf", download: true },
        ],
    },
    {
        name: "Events",
        children: [
            { name: "Championships", href: "/events/championships" },
            { name: "Calendar", href: "/events/calendar" },
            { name: "Results", href: "/events/results" },
        ],
    },
    {
        name: "Athletes",
        children: [
            { name: "Shooters", href: "/athletes/shooters" },
            { name: "Shooting League of India", href: "/shooting-league" },
        ],
    },
    {
        name: "Resources",
        children: [
            { name: "Downloads", href: "/resources/downloads" },
            { name: "Selection Criteria", href: "/resources/selection-criteria" },
            { name: "Notification", href: "/notification" },
            { name: "Archives", href: "/archives" },
            { name: "RTI", href: "/rti" },
        ],
    },
    {
        name: "Media",
        children: [
            { name: "News", href: "/media/news" },
            { name: "Gallery", href: "/media/gallery" },
            { name: "Videos", href: "/media/videos" },
            { name: "News Letter", href: "/newsletter" },
        ],
    },
    {
        name: "Other",
        children: [
            { name: "Contact", href: "/contact" },
            { name: "Careers", href: "/careers" },
            { name: "Prevention of Age Fraud", href: "/prevention-of-age-fraud" },
            { name: "POSH Act Complaint Committee", href: "/posh-act" },
        ],
    },
]

function DesktopDropdown({ item, alignRight = false }: { item: (typeof navigation)[number]; alignRight?: boolean }) {
    return (
        <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wider text-[11px] py-2">
                {item.name}
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className={cn("absolute top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200", alignRight ? "right-0" : "left-0")}>
                <div className="bg-white rounded-md shadow-lg border border-gray-200 py-1 min-w-max">
                    {item.children.map((child) =>
                        child.download ? (
                            <a
                                key={child.name}
                                href={child.href}
                                download
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1e3a5f]/10 hover:text-[#1e3a5f] transition-colors"
                            >
                                {child.name}
                            </a>
                        ) : (
                            <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1e3a5f]/10 hover:text-[#1e3a5f] transition-colors"
                            >
                                {child.name}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

function MobileAccordion({ item }: { item: (typeof navigation)[number] }) {
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-2xl font-bold text-white hover:text-white/80 transition-colors"
            >
                {item.name}
                <ChevronRight className={cn("h-5 w-5 transition-transform", open && "rotate-90")} />
            </button>
            {open && (
                <div className="ml-4 mt-3 flex flex-col gap-3">
                    {item.children.map((child) =>
                        child.download ? (
                            <a
                                key={child.name}
                                href={child.href}
                                download
                                className="text-lg text-white/70 hover:text-white transition-colors"
                            >
                                {child.name}
                            </a>
                        ) : (
                            <Link
                                key={child.name}
                                href={child.href}
                                className="text-lg text-white/70 hover:text-white transition-colors"
                            >
                                {child.name}
                            </Link>
                        )
                    )}
                </div>
            )}
        </div>
    )
}

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-[#1e3a5f] backdrop-blur-md border-[#264a73] py-1"
                    : "bg-[#1e3a5f] py-2 border-[#264a73]"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center group ml-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo.svg"
                        alt="Salvo Shooters Arena"
                        className="h-20 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navigation.map((item, i) => (
                        <DesktopDropdown key={item.name} item={item} alignRight={i >= navigation.length - 2} />
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-white/80 hover:bg-white/10">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-[#1e3a5f] border-l border-[#264a73]">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <div className="flex flex-col h-full mt-10">
                            <nav className="flex flex-col gap-6">
                                {navigation.map((item) => (
                                    <MobileAccordion key={item.name} item={item} />
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
