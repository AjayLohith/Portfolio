import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

type ProjectCategory = "AI / ML" | "Full Stack" | "Backend" | "Frontend";

type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Naive RAG System",
    category: "AI / ML",
    description:
      "A Retrieval-Augmented Generation (RAG) system designed to answer questions using information retrieved from a custom knowledge base instead of relying solely on the LLM's pretrained knowledge. Built with Python, Groq's LLaMA 3.3 70B model, and ChromaDB for vector storage, the system processes documents into meaningful chunks, stores them as embeddings, performs semantic similarity search, and provides the most relevant context to the LLM for accurate, context-aware responses.",
    tech: [
      "Python",
      "RAG",
      "Groq",
      "LLaMA 3.3 70B",
      "ChromaDB",
      "OpenAI API",
      "Vector Embeddings",
      "Semantic Search",
    ],
    github: "https://github.com/AjayLohith/Naive-RAG",
    image: "/placeholder.svg",
  },
  {
    title: "StudyBot",
    category: "AI / ML",
    description:
      "An AI-powered PDF chatbot built using Retrieval-Augmented Generation (RAG) that allows users to upload documents and ask natural-language questions about their content. The application extracts and chunks document text, generates embeddings, stores them in a vector database, and retrieves the most relevant information before generating context-aware responses. Built with Python and Streamlit, with semantic search and LLM-powered question answering for an interactive document-based study experience.",
    tech: [
      "Python",
      "Streamlit",
      "RAG",
      "Google Gemini",
      "FAISS",
      "LangChain",
      "PyPDF2",
      "Embeddings",
    ],
    github: "https://github.com/AjayLohith/StudyBot",
    live: "https://studybottt.streamlit.app/",
    image: "/placeholder.svg",
  },
  {
    title: "Distributed Key-Value Store",
    category: "Backend",
    description:
      "A fault-tolerant distributed key-value store inspired by Redis, DynamoDB, and etcd. Built using Spring Boot microservices with an API Gateway for load balancing across 3 independent nodes. Features event-driven replication via Kafka, Read/Write-Through caching with Redis, PostgreSQL persistence, and full Dockerized multi-container deployment.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "React",
    ],
    github:
      "https://github.com/kuderella-abhilash/Distributed-Key-Value-Draft/tree/main",
  },
  {
    title: "PlacementBoard",
    category: "Full Stack",
    description:
      "A comprehensive placement and career development portal designed to connect students, job seekers, and employers. Features job listings, company profiles, interview experiences, and AI-powered career guidance. Built with a robust Spring Boot backend, MongoDB persistence, and modern React frontend. Users can explore job opportunities, discover companies, share interview experiences, and access AI-powered career guidance powered by Groq's LLaMA 3.3 model.",
    tech: [
      "React (Vite)",
      "JavaScript",
      "Tailwind CSS",
      "Spring Boot",
      "Java",
      "MongoDB",
      "JWT",
      "Groq AI",
      "Docker",
      "Render",
      "Vercel",
    ],
    github: "https://github.com/AjayLohith/PlacementBoard",
    live: "https://placement-board-six.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    title: "SnapLink",
    category: "Full Stack",
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
      "Vercel",
    ],
    github: "https://github.com/AjayLohith/url-shortner",
    live: "https://snaplinkk.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    title: "CodeList",
    category: "Full Stack",
    description:
      "CodeList is a secure and simple task-management application built with Spring Boot, MongoDB, and Firebase Authentication. Each user gets a private workspace to add, update, or delete tasks, with all data securely stored in the database. The app follows a clean layered architecture, supports full CRUD functionality with timestamps, and includes Docker support for easy containerization and deployment. Its modern tech stack and smooth deployment process make it efficient, scalable, and user-friendly.",
    tech: ["Java", "Spring Boot", "Firebase", "MongoDB", "Maven", "Docker"],
    github: "https://github.com/AjayLohith/CodeList",
    live: "https://code-list-omega.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    title: "CodeComplexer",
    category: "Frontend",
    description:
      "Built a real-time code analysis tool supporting multiple programming languages. Provides instant detection of time and space complexity, with intelligent suggestions for optimization. Features a fast and minimal UI using a web-based code editor. Backend powered by Firebase, with seamless deployment on Vercel.",
    tech: ["JavaScript", "Firebase", "Vercel", "Tailwind CSS", "Monaco Editor"],
    github: "https://github.com/AjayLohith/CodeComplexer",
    live: "https://codecomplexer.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    title: "ListiFy",
    category: "Frontend",
    description:
      "Developed a responsive and intuitive To-Do List application with functionality for adding, editing, and deleting tasks. Emphasized clean UI design and optimized state management for seamless user experience. Applied modular component design and reusable logic using React Hooks to enhance maintainability.",
    tech: ["React", "JavaScript", "CSS", "State Management", "React Hooks"],
    github: "https://github.com/AjayLohith/ListiFy",
    live: "https://listify-ten.vercel.app/",
    image: "/placeholder.svg",
  },
  {
    title: "TextTweaks",
    category: "Frontend",
    description:
      "Designed and deployed a text utility web application using React.js and Vercel. Integrated features such as real-time word and character counting, as well as dynamic theme toggling for enhanced usability. Implemented responsive design with Tailwind CSS and React Hooks to ensure accessibility across devices and maintainable component logic. Prioritized intuitive UX with minimalistic layout and toggleable themes for user accessibility.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "React Hooks",
      "Responsive Design",
    ],
    github: "https://github.com/AjayLohith/TextTweaks",
    live: "https://texttweaks.vercel.app",
    image: "/placeholder.svg",
  },
];

