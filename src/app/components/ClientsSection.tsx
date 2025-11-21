"use client";

import { useEffect, useRef, useState } from "react";

export default function ClientsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Animation on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Dummy logos — replace with your real builders' logos
  const logos = [
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722160/2_1_wcxm6r.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722160/1_1_qg9efc.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722160/5_1_ajbnpi.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722159/3_1_o7a4on.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722159/3_1_o7a4on.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722159/10_sgy4zn.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722159/21_fixqt9.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722159/15_k3for3.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722159/6_1_pc3xk1.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722158/11_i3mhgl.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722158/16_p7bscc.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722158/12_gjx8to.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722158/17_dek2nf.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722158/13_whmuu1.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722157/14_fcp0pi.jpg",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722157/20_ysbs22.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722157/19_d5vcft.png",
    "https://res.cloudinary.com/dbv77rbsv/image/upload/v1763722157/18_ym3gqx.webp",

  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-2" ref={ref}>
      {/* Title */}
      <div
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="tracking-[0.3em] text-gray-500 text-sm font-semibold text-center">
          OUR CLIENTS
        </p>

        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 text-center mt-2">
          Trusted by Leading <span className="text-blue-600">Developers</span>
        </h2>

        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          We take pride in partnering with the most reputable builders and
          developers across the region — helping them sell and market their
          flagship projects with trust and transparency.
        </p>
      </div>

      {/* Logo Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 mt-14 transition-all duration-700 delay-200 "
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <img
              src={logo}
              alt="Client Logo"
              className="h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
