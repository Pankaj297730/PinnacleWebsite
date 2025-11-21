"use client";

import { useState } from "react";
import Footer from "../components/Footer";

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
    <section className="max-w-7xl mx-auto px-4 py-20 font-inter">
      
      {/* Title */}
      <p className="text-center tracking-[0.2em] text-gray-500 text-sm font-medium">
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

      {/* CONTENT SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* Left Image */}
        <div className="w-full">
          <img
            src="https://images.pexels.com/photos/8293771/pexels-photo-8293771.jpeg?auto=compress&cs=tinysrgb"
            alt="Real Estate"
            className="w-full rounded-lg shadow"
          />
        </div>

        {/* Right Text */}
        <div className="text-gray-700 leading-relaxed text-[15px] md:text-[16px]">

          <p className="mb-6">
            We are working on all key areas of real estate with residential
            offering, land and commercial developments. We have a team of
            professionals based out of different locations to bring the best for
            our clients keeping their needs and budget in mind.
          </p>

          <p>
            Our business philosophy is to create value for our clients by integrating
            accurate and comprehensive information with key services to make property
            buying simple and hassle-free.
          </p>

        </div>

      </div>
    </section>
  <Footer/>
    </>
    
  );
}
