

const Sectors = () => {
    const sectorData = [
        { id: "01", title: "Power & Energy", desc: "Advanced Solutions For Power Generation, Distribution, And Energy Optimization" },
        { id: "02", title: "Real Estate & Infrastructure", desc: "Smart Building Systems And Intelligent Infrastructure Management" },
        { id: "03", title: "Industrial & Manufacturing", desc: "Automation, Control Systems, And Predictive Maintenance Solutions" },
        { id: "04", title: "Agriculture & Water", desc: "Smart Irrigation Intelligence And Sustainable Water Management" },
        { id: "05", title: "Institutional & Government", desc: "Scalable Solutions For Public Sector And Institutional Projects" }
    ]

    return (
        <section className=" py-20">
            <div className='max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col gap-8 items-center'>

                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight">
                        Sectors <span className="text-[#3BA65E] font-medium">We Serve</span>
                    </h2>
                    <p className="text-gray-400 font-nunito text-sm md:text-base text-center leading-relaxed max-w-3xl mx-auto">
                        Our expertise spans across critical sectors, delivering tailored solutions that drive efficiency and sustainability.
                    </p>
                </div>

                {/* Responsive Grid - 5 columns on large screens */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mt-8'>
                    {sectorData.map((sector) => (
                        <div
                            key={sector.id}
                            className="group relative flex flex-col items-center gap-6 p-8 h-full
                         bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl
                         transition-all duration-500 cursor-default
                         hover:bg-[#3BA65E]/10 hover:border-[#3BA65E]/40 hover:-translate-y-2
                         shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                        >
                            {/* Number Badge */}
                            <div className="w-12 h-10 flex items-center justify-center 
                              bg-black/40 border border-white/10 rounded-lg 
                              group-hover:border-[#3BA65E]/50 transition-colors">
                                <span className="text-[#3BA65E] text-lg font-bold tracking-tighter">
                                    {sector.id}
                                </span>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-3 text-center">
                                <h3 className="text-white text-lg font-semibold leading-snug min-h-[50px] flex items-center justify-center">
                                    {sector.title}
                                </h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {sector.desc}
                                </p>
                            </div>

                            {/* Bottom Subtle Glow (Optional, matches image vibe) */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#3BA65E] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sectors