import React from 'react'
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp, ZoomIn } from '../../utility/Animation';

const About = () => {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-0 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            variants={SlideDown(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span className="w-8 h-px bg-[#885053]"></span>
            <h1 className="text-xs uppercase tracking-relaxed text-gray-500 font-semibold">
              Our Story
            </h1>
            <span className="w-8 h-px bg-[#885053]"></span>
          </motion.div>

          <motion.h1
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif font-normal mb-4"
          >
            About <span className="italic text-[#885053]">StyleHub</span>
          </motion.h1>

          <motion.p
            variants={ZoomIn(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 max-w-xl mx-auto leading-relaxed text-base sm:text-lg"
          >
            Discover fashion designed for your unique style with premium
            quality and timeless elegance.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-[50%]">
            <motion.h1
              variants={FadeIn(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-[#885053] uppercase tracking-widest font-semibold"
            >
              Our Journey
            </motion.h1>

            <motion.h2
              variants={SlideDown(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-serif mt-2 mb-5"
            >
              Fashion Made With Passion
            </motion.h2>

            <motion.p
              variants={SlideRight(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 mb-5 leading-relaxed"
            >
              Founded in 2026, StyleHub started with a simple vision:
              making modern fashion accessible, elegant, and comfortable
              for everyone.
            </motion.p>

            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              We focus on carefully curated fabrics and designs that
              elevate your everyday style effortlessly. Every piece is
              selected with attention to quality, comfort, and timeless
              fashion.
            </motion.p>

            <motion.button
              variants={ZoomIn(0.10)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-neutral-900 hover:bg-white text-white hover:text-black px-7 py-3 border-2 border-black rounded-full text-sm uppercase tracking-wider transition-transform"
            >
              Explore Collection
            </motion.button>
          </div>

          <motion.div
            variants={ZoomIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-[50%] rounded-2xl overflow-hidden shadow-xl relative"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmlzjHajRmOCzh6KaEjY2HfYVxYRyRzZysa6KvdAKbctwpu-5Fe54tLnB&s=10"
              alt=""
              className="w-full h-72 sm:h-80 lg:h-90 object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

