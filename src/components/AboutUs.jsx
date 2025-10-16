import React, { useRef } from "react";
import { CircleCheckBig } from "lucide-react";
import image from "../assets/playicon1.jpg";
import cover from "../assets/cover.png";
import vector from "../assets/Vector.png";
import vector2 from "../assets/Vector2.png";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
import image5 from "../assets/image 5.png";
import globe from "../assets/globe.png";
import video from "../assets/vid.mp4";
import logo1 from "../assets/logo1.png";
import phrimg1 from "../assets/phr_image1.jpeg";
import phrimg2 from "../assets/phr_image.jpeg";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function AboutUs() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300;
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const branches = [
        {
            image: image1,
            title: "Pondicherry",
            address: "No.: 26 Marie Oulgaret Main Road, Ganapathy Nagar",
        },
        {
            image: image2,
            title: "Palakkad",
            address: "283, Krishna Complex, Marutharoad, Kootupatha, Palakkad",
        },
        {
            image: image3,
            title: "Karur",
            address: "No.70/10 Pon Nagar, Thanthonimalai Post, Karur 6390005",
        },
        {
            image: image5,
            title: "Kollam",
            address: "VI/1130, 1133, Mayanadu road, Kottayam, Kollam - 691571",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-6 sm:py-9">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                {/* ---------- HEADER SECTION ---------- */}
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
                        {/* Play Icon */}
                        <div>
                            <img
                                src={image}
                                className="w-16 sm:w-20 h-16 sm:h-20 mx-auto sm:mx-0"
                                alt="Play Icon"
                            />
                        </div>

                        {/* Line */}
                        <div className="hidden sm:block w-40 border-t-2 border-[#024A3E] mt-2"></div>

                        {/* Text */}
                        <p className="text-[#024A3E] leading-relaxed tracking-wide text-base sm:text-lg max-w-2xl">
                            To become a nationwide network of trusted and accessible medical
                            stores, empowering local entrepreneurs while contributing to the
                            health and wellness of millions.
                        </p>
                    </div>
                </div>

                {/* ---------- ABOUT US SECTION ---------- */}
                <div className="grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
                    {/* LEFT IMAGE */}
                    <div className="relative flex justify-center items-center">
                        <img
                            src={vector}
                            alt="Background line"
                            className="absolute bottom-[-10%] right-0 w-56 sm:w-72 md:w-80 opacity-70 pointer-events-none"
                        />
                        <div className="relative z-10 border-4 border-gray-300 rounded-lg overflow-hidden w-[90%] max-w-md shadow-lg">
                            <img
                                src={phrimg1}
                                alt="Pharma interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <img
                            src={vector2}
                            alt="Background line"
                            className="absolute top-[-8%] left-0 w-56 sm:w-72 md:w-80 opacity-70 pointer-events-none"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            About Us
                        </h2>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                            25 years of experience in Pharma.
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Welcome to Bharath Medplus India Private Limited, your trusted
                            partner in healthcare and well-being. We provide high-quality
                            pharmaceutical products and personalized care for communities.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            As a leading medical store franchise, we empower local
                            entrepreneurs while ensuring customers have access to the best
                            medicines, health products, and services available.
                        </p>
                    </div>
                </div>

                {/* ---------- WHY CHOOSE US ---------- */}
                <div className="grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
                    {/* LEFT TEXT BOX */}
                    <div
                        className="text-white rounded-xl px-6 sm:px-10 py-10 shadow-xl"
                        style={{
                            backgroundImage: `url(${cover})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
                            Why Choose Us
                        </h3>

                        <div className="space-y-5">
                            {[
                                {
                                    title: "Wide Range of Products",
                                    desc: "From OTC medicines to prescription drugs, wellness products, and medical devices — we meet every customer’s needs.",
                                },
                                {
                                    title: "Trusted Brand",
                                    desc: "Our brand is built on trust, knowledge, and quality service.",
                                },
                                {
                                    title: "Convenient and Accessible",
                                    desc: "Easy access to essential healthcare products through stores and online.",
                                },
                                {
                                    title: "Training and Support",
                                    desc: "We offer complete franchise training and operational support.",
                                },
                                {
                                    title: "Community-Centered",
                                    desc: "We’re part of local communities, contributing to public health.",
                                },
                                {
                                    title: "Guidance and Assistance",
                                    desc: "Full help with government licenses and store setup.",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <CircleCheckBig className="w-5 h-5 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-lg sm:text-xl mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center items-center">
                        <img
                            src={vector}
                            alt="Background line"
                            className="absolute -bottom-10 right-0 w-56 sm:w-72 md:w-80 opacity-70 pointer-events-none"
                        />
                        <div className="relative z-10 border-4 border-gray-300 rounded-lg overflow-hidden w-[90%] max-w-md shadow-lg">
                            <img
                                src={phrimg2}
                                alt="Interior Design"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <img
                            src={vector2}
                            alt="Background line"
                            className="absolute top-[-8%] left-0 w-56 sm:w-72 md:w-80 opacity-70 pointer-events-none"
                        />
                    </div>
                </div>
            </div>

            {/* ---------- GLOBE SECTION ---------- */}
            <div
                className="w-full min-h-[400px] sm:min-h-[600px] bg-no-repeat bg-left bg-contain mt-[-80px]"
                style={{
                    backgroundImage: `url(${globe})`,
                    backgroundPosition: "left center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
            ></div>

            {/* ---------- BRANCHES SECTION ---------- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 -mt-48 sm:-mt-[420px] relative">
                {/* Title */}
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Branches</h1>
                    <div className="w-16 h-[2px] bg-[#024A3E]"></div>
                </div>

                {/* Arrows */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#024A3E] text-white p-2 rounded-full shadow-lg hover:bg-[#036356] transition"
                >
                    <IoIosArrowDropleft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#024A3E] text-white p-2 rounded-full shadow-lg hover:bg-[#036356] transition"
                >
                    <IoIosArrowDropright className="w-6 h-6" />
                </button>

                {/* Scrollable Row */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth py-4 scrollbar-hide"
                >
                    {branches.map((branch, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex-shrink-0 w-72 sm:w-80"
                        >
                            <img
                                src={branch.image}
                                alt={branch.title}
                                className="w-full h-48 sm:h-60 object-cover"
                            />
                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                    {branch.title}
                                </h3>
                                <p className="text-sm text-gray-700">{branch.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- FRANCHISE SECTION ---------- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row overflow-hidden border-2 border-green-900">
                    {/* Left */}
                    <div className="bg-[#024A3E] flex flex-col justify-center items-center text-center p-8 sm:p-10 w-full sm:w-1/2 h-[400px] sm:h-[450px] space-y-4">
                        <img src={logo1} alt="Logo" className="w-24 sm:w-28 mx-auto" />
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                            Franchise Proposal
                        </h3>

                        <div className="mt-2">
                            <p className="text-white font-semibold mb-3 text-sm sm:text-base">
                                Franchise Investment Options
                            </p>
                            <div className="border-2 border-white rounded-lg px-6 sm:px-10 py-3 text-white">
                                <ul className="space-y-2 text-sm sm:text-base">
                                    <li className="flex justify-between w-48">
                                        <span>Type 1</span>
                                        <span>₹ 16 Lakhs</span>
                                    </li>
                                    <li className="flex justify-between w-48">
                                        <span>Type 2</span>
                                        <span>₹ 12 Lakhs</span>
                                    </li>
                                    <li className="flex justify-between w-48">
                                        <span>Type 3</span>
                                        <span>₹ 8 Lakhs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-white mt-4">
                            <p className="text-sm">Channel Partnership</p>
                            <p className="font-semibold py-2 text-base sm:text-lg">
                                Profit Sharing Model:{" "}
                                <span className="font-bold">50-50</span>
                            </p>
                        </div>
                    </div>

                    {/* Right (Video) */}
                    <div className="w-full sm:w-1/2 h-[250px] sm:h-[450px]">
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ---------- FRANCHISE SUPPORT ---------- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <h2 className="text-center text-2xl sm:text-3xl font-semibold text-green-900 mb-8">
                        Franchise Support & Benefits
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            ["Customer Care", "24/7 support system for all franchisees."],
                            [
                                "Staff Training & Sales Support",
                                "Skilled staff training for efficient operations.",
                            ],
                            [
                                "1-Year Maintenance Support",
                                "Rent, EB, and Pharmacist Salary covered for 1 year.",
                            ],
                            [
                                "Online Order Integration",
                                "Connected to Bharath MedPlus online system.",
                            ],
                            [
                                "Expiry & Damage Settlement",
                                "Help managing expired or damaged medicines.",
                            ],
                            [
                                "Branding & Marketing",
                                "Professional marketing & promotion support.",
                            ],
                            [
                                "Free Billing Software & Infrastructure",
                                "Complete setup, licenses, and medicine supply.",
                            ],
                            [
                                "Doctor & Pharmacist Support",
                                "Help arranging Pharmacist and Doctor if needed.",
                            ],
                        ].map(([title, desc], i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {title}
                                </h3>
                                <p className="text-gray-600 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
