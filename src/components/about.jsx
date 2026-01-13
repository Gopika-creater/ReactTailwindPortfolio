import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import aboutImg from "@/assets/laptop.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aboutImg}
                  alt="Software development workspace"
                  className="h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a dedicated Computer and Communication engineering student with a passion for
                creating innovative solutions through code. My interests span software development
                web development, IoT, and machine learning.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-lavender-50 rounded-lg hover:bg-lavender-100 transition">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">
                      Education
                    </h3>
                    <p className="text-gray-700">
                      B.Tech – Computer & Communication Engineering
                    </p>
                    <p className="text-gray-600 text-sm">
                      Amrita Vishwa Vidyapeetham
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-lavender-50 rounded-lg hover:bg-lavender-100 transition">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">Location</h3>
                    <p className="text-gray-700">Coimbatore, India</p>
                    <p className="text-gray-600 text-sm">
                      Open to remote opportunities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
