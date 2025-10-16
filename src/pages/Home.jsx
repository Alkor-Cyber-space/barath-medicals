import React from 'react';
import video from '../assets/vid.mp4';
import logo from '../assets/logo.jpg';
import icon from '../assets/icon-arrorw.png';
import AboutUs from '../components/AboutUs';
import Form from '../components/Form';

export default function Home() {
    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <div className="relative w-full min-h-screen overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-4 sm:p-6 md:p-10">
                        <img
                            src={logo}
                            className="h-12 sm:h-14 md:h-16 w-auto rounded-xl"
                            alt="Bharath Medplus Logo"
                        />
                    </div>

                    {/* Hero Text + CTA (Left aligned) */}
                    <div className="flex flex-1 items-center justify-start px-4 sm:px-10 md:px-16">
                        <div className="text-left max-w-3xl py-40 space-y-8">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                                Bringing health
                                <br />
                                <span className="text-2xl sm:text-3xl md:text-5xl font-medium">
                                    to life for the whole family.
                                </span>
                            </h1>

                            {/* CTA Button */}
                            <div className="flex justify-start mt-6 sm:mt-10">
                                <button className="relative flex items-center gap-3 overflow-hidden rounded-full bg-transparent py-3.5 px-6 sm:px-10 text-white font-medium border border-white hover:bg-[#024A3E] transition-all duration-500 group">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 transition-all duration-500 group-hover:-translate-x-1 group-hover:rotate-45">
                                        <img
                                            src={icon}
                                            alt="Play Icon"
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Long text (only visible before hover) */}
                                    <span className="text-sm sm:text-base hidden sm:inline-flex transition-all duration-300 max-w-xs text-left group-hover:opacity-0 group-hover:translate-x-[-10px]">
                                        Every day we bring hope to millions of children in the world's hardest places as a sign of God's unconditional love.
                                    </span>

                                    {/* Explore Now (only visible on hover) */}
                                    <a href="#form" className="scroll-smooth"><span className="absolute left-20 sm:left-24 md:left-28 lg:left-29 text-base sm:text-lg mt-[-10px] opacity-0 translate-x-[-15px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out whitespace-nowrap">
                                        Explore Now
                                    </span></a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ---------- ABOUT US SECTION ---------- */}
            <section>
                <AboutUs />
            </section>

            {/* ---------- ENQUIRY FORM SECTION ---------- */}
            <section>
                <Form />
            </section>
        </>
    );
}
