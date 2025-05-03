"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center py-24 md:pt-40 px-4">
            <style jsx>{`
                @keyframes colorShift {
                    0% { color: #3b82f6; } /* Blue */
                    25% { color:rgb(141, 80, 197); } /* Purple */
                    50% { color:rgb(171, 162, 248); } /* Light Purple */
                    75% { color:rgb(75, 116, 248); } /* Light Blue */
                    100% { color: #3b82f6; } /* Blue */
                }
                .color-animate {
                    animation: colorShift 4s infinite; /* Infinite loop with 4s duration */
                }

            `}</style>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Master coding with <span className='color-animate'>Interactive Challenges</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-2xl">
                Sharpen your skills with live coding challenges and real-time feedback.
                <br />
            </p>
            <div className='flex gap-4 mb-8'>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition duration-300">
                    Get Started
                </Button>

                <Link href="/challenges">
                    <Button size="lg" className="bg-gray-800 hover:bg-gray-700 transition duration-300">
                        View Challenges
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Hero;