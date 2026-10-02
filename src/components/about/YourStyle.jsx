import React from "react";
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp, ZoomIn } from '../../utility/Animation';

const YourStyle = () => {
  return (
    <div className="w-full bg-[#f7f1ec] py-10 px-[5%] sm:px-[3%] flex flex-col lg:flex-row justify-between items-center box-border font-serif relative overflow-hidden gap-8 lg:gap-0">

      <div className="w-full lg:w-[45%] flex flex-col justify-center items-start z-10">

        <motion.h1
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[11px] tracking-[2px] text-[#8c6d62] mb-2.5 font-sans"
        >
          — FIND YOUR STYLE —
        </motion.h1>

        <motion.h2
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[28px] sm:text-[32px] text-[#2c221e] mb-3 font-normal leading-tight"
        >
          Find Your
          <span className="italic text-[#a67c74] block sm:inline">
            Perfect Style
          </span>
        </motion.h2>

        <motion.p
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[14px] text-[#6b5b52] leading-relaxed mb-6.25"
        >
          Discover pieces made to match your personality and make every day feel special.
        </motion.p>

        <motion.button
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#a67c74] text-white py-2.5 px-6.25 rounded-[30px] text-[13px] hover:bg-[#8c6d62] transition duration-300 flex items-center gap-[8px] shadow-sm"
        >
          Explore Collection
        </motion.button>

        <motion.div
          variants={ZoomIn(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-5 text-[#a67c74] text-[18px] italic transform rotate-[-5deg]"
        >
          Style looks good on you 🤍
        </motion.div>

      </div>

      <div className="w-full lg:w-[50%] flex justify-end items-center relative">

        <motion.div
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full rounded-[12px] overflow-hidden shadow-md"
        >

          <img
            src="https://img.magnific.com/free-photo/young-woman-smiles-covers-her-mouth-while-shopping-lady-beret-poses-near-stand-with-fancy-dresses_197531-17612.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Find Your Style Collection"
            className="w-full h-72 sm:h-80 object-cover block hover:scale-110 transition-transform duration-500"
          />

        </motion.div>

      </div>

    </div>
  );
};

export default YourStyle;
