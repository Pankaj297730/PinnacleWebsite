"use client";

import { useState, useEffect } from "react";
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PropertyGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (i) => {
    setIndex(i);
    setIsOpen(true);
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handle = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [isOpen]);

  return (
    <>
      {/* ⭐ GALLERY GRID */}
      <div className="py-6">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Large Left Image */}
            <div className="relative col-span-2 rounded-2xl overflow-hidden cursor-pointer"
                 onClick={() => openModal(0)}>
              <img
                src={images[0]}
                className="w-full h-[540px] object-cover rounded-2xl"
              />
            </div>

            {/* Right two images */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden cursor-pointer"
                   onClick={() => openModal(1)}>
                <img
                  src={images[1]}
                  className="w-full h-[260px] object-cover rounded-2xl"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden cursor-pointer"
                   onClick={() => openModal(2)}>
                <img
                  src={images[2]}
                  className="w-full h-[260px] object-cover rounded-2xl"
                />

                {/* Show all button */}
                <button
                  onClick={() => openModal(0)}
                  className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2"
                >
                  <FiCamera />
                  Show All Photos
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ⭐ FULLSCREEN MODAL */}
     {isOpen && (
  <div className="fixed inset-0 bg-black/90 z-[9999] cursor-pointer flex items-center justify-center p-4">

    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-6 right-6 text-white text-4xl hover:opacity-60 transition"
    >
      <FiX />
    </button>

    {/* Left Navigation */}
    <button
      onClick={prevImage}
      className="
        absolute left-6 top-1/2 -translate-y-1/2
        bg-white/20 hover:bg-white/40 backdrop-blur-xl
        text-white p-3 rounded-full shadow-xl transition
        cursor-pointer
      "
    >
      <FiChevronLeft className="text-3xl" />
    </button>

    {/* Image Container with Animation */}
    <div
      key={index}
      className="
        transition-all duration-300 
        animate-slideIn 
        max-w-[60vw] max-h-[60vh] 
        flex items-center justify-center
      "
    >
      <img
        src={images[index]}
        className="
          max-w-[60vw] max-h-[60vh object-contain 
          rounded-xl shadow-2xl
        "
      />
    </div>

    {/* Right Navigation */}
    <button
      onClick={nextImage}
      className="
        absolute right-6 top-1/2 -translate-y-1/2
        bg-white/20 hover:bg-white/40 backdrop-blur-xl
        text-white p-3 rounded-full shadow-xl transition
        cursor-pointer
      "
    >
      <FiChevronRight className="text-3xl" />
    </button>
  </div>
)}

    </>
  );
}
