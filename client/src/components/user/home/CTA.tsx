import React from 'react';
import { Icon } from '@iconify/react';
import CtaBgImage from "../../../assets/Images/cta_bg.png"; // Load your BG image

const FinalCTA: React.FC = () => {
    return (
        <section className="relative w-full min-h-[500px] flex items-center justify-center bg-black overflow-hidden">

            {/* 1. Background Image & Dark Overlay Layer (Z-0) */}
            <div className="absolute inset-0 z-0">
                <img
                    src={CtaBgImage}
                    alt="Engineering Perspective Grid"
                    className="w-full h-full object-cover object-center opacity-80" // Controls grid brightness
                />
                {/* Adds depth by fading the background into solid black at the edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
            </div>

            {/* 2. Central Content Container (Z-10) */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-10">

                {/* Typography Block */}
                <div className="flex flex-col gap-4">
                    {/* Header using Eloran Font for branding consistency */}
                    <h2 className="font-eloran text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase tracking-tight">
                        Ready to move your project<br />forward?
                    </h2>

                    {/* Description using Nunito Font */}
                    <p className="mt-4 text-text-secondary font-nunito font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto opacity-70">
                        Consultative engineering expertise—from strategy and design through<br className="hidden md:block" />
                        implementation to measurable operational performance.
                    </p>
                </div>

                {/* 3. The Glassmorphism Buttons Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">

                    {/* Main Primary Button (White) */}
                    <button className="px-10 py-3 rounded-full bg-white font-nunito font-semibold text-brand-background text-sm tracking-wide 
                             hover:bg-brand-green hover:text-white transition-all duration-300 group
                             shadow-[0_8px_32px_0_rgba(16,185,129,0.36)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                        <span className="group-hover:scale-105 transition-transform">START A PROJECT</span>
                    </button>

                    {/* Secondary Outline Button (Glass/Green) */}
                    <button className="flex items-center gap-2 px-10 py-3 rounded-full border border-brand-green/40 
                             bg-black/20 backdrop-blur-md font-nunito font-light text-white/90 text-sm tracking-wide
                             hover:border-brand-green hover:bg-brand-green/10 transition-all duration-300
                             shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                        <Icon icon="lucide:phone" className="h-4 w-4 text-brand-green" />
                        <span>SCHEDULE A CALL</span>
                    </button>
                </div>

                {/* 4. Bottom Feature Text Row (Requirement 4 check) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-16 max-w-4xl mx-auto text-xs md:text-sm tracking-widest uppercase text-brand-green opacity-70 font-nunito font-light">
                    <p>GLOBAL EXECUTION</p>
                    <p className='border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 md:px-12'>ENGINEERING-LED APPROACH</p>
                    <p>VENDOR-AGNOSTIC SOLUTIONS</p>
                </div>

            </div>

        </section>
    );
};

export default FinalCTA;