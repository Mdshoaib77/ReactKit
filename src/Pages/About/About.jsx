import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24">

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            About <span  className="font-bold tracking-tight 
                 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
                  bg-clip-text text-transparent">ReactKit</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg"
          >
            ReactKit is a clean and scalable React starter template
            designed to help developers build modern web applications faster.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              Our Mission
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Our goal is to provide a minimal, well-structured and reusable
              template that developers can clone and start building
              immediately — without worrying about setup or structure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-10 bg-white border border-slate-200 rounded-xl shadow-sm"
          >
            <h3 className="text-lg font-semibold">
              Why ReactKit?
            </h3>
            <ul className="mt-4 space-y-3 text-slate-500 text-sm">
              <li>• Clean and organized folder structure</li>
              <li>• Fully responsive layout</li>
              <li>• Tailwind CSS styling</li>
              <li>• Framer Motion animations</li>
              <li>• Easy to customize and scale</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold tracking-tight">
            Built for modern development
          </h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            ReactKit focuses on simplicity, scalability, and performance —
            making it a strong foundation for any project.
          </p>

        </div>
      </section>

    </div>
  );
};

export default About;
