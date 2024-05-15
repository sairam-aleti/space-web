import React from 'react'
import MoonJpg from "../../../assets/Moon.jpg";

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
        <div className='h-full flex justify-center items-center p-4'>
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-4 lg:pr-36'>
                <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>Orbit the Earth</h1>
                <p data-aos="fade-up" data-aos-delay="300">Rocky oasis with a life-supporting magnetic field, harboring the only known biosphere in the cosmos!
                Our blue marble, Earth, spins as the third planet from the Sun. It has One natural Satellite <b>MOON</b> Let's learn about the Chandrayaan missions aimed to explore the Moon, conduct scientific studies, and develop lunar landing technology.</p>
                <button data-aos="fade-up" data-aos-delay="500" className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200'>Learn More</button>
            </div>
            <div></div>
            </div>
        </div>
        {/* Surface section
        <img src={MoonJpg} alt="" className='absolute right-0 bottom-0 w-full brightness-50 z-10' /> */}
        {/* Bottom gradient section */}
        <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transperent from-10% to-black t0-90% h-[20px] sm:h-[50px] md:[60px]'>

        </div>
    </div>
  )
}

export default Hero