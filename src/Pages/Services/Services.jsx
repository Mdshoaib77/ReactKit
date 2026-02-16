import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    desc: "Modern, clean and user-focused interface design that improves user experience and engagement.",
  },
  {
    title: "Web Development",
    desc: "Fast, scalable and responsive web applications built with modern technologies.",
  },
  {
    title: "Brand Identity",
    desc: "Strong visual identity that represents your brand and builds trust with your audience.",
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages optimized for performance and clarity.",
  },
  {
    title: "SEO Optimization",
    desc: "Technical and on-page SEO improvements to increase visibility and traffic.",
  },
  {
    title: "Product Strategy",
    desc: "Helping you plan, validate and grow your digital product effectively.",
  },
];

const Services = () => {
  return (
    <div className="bg-slate-100 min-h-screen pt-24">

      {/* ===== HERO ===== */}
      <section className="px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto"
        >
          We provide modern digital solutions designed to help your business
          grow with clarity and confidence.
        </motion.p>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-200 
              shadow-lg shadow-slate-200/50 hover:shadow-xl 
              transition duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 h-1 w-16 rounded-full 
              bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400"></div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="px-6 pb-32 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold text-slate-900">
            Ready to work together?
          </h2>

          <p className="mt-4 text-slate-500">
            Let’s create something meaningful and impactful.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-slate-900
              bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400
              hover:opacity-90 transition duration-300"
            >
              Get Started
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;
