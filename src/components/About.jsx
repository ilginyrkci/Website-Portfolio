import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ y: -10 }} // Hover efekti: Üzerine gelince yukarı kalkar
      className="relative w-full py-20 bg-gray-800 flex justify-center items-center px-6 sm:px-12"
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full text-black"
        whileHover={{ y: -10 }} // İçeriğin de yukarı kalkmasını sağlar
        transition={{ type: "spring", stiffness: 200 }} // Daha doğal bir hareket için yay animasyonu
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center color3">
          Hakkımda
        </h2>
        <p className="mt-4 text-lg sm:text-xl color1">
          Merhaba! Ben Ilgın Habibe, 18 yaşında, Bilişim Teknolojileri alanında lise eğitimi almış ve yazılım dünyasına tutkuyla bağlı bir Junior Front-End Developer'ım.
          Her yıl farklı bir programlama dili öğrenerek kendimi geliştirdim ve teknolojinin sunduğu imkanları en verimli şekilde kullanmayı hedefliyorum.
          Bilişim Teknolojileri eğitimim boyunca Python, C#, C++, PHP, ASP.NET, Java, JavaScript, HTML ve CSS gibi birçok programlama dilinde bilgi ve tecrübe kazandım.
          Hem front-end hem back-end geliştirme hakkında güçlü bir temelim var.
          Ancak, kariyerimi front-end geliştirme üzerine inşa etmek ve kullanıcı odaklı web arayüzleri oluşturmak için çalışıyorum.
        </p>
      </motion.div>
    </motion.div>
  );
}
