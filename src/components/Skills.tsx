
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckIcon, 
  ArrowRightIcon,
  LaptopIcon, 
  ServerIcon, 
  PaintbrushIcon 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <LaptopIcon className="h-6 w-6 text-portfolio-green" />,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frontend Technologies",
    icon: <PaintbrushIcon className="h-6 w-6 text-portfolio-green" />,
    skills: ["HTML", "CSS", "React", "Redux", "Bootstrap", "SASS"],
  },
  {
    title: "Backend Technologies",
    icon: <ServerIcon className="h-6 w-6 text-portfolio-green" />,
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs"],
  },
  {
    title: "Tools & Others",
    icon: <ArrowRightIcon className="h-6 w-6 text-portfolio-green" />,
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Heroku", "Figma"],
  },
];

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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-item">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-medium ml-2 text-portfolio-green">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card 
                    key={skill} 
                    className="animate-item bg-portfolio-navy border-portfolio-lightNavy hover:border-portfolio-green transition-colors duration-300"
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <span className="text-portfolio-lightestSlate font-medium">{skill}</span>
                      <CheckIcon className="h-5 w-5 text-portfolio-green" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
