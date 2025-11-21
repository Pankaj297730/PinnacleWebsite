"use client";

import { useEffect, useRef, useState } from "react";

export default function StepsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Trigger animation when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      title: "01. Explore & Select",
      desc: "Browse our listings and choose your ideal property.",
    },
    {
      number: "2",
      title: "02. Consultation",
      desc: "Connect with our team for a personalized walkthrough and detailed information.",
    },
    {
      number: "3",
      title: "03. Reserve Your Spot",
      desc: "Make a booking by paying the token amount to secure your choice.",
    },
    {
      number: "4",
      title: "04. Finalize & Own",
      desc: "Complete the paperwork, payment, and become the proud owner of your new property!",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-4 py-24 font-inter"
    >
      {/* TOP TEXT */}
      <p className="tracking-[0.25em] text-gray-500 text-sm md:text-base font-semibold">
        HOW WE WORKS
      </p>

      <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
        4-Step Process to Book<br />
       <span className="text-blue-600"> Your Property with Pinnacle Properties</span> 
      </h2>

      {/* Steps */}
      <div className="relative mt-20">

        {/* Horizontal Line */}
        <div className="absolute top-7 left-0 right-0 h-[2px] bg-gray-300"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center transition-all duration-700 delay-${
                index * 150
              } 
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Step Number Circle */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 text-2xl font-bold 
                  transition-all duration-300 cursor-pointer
                  ${
                    visible ? "scale-100" : "scale-75 opacity-0"
                  }
                  hover:bg-blue-600 hover:text-white hover:border-blue-600
                `}
              >
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="font-semibold text-lg md:text-xl text-gray-900 mt-6">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed max-w-xs">
                {step.desc}
              </p>

              {/* Link */}
       
            </div>
          ))}
        </div>
      </div>

      {/* Faded Background Number */}
    {/* Faded Background Number + Label */}
<div className="hidden md:flex flex-col items-end absolute right-10 top-20 select-none">
  
  {/* STEPS Label */}
  <span className="text-sm font-semibold tracking-[0.3em] text-gray-800">
    – STEPS
  </span>

  {/* Big ‘04’ */}
  <span className="text-[140px] font-bold text-gray-600 opacity-40 leading-none -mt-4">
    04
  </span>
</div>

    </section>
  );
}
