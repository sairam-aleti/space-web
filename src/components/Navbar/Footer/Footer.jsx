import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdCall, MdMessage } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white px-5 relative z-50'>
        <section className='max-w-[1200px] mx-auto text-white'>
            <div className="grid md:grid-cols-2 py-5 ">
                {/* first-col */}
                <div className='py-8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Explore the Universe</h1>
                    <p>Get Exclusive <span className='font-bold'>Update</span> straight to your inbox</p><br />
                    <div className='flex items-center h-10'>
                        <input type="text" className='py-1 px-3 w-full h-[100%] inline-block focus:border-sky-500 focus:ring-2
                         focus:ring-sky-500 bg-gray-800 border-gray-200 border-2' placeholder='Email' />
                         <button className='primary-button'>Ok</button>
                    </div>
                </div>
                {/* second-col */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span md:pl-10'>
                        <div>
                            <div className='py-8 px-1'>
                                <h1 className='text-xl font-bold mb-3'>Quick links</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-1'>
                                <h1 className='text-xl font-bold mb-3'>Quick links</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-1'>
                                <h1 className='text-xl font-bold mb-2'>Contact Us</h1>
                            </div>
                            <div className='space-y-3'>
                                <div className='flex items-center gap-2'>
                                    <HiLocationMarker/>
                                    <p>Hyderabad, Telengana</p>
                                </div>
                                <div className='flex items-center gap-2 mt-3'>
                                    <MdCall/>
                                    <p>1234567890</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='hidden sm:block'>
                        <div className='flex justify-between items-center py-6 border-t-2 border-gray-400'>
                            <span className='text-sm text-gray-400'>
                                Copyright &copy; 2024 by TCJ
                            </span>
                            <div className='flex items-center justify-cente gap-4 pb-4'>
                                <a href="#">
                                    <FaInstagram className='text-4xl' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-4xl' />
                                </a>
                                <a href="#">
                                    <FaYoutube className='text-4xl' />
                                </a>
                            </div>
                            <span className='text-sm text-gray-400'>
                                <ul className='flex gap-3'>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </span>
                        </div>
                    </div>
        </section>
    </div>
  )
}

export default Footer