"use client"

import { cn } from "@/lib/utils"

interface Step {
    id: string
    title: string
}

interface StepNavigatorProps {
    steps: Step[]
    activeStep: string
    onStepClick: (id: string) => void
}

export function StepNavigator({ steps, activeStep, onStepClick }: StepNavigatorProps) {
    return (
        <nav className="hidden lg:block sticky top-32 w-64 pr-8 border-r border-white/10 h-[calc(100vh-8rem)] overflow-y-auto step-nav-scrollbar">
            <ul className="space-y-8">
                {steps.map((step, index) => (
                    <li key={step.id} className="relative group">
                        {/* Connector Line */}
                        {index !== steps.length - 1 && (
                            <div className={cn(
                                "absolute left-4 top-8 h-[calc(100%+32px)] w-[1px] transition-colors duration-500 z-0",
                                // Check if next step is active or passed
                                activeStep === step.id ? "bg-gradient-to-b from-primary to-neutral-800" : "bg-neutral-800"
                            )} />
                        )}

                        <button
                            onClick={() => onStepClick(step.id)}
                            className={cn(
                                "text-left w-full group flex items-start gap-4 transition-all duration-300 relative z-10",
                                activeStep === step.id ? "text-primary" : "text-neutral-500 hover:text-white"
                            )}
                        >
                            <div
                                className={cn(
                                    "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 shrink-0 bg-black",
                                    activeStep === step.id
                                        ? "border-primary text-primary shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                        : "border-neutral-800 text-neutral-600 group-hover:border-neutral-600 group-hover:text-neutral-400"
                                )}
                            >
                                {index + 1}
                            </div>
                            <span className={cn(
                                "text-sm font-medium transition-all duration-300 pt-1.5",
                                activeStep === step.id ? "text-primary scale-105 origin-left font-bold" : ""
                            )}>
                                {step.title.replace(/^\d+\.\s*/, '')}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
