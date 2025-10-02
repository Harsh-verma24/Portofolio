export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m [Your Name]</h1>
      <p className="text-xl mb-6">Full Stack Developer | Tech Enthusiast</p>
      <a href="/projects" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        View My Work
      </a>
    </section>
  );
}
