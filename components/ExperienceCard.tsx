import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-
    [500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png"
        alt="ceo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light"> CEO of Ololo</h4>
        <p className="font-bold text-2xl mt-1">PARAM</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiwQ0y1Tp7twO0n57HexjvZ_ZnSTDBUY3lg&usqp=CAU"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiwQ0y1Tp7twO0n57HexjvZ_ZnSTDBUY3lg&usqp=CAU"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiwQ0y1Tp7twO0n57HexjvZ_ZnSTDBUY3lg&usqp=CAU"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points </li>
          <li>Summary points Summary points </li>
          <li>Summary points Summary points </li>
          <li>Summary points Summary points </li>
          <li>Summary points Summary points </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard