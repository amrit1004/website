import { products } from "@/data/products"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">PRO SHOP</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Card key={product.id} className="bg-neutral-900 border-white/10 overflow-hidden flex flex-col">
                            <div className="aspect-square bg-white/5 relative flex items-center justify-center p-8">
                                {/* Placeholder */}
                                <div className="w-full h-full bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-600">
                                    Image
                                </div>
                                <div className="absolute top-4 left-4">
                                    <Badge variant={product.status === 'In Stock' ? 'default' : 'secondary'} className="bg-black text-white border border-white/20">
                                        {product.status}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
                                <CardTitle className="text-lg text-white">{product.name}</CardTitle>
                            </CardHeader>
                            <CardFooter className="mt-auto flex items-center justify-between">
                                <span className="text-xl font-bold text-primary">{product.price}</span>
                                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-primary hover:text-black">
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
