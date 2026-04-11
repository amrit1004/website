import { Button } from "@/components/ui/button"

export default function FacilitiesPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">WORLD-CLASS INFRASTRUCTURE</h1>
                <p className="text-xl text-[#1e3a5f]/60 text-center max-w-2xl mx-auto mb-16">
                    Train with the same equipment used in World Cups and Olympic Games.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-[#e8f0f8] rounded-xl border border-[#ccddf0] relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f]/5 transition-colors">
                            <span className="text-2xl font-bold text-[#1e3a5f] border-b-2 border-[#1e3a5f] pb-1">10m Air Range</span>
                        </div>
                    </div>
                    <div className="aspect-video bg-[#e8f0f8] rounded-xl border border-[#ccddf0] relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f]/5 transition-colors">
                            <span className="text-2xl font-bold text-[#1e3a5f] border-b-2 border-[#1e3a5f] pb-1">Fitness Studio</span>
                        </div>
                    </div>
                    <div className="aspect-video bg-[#e8f0f8] rounded-xl border border-[#ccddf0] relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f]/5 transition-colors">
                            <span className="text-2xl font-bold text-[#1e3a5f] border-b-2 border-[#1e3a5f] pb-1">Coaches Lounge</span>
                        </div>
                    </div>
                    <div className="aspect-video bg-[#e8f0f8] rounded-xl border border-[#ccddf0] relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/10 group-hover:bg-[#1e3a5f]/5 transition-colors">
                            <span className="text-2xl font-bold text-[#1e3a5f] border-b-2 border-[#1e3a5f] pb-1">Analysis Lab</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
