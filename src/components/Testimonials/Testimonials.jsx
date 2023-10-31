import React from "react";
import CustomTestimonialCard from "./CustomTestimonialCard";


const Testimonials = () => {
  return (
    <div className="max-w-7xl m-auto pt-16 px-3 md:px-0" id="testimonials" >
      {/* Testimonial header intro text */}
      <div className="mb-9 text-center">
        <h2 className="text-xl font-bold text-[#6B7280]">TESTIMONIALS</h2>
        <h2 className="text-4xl font-bold">What People Say</h2>
      </div>

      {/* Testimonial cards */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <CustomTestimonialCard />
        <CustomTestimonialCard />
        <CustomTestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
