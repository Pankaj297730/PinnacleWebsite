"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "@heroui/react";
import AppNavbar from "../components/Navbar";
import { User, Users, CheckCircle, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tabContent = {
  about: {
    image:
      "https://images.pexels.com/photos/8293771/pexels-photo-8293771.jpeg?auto=compress&cs=tinysrgb",
    text1:
      "Pinnacle Property has been actively serving the real estate market in Kota and Jaipur with a strong focus on residential plots, land investments, and commercial developments. Over the years, we have built a reputation for helping buyers identify genuine, high–value properties that align with their goals, lifestyle, and budget.",
    text2:
      "We work with a highly dedicated team spread across Kota and Jaipur, ensuring that our clients get accurate guidance, verified property options, and a transparent buying process. Our aim is to simplify real estate for every customer by combining local expertise with professional service.",
  },

  why: {
    image:
      "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb",
    text1:
      "We believe that buying property is not just a transaction — it’s an important life decision. That’s why we bring full transparency, ethical practices, and customer-first service in everything we do. From property search to site visits, documentation, and loan assistance, we take care of the entire journey.",
    text2:
      "Our experience across the Kota and Jaipur markets allows us to thoroughly understand local trends, price movements, and growth pockets. With this knowledge, we help clients make informed decisions that lead to long-term value and secure investments.",
  },

  covers: {
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb",
    text1:
      "We broadly cover all major segments of real estate including Residential Plots, Township Lands, Commercial Spaces, Farmhouse Investments, JDA-Approved Properties, and Pre-launch Projects across Kota and Jaipur. Our network includes top builders, verified landowners, and trusted developers.",
    text2:
      "Whether you’re looking for a future-ready investment, a commercial opportunity, or a family-friendly residential plot, we bring you a wide selection of legally verified listings. Every property suggestion comes with full clarity on approvals, pricing, potential growth, and location advantages.",
  },

  vision: {
    image:
      "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb",
    text1:
      "Our vision is to establish Pinnacle Property as the most trusted and result-driven real estate brand in Kota and Jaipur—one that stands out for integrity, professionalism, and customer satisfaction.",
    text2:
      "We are committed to transforming the real estate experience by introducing modern tools, transparent processes, and personalized guidance. Our long-term goal is to create a safe, smart, and effortless property-buying ecosystem for every customer.",
  },
};




export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "ABOUT US" },
    { id: "why", label: "WHY US" },
    { id: "covers", label: "WE BROADLY COVERS" },
    { id: "vision", label: "OUR VISION" },
  ];

  return (
    <>
    <AppNavbar/>
        <div className="relative w-full h-[300px] md:h-96">
      {/* Background Image */}
      <img
        src="https://wallpaperaccess.com/full/1802107.jpg"
        alt="About Us Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
          About Us
        </h1>
      </div>
    </div>
    <section className="max-w-7xl mx-auto px-4 py-20 font-inter">
      
      {/* Title */}
      <p className="text-center tracking-[0.2em] text-gray-500 text-sm font-bold">
        ABOUT PINNACLE PROPERTY
      </p>

      <h1 className="font-poppins text-center text-3xl md:text-4xl font-bold text-gray-900 mt-3">
        We’ve been providing realestate services from last{" "}
        <span className="text-blue-700">14 years</span>
      </h1>

      {/* TABS */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-10 py-3 rounded-md border text-sm font-medium transition-all
              ${
                activeTab === tab.id
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

  {/* LEFT IMAGE */}
  <div className="w-full">
    <img
      src={tabContent[activeTab].image}
      alt="Real Estate"
      className="w-full rounded-lg shadow"
    />
  </div>

  {/* RIGHT TEXT */}
  <div className="text-gray-700 leading-relaxed text-[15px] md:text-lg pt-7">
    <p className="mb-6">{tabContent[activeTab].text1}</p>

    <p>{tabContent[activeTab].text2}</p>
  </div>

</div>
    </section>


           <section className="w-full bg-[#1F3C88] py-16 md:py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-wide mb-14">
          Your Trusted Real Estate Partner
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#F5F3EF] text-base sm:text-lg rounded-md p-8 shadow-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl border border-[#d9d5c7]">
            <User className="text-[#1F3C88] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#1F3C88]">
              Personalized Search
            </h3>
            <p className="text-gray-700 mt-3">
              Tailored property search designed to match your unique lifestyle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F5F3EF] text-base sm:text-lg rounded-md p-8 shadow-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl border border-[#d9d5c7]">
            <Users className="text-[#1F3C88] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#1F3C88]">
              Experienced Team
            </h3>
            <p className="text-gray-700 mt-3">
              A highly skilled team delivering trust, results, and expertise.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F5F3EF] text-base sm:text-lg rounded-md p-8 shadow-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl border border-[#d9d5c7]">
            <CheckCircle className="text-[#1F3C88] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#1F3C88]">
              Proven Track Record
            </h3>
            <p className="text-gray-700 mt-3 ">
              A strong history of successful projects and happy customers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F5F3EF] text-base sm:text-lg rounded-md p-8 shadow-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl border border-[#d9d5c7]">
            <Handshake className="text-[#1F3C88] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#1F3C88]">
              Client-Centric Approach
            </h3>
            <p className="text-gray-700 mt-3">
              We work with a commitment to your comfort, clarity, and trust.
            </p>
          </div>

        </div>
      </div>
    </section>
        <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side – Image & Name */}
    <div className="flex flex-col items-center md:items-start w-full">
  <img
    src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1763741136/Anil_foloky.png"
    alt="Anil Dadhich"
    className="w-96 h-72 md:w-80 md:h-80 object-cover rounded-xl shadow-xl"
  />

  <h2 className="text-xl md:text-2xl font-bold text-[#1F3C88] mt-5">
    Anil Dadhich
  </h2>

  <p className="text-gray-600 text-base md:text-lg">
    Founder & Director, Pinnacle Properties
  </p>
</div>


        {/* Right Side – Text */}
        <div>
          {/* About Us */}
          <h3 className="text-3xl font-semibold text-black">About us</h3>
          <p className="text-gray-700 mt-3 leading-relaxed text-base sm:text-lg">
            Established in 2019, to contribute significantly to the real estate industry and
            become the region’s most valuable real estate consultants known for deep mutual
            trust, dedication, and quality par excellence.
          </p>

          {/* Why Pinnacle */}
          <h3 className="text-2xl font-semibold mt-6">
            Why Pinnacle Properties and Management Services?
          </h3>

          <ul className="text-gray-700 mt-3 space-y-2 leading-relaxed list-disc pl-5 text-base sm:text-lg">
            <li>
              We are hardworking analysts who watch market trends, know the neighborhoods,
              and are capable of identifying the best opportunities for our clients.
            </li>
            <li>
              We have multiple properties available in prime locations directly from sellers.
            </li>
            <li>
              We believe every property decision involves both head and heart. With
              intelligent execution and honest efforts, we turn decisions into long-lasting
              professional and ethical relationships.
            </li>
          </ul>
        </div>
      </div>

      {/* Message from Director */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-3">Message from the Director</h3>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          This has been another year of excellent progress for the company, delivering
          significantly improved financial returns, while continuing to invest in an organized
          and structured manner towards future growth. For us, excellence is not a destination
          — it is a continuous journey that never ends...
        </p>
      </div>

      {/* Director Profile */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-3">Director’s Profile</h3>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Mr. Anil Dadhich is a modern-day businessman who is focused, ambitious, and
          perseverant. With over 14 years of experience in the real estate industry, he began
          his journey in 2009 with Pioneer Property Management Ltd. Over time, he has worked
          with top real estate groups such as Mahima Group, ARG Developers, and Parshavnath
          Group...
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed text-base sm:text-lg">
          Highly motivated to generate revenue and create real wealth for clients and
          stakeholders, he established Pinnacle Property as a benchmark of excellence and
          customer satisfaction within just 3 years.
        </p>
      </div>
    </section>
       <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Are you searching for right{" "}
            <span className="text-[#1F3C88]">Realestate Deal</span>
          </h2>
          <p className="uppercase tracking-wide text-gray-500 mt-2">
            Our sales process walkthrough from listings to closing
          </p>
        </div>

        {/* MAIN WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE — FLOW IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1763741655/EducationLoan_bjfmfq.png" 
              alt="Sales Flow"
              className="w-full max-w-xl rounded-xl shadow-md"
            />
          </motion.div>

          {/* RIGHT SIDE — STEPS */}
          <div className="space-y-10">

            {/* STEP 1 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="border-b pb-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-400">01</h3>
                <ArrowRight className="text-gray-600" />
              </div>

              <h4 className="text-xl font-semibold mt-2">Search Property</h4>
              <p className="text-gray-600 mt-1">
                Pinnacle Property will help you in searching your Dream Home.
              </p>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-b pb-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-400">02</h3>
                <ArrowRight className="text-gray-600" />
              </div>

              <h4 className="text-xl font-semibold mt-2">
                Loan Process / Documentation
              </h4>
              <p className="text-gray-600 mt-1">
                We will help you in completing legal documentation & choosing the
                right loan company so you never have to rush.
              </p>
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pb-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-400">03</h3>
                <ArrowRight className="text-gray-600" />
              </div>

              <h4 className="text-xl font-semibold mt-2">Final Handover</h4>
              <p className="text-gray-600 mt-1">
                We stay with you until you get possession of your property, with all formalities completed.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  <Footer/>
    </>
    
  );
}
