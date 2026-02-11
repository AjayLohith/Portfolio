import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // ✅ Import icons

const projects = [
  {
  title: "SnapLink",
  description:
    "An open-source, scalable URL shortening service built to simplify link sharing and management. It features a high-performance Spring Boot backend with Redis caching, rate limiting for API protection, and persistent storage using PostgreSQL. The modern React frontend enables users to generate, customize, validate, and track short URLs seamlessly, with containerized deployment for smooth scalability.",
  tech: [
    "React (Vite)",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Spring Boot",
    "Java",
    "Redis",
    "PostgreSQL (Supabase)",
    "Docker",
    "Render",
    "Vercel"
  ],
  github: "https://github.com/AjayLohith/url-shortner",
  live: "https://snaplinkk.vercel.app/",
  image: "/placeholder.svg",
},
  
 {
  title: "PlacementPedia",
  description:
    "A full-stack platform designed to help college students prepare for placements by accessing real interview experiences shared by peers. Features include user authentication, admin approval for content quality, and dynamic AI-generated company descriptions. Organized company-wise content and modern deployment architecture ensure a smooth experience.",
  tech: [
    "React (Vite)",
    "Tailwind CSS",
    "React Router",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Firebase API",
    "Render",
    "Vercel"
  ],
  github: "https://github.com/AjayLohith/PlacementPortal", // Replace with actual repo link
  live: "https://placementpedia.vercel.app/",               // Replace with actual live link
  image: "/placeholder.svg",
}
,

 {
  title: "CodeList",
  description:
    "CodeList is a secure and simple task-management application built with Spring Boot, MongoDB, and Firebase Authentication. Each user gets a private workspace to add, update, or delete tasks, with all data securely stored in the database. The app follows a clean layered architecture, supports full CRUD functionality with timestamps, and includes Docker support for easy containerization and deployment. Its modern tech stack and smooth deployment process make it efficient, scalable, and user-friendly.",
  tech: ["Java","Spring Boot", "Firebase", "MongoDB ", "Maven", "Docker"],
  github: "https://github.com/AjayLohith/CodeList", // Replace with actual repo link
  live: "https://code-list-omega.vercel.app/",               // Replace with actual live link
  image: "/placeholder.svg",
},

 {
  title: "CodeComplexer",
  description:
    "Built a real-time code analysis tool supporting multiple programming languages. Provides instant detection of time and space complexity, with intelligent suggestions for optimization. Features a fast and minimal UI using a web-based code editor. Backend powered by Firebase, with seamless deployment on Vercel.",
  tech: ["JavaScript", "Firebase", "Vercel", "Tailwind CSS", "Monaco Editor"],
  github: "https://github.com/AjayLohith/CodeComplexer", // Replace with actual repo link
  live: "https://codecomplexer.vercel.app/",               // Replace with actual live link
  image: "/placeholder.svg",
},

  
  {
    title: "ListiFy",
    description:
      "Developed a responsive and intuitive To-Do List application with functionality for adding, editing, and deleting tasks. Emphasized clean UI design and optimized state management for seamless user experience. Applied modular component design and reusable logic using React Hooks to enhance maintainability.",
    tech: ["React", "JavaScript", "CSS", "State Management", "React Hooks"],
    github: "https://github.com/AjayLohith/ListiFy",
    live: "https://listify-ten.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    title: "TextTweaks",
    description:
      "Designed and deployed a text utility web application using React.js and Vercel. Integrated features such as real-time word and character counting, as well as dynamic theme toggling for enhanced usability. Implemented responsive design with Tailwind CSS and React Hooks to ensure accessibility across devices and maintainable component logic. Prioritized intuitive UX with minimalistic layout and toggleable themes for user accessibility.",
    tech: ["React.js", "Tailwind CSS", "Vercel", "React Hooks", "Responsive Design"],
    github: "https://github.com/AjayLohith/TextTweaks",
    live: "https://texttweaks.vercel.app",
    image: "/placeholder.svg",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <div className="relative group mx-auto w-full max-w-5xl">
      {/* Green Outline Behind the Card */}
      <div className="absolute inset-0 rounded-lg border-2 border-portfolio-green 
                      translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 
                      transition-transform duration-300 z-0 pointer-events-none" />

      {/* Actual Card */}
      <div className="relative z-10 bg-portfolio-card text-portfolio-textPrimary rounded-md shadow-md overflow-hidden animate-item">
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-portfolio-green mb-2 font-mono">Featured Project</div>
              <h3 className="text-2xl font-semibold hover:text-portfolio-green transition-colors">
                {project.title}
              </h3>
            </div>
            <div className="flex space-x-4 mt-1">
              <a
                href={project.github}
                className="text-portfolio-textPrimary hover:text-portfolio-green transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={project.live}
                className="text-portfolio-textPrimary hover:text-portfolio-green transition-colors"
                aria-label="Live Site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink size={22} />
              </a>
            </div>
          </div>
          <p className="text-portfolio-textPrimary">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-transparent border-portfolio-gray text-portfolio-textPrimary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("#projects .animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="px-6 bg-portfolio-section">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">03.</span> Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
