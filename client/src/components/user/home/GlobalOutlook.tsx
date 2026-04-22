import React from 'react';
import { Icon } from '@iconify/react';
import MapImage from "../../../assets/Images/world_map_image.png";

const locations = [
    { id: 1, name: 'United Kingdom', top: '21%', left: '50%' },
    { id: 2, name: 'UAE', top: '42%', left: '59%' },
    { id: 3, name: 'India', top: '48%', left: '70%' },
    { id: 4, name: 'Kenya', top: '61%', left: '54.5%' },
    { id: 5, name: 'Tanzania', top: '67%', left: '55.5%' },
    { id: 6, name: 'South Africa', top: '82%', left: '55.7%' },
];

const features = [
    {
        title: "International Trade",
        desc: "Cross-Border Exports And Trade Execution",
    },
    {
        title: "Multi-Country Projects",
        desc: "Complex Deployments Across Regions",
    },
    {
        title: "OEM Partnerships",
        desc: "Co-Engineered Solutions With Global Partners",
    },
];

const GlobalOutlook: React.FC = () => {
    return (
        <section className="relative w-full bg-brand-background px-6 py-24 text-center overflow-hidden">

            {/* 1. Header Section */}
            <div className="relative z-10 mb-12">
                <p className="font-nunito text-xs text-brand-green uppercase tracking-[0.3em] mb-4">
                    GLOBAL OUTLOOK
                </p>
                <h2 className="font-eloran text-4xl md:text-5xl text-white leading-tight max-w-4xl mx-auto">
                    WORLDWIDE <span className="text-brand-green">OPERATIONS</span>
                </h2>
                <p className="mt-6 text-text-secondary font-nunito font-light max-w-2xl mx-auto opacity-80">
                    Operating from Dubai with strong operational ties across India, Africa, and other international markets, supporting projects and exports worldwide.
                </p>
            </div>

            {/* 2. Map Container */}
            <div className="relative max-w-6xl mx-auto mb-10">
                <div className="relative w-full">
                    <img
                        src={MapImage}
                        alt="World Map Grid"
                        className="w-full h-auto object-contain opacity-40 select-none"
                    />

                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                            style={{ top: loc.top, left: loc.left }}
                        >
                            <div className="flex flex-row items-center gap-2">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute h-4 w-4 bg-brand-green/30 rounded-full animate-ping" />
                                    <Icon
                                        icon="mingcute:location-fill"
                                        className="text-brand-green h-4 w-4 md:h-5 md:w-5 relative z-10 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                                    />
                                </div>
                                <span className="text-[10px] md:text-xs font-nunito text-white/90 whitespace-nowrap tracking-wider opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300">
                                    {loc.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Simplified Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20 relative z-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-10 flex flex-col items-center justify-center min-h-[160px] 
                       bg-white/[0.03] backdrop-blur-md rounded-xl 
                       border border-brand-green/40 hover:border-brand-green 
                       transition-all duration-300 group shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                    >
                        <h3 className="text-white text-xl font-nunito font-semibold mb-2 tracking-wide">
                            {feature.title}
                        </h3>
                        <p className="text-text-secondary text-sm font-nunito font-extralight leading-relaxed opacity-80">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default GlobalOutlook;