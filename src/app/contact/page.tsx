"use client";

import { useState } from "react";
import AppNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form submitted!");
  }

  return (
    <>
    <AppNavbar/>
    <div className=" min-h-screen font-inter">
      <div className="w-full">
  <img
    src="https://it-expertsolutions.com/images/2020/10/30/contact-us-banner.jpg"
    alt="Contact Banner"
    className="w-full h-96 object-cover"
  />
</div>


      {/* FULL-WIDTH BANNER */}
   

      {/* CONTENT */}
    <div className="flex flex-col lg:flex-row items-start gap-16 max-w-7xl mx-auto px-4 py-20">

  {/* LEFT SIDE */}
{/* LEFT SIDE */}
<div className="flex-1 space-y-10">

  {/* Heading + intro */}
  <div>
    <h1 className="text-5xl
 font-extrabold from-black to-gray-600 bg-clip-text text-transparent tracking-tight">
      Contact Us
    </h1>

    <p className="text-gray-500 mt-4 text-lg leading-relaxed max-w-lg">
      Need help with buying a plot, project details, pricing, or partnerships?  
      Our team is here to guide you with complete transparency.
    </p>
  </div>

  {/* Info */}
<div className="space-y-4">

  {/* Email + Phone (One Line) */}
  <div className="items-center gap-6 text-base md:text-lg text-gray-700">

    {/* Email */}
    <div className="flex items-center gap-2 pb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0L12 12.75 2.25 6.75"
        />
      </svg>
      <span>info@pinnacleproperties.in</span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 4.5l3-1.5a2.25 2.25 0 012.25.375L9.75 5.25a2.25 2.25 0 01.75 1.688V8.25c0 .563-.188 1.125-.563 1.5l-1.312 1.312a10.5 10.5 0 005.25 5.25l1.313-1.313c.375-.375.937-.562 1.5-.562h1.312A2.25 2.25 0 0119.5 15l1.5 3a2.25 2.25 0 01-.375 2.25l-1.5 1.5A3.75 3.75 0 0116.5 23.25C9.063 23.25 2.25 16.437 2.25 9c0-1.125.375-2.25.938-3.188l1.5-1.5A2.25 2.25 0 014.5 3l-2.25 1.5z"
        />
      </svg>
      <span className="font-black">+91-89556 65566</span>
    </div>

  </div>

  {/* RERA */}
  <div className="flex items-center gap-2 text-base md:text-lg text-gray-700">
    <span className="font-semibold text-blue-600">RERA:</span>
    <span>RAJ/A/2021/2482</span>
  </div>

  {/* Support */}


</div>




  {/* LOCATIONS SECTION (New) */}
<div className="flex flex-col sm:flex-row gap-10">

  {/* Jaipur */}
  <div className="space-y-2 flex-1">
    <div className="flex items-center gap-2">
     

      {/* Heading */}
      <p className="text-blue-600 font-bold uppercase tracking-wide text-lg md:text-xl">
        Head Office — Jaipur
      </p>
    </div>

    {/* Address */}
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      Pinnacle Properties HQ<br />
      Jagatpura, Jaipur — 302017<br />
      India
    </p>
  </div>

  {/* Kota */}
  <div className="space-y-2 flex-1">
    <div className="flex items-center gap-2">
    

      {/* Heading */}
      <p className="text-blue-600 font-bold uppercase tracking-wide text-lg md:text-xl">
        Branch Office — Kota
      </p>
    </div>

    {/* Address */}
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      Pinnacle Properties — Branch Office<br />
      Kunhadi, Kota — 324008<br />
      India
    </p>
  </div>

</div>




</div>


  {/* RIGHT SIDE — FORM */}
  <div className="flex-1">
    <div className="bg-white/70 backdrop-blur-2xl p-10 rounded-2xl shadow-2xl border border-white/40 max-w-md mx-auto w-full">

      <h2 className="text-2xl font-bold mb-1 text-gray-900">Request a Callback</h2>
      <p className="text-gray-500 mb-6">Our team will reach out shortly</p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="modern-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="modern-input"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="modern-input"
        />

        {/* Phone */}
        <div className="flex gap-2">
          <div className="px-4 flex items-center bg-gray-100 border border-gray-300 rounded-xl font-semibold text-gray-600">
            +91
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="modern-input flex-1 rounded-l-none"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Tell us about your requirement"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="modern-input resize-none"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg transition-all"
        >
          Send Message
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting, you agree to our{" "}
        <span className="text-blue-600 underline cursor-pointer">Terms</span> &{" "}
        <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
      </p>

    </div>
  </div>
</div>

<div className="w-full bg-[#F8F5F0] py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

    {/* LEFT TEXT */}
    <div className="text-center md:text-left max-w-2xl">
      <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
        Connect with us on WhatsApp for <br />
        <span className="text-blue-700">
          quick responses and personalized
          <br /> assistance!
        </span>
      </h2>
    </div>

    {/* RIGHT BUTTON */}
    <a
      href="https://wa.me/918955665566"
      target="_blank"
      className="bg-blue-700 hover:bg-blue-800 text-white font-semibold font-inter px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75zm4.455 14.226c-.17.48-.984.92-1.38.978-.353.053-.81.075-1.309-.081-.301-.095-.685-.22-1.183-.431-2.087-.909-3.44-3.028-3.546-3.174-.106-.146-.846-1.126-.846-2.148 0-1.022.534-1.524.724-1.732.19-.208.422-.26.563-.26.14 0 .281.004.403.007.129.003.303-.05.474.363.17.413.579 1.426.63 1.53.053.106.088.23.017.376-.07.146-.105.23-.21.356-.106.129-.223.288-.318.386-.106.106-.216.222-.093.433.122.208.543.892 1.166 1.447.801.713 1.476.935 1.687 1.041.211.105.333.088.455-.053.122-.14.522-.608.662-.817.14-.208.281-.176.474-.106.193.07 1.225.578 1.435.683.21.105.35.158.403.246.052.088.052.508-.118.988z" />
      </svg>
      WhatsApp Now
    </a>

  </div>
</div>

    </div>
      <Footer/>
    </>
  );
}


/* Tailwind Custom Input Class */
const input =
  "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500";

