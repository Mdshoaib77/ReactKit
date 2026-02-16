import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* Background Gradient Glow (Updated to Emerald Theme) */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        {/* Main Grid */}
        <div className="grid gap-16 md:grid-cols-3">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400 flex items-center justify-center text-sm font-bold text-slate-900">
                RK
              </div>
              <h2 className="text-lg font-semibold tracking-tight 
                bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
                bg-clip-text text-transparent">
                ReactKit
              </h2>
            </div>

            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              We craft minimal, high-performance digital experiences for
              startups and modern businesses. Clean design, smooth interaction,
              measurable growth.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:border-white/20 transition"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-lg font-semibold">
                Let’s build your next project.
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Ready to elevate your brand and website with modern design and
                smooth motion?
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center 
                  rounded-xl 
                  bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
                  px-6 py-3 text-sm font-semibold text-slate-900 
                  shadow-lg shadow-emerald-500/20"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/50">
            © {year} ReactKit. All rights reserved.
          </p>

          <p className="text-xs text-white/40">
            Built with React • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
