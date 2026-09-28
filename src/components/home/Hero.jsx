import React from 'react'
import { motion } from "framer-motion";
import { SlideDown, SlideLeft, SlideRight, SlideUp,ZoomIn } from '../../utility/Animation';


const Hero = () => {
  return (
    <section className="bg-white text-gray-900 relative overflow-hidden">
      <div className=" mx-auto px-4 py-10 flex items-center justify-between ml-10">
        <div className="w-[50%] flex flex-col items-start">
          <motion.div
              variants={SlideDown(0.2)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
           className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#885053] "></span>
         
            <span
             className="text-xs uppercase tracking-relaxed text-gray-500 font-semibold">
              New Collection 2026
            </span>
          </motion.div>

          <motion.h1
              variants={SlideUp(0.4)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
            
             className="text-7xl font-serif font-normal leading-tight mb-4">
             Elevate Your <br />
             <span className="italic text-[#885053]  font-light">
              Style
            </span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.6)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
            
          
             className="text-gray-600 text-xl mb-8 max-w-md">
             Discover the latest fashion trends designed for your unique style.
          </motion.p>
          <div className='flex flex-row gap-6'>

          <motion.button
             variants={ZoomIn(0.8)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
          
             className="inline-flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800  text-white px-8 py-3.5 rounded-full text-sm uppercase tracking-realxed shadow-lg transition-transform cursor-pointer">
             Shop Now →
          </motion.button>

          <motion.button
             variants={ZoomIn(0.8)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
           
           className='inline-flex items-center gap-3 bg-white hover:bg-neutral-950  border-2 border-black text-black hover:text-white px-8 py-3.5 rounded-full text-sm uppercase tracking-realxed shadow-lg transition-transform cursor-pointer'>
            Explore New Collection
          </motion.button>
          </div>

        </div>

       <div className="w-[50%] flex justify-center pr-10 ">

          <motion.img
             variants={SlideLeft(0.4)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
        
             src="https://buraqstore.com/cdn/shop/files/20260602102741-a55bd2d4fc21451f-media_image-127cd8def2be4c6197972905dc76b262.webp?v=1781016576&width=500"  alt="" className="w-112.5 h-125 overflow-hidden object-cover rounded-tl-[120px] rounded-tr-[30px] rounded-br-[120px] rounded-bl-[30px] shadow-xl cursor-pointer transition-transform duration-500 hover:scale-110" />
        </div>
      
      </div>
    </section>
  )
}

export default Hero