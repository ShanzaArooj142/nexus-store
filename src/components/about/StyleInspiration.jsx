import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp, ZoomIn } from '../../utility/Animation';

const StyleInspiration = () => {
  return (
    <section className="bg-[#FFFDF9] px-5 py-10 sm:py-20 overflow-hidden">
      <div className="max-w-300 mx-auto flex justify-between items-center flex-wrap gap-10 lg:gap-12">

        <div className="w-full lg:w-[48%] relative">

          <motion.div
            variants={SlideRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-[85%] rounded-[18px] overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
              alt="Fashion Collection"
              className="w-full h-80 sm:h-105 object-cover"
            />
          </motion.div>

          <div className="absolute right-0 bottom-[-20px] sm:bottom-[-25px] bg-[#EDE0DA] px-5 sm:px-7 py-4 sm:py-5 rounded-xl shadow-md">
            <p className="text-xl sm:text-2xl font-serif text-[#7A5C58]">
              100+
            </p>

            <p className="text-xs text-[#6D6561] tracking-wide">
              Styles to Explore
            </p>
          </div>

        </div>

        <div className="w-full lg:w-[45%]">

          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#9A8178] mb-4"
          >
            <Sparkles className="w-4 h-4" />

            <h1 className="text-xs tracking-[3px] uppercase">
              Style Inspiration
            </h1>
          </motion.div>

          <motion.h2
            variants={ZoomIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-serif text-[#2D2927] leading-tight"
          >
            Dress The Way
            <span className="block italic text-[#9A8178]">
              You Feel
            </span>
          </motion.h2>

          <div className="w-14 h-1 bg-[#9A8178] mt-5 mb-6"></div>

          <motion.p
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#6D6561] leading-7 mb-6"
          >
            Fashion is more than what you wear. It is a way to express
            your personality, confidence, and individuality. Discover
            carefully selected pieces that help you create a style
            that feels truly yours.
          </motion.p>

          <motion.div
            variants={FadeIn(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 sm:gap-8 mb-8"
          >

            <div>
              <h3 className="text-2xl font-serif text-[#7A5C58]">
                50+
              </h3>

              <p className="text-xs text-[#6D6561] mt-1">
                New Arrivals
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-[#7A5C58]">
                24/7
              </h3>

              <p className="text-xs text-[#6D6561] mt-1">
                Customer Care
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-[#7A5C58]">
                100%
              </h3>

              <p className="text-xs text-[#6D6561] mt-1">
                Quality Focus
              </p>
            </div>

          </motion.div>

          <motion.button
            variants={ZoomIn(0.10)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-[#7A5C58] text-white px-6 py-3 rounded-full text-sm hover:bg-[#624945] transition duration-300 shadow-sm"
          >
            Explore Styles
            <ArrowRight className="w-4 h-4" />
          </motion.button>

        </div>

      </div>
    </section>
  );
};

export default StyleInspiration;

