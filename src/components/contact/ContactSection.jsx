import React from 'react';
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp, ZoomIn } from "../../utility/Animation";

const ContactSection = () => {
  return (
    <div
      className="relative w-[90%] max-w-300 mx-auto my-8 sm:my-12 py-10 sm:py-12 px-6 sm:px-10 bg-cover bg-center bg-no-repeat rounded-lg shadow-md flex items-center justify-between overflow-hidden"
      style={{ backgroundImage: "url('https://www.shutterstock.com/image-illustration/clothes-on-hanger-storage-shelf-260nw-1933100570.jpg')" }}
    >

      <motion.div
        variants={SlideRight(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full sm:w-[65%] lg:w-[45%]"
      >
        <h1 className="text-xs tracking-[2px] text-[#8c5a47] uppercase font-bold">
          REACH OUT
        </h1>

        <h2 className="text-3xl sm:text-4xl text-[#2b2b2b] my-3 font-serif">
          Contact
        </h2>

        <p className="text-sm sm:text-md text-[#555555] leading-relaxed">
          We're here to help! Feel free to reach out to us for any questions, suggestions or support.
        </p>
      </motion.div>

    </div>
  );
};

export default ContactSection;
