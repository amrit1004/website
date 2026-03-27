export type Testimonial = {
    id: string
    name: string
    role: string
    quote: string
    image?: string
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Arjun K.',
        role: 'National Shooter',
        quote: 'The coaching at Salvo helped me correct a persistent grip issue. My scores have improved by 15 points in just 3 months.',
    },
    {
        id: '2',
        name: 'Sneha R.',
        role: 'Parent of Air Rifle Student',
        quote: 'An excellent environment for kids. The coaches are patient and the facilities are world-class.',
    },
    {
        id: '3',
        name: 'Vikram S.',
        role: 'Amateur Enthusiast',
        quote: 'I joined for stress relief and found a passion. The corporate weekend batches are perfect for working professionals.',
    },
]
