
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp, SlideDown, SlideRight, ZoomIn } from "../../utility/Animation";

const CustomerTestimonials = () => {
  return (
    <section className="bg-[#F8F4EE] px-5 py-10 sm:py-20">
      <div className="max-w-300 mx-auto">

        <div className="text-center mb-10 sm:mb-14">

          <motion.p
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm tracking-[4px] uppercase text-[#9A8178] mb-3"
          >
            Happy Customers
          </motion.p>

          <motion.h2
            variants={ZoomIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-serif text-[#2D2927]"
          >
            What They{" "}
            <span className="italic text-[#9A8178]">
              Say
            </span>
          </motion.h2>

          <div className="w-16 h-1 bg-[#9A8178] mx-auto mt-5"></div>

          <motion.p
            variants={SlideDown(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#6D6561] max-w-150 mx-auto mt-5 leading-6"
          >
            Every order has a story. Here is what our lovely customers
            have to say about their StyleHub experience.
          </motion.p>

        </div>

        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-between flex-wrap gap-6 sm:gap-7.5"
        >

          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-12px)] lg:w-[31.5%] bg-[#FFFDF9] border-2 border-[#E5DDD4] px-5 sm:px-7 py-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >

            <div className="flex justify-between items-start">

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Ayesha Khan"
                className="w-16 h-16 rounded-full object-cover"
              />

              <Quote className="w-8 h-8 text-[#D8C9C0]" />

            </div>

            <div className="flex gap-1 text-[#D5A24C] mt-5">

              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />

            </div>

            <p className="text-sm text-[#6D6561] leading-6 mt-4">
              "Absolutely loved the quality! The fabric is so soft and
              the stitching is just perfect. Will definitely shop again!"
            </p>

            <div className="border-t border-[#E5DDD4] mt-5 pt-4">

              <h4 className="font-semibold text-[#2D2927]">
                Ayesha Khan
              </h4>

              <span className="text-sm text-[#9A8178]">
                Lahore
              </span>

            </div>

          </motion.div>

          <motion.div
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-12px)] lg:w-[31.5%] bg-[#EDE0DA] border-2 border-[#D8C9C0] px-5 sm:px-7 py-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >

            <div className="flex justify-between items-start">

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
                alt="Hira Ali"
                className="w-16 h-16 rounded-full object-cover"
              />

              <Quote className="w-8 h-8 text-[#B59B91]" />

            </div>

            <div className="flex gap-1 text-[#D5A24C] mt-5">

              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />

            </div>

            <p className="text-sm text-[#6D6561] leading-6 mt-4">
              "Beautiful designs and fast delivery. The packaging was
              also so aesthetic. Loved my overall experience!"
            </p>

            <div className="border-t border-[#D8C9C0] mt-5 pt-4">

              <h4 className="font-semibold text-[#2D2927]">
                Hira Ali
              </h4>

              <span className="text-sm text-[#9A8178]">
                Sargodha
              </span>

            </div>

          </motion.div>

          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group w-full md:w-[calc(50%-12px)] lg:w-[31.5%] bg-[#FFFDF9] border-2 border-[#E5DDD4] px-5 sm:px-7 py-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >

            <div className="flex justify-between items-start">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                alt="Sana Malik"
                className="w-16 h-16 rounded-full object-cover"
              />

              <Quote className="w-8 h-8 text-[#D8C9C0]" />

            </div>

            <div className="flex gap-1 text-[#D5A24C] mt-5">

              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />

            </div>

            <p className="text-sm text-[#6D6561] leading-6 mt-4">
              "StyleHub is my new favorite. Trendy styles, great quality
              and very reliable customer support!"
            </p>

            <div className="border-t border-[#E5DDD4] mt-5 pt-4">

              <h4 className="font-semibold text-[#2D2927]">
                Sana Malik
              </h4>

              <span className="text-sm text-[#9A8178]">
                Faisalabad
              </span>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default CustomerTestimonials;

