import React from 'react'

const Sectors = () => {
    return (
        <div className=' mx-auto px-6 w-full relative z-10 flex  flex-col gap-7  items-center'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-eloran text-text-primary ">
                SECTORS WE
                <span className="text-brand-green"> SERVE</span>
            </h1>

            <p className="text-text-secondary font-nunito-sans text-center leading-relaxed max-w-2xl">
                Delivering engineered commodities, technical consulting, and advanced technology solutions across energy, infrastructure, automation, and sustainability sectors worldwide.
            </p>

            <div className='w-full flex flex-row gap-4 justify-center'>
                {[1, 2, 3, 4, 5].map(x => (
                    <div key={x} className='w-[223px] h-[235px]  bg-white/5 backdrop-blur-sm 
                border border-white/10  
                hover:bg-brand-green/10 transition-all duration-500
                shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-lg p-5 flex flex-col gap-4 items-center'>
                        <div className='bg-black/35 backdrop-blur-sm 
                border border-white/10 px-2 py-1 rounded-lg flex items-center justify-center'>
                            <p className='text-brand-green text-xl font-bold'>01</p>
                        </div>
                        <h1 className='text-center text-xl text-white w-2/3'>Power & Energy</h1>
                        <p className='text-text-secondary text-[14px] text-center'>Advanced solutions for power generation, distribution, and energy optimization</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Sectors