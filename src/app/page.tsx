import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Features />
      {/* Add more sections as needed */}
    </main>
  );
}
