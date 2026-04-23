
import Header from '../components/user/Header'
import BgImage from '../assets/Images/bg_image.png'

import Hero from '../components/user/home/Hero'
import Services from '../components/user/home/Services'
import Sectors from '../components/user/home/Sectors'
import Philosophy from '../components/user/home/Philosophy'
import GlobalOutlook from '../components/user/home/GlobalOutlook'
import CTA from '../components/user/home/CTA'
import Footer from '../components/user/Footer'


const Home = () => {
  return (
    <main className=' w-full h-96 bg-brand-background font-nunito-sans'>
      <Header />
      {/* <img src={HeroImage} alt="" className='w-full object-cover' /> */}
      <Hero />
      <div className="w-full relative">
        {/* Background Image */}
        <img
          src={BgImage}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover object-[35%_65%]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full bg-gradient-to-b from-brand-background via-brand-background/40 to-brand-background" />
        {/* Content — drives the height */}
        <div className="relative z-20 w-full">
          <Services />
          <Sectors />
        </div>
      </div>
      <Philosophy/>
      <GlobalOutlook/>
      <CTA/>
      <Footer/>
    </main>
  )
}

export default Home