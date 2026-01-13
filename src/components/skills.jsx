import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Brain, BookOpen, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'C','C++', 'SQL', 'Algorithms','Data Structures','Bash', 'Time and Space Complexity']
  },
  {
    category: 'Software Development Skills',
    icon: Code2,
    skills: ['OOP', 'Version Control','GitHub','Debugging','Unit & Integration Testing']
  },
  {
    category: 'Web & Backend',
    icon: Globe,
    skills: ['React', 'Node.js', 'Flask', 'HTML','CSS', 'REST APIs']
  },
  {
    category: 'Databases & OS',
    icon: Database,
    skills: ['MySQL', 'Firestore', 'PostgreSQL', 'Linux', 'Windows']
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis','Matplotlib', 'Prompt engineering ']
  },
  {
    category: 'Domain Knowledge',
    icon: BookOpen,
    skills: ['IoT','Digital communications', 'Signal processing', 'Embedded systems', 'Image processing', 'NLP'] 
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: ['Git', 'PyCharm', 'VS Code', 'Spyder', 'Jupyter Notebook']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-lavender-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on project experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-900">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-lavender-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;