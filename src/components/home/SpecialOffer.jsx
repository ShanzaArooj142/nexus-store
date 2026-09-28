import React from 'react'
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp,ZoomIn } from '../../utility/Animation';

const SpecialOffer = () => {
  return (
    <motion.section
      variants={SlideUp(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
     className="bg-[#FDFBF7] py-16 px-5">

      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#FADCD9] to-[#F8B195] rounded-3xl px-10 py-12 flex items-center justify-between gap-10 overflow-hidden">
        <div className="flex-1 text-left">
          <motion.p 
             variants={SlideDown(0.4)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
              className="text-[11px] uppercase tracking-widest text-[#7E3F43] font-bold mb-3">
              Limited Time Offer
          </motion.p>
          <motion.h2 
              variants={SlideRight(0.6)}
               initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
               className="text-5xl font-serif text-gray-900 mb-2">
              Summer <span className="italic text-[#7E3F43]">Sale</span>
          </motion.h2>
          <motion.h3
             variants={SlideRight(0.6)}
             initial="hidden"
             whileInView="visible"
              viewport={{ once: true }}
             className="text-3xl font-serif text-gray-900 mb-4">
             Up to <span className="text-[#7E3F43] font-bold">50% OFF</span>
          </motion.h3>
          <motion.p
           variants={SlideRight(0.8)}
             initial="hidden"
             whileInView="visible"
              viewport={{ once: true }}
          className="text-gray-600 mb-7 text-lg">
            Refresh your wardrobe with our latest styles and enjoy
            amazing discounts for a limited time.
          </motion.p>

          <motion.button
          variants={ZoomIn(0.10)}
             initial="hidden"
             whileInView="visible"
              viewport={{ once: true }}
          className="bg-neutral-900 hover:bg-[#7E3F43] text-white px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 shadow-lg">
            Shop Sale →
          </motion.button>

        </div>

        <motion.div 
         variants={SlideLeft(0.6)}
             initial="hidden"
             whileInView="visible"
              viewport={{ once: true }}
         className="flex-1 relative flex justify-center">
          <div className="relative w-82.5 h-90 rounded-[100px] overflow-hidden shadow-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktwDBT6hFNlFOPuUKCy4rmG_-zU5oPidMWPiReoKXzw&s=10" alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            <div className="absolute inset-0 bg-black/10"></div>

          </div>

          <div className="absolute -top-5 -right-2 w-28 h-28 bg-[#7E3F43] rounded-full text-white flex flex-col items-center justify-center shadow-xl">
            <h1 className="text-[9px] uppercase tracking-widest"> Up To</h1>
            <h1 className="text-2xl font-bold">50% </h1>
            <h1 className="text-[9px] uppercase tracking-widest"> Off </h1>
          </div>

        </motion.div>

      </div>

    </motion.section>
  )
}

export default SpecialOffer
