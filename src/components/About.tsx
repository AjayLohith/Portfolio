import { useEffect } from "react";

const About = () => {
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

    const elements = document.querySelectorAll(".animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section bg-portfolio-section px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="mr-2">01.</span> ABOUT ME
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main About Card */}
          <div className="lg:col-span-2 border-4 border-black bg-white p-6 shadow-brutal-lg animate-item">
            <h3 className="text-2xl font-black uppercase mb-4 border-b-4 border-black pb-2">
              WHO I AM
            </h3>

            <p className="text-black font-semibold mb-4 leading-relaxed">
              I am a{" "}
              <span className="bg-black text-white px-2 py-0.5 font-black">
                PASSIONATE
              </span>{" "}
              Java Backend Developer with a strong interest in building scalable,
              high-performance applications using{" "}
              <span className="font-black">
                Core Java, Spring Boot, REST APIs, databases, and distributed
                systems.
              </span>
            </p>

            <p className="text-black font-semibold mb-4 leading-relaxed">
              Beyond backend development, I am actively exploring{" "}
              <span className="font-black">
                AI Engineering and Agentic AI
              </span>{" "}
              by learning and building with{" "}
              <span className="font-black">
                Large Language Models (LLMs), Retrieval-Augmented Generation
                (RAG), context management, vector databases, and tool-calling
                workflows
              </span>{" "}
              to create intelligent, production-ready applications.
            </p>

            <p className="text-black font-semibold leading-relaxed">
              I enjoy solving complex engineering problems, writing clean and
              maintainable code, and continuously expanding my expertise in{" "}
              <span className="font-black">
                scalable backend architectures, microservices, distributed
                systems, and AI-powered software development.
              </span>
            </p>
          </div>

          {/* Values Card */}
          <div className="border-4 border-black bg-white p-6 shadow-brutal-lg animate-item">
            <h3 className="text-xl font-black uppercase mb-4 border-b-4 border-black pb-2">
              MY VALUES
            </h3>
            <ul className="space-y-3">
              {[
                { label: "SOLUTION ORIENTED", icon: "→" },
                { label: "ADAPTABLE", icon: "→" },
                { label: "CLEAN CODE", icon: "→" },
                { label: "USER-FOCUSED", icon: "→" },
                { label: "HIGH QUALITY", icon: "→" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center font-bold text-black"
                >
                  <span className="w-6 h-6 border-2 border-black flex items-center justify-center mr-3 text-sm font-black">
                    {item.icon}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Card - Full Width */}
          <div className="lg:col-span-3 border-4 border-black bg-white p-6 shadow-brutal-lg animate-item">
            <h3 className="text-xl font-black uppercase mb-4 border-b-4 border-black pb-2">
              TECHNOLOGIES I WORK WITH
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "JAVA",
                "SPRING BOOT",
                "Agentic AI",
                "RAG",
                "VECTOR DBs",
                "MCP",
                "LLMs",
                "GPT",
                "JAVASCRIPT",
                "TYPESCRIPT",
                "REACT",
                "NODE.JS",
                "EXPRESS",
                "MONGODB",
                "REST APIs",
                "POSTGRESQL",
                "SQL",
                "HTML/CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border-4 border-black font-black text-sm bg-white hover:bg-black hover:text-white transition-colors shadow-brutal hover:shadow-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;