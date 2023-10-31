import React from "react";
import reviewerPic from "../../assets/user-profile.png";
import { Paper } from "@mui/material";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const CustomTestimonialCard = () => {
  return (
    <Paper
      elevation={3}
      sx={{ padding: "32px" }}
      className="max-w-full md:max-w-[30%]"
      // data-aos="fade-right"
    >
      <h3 className="text-xl font-bold mb-2">
        Empowering Change Through <br /> fashions
      </h3>
      <p className="text-base text-[#6B7280] font-medium mb-[37px]">
        Exquisite Craftsmanship! Each piece is a work of art. I feel like a
        runway model every time I wear your designs
      </p>
      <div className="bg-gray-500 w-full h-[1.5px] mb-8" />

      {/* Reviewer's Profile */}
      <div className="flex items-center sm:gap-3 md:gap-6">
        <img src={reviewerPic} width={70} height={70} alt="reviewerPic" />

        <div>
          <h3>Mohammad Salman</h3>
          <p>CEO at Farabi Foundation</p>
        </div>
      </div>
    </Paper>
  );
};

export default CustomTestimonialCard;
