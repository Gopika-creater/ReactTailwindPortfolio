import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-purple-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Gopika S.K.</h3>
            <p className="text-purple-200 mb-4">
              Computer and Communications Student & Freelance Developer
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/gopikask"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 p-2 rounded-full hover:bg-purple-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/gopikask"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 p-2 rounded-full hover:bg-purple-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:gopika.2272005@gmail.com"
                className="bg-purple-800 p-2 rounded-full hover:bg-purple-700 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-purple-200 hover:text-white transition-colors text-left"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-purple-200 hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block text-purple-200 hover:text-white transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-purple-200 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="block text-purple-200 hover:text-white transition-colors text-left"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-purple-200 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-purple-200">
              <p>Bangalore, India</p>
              <p>gopika.2272005@gmail.com</p>
              <p>Available for freelance opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8 text-center">
          <p className="text-purple-200 flex items-center justify-center gap-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-red-400" />
            <span>by Gopika S.K. © {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;