import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-slate-100 pt-28 overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
      bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-sky-400/20 
      rounded-full blur-3xl"></div>

      <div className="relative z-10 px-6 pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Let’s build something{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
               Awsome
              </span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Have an idea, project or collaboration in mind?
              We’re ready to turn your vision into a modern digital experience.
            </p>

            <div className="space-y-6 pt-6">

              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600 text-sm">
                  hello@reactkit.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="text-slate-600 text-sm">
                  +880 1234-567890
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-slate-600 text-sm">
                  Dhaka, Bangladesh
                </p>
              </div>

            </div>
          </motion.div>

          {/* ===== RIGHT SIDE (FORM) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl border border-white/40 
            rounded-3xl p-12 shadow-2xl shadow-slate-300/50"
          >
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 
                  focus:border-emerald-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 
                  focus:border-emerald-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 
                  focus:border-emerald-400 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-slate-900
                bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400
                hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
