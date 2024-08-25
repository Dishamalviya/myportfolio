"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";





import {
  FaCss3,
  FaHtml5,
  FaJs
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

//work data

const work = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'Programmers Playground',
    description: "A video conferencing interview preparation web application which has both technical and HR important interview questions listed for last minnute interview preparation, students with friends & mentors can take mock interviews with will help in improving an individual's communication skills and confidence.",
  
stack: [
      {name: "NextJs"},{name: "TypeScript"},{name: "Clerk"},{name: "Stream"},{name: "Shadcn/ui"},{name: "figma"}
    ],
    image: '/assets/work/thumb1.png',
    live: '',
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
  image: '/assets/work/dd.png',
  live: '',
  github:"",
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'My Portfolio',
    description: "devloped a portfolio showcasing my expertise in programming, web development, and technology along with projects that i made using Python, and NextJs. With the portfolio, i aim to highlight my skills and connect with potential collaborators.",
  stack: [
      {name: "NextJs"},{name: "Javascript"},{name: "Tailwind CSS"},{name: "Framer Motion"}
],
  image:'/assets/work/pf.png',
  live: '',
  github:"",
  }

  
]
// about data
const about = {
  title: 'About me',
  Description: "I am an Engineering Undergrad at LNCTE Bhopal with 7.53 overall CGPA, i enjoy learning new technologies, data Science tools and solving problems",
info: [
  {
    fieldName: "Name",
    feildValue: "Disha Malviya"
  },
  {
    fieldName: "Email",
    feildValue: "dishamalviya0611@gmail.com"
  },
  {
    fieldName: "Nationality",
    feildValue: "Indian"
  },
  {
    fieldName: "languages",
    feildValue: "English, Hindi"
  },
]

};
//education data
const education = {
icon: "/assets/resume/cap.svg",
title: "My education",
items: [
  {
  institution: "LNCT group of colleges, Excellence",
  degree: "CSE - Data Science 7th semester",
},

{
  institution: "Hema Higher secondary school, Bhopal",
  degree: "12th class CBSE-board",
},
{
  institution: "Hema Higher secondary school, Bhopal",
  degree: "10th class CBSE-board",
},
{
  institution: "MGM Co-ed school, Bhopal",
  degree: "middle and primary schooling",
}] 
};

//skills
const skills = {
  title: "My Skills",
  discription:"In development,I am proficient in HTML, CSS and JS. I am still learning NextJs but it has became my absolute favourite framework to work with , I created this portfolio in NextJs.",
  skilllist: [
    {
    icon: <FaHtml5 />,
    name: 'html5'
    },
    {
      icon: <FaCss3 />,
      name: 'Css3'
    },
    {
      icon: <FaJs />,
      name: 'Java Script'
    },
    {
      icon: <SiNextdotjs/>,
      name: 'Next.Js'
    },
  ]

}



import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


 import { ScrollArea } from "@/components/ui/scroll-area";
const resume = () => {
  return <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
}}
className="min-[80vh] flex items-center justify-center py-12 xl:py-0"

>
  <div className="container mx-auto">
    <Tabs defaultValue="About me" 
    className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-10">
      <TabsTrigger value="about">About me</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="work">Work</TabsTrigger>
        
      </TabsList>
      {/*content*/}
      <div className="min-h-[70vh] w-full">
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item, index)=> {
                return (
                <li 
                key={index} 
                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span>{item.institution}</span>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-purple-600"></span>
                    <p className="text-white/60">{item.degree}</p>
                  </div>
                </li>
                
                );
              })}
            </ul>
          </ScrollArea>
        </div>
        </TabsContent>

        <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p>
                {skills.discription}
              </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skilllist.map((skill, index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] round-xl flex justify-center items-center group">
                          <div className="text-6xl  group-hover:text-purple-600
                          transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            
        </div>
        </TabsContent>

        <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl fontbold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {about.Description}
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index)=>{
              return (
              <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                <span className="text-white/60">{item.fieldName}</span>
                <span className="text-xl">{item.feildValue}</span>
              </li>
              );
            })}</ul>
          </div>

        </TabsContent >
        </div>
        <TabsContent value="work" className=" container mx-auto font-bold text-4xl text-purple-600 ">

          
            <ul className="flex flex-col xl:flex-row gap-[60px]"></ul>
               <Link href="/work">view the projects{"=>"}</Link>


        </TabsContent>
   
</Tabs>
</div>
</motion.div>;
};

export default resume;