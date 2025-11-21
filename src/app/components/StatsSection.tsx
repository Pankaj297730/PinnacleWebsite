"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const stats = [
    { number: 50, label: "PROJECTS SOLD" },
    { number: 1, label: "MILLION SQ. FT. LAND AREA SOLD" },
    { number: 4000, label: "TOTAL PROPERTY HANDOVERS" },
    { number: 3500, label: "HAPPY FAMILIES LIVING" },
  ];

  // Count-up animation
  const useCountUp = (end: number) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!startCount) return;

      let start = 0;
      const duration = 2000; // 2 seconds animation
      const step = 16; // smooth 60fps

      const increment = end / (duration / step);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setValue(end);
          clearInterval(counter);
        } else {
          setValue(Math.ceil(start));
        }
      }, step);

      return () => clearInterval(counter);
    }, [startCount, end]);

    return value;
  };

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1F3C88] py-14 md:py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => {
          const countValue = useCountUp(item.number);

          return (
            <div key={index}>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins tracking-wide">
                {countValue.toString().padStart(2, "0")}
              </h2>
              <p className="mt-2 text-xs md:text-sm tracking-widest font-semibold text-gray-200 uppercase">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
