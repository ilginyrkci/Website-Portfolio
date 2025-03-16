import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "React Todo Uygulaması",
      url: "https://react-todoo-nine.vercel.app/",
    },
    {
      title: "İklim Değişikliği Web Sitesi",
      url: "https://iklim-degisikligi.vercel.app/",
    },
    {
      title: "Frontend Quiz",
      url: "https://front-end-quiz-nine.vercel.app/",
    },
    {
      title: "Dessert App",
      url: "https://dessert-app-three.vercel.app/",
    },
    {
      title: "Twitter Clone ",
      url: "https://twitter-clone-psi-swart.vercel.app/",
    },
    {
      title: "React Filter",
      url: "https://react-filterr.vercel.app/",
    },
    {
      title: "React Todo App",
      url: "https://react-todo-app-2kgv.vercel.app/",
    },
    {
      title: "Görev Ekleme Uygulaması",
      url: "https://gorev-ekleme.vercel.app/",
    },
    {
      title: "Seyahat Günlüğü",
      url: "https://seyehat-gunlugu.vercel.app/",
    },
    {
      title: "Figma Tasarımları",
      url: "https://figmaa-neon.vercel.app/",
    },
    {
      title: "Favori Filmler ",
      url: "https://favori-film-rho.vercel.app/",
    },
    {
      title: "Favori Kitap ",
      url: "https://favori-kitap-tablosu.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-800 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Projelerim</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center"
              whileHover={{ y: -10 }} // Hover sırasında yukarı kalkma efekti
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md transition-all hover:bg-yellow-600 hover:shadow-lg"
                whileHover={{ scale: 1.1 }} // Butona hover yapınca büyüme efekti
                whileTap={{ scale: 0.9 }} // Butona tıklayınca küçülme efekti
              >
                Görüntüle
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
