"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration:0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start md:pl-10"
        >
          <h1 className="text-black mb-4 text-4xl md:text-5xl lg:text-7xl lg:leading-normal xl:text-9xlfont-extrabold">
            <span>Hello, I'm {""}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Nami",
                800,
                "Web Developer",
                800
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur sapiente cumque fugiat pariatur, consequatur in earum deserunt maxime dicta nesciunt quis saepe velit nostrum odit omnis? Reiciendis, iusto quaerat.
          </p> */}
          <div>
            <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-300 to-emerald-400 hover:text-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-300 to-emerald-400 hover:bg-slate-200 text-gray-400 mt-3">
              <span className="block bg-[#ffffff] hover:bg-slate-200 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration:0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image 
              src="/images/Cat_Girl.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection