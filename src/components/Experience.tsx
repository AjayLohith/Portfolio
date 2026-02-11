import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "igiat",
    company: "Indo German Institute of Advanced Technology",
    role: "Intern",
    date: "May 2024 - Jul 2024",
    location: "Visakhapatnam, AP",
    description: [
      "Documented and analyzed microcontrollers and processors.",
      "Captured workflows via photos and converted data into structured reports.",
    ],
  },
  {
    id: "zidio",
    company: "Zidio Web Development",
    role: "Data Analyst Intern",
    date: "Mar 2024 - May 2024",
    location: "Remote",
    description: [
      "Assisted in data analysis and visualization using Python and SQL.",
      "Collaborated with the team to improve data collection processes.",
    ],
  },
  {
    id: "elite",
    company: "Elite Softech Solutions",
    role: "Full Stack Intern",
    date: "May 2025 - Jul 2025",
    location: "Remote",
    description: [
      "Built and maintained backend APIs using Node.js and Express.",
      "Worked on dynamic UI components with React.",
    ],
  },
];

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(experiences[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeExperience =
    experiences.find((exp) => exp.id === activeTabId) || experiences[0];

  const scrollTabs = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 120;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

    const elements = document.querySelectorAll("#experience .animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" className="bg-portfolio-section px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">04.</span> Internship
        </h2>

        {/* Mobile Layout (scrollable tabs with arrows) */}
        <div className="relative flex items-center my-4 md:hidden">
          <button onClick={() => scrollTabs("left")} className="z-10 p-1">
            <svg className="w-6 h-6 text-portfolio-textPrimary" fill="currentColor" viewBox="0 0 10 16">
              <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
            </svg>
          </button>

          <div ref={scrollRef} className="flex-1 overflow-x-auto scrollbar-hide px-2">
            <div className="flex gap-2 w-max">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTabId(exp.id)}
                  className={cn(
                    "px-4 py-2 whitespace-nowrap flex-shrink-0 border-b-2 transition-all",
                    activeTabId === exp.id
                      ? "text-portfolio-green border-portfolio-green bg-portfolio-gray"
                      : "text-portfolio-textSecondary border-transparent hover:bg-portfolio-lightNavy hover:text-portfolio-textPrimary"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => scrollTabs("right")} className="z-10 p-1">
            <svg className="w-6 h-6 text-portfolio-textPrimary" fill="currentColor" viewBox="0 0 10 16">
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </svg>
          </button>
        </div>

        {/* Desktop Layout (vertical tabs) */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 animate-item">
          <div className="md:col-span-1">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  className={cn(
                    "px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap md:whitespace-normal",
                    activeTabId === exp.id
                      ? "text-portfolio-green border-portfolio-green bg-portfolio-gray"
                      : "text-portfolio-textSecondary border-portfolio-gray hover:bg-portfolio-lightNavy hover:text-portfolio-textPrimary"
                  )}
                  onClick={() => setActiveTabId(exp.id)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 animate-item">
            <div className="p-2">
              <h3 className="text-xl font-medium mb-1">
                {activeExperience.role}{" "}
                <span className="text-portfolio-green">@ {activeExperience.company}</span>
              </h3>
              <p className="text-portfolio-textSecondary mb-4">
                {activeExperience.date} | {activeExperience.location}
              </p>
              <ul className="space-y-3">
                {activeExperience.description.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="text-portfolio-green mr-2 mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Common Content for Mobile (only visible on small screens) */}
        <div className="md:hidden animate-item">
          <div className="p-2">
            <h3 className="text-xl font-medium mb-1">
              {activeExperience.role}{" "}
              <span className="text-portfolio-green">@ {activeExperience.company}</span>
            </h3>
            <p className="text-portfolio-slate mb-4">
              {activeExperience.date} | {activeExperience.location}
            </p>
            <ul className="space-y-3">
              {activeExperience.description.map((item, i) => (
                <li key={i} className="flex">
                  <span className="text-portfolio-green mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
