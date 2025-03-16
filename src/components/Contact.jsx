import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-900 text-white flex justify-center items-center min-h-screen relative px-6 sm:px-12"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-xl max-w-2xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">İletişim</h2>
        <p className="mt-4 text-lg sm:text-xl">Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
        <div className="mt-6 space-y-4">
          <p className="text-xl">📞 +05527072853</p>
          <p className="text-xl">📧 yilginhabibe@gmail.com</p>
          <motion.a
            href="https://www.linkedin.com/in/ilg%C4%B1n-habibe-y%C3%BCrek%C3%A7i-188ba5279/"
            target="_blank"
            className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all"
            whileHover={{ y: -5, scale: 1.05 }}
          >
            🔗 LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/ilginyrkci"
            target="_blank"
            className="block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all"
            whileHover={{ y: -5, scale: 1.05 }}
          >
            🐙 GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
