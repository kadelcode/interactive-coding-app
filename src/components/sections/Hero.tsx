import { Button } from '@/components/ui/button';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center py-24 px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
                Master coding with <span className='text-blue-500'>Interactive Challenges</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
                Sharpen your skills with live coding challenges and real-time feedback.
                <br />
            </p>
            <div className='flex gap-4 mb-8'>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition duration-300">
                    Get Started
                </Button>
                <Button size="lg" className="bg-gray-800 hover:bg-gray-700 transition duration-300">
                    View Challenges
                </Button>
            </div>
        </section>
    )
}

export default Hero;