"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppNavbar from "@/app/components/Navbar";
import PropertyCard from "@/app/components/PropertyCard";
import propertiesData from "@/app/data/properties.json";
import { FiChevronDown } from "react-icons/fi";

export default function PropertyPage() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bed, setBed] = useState("");
  const [price, setPrice] = useState("");

  const updateURL = (paramsObj: any) => {
    const params = new URLSearchParams();

    if (paramsObj.location) params.set("location", paramsObj.location);
    if (paramsObj.type) params.set("type", paramsObj.type);
    if (paramsObj.bed) params.set("bed", paramsObj.bed);
    if (paramsObj.price) params.set("price", paramsObj.price);

    router.push(`/properties?${params.toString()}`);
  };

  const filteredProperties = propertiesData.filter((p) => {
    const matchLocation = location ? p.location.toLowerCase() === location.toLowerCase() : true;
    const matchType = type ? p.type.toLowerCase() === type.toLowerCase() : true;
    const matchBeds = bed ? p.beds === Number(bed) : true;

    const matchPrice =
      price === "10-20"
        ? p.priceValue >= 1000000 && p.priceValue <= 2000000
        : price === "20-40"
        ? p.priceValue >= 2000000 && p.priceValue <= 4000000
        : price === "40-60"
        ? p.priceValue >= 4000000 && p.priceValue <= 6000000
        : price === "60+"
        ? p.priceValue >= 6000000
        : true;

    return matchLocation && matchType && matchBeds && matchPrice;
  });

  return (
    <>
      <AppNavbar />

      <div className="bg-gray-50">
        <div className="px-6 py-8 max-w-[1520px] mx-auto">

          {/* Filter Bar */}
         <div className="w-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-xl p-4 flex flex-wrap items-center gap-4">

  {/* Location */}
  <select
    value={location}
    onChange={(e) => {
      const v = e.target.value;
      setLocation(v);
      updateURL({ location: v, type, bed, price });
    }}
    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm pr-10"
  >
    <option value="">All Locations</option>
    <option value="Kota">Kota</option>
    <option value="Jaipur">Jaipur</option>
  </select>

  {/* Property Type */}
  <select
    value={type}
    onChange={(e) => {
      const v = e.target.value;
      setType(v);
      updateURL({ location, type: v, bed, price });
    }}
    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm pr-10"
  >
    <option value="">All Property Types</option>
    <option value="Plot">Plot</option>
    <option value="Apartment">Apartment</option>
    <option value="Villa">Villa</option>
    <option value="Penthouse">Penthouse</option>
    <option value="Studio">Studio</option>    {/* ⭐Added */}
  </select>

  {/* Bedrooms */}
  <select
    value={bed}
    onChange={(e) => {
      const v = e.target.value;
      setBed(v);
      updateURL({ location, type, bed: v, price });
    }}
    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm pr-10"
  >
    <option value="">All Bedrooms</option>
    <option value="0">Studio</option>          {/* ⭐Added */}
    <option value="1">1 BHK</option>
    <option value="2">2 BHK</option>
    <option value="3">3 BHK</option>
    <option value="4">4 BHK</option>
  </select>

  {/* Price */}
  <select
    value={price}
    onChange={(e) => {
      const v = e.target.value;
      setPrice(v);
      updateURL({ location, type, bed, price: v });
    }}
    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm pr-10"
  >
    <option value="">All Prices</option>
    <option value="10-20">10–20 Lakh</option>
    <option value="20-40">20–40 Lakh</option>
    <option value="40-60">40–60 Lakh</option>
    <option value="60+">60+ Lakh</option>
  </select>

  {/* Reset Button */}
  <button
    onClick={() => {
      setLocation("");
      setType("");
      setBed("");
      setPrice("");
      updateURL({});
    }}
    className="ml-auto px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition"
  >
    Reset
  </button>

</div>


          {/* Heading */}
          <h2 className="text-xl font-semibold mb-4 mt-6">
            {filteredProperties.length} properties found
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {filteredProperties.map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
