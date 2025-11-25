"use client";

import AppNavbar from "@/app/components/Navbar";
import StatsSection from "./components/StatsSection";
import StepsSection from "./components/StepsSection";
import ClientsSection from "./components/ClientsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <AppNavbar />

      {/* VIDEO HERO SECTION */}
      <div className="relative w-full h-[50vh] overflow-hidden">

        {/* Background Video */}
        <video
          src="/slider1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Overlay (optional but looks premium) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-lexend text-white text-2xl md:text-4xl font-bold leading-tight drop-shadow-xl">
            Where Every Property Finds Its Perfect Owner
          </h1>

          <p className="mt-4 text-white/90 text-lg md:text-lg font-inter max-w-2xl drop-shadow">
            Discover the most trusted platform for buying and selling properties with transparency and ease.
          </p>
        </div>
      </div>
      <section className="max-w-4xl mx-auto text-center px-4 pt-10">
  <h1 className="font-lexend text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
    Invest in Your Future, Invest in Your City
  </h1>

  <p className="text-gray-600 mt-1 text-base md:text-lg font-inter">
    Own the home of your dreams. Secure your future in the city you love.
  </p>
</section>

        <section className="max-w-7xl mx-auto px-2 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* JAIPUR CARD */}
    <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg 
                    transition-all duration-500 hover:shadow-2xl">

      <img
        src="https://static2.tripoto.com/media/transfer/img/OgData/1511856965_ravi_shekhar_365763_fotor.jpg"
        alt="Jaipur"
        className="w-full h-96 object-cover transition-transform duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

      {/* Text */}
      <h2 className="absolute inset-0 flex items-center justify-center 
                     text-white font-lexend text-6xl font-extrabold tracking-wide 
                     transition-all duration-500 group-hover:scale-110">
        JAIPUR
      </h2>
    </div>

    {/* KOTA CARD */}
    <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg 
                    transition-all duration-500 hover:shadow-2xl">

      <img
        src="https://miro.medium.com/v2/resize:fit:1200/1*DdLvMR0PPtWxZtcUTUEp7A.jpeg"
        alt="Kota"
        className="w-full h-96 object-cover transition-transform duration-700 "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

      {/* Text */}
      <h2 className="absolute inset-0 flex items-center justify-center 
                     text-white font-lexend text-6xl font-extrabold tracking-wide 
                     transition-all duration-500 group-hover:scale-110">
        KOTA
      </h2>
    </div>

  </div>
</section>


      {/* ------------------- OUR COMPANY SECTION ------------------- */}
      <section className="max-w-4xl mx-auto text-center px-4">
        
        <p className="tracking-[0.2em] text-gray-500 text-xl mb-4 font-bold">
          OUR COMPANY
        </p>

        <h2 className="font-lexend text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Celebrate the pride of reaching{" "}
          <span className="text-blue-600">new heights</span>
          <br />
          with <span className="text-blue-600">Pinnacle Properties</span>
        </h2>
      </section>

      {/* ------------------- EXPERIENCE SECTION ------------------- */}
      <section className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT: NUMBER */}
        <div className="flex flex-col items-center md:items-start">
<div className="flex items-start gap-6">
  
  {/* BIG 16 */}
  <h1 className="text-[140px] md:text-[180px] font-bold text-[#1F3C88] leading-none font-lexend">
    16
  </h1>

  {/* STACKED TEXT */}
  <div className="flex flex-col justify-center pt-10">
    <span className="text-gray-500 tracking-[0.2em] text-sm font-semibold uppercase">
      Years’
    </span>
    <span className="text-gray-500 tracking-[0.2em] text-sm font-semibold uppercase">
      Experience
    </span>
    <span className="text-gray-500 tracking-[0.2em] text-sm font-semibold uppercase">
      In Real
    </span>
    <span className="text-gray-500 tracking-[0.2em] text-sm font-semibold uppercase">
      Estate
    </span>
  </div>

</div>

{/* Subtitle */}
<p className="mt-6 font-semibold text-gray-800 text-center md:text-left text-lg">
  Trusted Experts in Real Estate Solutions
</p>




        </div>

        {/* RIGHT: DESCRIPTION */}
        <div className="text-gray-600 leading-relaxed text-base md:text-lg">
          <p>
            We specialize in all key areas of real estate, offering residential,
            land, and commercial developments. Our team, located across various regions,
            ensures the best solutions for clients, keeping their needs and budget in mind,
            making property buying simple and hassle-free.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center text-blue-700 font-semibold hover:underline"
          >
            Discover now →
          </a>
        </div>

      </section>
      <StatsSection/>
      <StepsSection/>
      <ClientsSection/>
      <Footer/>
    </>
  );
}
