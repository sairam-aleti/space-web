import React from 'react';
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Services from "./components/Navbar/Services/Services";
import Banner from './components/Navbar/Banner/Banner';
import Banner2 from './components/Navbar/Banner/Banner2';
import Banner3 from './components/Navbar/Banner/Banner3';
import Footer from './components/Navbar/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <div>
      <div className="h-[700px] relative">
        <video autoPlay loop muted className='fixed right-0 top-0 h-[700px] w-full object-cover z[-1]'>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      {/* Service Cards Section*/}
      <Services />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />
    </div>
  )
}

export default App