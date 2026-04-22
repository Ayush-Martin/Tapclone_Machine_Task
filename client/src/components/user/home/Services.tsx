import serviceImage from "../../../assets/Icons/Service_Icon.svg"
import { Button } from "../../ui/Button"

const Services = () => {
    return (
        <section className='w-full h-[900px]  my-16'>

            <div className="absolute inset-0 w-full h-5/6  bg-gradient-to-b from-brand-background via-brand-background/30  to-transparent" />
            

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-6 max-w-2xl">
                    <p className='text-brand-green uppercase text-lg'>What we do</p>
                    <h1 className="text-4xl md:text-5xl font-eloran text-text-primary uppercase">
                        Your Single-Window Partner for<br />
                        <span className="text-brand-green text-3xl md:text-4xl">Global Solutions</span>
                    </h1>

                    <p className="text-text-secondary font-nunito-sans text-[18px] leading-relaxed max-w-xl">
                        ABC Technologies LLC operates as a single-window partner for global clients seeking reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions.
                    </p>

                </div>
            </div>

            <div className="relative z-20">

                <h1 className='text-center my-14 uppercase text-3xl text-brand-green'>Our <span className='text-white'>Services</span></h1>
            </div>

            <div className='w-full h-[416px] px-6 flex gap-4 px-20'>
                {[1, 2, 3, 4].map(x => (
                    <div className="w-[330px] h-[416px] pt-1 pb-4 px-5 
                bg-white/1 backdrop-blur-sm 
                border border-white/10 rounded-lg 
                hover:bg-black/30 transition-all duration-500
                shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]" key={x}>

                        <div className="flex justify-end w-full">
                            <img src={serviceImage} alt="" className="opacity-90" />
                        </div>

                        <div className="flex flex-col gap-4 mt-3">
                            <h1 className="text-xl text-white tracking-wide">
                                Global Trading & Export
                            </h1>

                            {/* Using Nunito Sans for body text with optimized leading */}
                            <p className="text-left  text-white/70 font-nunito font-extralight leading-tight">
                                Sourcing, compliance, documentation, and cross-border logistics with precision.
                            </p>

                            <Button
                                variant="outline"
                                size="md"
                                className="rounded-full border-white/20 hover:border-brand-green hover:bg-brand-green/10 transition-colors"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                ))}


            </div>
        </section>
    )
}

export default Services