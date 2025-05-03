import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="bg-gray-900 text-white py-20 border-t border-gray-700">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">Join thousands of developers mastering their skills daily</p>
            <Link
            href="#"
            >
                <Button size="lg" className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300">
                    Join Free Today
                </Button>
            </Link>
        </div>
        </section>
    );
}

export default CTA;