import React, { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react"
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';



const Contact = () => {
  const [state, handleformsSubmit] = useForm("mykkgqwp");
  const formRef = useRef(null);
  useEffect(() => {
  if (state.succeeded && formRef.current) {
    formRef.current.reset();
  }
}, [state.succeeded]);

  const {
    toast
  } = useToast();
  
  return <section id="contact" className="py-20 px-4 bg-gradient-to-br from-lavender-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-purple-900 font-semibold">gopika.2272005@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="text-purple-900 font-semibold">+91 9952420503</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="text-purple-900 font-semibold">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <Button onClick={() => window.open('https://github.com/gopikask', '_blank')} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  <Button onClick={() => window.open('https://linkedin.com/in/gopikask', '_blank')} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }}>
              <form 
                ref={formRef}
                onSubmit={handleformsSubmit}
                className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                          
 
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-purple-900 mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name"  required className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-purple-900 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email"  required className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-purple-900 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject"  required className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors" placeholder="What's this about?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-purple-900 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" required rows="5" className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors resize-none" placeholder="Your message here..." />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                 {state.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                    <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
                {state.succeeded && (
                  <p className="text-green-600 text-center font-semibold mt-4">
                     Message sent successfully!
                  </p>
                )}
    
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Contact;