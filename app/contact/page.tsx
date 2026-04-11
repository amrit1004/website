import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">GET IN TOUCH</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-[#1e3a5f]">Visit Us</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#1e3a5f] mt-1" />
                                <div>
                                    <p className="font-medium text-[#1e3a5f]">Salvo Shooters Arena</p>
                                    <p className="text-[#1e3a5f]/60">SCO 15, Preet City, opp. water tank, Sector 86, Sahibzada Ajit Singh Nagar, Punjab 140308</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-[#1e3a5f]" />
                                <p className="text-[#1e3a5f]/60">+91 97003 30076</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-[#1e3a5f]" />
                                <p className="text-[#1e3a5f]/60">info@salvoarena.com</p>
                            </div>
                        </div>

                        <div className="h-64 bg-[#e8f0f8] rounded-xl border border-[#ccddf0] flex items-center justify-center text-[#1e3a5f]/40">
                            Map Placeholder
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-[#e8f0f8] p-8 rounded-xl border border-[#ccddf0]">
                        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-[#1e3a5f]">Name</Label>
                                <Input id="name" placeholder="Your Name" className="bg-white border-[#ccddf0] text-[#1e3a5f]" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[#1e3a5f]">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-white border-[#ccddf0] text-[#1e3a5f]" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-[#1e3a5f]">Message</Label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="flex w-full rounded-md border border-[#ccddf0] bg-white px-3 py-2 text-sm text-[#1e3a5f] placeholder:text-[#1e3a5f]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <Button className="w-full bg-[#1e3a5f] text-white hover:bg-[#264a73]">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
