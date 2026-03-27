export type Product = {
    id: string
    slug: string
    name: string
    category: string
    price: string
    image: string
    status: 'In Stock' | 'Out of Stock' | 'Pre-order'
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'match-pellets-500',
        name: 'Premium Match Pellets (500ct)',
        category: 'Ammunition',
        price: '₹950',
        image: '/images/shop/pellets.jpg',
        status: 'In Stock',
    },
    {
        id: '2',
        slug: 'pistol-cleaning-kit',
        name: 'Pro Pistol Cleaning Kit',
        category: 'Accessories',
        price: '₹2,500',
        image: '/images/shop/cleaning-kit.jpg',
        status: 'In Stock',
    },
    {
        id: '3',
        slug: 'shooting-glasses',
        name: 'Precision Shooting Glasses',
        category: 'Gear',
        price: '₹12,000',
        image: '/images/shop/glasses.jpg',
        status: 'Pre-order',
    },
    {
        id: '4',
        slug: 'rifle-stand',
        name: 'Adjustable Rifle Stand',
        category: 'Equipment',
        price: '₹8,500',
        image: '/images/shop/stand.jpg',
        status: 'In Stock',
    },
]


