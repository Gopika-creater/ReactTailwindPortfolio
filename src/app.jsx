import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/hero.jsx';
import About from '@/components/about.jsx';
import Skills from '@/components/skills.jsx';
import Experience from '@/components/experience';
import Projects from '@/components/projects.jsx';
import Certifications from '@/components/certification.jsx';
import Contact from '@/components/contact.jsx';
import Recommendations from "./components/recommendations.jsx";
import Footer from '@/components/footer.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Gopika S.K. - Software Engineer & Freelance Developer</title>
        <meta 
          name="description" 
          content="Portfolio of Gopika S.K., a passionate software engineering student and freelance developer specializing in web development, machine learning, and IoT solutions." 
        />
      </Helmet>
      <div className="min-h-screen  bg-red-200 bg-gradient-to-br from-purple-50 via-lavender-50 to-purple-100">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Recommendations />
        <Footer />
        
      </div>
    </>
  );
}

export default App;