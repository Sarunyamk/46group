'use client';
export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden text-center text-white">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/example1.mp4"
                autoPlay
                muted
                loop
            />

        </section>

    );
}
