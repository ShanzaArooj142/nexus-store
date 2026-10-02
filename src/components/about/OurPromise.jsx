import React from "react";
import { Leaf, Scissors, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp, SlideDown, SlideRight, ZoomIn } from "../../utility/Animation";

const OurPromise = () => {
  return (
    <section className="bg-[#fcf4ea] px-5 py-10 sm:py-20">
      <div className="max-w-300 mx-auto">

        <div className="text-center mb-10 sm:mb-14">

          <motion.p
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm tracking-[4px] uppercase text-[#9A8178] mb-3"
          >
            Our Promise
          </motion.p>

          <motion.h2
            variants={ZoomIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-serif text-[#2D2927]"
          >
            Made With Purpose
          </motion.h2>

          <div className="w-16 h-1 bg-[#9A8178] mx-auto mt-5"></div>

          <motion.p
            variants={SlideDown(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#6D6561] max-w-150 mx-auto mt-5 leading-7"
          >
            Thoughtful design, timeless quality, and a commitment to creating
            fashion that feels as good as it looks.
          </motion.p>

        </div>

        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between flex-wrap gap-6 sm:gap-7.5"
        >

          {/* Card 1 */}
          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-12px)] lg:w-[31.5%] bg-[#FFFDF9] border-2 border-[#E5DDD4] px-6 sm:px-8 py-8 text-center rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >

            <div className="w-18 h-18 mx-auto mb-6 rounded-full bg-[#F8F4EE] border-2 border-[#D8C9C0] flex items-center justify-center group-hover:bg-[#7A5C58] group-hover:border-[#7A5C58] transition-all duration-300">

              <Leaf className="w-7 h-7 text-[#7A5C58] group-hover:text-white transition-all duration-300" />

            </div>

            <h3 className="text-xl font-serif text-[#2D2927] mb-4 group-hover:text-[#7A5C58] transition-colors duration-300">
              Ethical Sourcing
            </h3>

            <div className="w-10 h-px bg-[#D8C9C0] mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

            <p className="text-sm text-[#6D6561] leading-7">
              We carefully choose responsible materials and partners to create
              every piece with care and integrity.
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-12px)] lg:w-[31.5%] bg-[#EDE0DA] border-2 border-[#D8C9C0] px-6 sm:px-8 py-8 text-center rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >

            <div className="w-18 h-18 mx-auto mb-6 rounded-full bg-[#F8F4EE] border-2 border-[#D8C9C0] flex items-center justify-center group-hover:bg-[#7A5C58] group-hover:border-[#7A5C58] transition-all duration-300">

              <Scissors className="w-7 h-7 text-[#7A5C58] group-hover:text-white transition-all duration-300" />

            </div>

            <h3 className="text-xl font-serif text-[#2D2927] mb-4 group-hover:text-[#7A5C58] transition-colors duration-300">
              Fine Craftsmanship
            </h3>

            <div className="w-10 h-px bg-[#D8C9C0] mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

            <p className="text-sm text-[#6D6561] leading-7">
              Every detail is thoughtfully finished to create pieces that are
              beautiful, comfortable, and made to last.
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-12px)] lg:w-[31.5%] bg-[#FFFDF9] border-2 border-[#E5DDD4] px-6 sm:px-8 py-8 text-center rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >

            <div className="w-18 h-18 mx-auto mb-6 rounded-full bg-[#F8F4EE] border-2 border-[#D8C9C0] flex items-center justify-center group-hover:bg-[#7A5C58] group-hover:border-[#7A5C58] transition-all duration-300">

              <Users className="w-7 h-7 text-[#7A5C58] group-hover:text-white transition-all duration-300" />

            </div>

            <h3 className="text-xl font-serif text-[#2D2927] mb-4 group-hover:text-[#7A5C58] transition-colors duration-300">
              Designed For You
            </h3>

            <div className="w-10 h-px bg-[#D8C9C0] mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

            <p className="text-sm text-[#6D6561] leading-7">
              Our designs celebrate individuality with timeless styles made
              for different personalities and occasions.
            </p>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default OurPromise;

