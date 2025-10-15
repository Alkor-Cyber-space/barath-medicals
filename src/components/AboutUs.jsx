import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import image from '../assets/playicon.png';
import cover from '../assets/cover.png';
import vector from '../assets/Vector.png';
import vector2 from '../assets/Vector2.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import globe from '../assets/globe.png';
import video from '../assets/vid.mp4';
import logo1 from '../assets/logo1.png';
import image5 from '../assets/image5.png';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 py-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-10">
                        {/* Play Button */}
                        <div className="flex flex-col gap-3">
                            <img src={image} className="w-20 h-20" alt="" />
                        </div>

                        {/* Line */}
                        <div className="w-50 border-t-2 border-[#024A3E] mt-2"></div>

                        {/* Header Text */}
                        <div className="flex">
                            <p className="text-[#024A3E] leading-relaxed tracking-wide w-4xl text-lg">
                                To become a nationwide network of trusted and accessible medical stores,
                                empowering local entrepreneurs while contributing to the health and wellness of millions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---------- ABOUT US SECTION ---------- */}
                <div className="max-w-10xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20">
                    {/* LEFT HALF — Image with background lines */}
                    <div className="relative flex justify-center items-center">
                        {/* Decorative Line 1 */}
                        <img
                            src={vector}
                            alt="Background Design"
                            className="absolute bottom-[-10%] right-0 w-80 h-80 object-contain pointer-events-none opacity-80"
                        />

                        {/* Main Image */}
                        <div className="relative z-10 border-4 border-gray-300 rounded-lg overflow-hidden w-[85%] shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop"
                                alt="Pharma interior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Line 2 */}
                        <img
                            src={vector2}
                            alt="Background Design"
                            className="absolute top-[-7%] left-0 w-80 h-80 object-contain pointer-events-none opacity-80"
                        />
                    </div>

                    {/* RIGHT HALF — About Us Text */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            25 years of experience in Pharma.
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Welcome to Bharath Medplus India Private Limited, your trusted partner in
                            healthcare and well-being. With a passion for providing high-quality
                            pharmaceutical products and personalized care, we are proud to offer a
                            reliable and accessible medical solution for communities everywhere.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            As a leading medical store franchise, we focus on empowering local
                            businesses while ensuring customers have access to the best medicines,
                            health products, and services available.
                        </p>
                    </div>
                </div>

                {/* ---------- WHY CHOOSE US SECTION ---------- */}
                <div className="max-w-10xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20">
                    {/* LEFT SIDE — Why Choose Us TEXT */}
                    <div
                        className="text-white rounded-xl px-10 py-10 shadow-xl relative z-10"
                        style={{
                            backgroundImage: `url(${cover})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-3xl font-semibold mb-6">Why Choose Us</h3>

                        <div className="space-y-5">
                            {[
                                {
                                    title: 'Wide Range of Products',
                                    desc: 'From over-the-counter medications to prescription drugs, wellness products, and medical devices, we offer a comprehensive selection to meet every customer’s needs.',
                                },
                                {
                                    title: 'Trusted Brand',
                                    desc: 'Our franchise is built on the pillars of trust and excellence. Customers rely on us for accurate product knowledge and quality assurance.',
                                },
                                {
                                    title: 'Convenient and Accessible',
                                    desc: 'We make it easier for people to access essential healthcare products, whether through our physical store locations or through our growing online presence.',
                                },
                                {
                                    title: 'Training and Support',
                                    desc: 'As a part of our franchise network, you’ll receive extensive training and ongoing support to ensure your business operates smoothly and effectively.',
                                },
                                {
                                    title: 'Community-Centered',
                                    desc: 'We take pride in being an active part of local communities. Our franchisees are key contributors to community health and well-being.',
                                },
                                {
                                    title: 'Guidance and Assistance',
                                    desc: 'We provide guidance and assistance to get government licenses and provide a fully furnished franchisee setup.',
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-5">
                                    <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-2" />
                                    <div>
                                        <h4 className="font-medium text-xl mb-1">{item.title}</h4>
                                        <p className="text-[#F9F9F9] text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE — IMAGE WITH BACKGROUND LINES */}
                    <div className="relative flex justify-center items-center">
                        <img
                            src={vector}
                            alt="Background Design"
                            className="absolute -bottom-10 right-0 w-80 h-80 object-contain pointer-events-none opacity-80"
                        />
                        <div className="relative z-10 border-4 border-gray-300 rounded-lg overflow-hidden w-[85%] shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop"
                                alt="Modern Interior Design"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <img
                            src={vector2}
                            alt="Background Design"
                            className="absolute top-[-8%] left-0 w-80 h-80 object-contain pointer-events-none opacity-80"
                        />
                    </div>
                </div>
            </div>

            {/* ---------- GLOBE BACKGROUND SECTION ---------- */}
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url(${globe})`,
                    backgroundRepeat: "no-repeat",
                    marginTop: "-110px",
                }}
            ></div>

            {/* ---------- BRANCHES SECTION ---------- */}
            <section className="max-w-7xl mx-auto px-6 py-12 mt-[-560px]">
                <div className="flex items-center gap-4 mb-10">
                    <h1 className="text-2xl font-semibold text-gray-900">Branches</h1>
                    <div className="w-16 h-[2px] bg-[#024A3E]"></div>
                </div>

                <div className="flex gap-8 overflow-x-auto scrollbar-thumb-gray-300 scrollbar-track-transparent py-4 scrollbar-none">
                    {[{
                        image: image1,
                        title: "Pondicherry",
                        address: "No.: 26 Marie Oulgaret Main Road, Ganapathy Nagar",
                    }, {
                        image: image2,
                        title: "Palakkad",
                        address: "283, Krishna Complex, Marutharoad, Kootupatha, Palakkad",
                    }, {
                        image: image3,
                        title: "Karur",
                        address: "No.70/10 Pon Nagar, Thanthonimalai Post, Karur 6390005",
                    }, {
                        image: image5,
                        title: "Chennai",
                        address: "No.157e10, M.t.h. Road, Ambattur Tamil Nadu 600049",
                    }].map((branch, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80 scrollbar-none"
                        >
                            <img src={branch.image} alt={branch.title} className="w-full h-60 object-cover" />
                            <div className="p-5">
                                <h3 className="text-[16px] font-medium text-gray-900 mb-2">{branch.title}</h3>
                                <p className="text-sm text-gray-800">{branch.address}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* ---------- FRANCHISE SECTION ---------- */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row overflow-hidden border-3 border-green-900 w-full max-w-7xl mx-auto">
                    {/* Left Section */}
                    <div className="bg-[#024A3E] flex flex-col justify-center items-center text-center p-10 sm:w-1/2 h-[450px] space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-1">
                            <img src={logo1} alt="" />
                        </h2>

                        <h3 className="text-2xl lg:text-3xl sm:text-2xl font-semibold text-white">
                            Franchise Proposal
                        </h3>

                        <div className="mt-2">
                            <p className="text-white font-semibold mb-3 text-sm">
                                Franchise Investment Options
                            </p>
                            <div className="border-3 border-white rounded-lg px-10 py-3 text-white">
                                <ul className="space-y-2">
                                    <li className="flex justify-between w-48">
                                        <span className='font-Inter'>Type 1</span>
                                        <span className='font-Inter'>₹ 16 Lakhs</span>
                                    </li>
                                    <li className="flex justify-between w-48">
                                        <span className='font-Inter'>Type 2</span>
                                        <span className='font-Inter'>₹ 16 Lakhs</span>
                                    </li>
                                    <li className="flex justify-between w-48">
                                        <span className='font-Inter'>Type 3</span>
                                        <span className='font-Inter'>₹ 16 Lakhs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 text-white">
                            <p className="text-sm font-Inter">Channel Partnership</p>
                            <p className="font-semibold py-2 font-Inter text-lg mt-1">
                                Profit Sharing Model : <span className="font-bold">50-50</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Section (Video) */}
                    <div className="sm:w-1/2 h-[450px]">
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full  object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ---------- FINAL CTA SECTION ---------- */}
            {/* <section className="max-w-7xl mx-auto px-6 py-10 relative"> */}
                {/* <div
                    className="relative bg-white rounded-2xl flex flex-col sm:flex-row gap-3 shadow h-[450px] overflow-hidden"
                    style={{
                        backgroundImage: `url(${image4})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                > */}
                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-black/70 "></div> */}

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-md p-8 max-w-6xl mx-auto">
  <h2 className="text-center text-2xl font-semibold text-green-900 mb-8">
    Franchise Support & Benefits
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Column */}
    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Customer Care</h3>
      <p className="text-gray-600 text-sm">24/7 support system for all franchisees</p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Staff Training & Sales Support</h3>
      <p className="text-gray-600 text-sm">Skilled staff training for efficient operations.</p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">1-Year Maintenance Support</h3>
      <p className="text-gray-600 text-sm">
        Rent, EB (Electricity Bills), and Pharmacist Salary covered for the first year.
      </p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Online Order Integration</h3>
      <p className="text-gray-600 text-sm">
        Franchise store will be connected to Bharath MedPlus online order system.
      </p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Expiry & Damage Settlement</h3>
      <p className="text-gray-600 text-sm">Support in managing expired and damaged medicines.</p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Branding & Marketing</h3>
      <p className="text-gray-600 text-sm">
        Professional marketing support to promote the store.
      </p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Free Billing Software & Infrastructure</h3>
      <p className="text-gray-600 text-sm">
        Complete setup & documentation (Drug License, GST, etc.). Supply of medicines
        (Branded, OTC, Generic) by Bharath MedPlus.
      </p>
    </div>

    <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Doctor & Pharmacist Support</h3>
      <p className="text-gray-600 text-sm">
        Assistance in arranging Pharmacist and Doctor (if required).
      </p>
    </div>
  </div>
</div>

                </div>
            // </section>
        // </div>
    );
}
