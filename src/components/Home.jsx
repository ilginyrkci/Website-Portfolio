import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-center py-20 sm:py-10 px-6"
      >
        <motion.img
          src="/images/main.jpg"
          alt="Profil Fotoğrafı"
          className="w-48 h-48 rounded-full border-4 border-gray-700 shadow-lg mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -10 }}
        />
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 color4"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Merhaba, Ilgın Habibe Yürekçi
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mt-2 color2"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Jr. Frontend Developer
        </motion.p>
      </motion.div>

      {/* Diğer bölümler */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
    </>
  );
}
