import React from 'react'
import Sat3 from "../../../assets/sat-3.jpg"

const Banner3 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                    <img data-aos="zoom-in" src={Sat3} alt="" className='w-full sm:w-[80%] mx-auto max-h=[350px] object-cover'/>
                </div>
                <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                    <p data-aos="fade-up" className='text-sky-800 uppercase'>Our Mission</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl'>Chandrayan-3</h1>
                    <p data-aos="fade-up" data-aos-delay="500">Launched in July 2023, Chandrayaan-3 was India's successful mission to land a robotic rover and lander near the Moon's south pole, making it the first country to do so. 
                    The mission achieved its science goals but ended after lunar night due to temperature limitations.</p>
                    <button data-aos="fade-up" data-aos-delay="700" className='primary-button '>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner3