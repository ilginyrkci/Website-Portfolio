import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 py-20 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Yeteneklerim</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {[
            { title: "Programlama Dilleri", skills: "Python, C#, C++, PHP, Java, JavaScript" },
            { title: "Web Teknolojileri", skills: "HTML5, CSS3, JavaScript" },
            { title: "Framework ve Araçlar", skills: "JQuery, Bootstrap, ASP.NET, Flask" },
            { title: "Versiyon Kontrolleri", skills: "Git ve GitHub" },
            { title: "Responsive Tasarım", skills: "Tüm cihazlara uyumlu arayüz tasarlama" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ y: -8, scale: 1.05, backgroundColor: "#4F46E5" }} // Hover efekti
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold">{skill.title}</h3>
              <p className="text-lg mt-2">{skill.skills}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
