import React from 'react'
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp,ZoomIn } from '../../utility/Animation';


const ShopByCategory = () => {
  return (
    <section className="bg-[#FDFBF7] py-16 px-5 text-center">
      <motion.p 
          variants={SlideUp(0.2)}
         initial="hidden"
         whileInView="visible"
          viewport={{ once: true }}
        className="text-[11px] uppercase tracking-widest text-[#885053] mb-2">
        Shop By Category
      </motion.p>

      <motion.h2
         variants={ZoomIn(0.4)}
          initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
       
        className="text-4xl font-serif font-normal text-gray-900 mb-2">
        Shop by <span className="italic text-[#C87982]">Category</span>
      </motion.h2>

       <motion.p 
         variants={SlideDown(0.6)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className="text-md text-gray-500 mb-10">
         Explore our curated collections and find your perfect style.
      </motion.p>

      <motion.div
         variants={SlideUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
      
         className="flex flex-row justify-center gap-6 max-w-7xl mx-auto flex-wrap">

         {/* Card 1 */}
         <div className="relative w-90 h-110 rounded-2xl overflow-hidden group cursor-pointer shadow-md">

          <img src="https://i.pinimg.com/474x/2c/a4/17/2ca417ab063b7837f10a9d1a13032dc5.jpg" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

          <motion.div
              variants={ZoomIn(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm p-4 rounded-xl text-left shadow-lg">

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Women’s Wear
            </h3>
            <a
              href="#women"
              className="text-[13px] text-gray-900 font-medium hover:text-[#C87982] transition">
              Shop Collection →
            </a>

          </motion.div>

        </div>


        {/* Card 2 */}
        <div className="relative w-90 h-110 rounded-2xl overflow-hidden group cursor-pointer shadow-md">

          <img   src="https://www.thefashionflex.com/img/beige_shirt_brown_pants_earthy.png" alt=""className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

          <motion.div
          variants={ZoomIn(0.4)}
             initial="hidden"
             whileInView="visible"
            viewport={{ once: true }} 
            
            className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm p-4 rounded-xl text-left shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Men’s Wear
            </h3>
            <a
              href="#men"
              className="text-[13px] text-gray-900 font-medium hover:text-[#C87982] transition" >
              Shop Collection →
            </a>

          </motion.div>

        </div>


        {/* Card 3 */}
        <div className="relative w-90 h-110 rounded-2xl overflow-hidden group cursor-pointer shadow-md">

          <img  src="https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?cs=srgb&dl=pexels-pixabay-157888.jpg&fm=jpg" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

          <motion.div
           variants={ZoomIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          
          
          className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm p-4 rounded-xl text-left shadow-lg">

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Accessories
            </h3>

            <a
              href="#accessories"
              className="text-[13px] text-gray-900 font-medium hover:text-[#C87982] transition"
            >
              Shop Collection →
            </a>

          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}

export default ShopByCategory