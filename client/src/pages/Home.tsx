
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
      <div className="h-[1500px] w-full overflow-hidden relative">
        {/* Gradient Overlay Div */}
        <div className="absolute inset-0 w-full   bg-gradient-to-b from-brand-background via-brand-background/40  to-brand-background" />
        <div className='w-full absolute inset-0 z-20'>
          <Services />
          <Sectors />

        </div>
        <img
          src={BgImage}
          alt="Hero Background"
          className="h-full w-full object-cover object-[35%_65%]"
        />
      </div>
      <Philosophy/>
      <GlobalOutlook/>
      <CTA/>
      <Footer/>
    </main>
  )
}

export default Home