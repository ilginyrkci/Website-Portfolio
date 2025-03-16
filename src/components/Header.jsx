import { useState } from "react";
import { motion } from "framer-motion";

export default function Header({ setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Ilgın Habibe Yürekçi</h1>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex space-x-6">
          {[
            { section: "home", label: "Ana Sayfa" },
            { section: "about", label: "Hakkımda" },
            { section: "skills", label: "Yetenekler" },
            { section: "projects", label: "Projeler" },
            { section: "contact", label: "İletişim" },
          ].map(({ section, label }) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className="px-3 py-2 rounded-lg font-semibold transition-all"
              whileHover={{ y: -5, scale: 1.1, color: "#FFD700" }}
              whileTap={{ scale: 0.9 }}
            >
              {label}
            </motion.button>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 w-6 bg-white mb-1"
          />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 w-6 bg-white mb-1"
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? -45 : 0 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 w-6 bg-white"
          />
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {[
            { section: "home", label: "Ana Sayfa" },
            { section: "about", label: "Hakkımda" },
            { section: "skills", label: "Yetenekler" },
            { section: "projects", label: "Projeler" },
            { section: "contact", label: "İletişim" },
          ].map(({ section, label }) => (
            <motion.button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setIsMenuOpen(false); // Close the menu on selection
              }}
              className="text-white text-2xl font-semibold px-6 py-4 w-full text-center"
              whileHover={{ y: -5, scale: 1.1, color: "#FFD700" }}
              whileTap={{ scale: 0.9 }}
            >
              {label}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
