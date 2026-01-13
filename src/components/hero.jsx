import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FolderGit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-lavender-400/10 to-purple-800/10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              <h2 className="text-purple-600 font-semibold text-lg mb-2">Hello, I'm</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-purple-900 mb-4">
                Gopika S.K.
              </h1>
              <p className="text-2xl lg:text-3xl text-purple-700 font-semibold mb-4">Software Developer</p>
              <p className="text-lg text-gray-700 leading-relaxed">Passionate  developer specialising in creating innovative web applications, IoT solutions, and machine learning projects. Dedicated to building impactful technology solutions that make a difference.</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <FolderGit2 className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button variant="outline" onClick={() => window.open('https://github.com/Gopika-creater', '_blank')} className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/gopikask-learning-enthusiast/', '_blank')} className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img alt="Gopika S.K. - Software Engineering Student" className="w-full h-auto object-cover" src="https://horizons-cdn.hostinger.com/43edbe1b-bfef-4e2d-89ec-f00dc2f28879/windows-5eqkynai6l0-unsplash-lmAbl.jpg" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-lavender-300 rounded-full blur-3xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;