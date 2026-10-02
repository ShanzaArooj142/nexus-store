import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlideDown, SlideUp, ZoomIn, SlideRight } from '../../utility/Animation';

const Contact1 = () => {
  return (
    <section className="bg-[#F8F4EE] px-5 sm:px-6 py-10 sm:py-24">
      <div className="max-w-300 mx-auto w-full sm:w-[90%]">

        <div className="text-center max-w-150 mx-auto mb-10 sm:mb-16">
          <motion.div
            variants={SlideDown(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 bg-[#EFEBE4] hover:bg-[#7A5C58] px-4 py-1.5 rounded-full mb-3 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7A5C58] group-hover:text-white transition-all duration-300" />
            <h1 className="text-xs uppercase tracking-[3px] font-medium text-[#7A5C58] group-hover:text-white transition-all duration-300">
              Get In Touch
            </h1>
          </motion.div>

          <motion.h1
            variants={ZoomIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif text-[#2D2927] mb-4"
          >
            Let's Talk With
            <span className="italic text-[#7A5C58]"> StyleHub</span>
          </motion.h1>

          <motion.p
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#6D6561] text-sm leading-relaxed"
          >
            Have a question about our collections or need assistance? Drop us a message below.
          </motion.p>
        </div>

        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#FFFDF9] border border-[#E5DDD4] rounded-[25px] sm:rounded-[35px] shadow-xl overflow-hidden flex flex-col lg:flex-row w-full"
        >

          <div className="bg-[#7A5C58] text-white p-7 sm:p-12 flex flex-col justify-between relative w-full lg:w-105">
            <div>
              <h1 className="text-xs uppercase tracking-[3px] text-[#E5D6D6] font-medium">
                Information
              </h1>

              <h2 className="text-2xl sm:text-3xl font-serif mt-2 mb-4 text-white">
                We’re Here For You
              </h2>

              <motion.p
                variants={SlideRight(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[#F3E9E5] text-sm leading-relaxed mb-8 sm:mb-10"
              >
                Reach out to us through any channel, and our team will get back to you shortly.
              </motion.p>

              <motion.div
                variants={ZoomIn(0.10)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#E5D6D6] uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-medium">
                      Sargodha, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#E5D6D6] uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-sm font-medium">
                      +92 341 4486184
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#E5D6D6] uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm font-medium break-all">
                      hello@stylehub.com
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 text-xs text-[#E5D6D6]">
              StyleHub Official Studio © 2026
            </div>
          </div>

          <div className="p-7 sm:p-12 flex-1">
            <motion.h3
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-serif text-[#2D2927] mb-2"
            >
              Send Us a Message
            </motion.h3>

            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#6D6561] text-sm mb-6 sm:mb-8"
            >
              Fill out the fields below and we'll reply soon.
            </motion.p>

            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full sm:w-[50%]">
                  <label className="block text-xs uppercase tracking-wider text-[#7A5C58] mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full bg-[#F8F4EE] border border-[#E5DDD4] rounded-xl px-4 py-3.5 text-sm text-[#2D2927] outline-none focus:border-[#7A5C58] focus:bg-white transition-all"
                  />
                </div>

                <div className="w-full sm:w-[50%]">
                  <label className="block text-xs uppercase tracking-wider text-[#7A5C58] mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-[#F8F4EE] border border-[#E5DDD4] rounded-xl px-4 py-3.5 text-sm text-[#2D2927] outline-none focus:border-[#7A5C58] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7A5C58] mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Phone number"
                  className="w-full bg-[#F8F4EE] border border-[#E5DDD4] rounded-xl px-4 py-3.5 text-sm text-[#2D2927] outline-none focus:border-[#7A5C58] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7A5C58] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full bg-[#F8F4EE] border border-[#E5DDD4] rounded-xl px-4 py-3.5 text-sm text-[#2D2927] outline-none focus:border-[#7A5C58] focus:bg-white transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <span className="text-xs text-[#9A8178]">
                We respect your privacy.
              </span>

              <motion.button
                variants={ZoomIn(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#7A5C58] text-white px-8 py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#654945] hover:shadow-lg transition-all duration-300"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact1;

