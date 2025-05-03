import { challenges } from "@/lib/challenges";
import Link from "next/link";

const ChallengeList = () => {
    return (
        <section className="container min-w-full bg-gray-900 mx-auto">
            <div className="container max-w-4xl min-h-screen mx-auto py-8 px-4 bg-gray-900 text-white">
                <h2 className="text-3xl font-bold mb-6">Available Challenges</h2>
                <ul className="space-y-4">
                    {challenges.map((challenge) => (
                        <li key={challenge.id} className="bg-gray-800 p-4 rounded shadow-md">
                            <h3 className="text-xl font-semibold">{challenge.title}</h3>
                            <p className="text-gray-400">{challenge.description}</p>
                            <Link href={`/challenges/${challenge.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                                Start Challenge
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ChallengeList