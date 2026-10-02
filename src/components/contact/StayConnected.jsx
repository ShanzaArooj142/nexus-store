import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SlideDown, SlideUp, ZoomIn, SlideRight, SlideLeft, Slide } from '../../utility/Animation';

export default function StayConnection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 px-5 sm:px-6 py-10 sm:py-16 bg-[#fdf8f5]">

      <div className="relative">
        <motion.div
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-4 shadow-lg rotate-[-5deg] ml-3"
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=300&q=80"
            alt="Clothing rack"
            className="w-52 sm:w-56 h-60 sm:h-64 object-cover"
          />

          <div className="bg-yellow-200 p-3 mt-3 rotate-[4deg]">
            <motion.p
              variants={ZoomIn(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-gray-800"
            >
              More <br /> Fashion <br /> More <br /> You 🤍
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="text-center w-full lg:max-w-xl">
        <motion.h1
          variants={SlideDown(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm tracking-widest text-gray-500"
        >
          STAY CONNECTED
        </motion.h1>

        <motion.h2
          variants={ZoomIn(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-3"
        >
          Stay Connected With <span className="text-[#8c5a47]">StyleHub</span>
        </motion.h2>

        <motion.p
          variants={SlideUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 mt-4 text-sm sm:text-base"
        >
          Follow us for new collections, fashion inspiration & special offers.
        </motion.p>

        <motion.div
          variants={ZoomIn(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-6"
        >
          <a href="#instagram" className="w-11 h-11 flex items-center justify-center rounded-full bg-black hover:bg-[#8c5a47] text-white hover:scale-110 transition">
            <FaInstagram />
          </a>

          <a href="#facebook" className="w-11 h-11 flex items-center justify-center rounded-full bg-black hover:bg-[#8c5a47] text-white hover:scale-110 transition">
            <FaFacebookF />
          </a>

          <a href="#pinterest" className="w-11 h-11 flex items-center justify-center rounded-full bg-black hover:bg-[#8c5a47] text-white hover:scale-110 transition">
            <FaPinterestP />
          </a>

          <a href="#twitter" className="w-11 h-11 flex items-center justify-center rounded-full bg-black hover:bg-[#8c5a47] text-white hover:scale-110 transition">
            <FaTwitter />
          </a>
        </motion.div>

        <motion.button
          variants={Slide(0.10)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 px-6 py-3 bg-black text-white rounded-full transition hover:bg-[#8c5a47]"
        >
          Explore New Collection →
        </motion.button>
      </div>

      <motion.div
        variants={ZoomIn(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:max-w-xs text-center"
      >
        <p className="text-lg sm:text-xl italic text-gray-700">
          Fashion brings people together 🤍
        </p>
      </motion.div>

    </div>
  );
}

