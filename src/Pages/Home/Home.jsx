import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Services from "../Services/Services";

const features = [
  {
    title: "Minimal Design",
    desc: "Clean layouts focused on clarity and simplicity.",
  },
  {
    title: "Fully Responsive",
    desc: "Optimized for desktop, tablet and mobile devices.",
  },
  {
    title: "Reusable Structure",
    desc: "Organized components and scalable project setup.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24">

      {/* HERO */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            Build modern websites with{" "}
            <span   className="font-bold tracking-tight 
                 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
                  bg-clip-text text-transparent">ReactKit</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto"
          >
            A clean, scalable React starter template built with Tailwind CSS
            and Framer Motion. Designed for modern projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-7 py-3 rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400  text-white font-medium hover:bg-emerald-600 transition shadow-sm"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-7 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold tracking-tight">
            Everything you need to start
          </h2>

          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            A thoughtfully structured starter template for fast and clean development.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SIMPLE CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to build something great?
          </h2>

          <p className="mt-4 text-slate-500">
            Start your next project with a clean and scalable foundation.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Start Now
            </Link>
          </div>

        </div>
      </section>
      <Services/>
    </div>
  );
}
