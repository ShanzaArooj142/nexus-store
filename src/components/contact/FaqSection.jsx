import React from 'react';
import { motion } from 'framer-motion';
import { SlideDown, SlideUp, ZoomIn, SlideRight, SlideLeft } from '../../utility/Animation';

const FaqSection = () => {
  return (
    <div className="w-[90%] max-w-300 mx-auto my-8 sm:my-12 py-8 sm:py-12 px-5 sm:px-10 bg-[#f3f3f3] rounded-lg shadow-md flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 overflow-hidden">

      <div className="w-full lg:w-[40%]">
        <motion.h1
          variants={SlideDown(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs tracking-[2px] text-[#8c5a47] uppercase font-bold"
        >
          FAQ
        </motion.h1>

        <motion.h2
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl text-[#2b2b2b] my-3 font-serif"
        >
          Frequently<br />Asked Questions
        </motion.h2>

        <motion.p
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm text-[#555555] leading-relaxed mb-6"
        >
          Quick answers to common questions.
        </motion.p>

        <motion.div
          variants={ZoomIn(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-25"
        >
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjfGW_rVFE6oKsUZJfUjplFXMw548m2azhgBvWLJdTw4lloVtAYl-JLs&s=10'
            alt="Leaf decoration"
            className="w-full rounded-full"
          />
        </motion.div>
      </div>

      <div className="w-full lg:w-[55%] flex flex-col gap-4">

        <motion.div
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]"
        >
          <div className="flex justify-between items-center cursor-pointer gap-4">
            <motion.h3
              variants={SlideLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base font-semibold text-[#2b2b2b]"
            >
              How long does delivery take?
            </motion.h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <motion.p
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-[#666666] mt-2"
          >
            Usually 3-5 working days.
          </motion.p>
        </motion.div>

        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]"
        >
          <div className="flex justify-between items-center cursor-pointer gap-4">
            <motion.h3
              variants={SlideLeft(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base font-semibold text-[#2b2b2b]"
            >
              Can I exchange my order?
            </motion.h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-[#666666] mt-2"
          >
            Yes, exchanges are available within 7 days.
          </motion.p>
        </motion.div>

        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]"
        >
          <div className="flex justify-between items-center cursor-pointer gap-4">
            <motion.h3
              variants={SlideLeft(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base font-semibold text-[#2b2b2b]"
            >
              How can I track my order?
            </motion.h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <motion.p
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-[#666666] mt-2"
          >
            You will receive tracking details after dispatch.
          </motion.p>
        </motion.div>

        <motion.div
          variants={SlideLeft(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]"
        >
          <div className="flex justify-between items-center cursor-pointer gap-4">
            <motion.h3
              variants={SlideLeft(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base font-semibold text-[#2b2b2b]"
            >
              Do you offer Cash on Delivery?
            </motion.h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <motion.p
            variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm text-[#666666] mt-2"
          >
            Yes, COD is available across Pakistan.
          </motion.p>
        </motion.div>

      </div>
    </div>
  );
};

export default FaqSection;

