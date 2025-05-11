import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const projects = [
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
    <div className="relative group mx-auto animate-pop-in">
      {/* Outer Border */}
      <div className="absolute inset-0 border-2 border-portfolio-green rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
      {/* Solid Card */}
      <div className="relative bg-portfolio-lightNavy rounded-md overflow-hidden shadow-lg z-10 animate-item">
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-portfolio-green mb-2 font-mono">Featured Project</div>
              <h3 className="text-2xl font-semibold hover:text-portfolio-green">
                {project.title}
              </h3>
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href={project.live}
                className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
                aria-label="External Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Sub-description text */}
          <p className="text-white">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-portfolio-navy border-portfolio-green text-portfolio-green"
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
    <section id="projects" className="px-6">
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
