import { useState, useEffect } from 'react'
import Logo from '../../assets/Icons/logo.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img 
              src={Logo} 
              alt="ABC Logo" 
              className="h-14 w-auto drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" 
            />
          </div>
          <div className="flex flex-col justify-center border-l border-white/20 pl-3">
            <h1 className="text-white font-nunito font-bold text-2xl tracking-tighter leading-none">
              ABC
            </h1>
            <p className="text-white/60 font-nunito text-[10px] uppercase tracking-[0.3em] mt-1">
              Technologies
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {['ABOUT', 'SERVICES', 'SECTORS'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-white/70 hover:text-white text-[12px] font-medium tracking-[0.2em] transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button 
            className="px-8 py-2.5 border border-green-700/50 hover:border-green-500 
                       bg-transparent hover:bg-white/5 text-white/80 hover:text-white 
                       text-xs font-semibold tracking-widest rounded-sm transition-all 
                       duration-300 shadow-sm active:scale-95"
          >
            CONTACT US
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Header