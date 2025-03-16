import { motion } from "framer-motion";

export default function Header({ setActiveSection }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold color3">Ilgın Habibe Yürekçi</h1>
        <nav className="space-x-6 flex">
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
              className="color1 px-3 py-2 rounded-lg font-semibold transition-all"
              whileHover={{ y: -5, scale: 1.1, color: "#FFD700" }} // Hover animasyonu
              whileTap={{ scale: 0.9 }} // Butona tıklanınca küçülme efekti
            >
              {label}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
