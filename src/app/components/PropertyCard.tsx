"use client";

import { FaBed, FaBath } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import Link from "next/link";

type Property = {
  id: number;
  price: string;
  title: string;
  type: string;
  status: string;
  beds: string;
  baths: number;
  area: string;
  image: string;
};

export default function PropertyCard({ p }: { p: Property }) {
  return (
     <Link href={`/properties/${p.id}`} className="block">
    <div
      className="
        bg-white rounded-2xl overflow-hidden shadow-md 
        hover:shadow-xl transition-all duration-300 
        border border-gray-200 cursor-pointer group
      "
    >
      {/* Image */}
      <div className="relative">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

      <div
  className="
    absolute bottom-3 left-3 
    px-4 py-2 rounded-md text-white text-lg font-semibold
    backdrop-blur-md bg-indigo-900/40 border border-indigo-600/50
  "
>
  {p.price}
</div>


        <button
          className="
            absolute top-3 right-3 
            bg-white/90 p-2 rounded-md shadow-md 
            hover:bg-white transition
          "
        >
          <FiShare2 className="text-[#1F3B77] text-lg" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
       <h3 className="text-lg font-semibold text-gray-900 leading-snug truncate">
  {p.title}
</h3>


        <div className="flex gap-2 mt-2">
          <span
            className="px-3 py-1 rounded-sm text-xs"
            style={{ backgroundColor: "#F1F3F8", color: "#1F3B77" }}
          >
            {p.type}
          </span>
          <span
            className="px-3 py-1 rounded-sm text-xs"
            style={{ backgroundColor: "#F1F3F8", color: "#1F3B77" }}
          >
            {p.status}
          </span>
        </div>

        <div className="flex items-center justify-between mt-5 text-base text-gray-700">

 <div className="flex items-center gap-6 text-gray-800">
  
  {/* Beds */}
  <div className="flex items-center gap-2 pl-2">
    <FaBed className="text-[#1F3C88] text-xl" />
    <span className="font-medium">
      {p.beds === 0 ? "Studio" : `${p.beds} BHK`}
    </span>
  </div>

  {/* Area */}
  <div className="flex items-center gap-2">
    <MdSquareFoot className="text-[#335fcf] text-xl" />
    <span className="font-medium">{p.area}</span>
  </div>

</div>





</div>


        <button
          className="
            w-full mt-5 py-3 rounded-md 
            flex items-center justify-center gap-2 
            text-white hover:opacity-90 transition
          "
          style={{ backgroundColor: "#335fcf" }}
        >
          ENQUIRE <i className="fa-regular fa-envelope"></i>
        </button>
      </div>
    </div>
    </Link>
  );
}
