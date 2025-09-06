import React from "react";


const Hero = () => {
    return (
        <div>
            <section id="home" className="my-34  md:py-24">
                <div className="relative z-20 container mx-auto px-6 md:px-12">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Your Mental Health{" "}
                            <span className="text-indigo-300">Matters</span>
                        </h1>
                        <p className="text-lg md:text-xl md:text-amber-50 mb-8 leading-relaxed">
                            SafeSpace provides confidential, student-focused mental health
                            support. Connect with licensed professionals and peers who
                            understand your journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors font-medium text-lg">
                                Book a Session
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 transition-colors font-medium text-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <video
                    src="/src/assets/output.webm"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                ></video>
            </section>
        </div>
    );
};

export default Hero;
