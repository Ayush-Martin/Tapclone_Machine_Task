
import HeroImage from '../../../assets/Images/hero_image.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#050708]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroImage}
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050708] via-[#050708]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col gap-5 max-w-2xl">
          
          {/* Headline - Scaled Down */}
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            GLOBAL TRADING & <br/>
            <span className="text-[#3BA65E] font-semibold block mt-1 uppercase tracking-normal">
              Intelligent <br/>Infrastructure Solutions
            </span> 
          </h1>
          
          {/* Subtext - More compact */}
          <p className="text-gray-400 font-nunito text-base md:text-lg leading-relaxed max-w-lg">
            Delivering engineered commodities, technical consulting, and advanced technology solutions across energy and automation sectors worldwide.
          </p>
          
          {/* Action Buttons - Refined padding and font */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Primary Glow Button */}
            <button className="relative px-8 py-3 bg-gradient-to-r from-[#246338] to-[#3BA65E] text-white font-bold text-[11px] tracking-[0.15em] rounded shadow-[0_0_15px_rgba(59,166,94,0.3)] hover:brightness-110 transition-all">
              DISCUSS A PROJECT
            </button>

            {/* Outline Button */}
            <button className="flex items-center justify-center gap-2 px-8 py-3 border border-white/10 hover:border-[#3BA65E]/50 bg-white/5 backdrop-blur-sm text-white font-bold text-[11px] tracking-[0.15em] rounded transition-all">
              EXPLORE OUR CAPABILITIES
              <span className="text-sm opacity-70">↗</span>
            </button>
          </div>

        </div>
      </div>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3BA65E]/30 to-transparent" />
    </section>
  )
}

export default Hero