"use client";

import { productData } from "@/constants";
import VideoCardSlider from "./ui/VideoCardSlider";
import { useRef, useState } from "react";

const LearningFlex = () => {
  const scrollTrackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollTrackRef.current.offsetLeft);
    setScrollLeft(scrollTrackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollTrackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollTrackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="md:px-14 m-4 md:m-10">
      <div className="flex items-center">
        <span className="text-7xl md:text-[40px] md:font-semibold text-[#BDDD01]">
          |
        </span>
        <div className="container flex justify-between mt-4 md:mt-2 md:pl-4 md:text-center">
          <h2 className="font-bold text-3xl">Super Saver Combos</h2>
        </div>
      </div>
      <section className="relative overflow-hidden bg-white p-4">
        <div className="flex flex-col items-center">
          <ul
            className="scroll-track flex overflow-x-auto snap-x snap-mandatory space-x-4 cursor-grab"
            ref={scrollTrackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? "grabbing" : "grab" }} // Change cursor based on dragging state
          >
            {productData.map((product) => (
              <li
                key={product.id}
                className="flex-shrink-0 w-[200px] md:w-[250px] lg:w-[300px]"
              >
                <VideoCardSlider product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LearningFlex;
