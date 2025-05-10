
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "igiat",
    company: "INDO GERMAN INSTITUTE OF ADVANCED TECHNOLOGY",
    role: "Process Analyst Intern",
    date: "May 2024 - Jul 2024",
    location: "Visakhapatnam, AP",
    description: [
      "Documented and analyzed microcontrollers and processors.",
      "Captured workflows via photos and converted data into structured reports."
    ]
  }
];

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(experiences[0].id);
  
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
  
  const activeExperience = experiences.find(exp => exp.id === activeTabId) || experiences[0];

  return (
    <section id="experience" className="bg-portfolio-lightNavy/30 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">04.</span> Experience
        </h2>
        
        <div className="grid md:grid-cols-4 gap-4 animate-item">
          <div className="md:col-span-1">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
              {experiences.map(exp => (
                <button
                  key={exp.id}
                  className={cn(
                    "px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap md:whitespace-normal",
                    activeTabId === exp.id 
                      ? "text-portfolio-green border-portfolio-green bg-portfolio-green/10" 
                      : "text-portfolio-slate border-portfolio-lightNavy hover:bg-portfolio-lightNavy hover:text-portfolio-lightestSlate"
                  )}
                  onClick={() => setActiveTabId(exp.id)}
                >
                  {exp.company.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 animate-item">
            <div className="p-2">
              <h3 className="text-xl font-medium mb-1">
                {activeExperience.role} <span className="text-portfolio-green">@ {activeExperience.company}</span>
              </h3>
              <p className="text-portfolio-slate mb-4">{activeExperience.date} | {activeExperience.location}</p>
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
      </div>
    </section>
  );
};

export default Experience;
