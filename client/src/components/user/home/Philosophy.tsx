import React from 'react'
import PhilosophyBgImage from "../../../assets/Images/philosophy_bg_image.png"
import { Icon } from "@iconify/react";
import ListBulletIcon from "../../../assets/Icons/ListBulletIcon.svg"

const Philosophy = () => {
    return (
        <section className="w-full px-6 relative min-h-[703px] flex items-stretch py-10 overflow-hidden bg-brand-background">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={PhilosophyBgImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-background/60 via-transparent to-brand-background/60" />
            </div>

            <div className='relative flex w-full flex-row gap-4 z-20 px-10 mt-4'>
                <div className='w-1/2 flex flex-col gap-10 px-2 py-5'>
                    <p className=' text-brand-green'>WHY CAMACON</p>
                    <h1 className="text-4xl md:text-5xl lg:text-4xl font-eloran text-text-primary uppercase">
                        Your Single-Window Partner for <br />
                        <span className="text-brand-green">Global Solutions</span>
                    </h1>

                    <p className="text-text-secondary font-nunito-sans text-[16px] leading-relaxed max-w-xl ">
                        Delivering engineered commodities, technical consulting, and advanced technology solutions across energy, infrastructure, automation, and sustainability sectors worldwide.
                    </p>

                    <div className='grid grid-cols-2 gap-14' >
                        {[1, 2, 3, 4].map(x => (
                            <div key={x} className='w-full flex gap-4 items-start'>
                                <div className='p-3 bg-black/10 backdrop-blur-sm 
                border border-white/10 rounded-lg'>
                                    <Icon icon={"mingcute:safety-certificate-line"} className='text-brand-green h-8 w-8' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-white text-lg text-left'>Independent & Engineering-Led</h1>
                                    <p className="text-text-secondary font-nunito-sans text-[16px] leading-tight max-w-xl ">
                                        Our decisions are driven by technical merit, not vendor agreements.
                                    </p>

                                </div>
                            </div>
                        ))}


                    </div>

                </div>
                <div className='w-1/2 flex justify-center items-center px-10'>
                    <div className='w-full  bg-brand-green-dark/10  
                border border-white/10 rounded-lg px-10 py-7 flex flex-col gap-6'>
                        <h1 className="text-2xl md:text-3xl font-eloran text-text-primary uppercase">
                            OUR
                            <span className="text-brand-green"> COMMITMENT</span>
                        </h1>

                        <p className="text-text-secondary font-nunito-sans text-[16px] leading-relaxed max-w-xl ">
                            We are committed to delivering measurable value through every engagement.
                        </p>

                        <div className='flex flex-col gap-3'>
                            {[1, 2, 3, 4].map(x => (
                                <div key={x} className='flex gap-2'>
                                    <img src={ListBulletIcon} alt="" />
                                    <p className='text-white/70 font-nunito-sans text-[16px] leading-relaxed max-w-xl '>
                                        Technical integrity
                                    </p>
                                </div>
                            ))}

                        </div>

                        <div className="relative pt-4">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-green via-brand-green/10 to-transparent" />

                            <h2 className="text-brand-green font-nunito text-lg tracking-wide">
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