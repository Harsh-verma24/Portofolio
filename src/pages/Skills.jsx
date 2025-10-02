
import { portfolioData } from "../data";

const skillLogos = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  Vite: "https://vitejs.dev/logo.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  C: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JWT: "https://jwt.io/img/pic_logo.svg",
  Appwrite: "https://appwrite.io/images/logo.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
};

const skillDescriptions = {
  React: "Learned through building real-world projects and following the official docs. I use React for creating dynamic, scalable UIs.",
  JavaScript: "Mastered via online courses and daily coding practice. JavaScript powers all my interactive web features.",
  CSS: "Started with basic layouts, then advanced to Flexbox and Grid through tutorials and experimentation.",
  HTML: "My first web skill, learned by creating static pages and understanding semantic markup.",
  Vite: "Adopted for fast development and modern tooling after exploring alternatives like Webpack.",
  "Node.js": "Learned backend concepts through building REST APIs and using Node.js in full-stack projects.",
  Express: "Picked up Express while building RESTful APIs and learning server-side routing. It’s my go-to for Node.js backends.",
  MongoDB: "Learned MongoDB for flexible, document-based data storage in full-stack apps. Practiced with Mongoose and aggregation pipelines.",
  TailwindCSS: "Discovered TailwindCSS for rapid UI development and custom designs. I use it to create beautiful, responsive layouts.",
  C: "Studied C in university and through online courses to understand low-level programming and memory management.",
  Python: "Learned Python for scripting, automation, and data science projects. I enjoy its simplicity and versatility.",
  JWT: "Implemented JWT for secure authentication in web apps, learning about token-based auth and security best practices.",
  Appwrite: "Explored Appwrite as a modern backend-as-a-service for authentication, storage, and database features in side projects.",
  Firebase: "Used Firebase for real-time databases, hosting, and authentication in several web and mobile apps."
};

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <div className="p-8 text-center fade-in">
      <h2 className="text-3xl font-bold mb-6 accent-heading">Skills</h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-200">
        Over the past few years, I’ve dedicated myself to mastering modern web technologies. My journey began with HTML and CSS, building simple web pages and experimenting with layouts. As I grew more curious, I dove into JavaScript, learning how to make sites interactive and dynamic. React became my framework of choice for building scalable user interfaces, and I’ve enjoyed exploring its ecosystem through real-world projects. Vite and Node.js have helped me understand fast development workflows and backend fundamentals. Each skill was learned through hands-on practice, online courses, and by collaborating on open-source projects. I believe in continuous learning and always strive to stay updated with the latest trends in web development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {skills.map((skill, i) => (
          <div key={i} className="bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              {skillLogos[skill] && (
                <img src={skillLogos[skill]} alt={skill + ' logo'} className="w-12 h-12 drop-shadow-lg" />
              )}
            </div>
            <span className="text-lg font-bold accent-heading mb-2">{skill}</span>
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center font-medium leading-relaxed">
              {skillDescriptions[skill]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
