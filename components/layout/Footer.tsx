import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = [
    {
        title: "About",
        links: [
            { name: "About NRAI", href: "/about" },
            { name: "Committee", href: "/about/committee" },
            { name: "Constitution", href: "/about/constitution" },
        ],
    },
    {
        title: "Events",
        links: [
            { name: "Championships", href: "/events/championships" },
            { name: "Calendar", href: "/events/calendar" },
            { name: "Results", href: "/events/results" },
        ],
    },
    {
        title: "Athletes",
        links: [
            { name: "Shooters", href: "/athletes/shooters" },
            { name: "Rankings", href: "/athletes/rankings" },
            { name: "Shooting League", href: "/shooting-league" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Downloads", href: "/resources/downloads" },
            { name: "Selection Criteria", href: "/resources/selection-criteria" },
            { name: "Notification", href: "/notification" },
            { name: "Archives", href: "/archives" },
        ],
    },
    {
        title: "Media",
        links: [
            { name: "News", href: "/media/news" },
            { name: "Gallery", href: "/media/gallery" },
            { name: "Videos", href: "/media/videos" },
            { name: "Newsletter", href: "/newsletter" },
        ],
    },
]

const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
    return (
        <footer className="bg-[#0d1f33] text-white">
            <div className="container mx-auto px-4 py-10">
                {/* Top row: brand + links inline */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    {/* Brand + Contact compact */}
                    <div className="lg:w-72 shrink-0 space-y-4">
                        <Link href="/" className="inline-block">
                            <img src="/logo.svg" alt="NRAI" className="h-12 w-auto object-contain" />
                        </Link>
                        <div className="flex flex-col gap-2 text-xs text-white/50">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span>SCO 15, Preet City, Sector 86, SAS Nagar, Punjab 140308</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                                <span>+91 97003 30076</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                                <span>info@salvoarena.com</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {socials.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="h-3.5 w-3.5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        {footerLinks.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">{group.title}</h3>
                                <ul className="space-y-1.5">
                                    {group.links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-xs text-white/40 hover:text-amber-400 transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-[11px] text-white/30">
                        &copy; {new Date().getFullYear()} National Rifle Association of India. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        <Link href="/privacy" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
                        <Link href="/rti" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">RTI</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
