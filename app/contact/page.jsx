"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "dishamalviya0611@gmail.com"
  },
  {
    icon: <FaEnvelope />,
    title: "Alternate Email",
    Description: "dishamalviya1056@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    Description: "Bhopal, Madhya Pradesh"
  },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_zld5kp8',
      'template_adnemeg',{
        from_name: form.name,
        to_name: 'Disha',
        from_email: form.email,
        to_email: 'Programmersplayground1111@gmail.com',
        message: form.message,
  },
'IIuuwsylJxtnjA5-K'
)
.then(() => {
  setLoading(false);
  alert('Thank you. I will get back to you as soon as possible')

  setForm({
    name: '',
    email: '',
    message: '',
  })

 }, (error)=>{
  setLoading(false)

  console.log(error);
   
  alert('something went wrong.')
}
      )
  }
      return(
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
          <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-purple-600">Get in touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                 type="text"
                 name="name" 
                 value={form.name}
                  onChange={handleChange} 
                  placeholder=" what's your name" className="bg-primary"/>
                <input type="email"
                name="email"
                 value={form.email}
                  onChange={handleChange} 
                  placeholder=" what's your email" className="bg-primary" />
                
              </div>
              <Textarea rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="h-[200px]" placeholder=" Do you have a message?"  />
              <Button type="submit" size="md" className="max-w-40">{loading ? 'Sending...' : 'Send'}</Button>
            </form>

          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-purple-600 rounded-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.Description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );};

export default Contact;

