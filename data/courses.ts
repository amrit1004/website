export type Course = {
    id: string
    slug: string
    title: string
    discipline: 'Pistol' | 'Rifle'
    level: 'Beginner' | 'Intermediate' | 'Advanced'
    description: string
    price: string
    duration: string
    instructor: string
    image: string
    tags: string[]
}

export const courses: Course[] = [
    {
        id: '1',
        slug: 'intro-to-10m-air-pistol',
        title: 'Introduction to 10m Air Pistol',
        discipline: 'Pistol',
        level: 'Beginner',
        description: 'Learn the fundamentals of 10m Air Pistol shooting, including stance, grip, and sight alignment.',
        price: '₹15,000',
        duration: '4 Weeks',
        instructor: 'Coach Sharma',
        image: '/images/pistol-beginner.jpg',
        tags: ['Foundation', 'Safety', 'Basics'],
    },
    {
        id: '2',
        slug: 'advanced-rifle-mechanics',
        title: 'Advanced Rifle Mechanics',
        discipline: 'Rifle',
        level: 'Advanced',
        description: 'Master the complexities of 10m Air Rifle with advanced position building and mental training.',
        price: '₹25,000',
        duration: '6 Weeks',
        instructor: 'Coach Singh',
        image: '/images/rifle-advanced.jpg',
        tags: ['Competition', 'Mental Game', 'Precision'],
    },
    {
        id: '3',
        slug: 'rapid-fire-pistol-basics',
        title: 'Rapid Fire Pistol Basics',
        discipline: 'Pistol',
        level: 'Intermediate',
        description: 'Transition from precision to rapid fire with this specialized module.',
        price: '₹18,000',
        duration: '5 Weeks',
        instructor: 'Coach Verma',
        image: '/images/rapid-fire.jpg',
        tags: ['Speed', 'Timing', 'Transition'],
    },
    {
        id: '4',
        slug: 'youth-development-program',
        title: 'Youth Development Program',
        discipline: 'Rifle',
        level: 'Beginner',
        description: 'A holistic program designed for young shooters to build a strong foundation.',
        price: '₹12,000',
        duration: '8 Weeks',
        instructor: 'Coach Gupta',
        image: '/images/youth-rifle.jpg',
        tags: ['Youth', 'Foundation', 'Long-term'],
    },
]
