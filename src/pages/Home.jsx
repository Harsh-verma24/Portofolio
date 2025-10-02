
import Hero from "../components/Hero";
import { portfolioData } from "../data";

export default function Home() {
  return (
  <div className="fade-in">
      <Hero />
      <section className="p-8 text-center">
  <h2 className="text-3xl font-bold mb-4 accent-heading">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
          {portfolioData.about}
        </p>
      </section>
    </div>
  );
}
