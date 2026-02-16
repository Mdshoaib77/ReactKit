import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/Services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 
        bg-slate-950/90 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight 
              bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
              bg-clip-text text-transparent"
            >
              ReactKit
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} end>
                  {({ isActive }) => (
                    <span
                      className={`text-sm font-medium transition ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  )}
                </NavLink>
              ))}

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/login"
                  className="ml-4 rounded-lg 
                  bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400
                  px-5 py-2 text-sm font-semibold text-slate-900
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300"
                >
                  Login
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center 
              rounded-lg bg-white/5 border border-white/10 
              hover:bg-white/10 transition"
            >
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ===== Mobile Drawer ===== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 left-0 h-full w-1/2 
              bg-slate-950 z-50 p-10 border-r border-white/10"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-semibold 
                bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 
                bg-clip-text text-transparent">
                  ReactKit
                </span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 text-2xl hover:text-white transition"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-8 text-lg">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-lg 
                  bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400
                  px-5 py-3 text-center font-semibold text-slate-900"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
