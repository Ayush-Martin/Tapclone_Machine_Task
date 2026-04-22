import React from 'react'
import { Button } from '../../ui/Button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/Images/hero_image.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-background via-brand-background/90 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-background via-transparent to-brand-background/50" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-brand-background via-brand-background to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-eloran text-text-primary ">
            GLOBAL TRADING & <br/>
            <span className="text-brand-green text-3xl md:text-4xl">INTELLIGENT <br/>INFRASTRUCTURE SOLUTIONS</span> 
          </h1>
          
          <p className="text-text-secondary font-nunito-sans text-[18px] leading-relaxed max-w-xl">
            Delivering engineered commodities, technical consulting, and advanced technology solutions across energy, infrastructure, automation, and sustainability sectors worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="primary" size="lg" className="rounded-full">
              START A PROJECT
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/20 hover:border-brand-green" >
              EXPLORE OUR CAPABILITIES
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero