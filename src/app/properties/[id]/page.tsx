import { use } from "react";
import properties from "@/app/data/properties.json";
import { FiCamera, FiMail, FiMapPin } from "react-icons/fi";
import PropertyGallery from "@/app/components/PropertyGallery";
import AppNavbar from "@/app/components/Navbar";

export default function PropertyDetails({ params }) {
  const resolvedParams = use(params); // unwrap the params promise

  console.log("UNWRAPPED PARAMS:", resolvedParams);

  const p = properties.find(
    (item) => String(item.id) === resolvedParams.id
  );

  if (!p) return <div className="p-10 text-center">Property Not Found</div>;

  return (
    <>
    <AppNavbar/>
 <div className="bg-gray-100 pb-20">

      {/* ⭐ HERO GALLERY START */}
      <div className="py-6">
      <PropertyGallery images={p.images} />

      </div>
      {/* ⭐ HERO GALLERY END */}


      {/* ⭐ TITLE & PRICE SECTION */}
      <div className="max-w-[1500px] mx-auto px-4 mt-4">
        <h1 className="text-3xl font-bold text-gray-900">{p.title}</h1>

        <div className="mt-2 flex items-center gap-2 text-gray-600 text-lg">
          <FiMapPin />
          {p.address}
        </div>

        <div className="mt-4 text-3xl font-bold text-[#335fcf]">
          {p.price}
        </div>
      </div>


      {/* ⭐ SPECS */}
      <div className="max-w-[1500px] mx-auto px-4 mt-6">
        <div className="flex items-center gap-10 text-lg text-gray-700">
          <div className="flex items-center gap-2">🛏️ {p.beds} BHK</div>
          <div className="flex items-center gap-2">🛁 {p.baths} Baths</div>
          <div className="flex items-center gap-2">📐 {p.area}</div>
        </div>
      </div>


      {/* ⭐ KEY HIGHLIGHTS */}
      <div className="max-w-[1500px] mx-auto px-4 mt-10">
        <h2 className="text-xl font-semibold mb-3">Key Highlights</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
          <li>• Prime Location</li>
          <li>• Excellent Connectivity</li>
          <li>• Modern Amenities</li>
          <li>• High Rental Yield</li>
          <li>• RERA Approved</li>
        </ul>
      </div>


      {/* ⭐ DESCRIPTION */}
   <div className="max-w-[1500px] mx-auto px-4 mt-10">
  <h2 className="text-xl font-semibold mb-3">About This Property</h2>

  {p.desc
    ?.match(/.{1,250}(\s|$)/g)    // split every ~250 chars
    .map((para, index) => (
      <p key={index} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
        {para.trim()}
      </p>
    ))}
</div>



      {/* ⭐ AMENITIES GRID */}
      <div className="max-w-[1500px] mx-auto px-4 mt-10">
        <h2 className="text-xl font-semibold mb-3">Amenities</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
          <div className="p-4 bg-white rounded-xl shadow">🏊 Swimming Pool</div>
          <div className="p-4 bg-white rounded-xl shadow">🏋️ Gym</div>
          <div className="p-4 bg-white rounded-xl shadow">🌳 Garden</div>
          <div className="p-4 bg-white rounded-xl shadow">🚗 Parking</div>
          <div className="p-4 bg-white rounded-xl shadow">🛡️ Security</div>
          <div className="p-4 bg-white rounded-xl shadow">📚 Clubhouse</div>
        </div>
      </div>


      {/* ⭐ CONTACT FORM */}
      <div className="max-w-[1500px] mx-auto px-4 mt-14 mb-10">
        <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

        <div className="bg-white p-6 rounded-xl shadow-md max-w-lg">
          <input
            placeholder="Your Name"
            className="w-full mb-3 px-4 py-3 rounded-lg border"
          />
          <input
            placeholder="Your Phone"
            className="w-full mb-3 px-4 py-3 rounded-lg border"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-3 px-4 py-3 rounded-lg border h-28"
          />

          <button className="w-full bg-[#335fcf] text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <FiMail /> Send Enquiry
          </button>
        </div>
      </div>

    </div>
    </>
  );
}
