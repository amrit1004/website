import { products } from "@/data/products"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-white text-[#1e3a5f] pt-10">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">PRO SHOP</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="bg-white border-[#ccddf0] overflow-hidden flex flex-col">
                            <div className="aspect-square bg-[#e8f0f8] relative flex items-center justify-center p-8">
                                {/* Placeholder */}
                                <div className="w-full h-full bg-[#ccddf0] rounded-lg flex items-center justify-center text-[#1e3a5f]/40">
                                    Image
                                </div>
                                <div className="absolute top-4 left-4">
                                    <Badge variant={product.status === 'In Stock' ? 'default' : 'secondary'} className="bg-[#1e3a5f] text-white border border-[#1e3a5f]">
                                        {product.status}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <p className="text-xs text-[#1e3a5f]/60 uppercase tracking-wide">{product.category}</p>
                                <CardTitle className="text-lg text-[#1e3a5f]">{product.name}</CardTitle>
                            </CardHeader>
                            <CardFooter className="mt-auto flex items-center justify-between">
                                <span className="text-xl font-bold text-[#1e3a5f]">{product.price}</span>
                                <Button size="sm" variant="outline" className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white">
                                    View
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
