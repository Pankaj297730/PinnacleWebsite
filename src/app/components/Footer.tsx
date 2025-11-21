import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1F3C88] text-white font-inter pt-28 pb-12">

      {/* WAVE ON TOP */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="M0,128 C160,256 320,0 480,64 C640,128 800,256 960,192 C1120,128 1280,0 1440,96 V0 H0 Z"
    />
  </svg>
</div>


      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* LEFT */}
        <div>
          <h3 className="font-poppins text-xl font-semibold mb-6">
            Explore Pinnacle Property
          </h3>

          <ul className="space-y-3 text-gray-200 text-sm">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/properties" className="hover:text-white">Our Properties</a></li>
            <li><a href="/pre-launch" className="hover:text-white">Pre-Launch Projects</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="font-poppins text-xl font-semibold mb-6">
            Stay Updated With Us
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Get early access to pre-launch projects, exclusive deals & property insights.
          </p>

          <p className="text-gray-400 text-xs mb-4 leading-relaxed">
            By subscribing, you agree to receive updates about properties & offers.
            Read our <span className="underline cursor-pointer">privacy policy</span>.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md outline-white border-white border-2 text-white focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-[#0A2A5A] font-bold rounded-md hover:bg-gray-200 transition">
              SIGN UP
            </button>
          </div>
        </div>

        {/* RIGHT */}
   <div>
  <h3 className="font-poppins text-xl font-semibold mb-6">
    Connect With Us
  </h3>

  {/* Icons in row, each icon with text below */}
<div className="flex items-start gap-8 mb-6">

  {/* Facebook */}
  <div className="flex flex-col items-center text-center">
    <a
      href="https://facebook.com/pinnacle"
      target="_blank"
      className="hover:text-gray-300 transition"
    >
      <Facebook className="w-6 h-6" />
    </a>
    <a
      href="https://facebook.com/pinnacle"
      target="_blank"
      className="text-xs text-gray-300 mt-2 hover:underline"
    >
      Facebook
    </a>
  </div>

  {/* Instagram */}
  <div className="flex flex-col items-center text-center">
    <a
      href="https://instagram.com/pinnacle"
      target="_blank"
      className="hover:text-gray-300 transition"
    >
      <Instagram className="w-6 h-6" />
    </a>
    <a
      href="https://instagram.com/pinnacle"
      target="_blank"
      className="text-xs text-gray-300 mt-2 hover:underline"
    >
      Instagram
    </a>
  </div>

  {/* Twitter */}
  <div className="flex flex-col items-center text-center">
    <a
      href="https://twitter.com/pinnacle"
      target="_blank"
      className="hover:text-gray-300 transition"
    >
      <Twitter className="w-6 h-6" />
    </a>
    <a
      href="https://twitter.com/pinnacle"
      target="_blank"
      className="text-xs text-gray-300 mt-2 hover:underline"
    >
      Twitter
    </a>
  </div>

  {/* YouTube */}
  <div className="flex flex-col items-center text-center">
    <a
      href="https://youtube.com/pinnacle"
      target="_blank"
      className="hover:text-gray-300 transition"
    >
      <Youtube className="w-6 h-6" />
    </a>
    <a
      href="https://youtube.com/pinnacle"
      target="_blank"
      className="text-xs text-gray-300 mt-2 hover:underline"
    >
      YouTube
    </a>
  </div>

</div>

  <p className="text-gray-300 text-sm leading-relaxed">
    Follow us for updates, project announcements & real-estate insights.
  </p>
</div>

      </div>

      {/* BOTTOM LINE */}
      <div className="max-w-7xl mx-auto px-6 mt-14 flex flex-col md:flex-row justify-between text-gray-300 text-xs md:text-sm gap-4">
        <p>© {new Date().getFullYear()} Pinnacle Properties. All rights reserved.</p>
        <p className="max-w-lg">
          Pinnacle Properties deals only in genuine & RERA-registered projects.
          Information shown is for guidance only.
        </p>
      </div>
    </footer>
  );
}
