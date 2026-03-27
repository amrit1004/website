export type Step = {
    id: string
    title: string
    description: string
    image: string // Placeholder for animation/image
}

export type Technique = {
    id: string
    slug: string
    title: string
    discipline: 'Pistol' | 'Rifle'
    description: string
    steps: Step[]
}

export const techniques: Technique[] = [
    {
        id: '1',
        slug: '10m-air-pistol',
        title: '10m Air Pistol Technique',
        discipline: 'Pistol',
        description: 'A step-by-step guide to the perfect 10m Air Pistol shot process.',
        steps: [
            {
                id: 'stance',
                title: '1. The Stance',
                description: 'Stand with feet shoulder-width apart, body relaxed, and side-on to the target. Ensure stability and balance.',
                image: '/images/tech/pistol-stance.svg',
            },
            {
                id: 'grip',
                title: '2. The Grip',
                description: 'Hold the pistol firmly but not tightly. The web of the hand should differ high on the backstrap.',
                image: '/images/tech/pistol-grip.svg',
            },
            {
                id: 'lift',
                title: '3. The Lift',
                description: 'Raise the arm smoothly to the target level, inhaling as you lift.',
                image: '/images/tech/pistol-lift.svg',
            },
            {
                id: 'breath',
                title: '4. Breath Control',
                description: 'Exhale halfway and hold your breath comfortably while aiming.',
                image: '/images/tech/pistol-breath.svg',
            },
            {
                id: 'aim warning',
                title: '5. Sight Alignment',
                description: 'Focus on the front sight. Review the gap between front and rear sights.',
                image: '/images/tech/pistol-aim.svg',
            },
            {
                id: 'trigger',
                title: '6. Trigger Squeeze',
                description: 'Apply smooth, increasing pressure straight back until the shot breaks by surprise.',
                image: '/images/tech/pistol-trigger.svg',
            },
            {
                id: 'follow-through',
                title: '7. Follow Through',
                description: 'Maintain aim and trigger pressure for a second after the shot.',
                image: '/images/tech/pistol-follow.svg',
            },
        ],
    },
    {
        id: '2',
        slug: '10m-air-rifle',
        title: '10m Air Rifle Technique',
        discipline: 'Rifle',
        description: 'Mastering the 10m Air Rifle standing position and shot sequence.',
        steps: [
            {
                id: 'stance',
                title: '1. The Stance',
                description: 'Feet shoulder-width apart, left hip toward target (for right-handers). Zero point is crucial.',
                image: '/images/tech/rifle-stance.svg',
            },
            {
                id: 'position',
                title: '2. Buttplate Position',
                description: 'Place the buttplate high in the shoulder pocket for head-up posture.',
                image: '/images/tech/rifle-position.svg',
            },
            {
                id: 'cheek',
                title: '3. Cheek Weld',
                description: 'Rest cheek firmly on the cheekpiece. Eye should align naturally with sights.',
                image: '/images/tech/rifle-cheek.svg',
            },
            {
                id: 'relax',
                title: '4. Relaxation',
                description: 'Exhale and let the rifle settle. Muscles should be relaxed, creating a skeletal support.',
                image: '/images/tech/rifle-relax.svg',
            },
            {
                id: 'trigger',
                title: '5. Trigger Control',
                description: 'Squeeze the trigger while maintaining perfect sight picture.',
                image: '/images/tech/rifle-trigger.svg',
            },
        ],
    }
]
