
import { useEffect } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL (Basics)"],
  },
  {
    title: "Other Tools",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];

const SkillBar = ({ skill, index }: { skill: string; index: number }) => {
  // Calculate different percentages for skills to show varying proficiency
  const getRandomPercentage = (min = 70, max = 95) => {
    // Use index to create slightly different percentages
    return min + ((index * 7) % (max - min));
  };

  const percentage = getRandomPercentage();

  return (
    <div className="mb-4 animate-item">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span className="text-portfolio-green">{percentage}%</span>
      </div>
      <div className="h-2 bg-portfolio-lightNavy rounded-full overflow-hidden">
        <div 
          className="h-full bg-portfolio-green rounded-full"
          style={{ width: `${percentage}%`, transition: `width 1s ease-in-out` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
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

    const elements = document.querySelectorAll("#skills .animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="bg-portfolio-lightNavy/30 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">02.</span> Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {skillCategories.slice(0, 3).map((category, categoryIndex) => (
              <div key={category.title} className="animate-item">
                <h3 className="text-xl font-medium mb-4 text-portfolio-green">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill} 
                      skill={skill} 
                      index={categoryIndex * 5 + skillIndex} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {skillCategories.slice(3).map((category, categoryIndex) => (
              <div key={category.title} className="animate-item">
                <h3 className="text-xl font-medium mb-4 text-portfolio-green">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill} 
                      skill={skill} 
                      index={(categoryIndex + 3) * 5 + skillIndex} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
