
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "Java", proficiency: 90 },
      { name: "JavaScript", proficiency: 95 },
      { name: "TypeScript", proficiency: 85 },
      { name: "C++", proficiency: 80 },
    ],
  },
  {
    title: "Frontend Technologies",
    icon: <PaintbrushIcon className="h-6 w-6 text-portfolio-green" />,
    skills: [
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 90 },
      { name: "React", proficiency: 90 },
      { name: "Redux", proficiency: 85 },
      { name: "Bootstrap", proficiency: 80 },
      { name: "SASS", proficiency: 75 },
    ],
  },
  {
    title: "Backend Technologies",
    icon: <ServerIcon className="h-6 w-6 text-portfolio-green" />,
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 80 },
      { name: "MongoDB", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "RESTful APIs", proficiency: 90 },
    ],
  },
  {
    title: "Tools & Others",
    icon: <ArrowRightIcon className="h-6 w-6 text-portfolio-green" />,
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "GitHub", proficiency: 85 },
      { name: "VS Code", proficiency: 95 },
      { name: "Netlify", proficiency: 80 },
      { name: "Heroku", proficiency: 75 },
      { name: "Figma", proficiency: 70 },
    ],
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
    <section id="skills" className="bg-portfolio-lightNavy/30 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green mr-2">02.</span> Skills
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-item">
              <div className="flex items-center mb-8">
                {category.icon}
                <h3 className="text-2xl font-medium ml-2 text-portfolio-green">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Card 
                    key={skill.name} 
                    className="animate-item bg-portfolio-navy border-portfolio-lightNavy hover:border-portfolio-green transition-colors duration-300 overflow-hidden"
                  >
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-portfolio-lightestSlate font-medium">{skill.name}</span>
                        <span className="text-portfolio-green text-sm">{skill.proficiency}%</span>
                      </div>
                      <Progress 
                        value={skill.proficiency} 
                        className="h-2 bg-portfolio-lightNavy" 
                      />
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
