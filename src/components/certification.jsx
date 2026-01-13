import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const certificationsData = [
  {
    title: 'Google Professional Certificate – IT Automation with Python',
    issuer: 'Coursera',
    date: '2023', // Assuming a date for demonstration
    description: 'Developed proficiency in Python programming for IT automation, including scripting, version control, and cloud integration.',
    skills: ['Python', 'Automation', 'Google Cloud', 'Git'],
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/NKFEX3MD7EXM'
  },
  {
    title: 'IBM Professional Certificate – AI Application Developer',
    issuer: 'Coursera',
    date: '2024', // Assuming a date for demonstration
    description: 'Gained expertise in building and deploying AI applications using IBM Watson services, covering machine learning, deep learning, and chatbots.',
    skills: ['AI', 'IBM Cloud', 'Machine Learning', 'Deep Learning', 'Chatbots'],
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6VFD6ONWCUJN'
  },
  {
    title: 'UC San Diego – Data Structures',
    issuer: 'Coursera',
    date: '2023', // Assuming a date for demonstration
    description: 'Mastered fundamental data structures and algorithms, enhancing problem-solving skills for efficient software development.',
    skills: ['Data Structures', 'Algorithms', 'C++', 'Problem Solving'],
    link: 'https://www.coursera.org/account/accomplishments/verify/KJYB4XDGZQC1'
  }
];

const Certifications = () => {
  const { toast } = useToast();

  const handleViewCertificate = (link) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      toast({
        title: "🚧 Certificate Link Unavailable!",
        description: "This certificate does not have a public verification link.",
      });
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-4">
            Certifications
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-lavender-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{cert.date}</span>
                </div>

                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-purple-700 font-semibold mb-3">{cert.issuer}</p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white text-purple-600 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => handleViewCertificate(cert.link)}
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;