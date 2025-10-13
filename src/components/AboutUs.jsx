import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import image from '../assets/playicon.png'
import cover from '../assets/cover.png'
import vector from '../assets/vector.png'
import vector2 from '../assets/vector2.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import globe from '../assets/globe.png'
import video from '../assets/video.mp4'
import image4 from "../assets/image4.png"

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 py-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center  gap-10">
                        {/* Play Button */}
                        <div className="flex flex-col gap-3">
                            <img src={image} className='w-20 h-20' alt="" />
                        </div>

                        {/* Line */}
                        <div className="w-50 border-t-2 border-[#024A3E] mt-2"></div>

                        {/* Header Text */}
                        <div className="flex">
                            <p className="text-[#024A3E] leading-relaxed tracking-wide w-4xl text-lg">+44110 0
                                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                                consectetur Lorem ipsum dolor, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veni.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-13 items-start">
                    {/* Left Column - Image and About */}
                    <div className="py-25 relative">
                        {/* Background Design */}
                        <img
                            src={vector}
                            alt="Background Design"
                            className="absolute bottom-[-10%] right-0  w-110 h-90 object-contain pointer-events-none z-0"
                        />

                        {/* Image Container */}
                        <div className="relative z-10 border-4 border-gray-300 rounded-lg overflow-hidden w-[80%] h-[70%] mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop"
                                alt="Modern Interior Design"
                                className="w-full object-cover"
                            />
                        </div>
                        <img
                            src={vector2}
                            alt="Background Design"
                            className="absolute bottom-0 left-0 top-[-7%] w-110 h-90 object-contain pointer-events-none z-0"
                        />
                    </div>


                    {/* Right Column - Why Choose Us */}
                    <div className="mt-2 space-y-6">
                        <div className=''>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
                            <p className="text-gray-700 text-xl w-xl leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                                consectetur Lorem ipsum dolor, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veni.
                            </p>
                        </div>
                        <div className=" text-white rounded-xl px-8 py-8 shadow-xl"
                            style={{
                                backgroundImage: `url(${cover})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <h3 className="text-3xl font-semibold mb-6">Why Choose Us</h3>

                            <div className="space-y-4">
                                {/* Feature 1 */}
                                <div className="flex gap-5">
                                    <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-2" />
                                    <div>
                                        <h4 className="font-medium text-xl mb-1">Over 200,000 Satisfied Clients</h4>
                                        <p className="text-[#F9F9F9] text-sm leading-relaxed">
                                            Our track record speaks for itself - with years of experience under our belt, we have had the pleasure of serving over 200,000 clients and counting.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-5">
                                    <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-2" />
                                    <div>
                                        <h4 className="font-medium text-xl mb-1">Certified and Trusted</h4>
                                        <p className="text-[#F9F9F9] text-sm leading-relaxed">
                                            As a certified and trusted architecture agency, we provide exceptional services and have a reputation for delivering high-quality results
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex gap-5">
                                    <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-2" />
                                    <div>
                                        <h4 className="font-medium text-xl mb-1">Eco-Friendly Architecture</h4>
                                        <p className="text-[#F9F9F9] text-sm leading-relaxed">
                                            Embark on a visual journey along the environment, and witness firsthand the beauty of architectural designs interwoven by nature and human imagination
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='min-h-screen' style={{
                backgroundImage: `url(${globe})`,
                backgroundRepeat: "no-repeat", marginTop: "-110px"
            }}>
            </div>
            <section className="max-w-7xl mx-auto px-6 py-12 mt-[-560px]"
            >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                    <h1 className="text-2xl font-semibold text-gray-900">Branches</h1>
                    <div className="w-16 h-[2px] bg-[#024A3E]"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={image1}
                            alt="Pharmacy branch"
                            className="w-full h-66 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-[16px] font-medium text-gray-900 mb-2">
                                Two linked skyscrapers proposed for casino complex in New York City
                            </h3>
                            <p className="text-sm text-gray-500">Ellen Eberhardt | 26 July 2023</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={image2}
                            alt="Apteka branch"
                            className="w-full h-65 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-[16px] font-medium text-gray-900 mb-2">
                                Crystalline volume added to Audubon Aquarium and Insectarium in New Orleans
                            </h3>
                            <p className="text-sm text-gray-500">Jenna McKnight | 26 July 2023</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={image3}
                            alt="Pharmacy Greece branch"
                            className="w-full h-65 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-[16px] font-medium text-gray-900 mb-2">
                                Foster + Partners designs Equinox hotel for Saudi Arabia’s Amaala resort
                            </h3>
                            <p className="text-sm text-gray-500">Cajsa Carlson | 25 July 2023</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white  rounded-2xl flex flex-col sm:flex-row gap-3 shadow h-[450px] overflow-hidden ">
                    <div className='space-y-3 w-xl flex sm:w-1/2 sm:p-12 justify-center flex-col items-left p-15'>
                        <h3 className='text-4xl sm:text-4xl font-bold'>Lorem ipsum</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</span>
                        <span><button>Enquire Now </button></span>
                    </div>
                    <div className='w-[60%] sm:w-1/2 sm:h-auto'>
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full rounded-r-3xl object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-10 relative">
                <div
                    className="relative bg-white rounded-2xl flex flex-col sm:flex-row gap-3 shadow h-[450px] overflow-hidden"
                    style={{
                        backgroundImage: `url(${image4})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black/70 z-0"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center text-white space-y-8 flex flex-col justify-center mx-auto px-6 sm:px-12">
                        <h3 className="text-3xl sm:text-4xl font-semibold">Lorem ipsum</h3>
                        <p className="max-w-2xl mx-auto text-sm sm:text-base">
                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                        <div className="pt-6">
                            <button className="border bg-white rounded-xl px-6 py-2 text-green-950 font-semibold hover:bg-white hover:text-black transition-all">
                                I Have Question
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}