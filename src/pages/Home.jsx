import React from 'react';
import { ArrowRight } from 'lucide-react';
import video from '../assets/video.mp4'
import logo from '../assets/logo.jpg'
import icon from '../assets/icon-arrorw.png'
import { Play, CheckCircle2, MapPin } from 'lucide-react';
import AboutUs from '../components/AboutUs';
import Form from '../components/Form';

export default function Home() {
    return (
       <>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Image - Replace src with your actual image */}
                <div className="absolute inset-0 z-0">
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                        <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>
                </div>
    
                <div className="relative z-10  ">
                    <div className="h-15 w-50 mx-10 mt-12 p-1 ">
                        <img src={logo} className='h-full w-full rounded-xl' alt="" />
                    </div>
    
                    <div className="flex-1 flex items-center ">
                        <div className="max-w-3xl mt-19 p-15">
                            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight">
                                Bringing health<br />
                                <span className='text-5xl font-medium'>
                                    to life for the whole family
                                </span>
                            </h1>
                            <div className="flex items-center mt-15 ml-3">
                                <button className="relative flex items-center gap-2 overflow-hidden rounded-full   py-3.5 text-white font-medium hover:bg-[#024A3E] group transition-all duration-500 hover:pl-5 hover:pr-12">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center h-14 w-21 rounded-full bg-white/10 transition-all duration-500 group-hover:translate-x-[-5px] group-hover:rotate-45">
                                        <img
                                            src={icon}
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-300  group-hover:scale-105  "
                                        />
    
                                    </div>
                                    <span className="text-white group-hover:hidden transition-all duration-300 ">
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consect
                                    </span>                               
                                    <span className="absolute right-2 opacity-0 translate-x-[-30px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                        Explore Now
                                    </span>
    
                                    {/* Default hidden placeholder to keep button width consistent */}
                                    <span className="invisible">Explore Now</span>
                                </button>
                            </div>
    
    
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <AboutUs/>
            </section>
            <section>
                <Form/>
            </section>
            
       </>
    );
}