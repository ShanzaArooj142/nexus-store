import React from 'react'
import { Gem, Shirt, Truck } from 'lucide-react'
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp, ZoomIn } from '../../utility/Animation';

const About2 = () => {
  return (
    <section className="bg-[#FAF9F6] py-10 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-4">
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs text-[#885053] uppercase tracking-widest font-semibold mb-3"
          >
            What We Offer
          </motion.p>

          <motion.h2
            variants={ZoomIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900"
          >
            Why Shop <span className="text-[#885053] italic">With Us?</span>
          </motion.h2>

          <motion.p
            variants={SlideDown(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
          >
            We make your shopping experience better with quality,
            trendy styles and reliable service.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-8">
          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] p-6 sm:p-8 bg-[#E5D6D6] border-2 border-[#C98F8F] rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl text-center shadow-sm cursor-pointer hover:bg-white hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <motion.div
              variants={ZoomIn(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-15 h-15 mx-auto mb-6 rounded-full bg-[#C98F8F] group-hover:bg-[#FBEDEE] flex items-center justify-center transition-all duration-300"
            >
              <Gem className="w-6 h-6 text-white group-hover:text-[#C98F8F] transition-all duration-300" />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-blue-950 mt-2">
              Premium Quality
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              High-quality fabrics made for comfort,
              durability and effortless style.
            </p>

            <button className="mt-6 text-[#C98F8F] font-medium hover:text-gray-900 transition">
              Learn More →
            </button>
          </motion.div>

          <motion.div
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] p-6 sm:p-8 bg-[#E5D6D6] border-2 border-[#C98F8F] rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl text-center shadow-sm cursor-pointer hover:bg-white hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <motion.div
              variants={ZoomIn(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-15 h-15 mx-auto mb-6 rounded-full bg-[#C98F8F] group-hover:bg-[#FBEDEE] flex items-center justify-center transition-all duration-300"
            >
              <Shirt className="w-6 h-6 text-white group-hover:text-[#C98F8F] transition-all duration-300" />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-blue-950 mt-2">
              Trendy Fashion
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              Discover the latest styles made for
              every occasion, from casual to chic.
            </p>

            <button className="mt-6 text-[#C98F8F] font-medium hover:text-gray-900 transition">
              Learn More →
            </button>
          </motion.div>

          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] p-6 sm:p-8 bg-[#E5D6D6] border-2 border-[#C98F8F] rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl text-center shadow-sm cursor-pointer hover:bg-white hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <motion.div
              variants={ZoomIn(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-15 h-15 mx-auto mb-6 rounded-full bg-[#C98F8F] group-hover:bg-[#FBEDEE] flex items-center justify-center transition-all duration-300"
            >
              <Truck className="w-6 h-6 text-white group-hover:text-[#C98F8F] transition-all duration-300" />
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-blue-950 mt-2">
              Fast & Easy Delivery
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              Get your favorite outfits delivered
              to your doorstep with care and on time.
            </p>

            <button className="mt-6 text-[#C98F8F] font-medium hover:text-gray-900 transition">
              Learn More →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About2

