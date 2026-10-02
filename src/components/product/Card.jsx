import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ProductContext } from "../../context/ProductContext";
import { motion } from "framer-motion";
import { FadeIn, Slide, SlideDown, SlideLeft, SlideRight, SlideUp, ZoomIn } from '../../utility/Animation';

const Card = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <div
       className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#fdf8f5] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <motion.h1
        variants={SlideRight(0.2)}
        initial="hidden"
        whileInView="visible"
       viewport={{ once: true }}
       className="mb-6 sm:mb-8 text-3xl sm:text-4xl font-serif text-[#2b2b2b]">
        Our Products
      </motion.h1>

      <motion.div 
        variants={ZoomIn(0.4)}
        initial="hidden"
        whileInView="visible"
       viewport={{ once: true }}
      
       className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl bg-white border border-[#eee4df] shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="bg-[#f8f3ef] p-4 sm:p-5">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 sm:h-52 w-full object-contain cursor-pointer transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4 sm:p-5">
              <p className="mb-2 text-xs uppercase tracking-wider text-[#8c5a47]">
                {product.category}
              </p>

              <h2 className="mb-3 line-clamp-2 text-base sm:text-lg font-semibold text-[#2b2b2b]">
                {product.title}
              </h2>

              <div className="mb-5 flex items-center justify-between">
                <p className="text-lg sm:text-xl font-bold text-[#8c5a47]">
                  ${product.price}
                </p>
              </div>

              <Link
                to={`/product/${product.id}`}
                className="block rounded-xl bg-[#2b2b2b] px-4 py-3 text-center text-sm font-medium text-white hover:bg-[#8c5a47] transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Card;

