const Features = () => {
    return (
        <section className="">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="mb-8 lg:mb-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Features
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Here are some of the features we offer.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 py-16 bg-gray-800 rounded-2xl p-6">
                    <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold">Interactive Challenges</h3>
                        <p className="text-gray-400">Solve real-world problems with instant code feedback.</p>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold">Spaced Repetition</h3>
                        <p className="text-gray-400">Boost retention with smart flashcard reviews.</p>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                    <h3 className="text-xl font-semibold">Timed Quizzes</h3>
                        <p className="text-gray-400">Test your speed and accuracy under pressure.</p>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold">Track Progress</h3>
                        <p className="text-gray-400">Visualize your growth with detailed analytics.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