const FILTERS = ["All", "AI / ML", "Full Stack", "Backend", "Frontend"] as const;
type Filter = (typeof FILTERS)[number];

const MAX_TECH_ON_CARD = 4;

const filterChipClasses = (isActive: boolean) =>
  [
    "px-3 py-1.5 border-2 border-black font-bold text-sm uppercase transition-colors",
    isActive
      ? "bg-black text-white"
      : "bg-white text-black hover:bg-black hover:text-white",
  ].join(" ");

const iconLinkClasses =
  "text-black hover:scale-110 transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) => {
  const visibleTech = project.tech.slice(0, MAX_TECH_ON_CARD);
  const hiddenTechCount = project.tech.length - visibleTech.length;

  return (
    <article className="group flex h-full flex-col border-4 border-black bg-white p-5 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-3px] hover:translate-y-[-3px] transition-[transform,box-shadow] duration-150 ease-out animate-item">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-1 text-[11px] font-black uppercase tracking-wider opacity-60">
            {project.category}
          </div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight break-words">
            {project.title}
          </h3>
        </div>

        <div className="flex shrink-0 items-center gap-3 pt-1">
          <a
            href={project.github}
            className={iconLinkClasses}
            aria-label={`${project.title} on GitHub`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={22} />
          </a>
          {project.live && (
            <a
              href={project.live}
              className={iconLinkClasses}
              aria-label={`${project.title} live site`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink size={22} />
            </a>
          )}
        </div>
      </div>

      {/* Summary - clamped so every card stays the same height */}
      <p className="mt-3 text-sm font-semibold leading-relaxed text-black line-clamp-4">
        {project.description}
      </p>


      {/* Tech */}
      <div className="mt-4 flex flex-wrap gap-2">
        {visibleTech.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="bg-white border-2 border-black text-black font-bold px-2.5 py-0.5 text-xs"
          >
            {tech}
          </Badge>
        ))}
        {hiddenTechCount > 0 && (
          <Badge
            variant="outline"
            className="bg-black border-2 border-black text-white font-bold px-2.5 py-0.5 text-xs"
          >
            +{hiddenTechCount}
          </Badge>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="button inline-flex items-center gap-2 w-full justify-center"
          aria-label={`Read more about ${project.title}`}
        >
          Read More
          <FiArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
};

const ProjectDialog = ({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) => (
  <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto border-4 border-black bg-white shadow-brutal-lg">
      {project && (
        <>
          <DialogHeader>
            <div className="text-[11px] font-black uppercase tracking-wider opacity-60">
              {project.category}
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight pr-8">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-black font-semibold leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-white border-2 border-black text-black font-bold px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button inline-flex items-center gap-2"
            >
              <FiGithub size={16} /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="button inline-flex items-center gap-2 bg-black text-white"
              >
                <FiExternalLink size={16} /> Live
              </a>
            )}
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

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
  }, [visibleProjects]);

  return (
    <section id="projects" className="px-4 bg-portfolio-section scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">03.</span> Projects
        </h2>

        {/* Filters */}
        <div
          className="mb-8 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={filterChipClasses(activeFilter === filter)}
            >
              {filter}
            </button>
          ))}
          <span className="ml-auto text-sm font-black uppercase opacity-60">
            {visibleProjects.length} / {projects.length} Projects
          </span>
        </div>

        {/* Compact grid - everything visible at a glance */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
