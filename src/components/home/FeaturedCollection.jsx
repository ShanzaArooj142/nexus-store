import React from 'react'
import { Heart } from 'lucide-react'
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp,ZoomIn } from '../../utility/Animation';
const FeaturedCollection = () => {
  return (
    <section className="bg-[#fdf3f3] py-16 px-5 text-center border-t border-gray-200">
      <motion.p 
         variants={SlideUp(0.2)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
      
         className="text-[11px] uppercase tracking-widest text-[#885053] mb-2">
         Featured Collection
      </motion.p>
      <motion.h2
          variants={ZoomIn(0.4)}
            initial="hidden"
           whileInView="visible"
            viewport={{ once: true }}
      
        className="text-4xl font-serif font-normal text-gray-900 mb-2">
        Featured <span className="italic text-[#C87982]">Collection</span>
      </motion.h2>
      <motion.p 
         variants={SlideDown(0.6)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
      
        className="text-sm text-gray-500 mb-10">
        Handpicked styles, just for you.
      </motion.p>

      <div className="flex justify-center gap-9 max-w-7xl mx-auto flex-wrap">

        {/* card 1 */}
        <motion.div
          variants={SlideUp(0.4)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
        
         className="w-66.25 bg-white rounded-xl border border-gray-200 overflow-hidden text-left  shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-70  overflow-hidden mb-3">
            <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=500" alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" />

            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-[#FBEDEE] transition">
              <Heart className="w-4 h-4 text-rose-500" />
            </button>
          </div>
         
          <div className='p-3'>
          <h4 className="text-sm font-bold text-gray-900 mb-2 ">
            Floral Maxi Dress
          </h4>

          <div className="text-xs text-amber-500 mb-2 ">
            ★★★★★ <span className="text-gray-500">4.5 (120)</span>
          </div>

          <div className="flex justify-between items-center">

            <span className="text-sm font-bold text-gray-900 ">
              Rs. 3,499
            </span>

            <button className="bg-[#D4959B] hover:bg-[#C87982] text-white px-3.5 py-2 rounded-lg text-xs transition cursor-pointer ">
              Add to Cart
            </button>
            </div> 

          </div>

        </motion.div>


        {/* card 2 */}
        <motion.div 
          variants={SlideUp(0.6)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}

         className="w-66.25 bg-white rounded-2xl border border-gray-200 overflow-hidden text-left  shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-70 rounded-xl overflow-hidden mb-3">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=500" alt="Co-Ord Set" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-[#FBEDEE] transition">
              <Heart className="w-4 h-4 text-rose-500" />
            </button>

          </div>
          
          <div className='p-3'>
          <h4 className="text-sm font-bold text-gray-900 mb-2">
            Co-Ord Set
          </h4>
          <div className="text-xs text-amber-500 mb-2">
            ★★★★★ <span className="text-gray-500">4.3 (98)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-900">
              Rs. 4,299
            </span>

            <button className="bg-[#D4959B] hover:bg-[#C87982] text-white px-3.5 py-2 rounded-lg text-xs transition cursor-pointer">
              Add to Cart
            </button>
            </div>

          </div>

        </motion.div>


        {/* card 3 */}
        <motion.div 
          variants={SlideUp(0.8)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className="w-66.25 bg-white rounded-2xl border border-gray-200 overflow-hidden text-left  shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-70 rounded-xl overflow-hidden mb-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkaYA1BR7QSGtmFm3k_BvnAH94-wtDar9EDm4YsOnQA&s=10"alt=""className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-[#FBEDEE] transition">
              <Heart className="w-4 h-4 text-rose-500" />
            </button>
          </div>

          <div className='p-3'>
          <h4 className="text-sm font-bold text-gray-900 mb-2">
            Embroidered Kurti
          </h4>

          <div className="text-xs text-amber-500 mb-2">
            ★★★★★ <span className="text-gray-500">4.6 (84)</span>
          </div>

          <div className="flex justify-between items-center">

            <span className="text-sm font-bold text-gray-900">
              Rs. 2,999
            </span>

            <button className="bg-[#D4959B] hover:bg-[#C87982] text-white px-3.5 py-2 rounded-lg text-xs transition cursor-pointer">
              Add to Cart
            </button>
            </div>

          </div>

        </motion.div>


        {/* card 4 */}
        <motion.div
          variants={SlideUp(0.19)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className="w-66.25 bg-white rounded-2xl border border-gray-200 overflow-hidden text-left  shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-70 rounded-xl overflow-hidden mb-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEsLPZacXuPPx0cCD1NCqcQsv_czz2umS8_JVW1cA821PP9XQuMdK458&s=10" alt="Denim Jacket" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-[#FBEDEE] transition">
              <Heart className="w-4 h-4 text-rose-500" />
            </button>

          </div>

          <div className='p-3'>
          <h4 className="text-sm font-bold text-gray-900 mb-2">
            Denim Jacket
          </h4>

          <div className="text-xs text-amber-500 mb-2">
            ★★★★★ <span className="text-gray-500">4.4 (76)</span>
          </div>

          <div className="flex justify-between items-center">

            <span className="text-sm font-bold text-gray-900">
              Rs. 3,799
            </span>

            <button className="bg-[#D4959B] hover:bg-[#C87982] text-white px-3.5 py-2 rounded-lg text-xs transition cursor-pointer">
              Add to Cart
            </button>
            </div>

          </div>

        </motion.div>


      </div>

    </section>
  )
}

export default FeaturedCollection


