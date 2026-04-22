import React, { useState, useEffect } from 'react'
import { Button } from '../ui/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled more than 20px
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={'fixed top-0 left-0 w-full z-50 bg-brand-background/80 backdrop-blur-md '}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/src/assets/Icons/logo.svg" alt="ABC Technologies" className="h-20" />
          <div className='text-center text-white font-nunito font-light'>
            <h1 className='text-2xl lg:text-3xl leading-none'>ABC</h1>
            <p className='text-[10px] lg:text-[12px] uppercase tracking-widest'>Technologies</p>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-nunito text-sm tracking-widest">
          <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">ABOUT</a>
          <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">SERVICES</a>
          <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">SECTORS</a>
        </div>

        {/* CTA */}
        <div>
          <Button variant="outline" size="sm" className="hidden md:inline-flex rounded-full px-6">
            CONTACT US
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Header