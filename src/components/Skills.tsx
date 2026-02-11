import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar) => {
              const targetWidth = bar.getAttribute("data-width");
              (bar as HTMLElement).style.width = targetWidth || "0%";
            });
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
    <section
      id="skills"
      className="bg-portfolio-background px-4 py-12 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green pl-5 mr-2">02.</span> Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Card */}
          {[
            {
              title: "Frontend Skills",
              skills: [
                { label: "HTML", level: "90%" },
                { label: "CSS", level: "80%" },
                { label: "Javascript", level: "70%" },
                { label: "ReactJs", level: "80%" },
              ],
            },
            {
              title: "Backend Skills",
              skills: [
                { label: "Node.js", level: "75%" },
                { label: "Express.js", level: "80%" },
                { label: "MongoDB", level: "80%" },
                { label: "SQL", level: "85%" },
              ],
            },
            {
              title: "Languages",
              skills: [
                { label: "C", level: "85%" },
                { label: "C++", level: "80%" },
                { label: "Python", level: "75%" },
                { label: "Java", level: "85%" },
              ],
            },
          ].map((section, i) => (
            <div
              key={section.title}
              className="relative group w-full max-w-sm animate-item"
            >
              {/* Green Border Behind */}
              <div className="absolute inset-0 border-2  border-portfolio-green rounded-lg translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0 pointer-events-none" />

              {/* Solid Card */}
              <div className="relative bg-portfolio-card text-portfolio-textPrimary p-4 rounded-lg shadow-lg z-10">
                <h3 className="text-lg font-medium mb-4 text-portfolio-green">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.skills.map((skill) => (
                    <li key={skill.label}>
                      <p className="flex justify-between">
                        <span>{skill.label}</span>
                        <span>{skill.level}</span>
                      </p>
                      <div className="w-full bg-portfolio-gray rounded-full h-2">
                        <div
                          className="bg-portfolio-green h-2 rounded-full progress-bar"
                          data-width={skill.level}
                          style={{
                            width: "0%",
                            transition: "width 1.5s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
