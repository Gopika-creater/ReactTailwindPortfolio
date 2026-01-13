import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
const Experience = () => {
  return <section id="experience" className="py-20 px-4 bg-white">
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
            Experience
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional journey and freelance projects
          </p>

          <div className="max-w-3xl mx-auto">
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
          }} className="relative pl-8 pb-12 border-l-4 border-purple-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg" />
              
              <div className="bg-lavender-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  <h3 className="text-2xl font-bold text-purple-900">
                    Freelance Developer
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">2025 - Present</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Working independently on diverse projects ranging from web applications to IoT solutions. 
                  Collaborating with clients to deliver custom software solutions that meet their specific needs.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-800">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Full-stack web development using modern frameworks</li>
                    <li>Database design and optimization</li>
                    <li>IoT device integration and automation</li>
                    <li>Client consultation and requirement analysis</li>
                    <li>Project management and timely delivery</li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Python</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Experience;