import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const projectsData = [
  {
    title: 'Time Sheet Management System',
    description: 'A comprehensive employee time tracking solution with real-time monitoring, automated reporting, and analytics dashboard. Built with React and Node.js for efficient workforce management.',
    image: 'Modern time tracking dashboard with employee attendance charts and analytics',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Web Application',
    githubLink: 'https://github.com/Gopika-creater/EmployeeTimesheet'
  },
  {
    title: 'Air Quality Monitoring and Analysis System',
    description: 'ML-based environmental monitoring solution that tracks air quality metrics in real-time. Features include sensor integration, data visualization, and automated alerts for pollution levels.',
    image: 'Air quality monitoring station with sensors and real-time data display',
    tags: ['ML', 'Python', 'SVM','Pandas', 'Matplotlib', 'Data Visualization'],
    category: 'ML Project',
    githubLink: 'https://github.com/Gopika-creater/AirQualityMonitoring'
  },
  {
    title: 'Voice-Interactive IoT Chatbot',
    description: 'Intelligent voice-controlled chatbot for IoT device management. Leverages natural language processing to enable hands-free control of smart home devices and automation systems.',
    image: 'Smart home control interface with voice assistant visualization',
    tags: ['NLP', 'Python', 'IoT', 'Machine Learning'],
    category: 'AI & IoT',
    githubLink: 'https://github.com/Gopika-creater/Arduino-chat-bot-'
  },
  {
    title: 'Responsive Portfolio Website',
    description:'Modern, fully responsive portfolio website showcasing projects and skills. Built with React and styled with TailwindCSS, featuring smooth animations, dynamic recommendations section backed by Firebase Firestore,nserverless contact form to handle user inquiries and optimal performance.',
    image: 'Beautiful responsive portfolio website on multiple devices',
    tags: ['React', 'TailwindCSS', 'Responsive Design', 'Framer Motion'],
    category: 'Web Design',
    githubLink: 'https://github.com/Gopika-creater/ReactTailwindPortfolio/'
  }
];

const Projects = () => {
  const { toast } = useToast();

  const handleLiveDemoClick = () => {
    toast({
      title: "🚧 Project Demo Coming Soon!",
      description: "Live demos for projects will be available shortly. Stay tuned!",
    });
  };

  const handleGitHubClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-lavender-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A selection of recent projects showcasing my technical skills and creative problem-solving
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-lavender-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleLiveDemoClick}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      onClick={() => handleGitHubClick(project.githubLink)}
                      variant="outline"
                      className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
