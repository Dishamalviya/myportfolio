"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

import "swiper/css";
const Projects = [

    {
      num: '01',
      category: 'Full Stack',
      title: 'Programmers Playground',
      description: "A video conferencing interview preparation web application which has both technical and HR important interview questions listed to prepare for the interview, students with friends & mentors can take mock interviews with will help in improving an individual's communication skills and confidence.",
      stack: [
        {name: "NextJs"},{name: "TypeScript"},{name: "Clerk"},{name: "Stream"},{name: "Shadcn/ui"},{name: "figma"}
      ],
      image: '/assets/work/thumb1.png',
      live: "",
      github:"",
    },
    {
      num: '02',
      category: 'machine learning',
      title: 'driver\'s drowsiness detection system',
      description: "A driver’s drowsiness detection system is a safety technology designed to prevent accidents caused by driver fatigue. These systems monitor various indicators of drowsiness, such as steering patterns, lane position, and the driver’s eye and head movements. When signs of drowsiness are detected, the system alerts the driver to take a break or rest ",
      stack: [
        {name: "Python"},{name: "Jupyter lab"},{name: "Image processing"},{name: "Machine Learning"},{name: "Playsound"},{name: "Dlib"}
      ],
    image: "/assets/work/dd.png",
    live: "",
    github:"",
    },
    {
      num: '03',
      category: 'Frontend',
      title: 'My Portfolio',
      description: "devloped a portfolio showcasing my expertise in programming, web development, and technology along with projects that i made using Python, and NextJs. With the portfolio, i aim to highlight my skills and connect with potential collaborators.",
      stack: [ {name: "Next.Js"},{name: "Javascript"},{name: "Tailwind CSS"},{name: "Framer Motion"}
  ],
    image:"/assets/work/pf.png",
    live: "",
    github:"",
    }
]
const work = () => {
  const [project, setProject] = useState(Projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(Projects[currentIndex]);
  }
  return(
<motion.section initial={{opacity:0}} 
animate={{opacity:1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"}}}
className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
>
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
      xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          {/*outline num */}
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
          </div>
          {/*outline category */}
          <h2 className="text-[42px] font-bold leading-none text-white 
          group-hover:text-purple-600 transition-all duration-500 capitalize">{project.category} project
          </h2>
          {/*outline description */}
          <p className="text-white/60">{project.description}</p>
          {/*stack*/}
         <ul className="flex-gap-4">
          {project.stack.map((item, index)=> {
            return (
            <li key={index} className="text-xl text-purple-600">
              {item.name}
              {index !== project.stack.length - 1 && ","}
              </li>
            );
          })}
         </ul>
         <div className="border border-white/20"></div>
<div className="flex items-center gap-4">
<Link href={project.github}>
<TooltipProvider delayDuration={100}>
<Tooltip>
<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
<BsGithub className="text-white text-3xl group-hover:bg-purple-600" />
</TooltipTrigger>
<TooltipContent>
<p>Github Repository</p>
</TooltipContent>
</Tooltip>
</TooltipProvider>
</Link>
</div>
</div>
      <div className="w-full xl:w-[50%]">
        <Swiper spaceBetween={30}
         slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}>
          {Projects.map((project, index)=> {
            return <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center
              items-center bg-pink-50/20">
                <div className="absolute top-0 bottom-0 w-full bg-black/10
                z-10"></div>
                <div className="relative w-full h-full">
                  <Image src={project.image} fill className="object-cover" alt=""/>
                </div>
              </div>
            </SwiperSlide>
          })}
          <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
           xl:bottom-0 z-20 w-full justify-between xl:w-max 
          xl:justify-none" btnStyles="bg-purple-600 hover:bg-purple-600-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"/>
        </Swiper>
      </div>

    </div>
    </div>
</motion.section>

        );
      };


export default work;






