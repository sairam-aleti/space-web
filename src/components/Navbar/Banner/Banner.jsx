import React from 'react'
import Sat1 from "../../../assets/sat-1.jpg"

const Banner = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                    <img data-aos="zoom-in" src={Sat1} alt="" className='w-full sm:w-[80%] mx-auto max-h=[350px] object-cover'/>
                </div>
                <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                    <p data-aos="fade-up" className='text-sky-800 uppercase'>Our Mission</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'>Chandrayan-1</h1>
                    <p data-aos="fade-up" data-aos-delay="500">Chandrayaan-1, India's first mission to the Moon, launched in 2008. It orbited the Moon for 10 months, studying its composition and mapping its surface
                    The mission included a lunar impactor and carried instruments from several countries.</p>
                    <button data-aos="fade-up" data-aos-delay="700" className='primary-button '>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner