
import PhilosophyBgImage from "../../../assets/Images/philosophy_bg_image.png"
import { Icon } from "@iconify/react";
import ListBulletIcon from "../../../assets/Icons/ListBulletIcon.svg"

const Philosophy = () => {
    return (
        <section className="w-full px-6 relative min-h-screen flex items-center py-16 overflow-hidden bg-brand-background">
            {/* Background Image & Overlay - Kept exactly as you had it */}
            <div className="absolute inset-0 z-0">
                <img
                    src={PhilosophyBgImage}
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-background/60 via-transparent to-brand-background/60" />
            </div>

            <div className='relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4'>
                
                {/* Left Side Content */}
                <div className='flex flex-col gap-8'>
                    <div className="space-y-4">
                        <p className='text-brand-green tracking-widest text-sm font-semibold'>WHY COMACON</p>
                        <h1 className="text-3xl md:text-5xl font-eloran text-text-primary uppercase leading-tight">
                            Engineering-First <br />
                            <span className="text-brand-green">Philosophy</span>
                        </h1>
                        <p className="text-text-secondary font-nunito-sans text-base leading-relaxed max-w-xl">
                            Operating at the intersection of engineering, commerce, and technology, enabling clients to source, design, and deploy reliable systems across energy, infrastructure, automation, and sustainability domains.
                        </p>
                    </div>

                    {/* Features Grid - Made Responsive */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        {[
                            { title: "Independent & Engineering-Led", icon: "mingcute:safety-certificate-line" },
                            { title: "Unified Expertise", icon: "mingcute:group-line" },
                            { title: "Retrofit-Focused", icon: "mingcute:tool-line" },
                            { title: "Cross-Border Execution", icon: "mingcute:earth-line" }
                        ].map((item, index) => (
                            <div key={index} className='flex gap-4 items-start group'>
                                <div className='p-3 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg group-hover:border-brand-green transition-all'>
                                    <Icon icon={item.icon} className='text-brand-green h-6 w-6' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h4 className='text-white text-md font-medium'>{item.title}</h4>
                                    <p className="text-text-secondary font-nunito-sans text-xs leading-tight">
                                        Our decisions are driven by technical merit.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Commitment Card - Hover effect added */}
                <div className='flex justify-center lg:justify-end'>
                    <div className='w-full max-w-md bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl px-8 py-10 flex flex-col gap-6 
                                    hover:bg-brand-green/[0.05] hover:border-brand-green/30 transition-all duration-500'>
                        <h2 className="text-2xl md:text-3xl font-eloran text-text-primary uppercase">
                            OUR <span className="text-brand-green">COMMITMENT</span>
                        </h2>

                        <p className="text-text-secondary font-nunito-sans text-sm leading-relaxed">
                            We are committed to delivering measurable value through every engagement.
                        </p>

                        <div className='flex flex-col gap-4'>
                            {["Technical integrity", "Transparent commercial practices", "Long-term client partnerships", "Measurable operational value"].map((text, x) => (
                                <div key={x} className='flex gap-3 items-center group'>
                                    <img src={ListBulletIcon} alt="" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    <p className='text-white/70 font-nunito-sans text-sm'>
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="relative pt-6 mt-2">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-green via-brand-green/10 to-transparent" />
                            <h2 className="text-brand-green font-nunito text-sm font-semibold tracking-wide">
                                Strong backing from Udot's R&D and technology ecosystem
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy