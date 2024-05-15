import React from 'react'
import Sat1 from "../../../assets/sat-2.jpg"

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
                    <p data-aos="fade-up" className='text-sky-800 uppercase'>Our Mission</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'>Chandrayan-2</h1>
                    <p data-aos="fade-up" data-aos-delay="500">Chandrayaan-2, India's second lunar mission, aimed to land a rover on the Moon's south pole
                    While the lander Vikram didn't land softly, the orbiter continues to study the Moon from lunar orbit.
                    Launched in July 2019, it's providing valuable data on lunar composition and water ice.</p>
                    <button data-aos="fade-up" data-aos-delay="700" className='primary-button '>Learn More</button>
                </div>
                <div data-aos="zoom-in">
                    <img src={Sat1} alt="" className='w-full sm:w-[80%] mx-auto max-h=[350px] object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2