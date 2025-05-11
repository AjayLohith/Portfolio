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
              (bar as HTMLElement).style.width = targetWidth; // Set the width dynamically
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
      className="bg-portfolio-lightNavy/30 px-1 py-2 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center mb-8 animate-item" />
        <h2 className="section-title animate-item">
          <span className="text-portfolio-green pl-5 mr-2">02.</span> Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Technical Skills */}
          <div className="relative group mx-1 animate-item">
            {/* Outer Border */}
            <div className="absolute inset-0 border-2 border-portfolio-green rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
            {/* Solid Card */}
            <div className="relative bg-portfolio-lightNavy p-4 rounded-lg shadow-lg z-10">
              <h3 className="text-lg font-medium mb-2 text-portfolio-green">
                Frontend Skills
              </h3>
              <ul className="space-y-2">
                <li>
                  <p className="flex justify-between">
                    <span>HTML</span>
                    <span>90%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="90%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>CSS</span>
                    <span>85%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="85%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>Javascript</span>
                    <span>85%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="85%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>React.js</span>
                    <span>90%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="90%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group mx-1 animate-item">
            {/* Outer Border */}
            <div className="absolute inset-0 border-2 border-portfolio-green rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
            {/* Solid Card */}
            <div className="relative bg-portfolio-lightNavy p-4 rounded-lg shadow-lg z-10">
              <h3 className="text-lg font-medium mb-2 text-portfolio-green">
                Backend Skills
              </h3>
              <ul className="space-y-2">
                <li>
                  <p className="flex justify-between">
                    <span>Node.js</span>
                    <span>75%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="75%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>Express.js</span>
                    <span>80%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="80%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>MongoDB</span>
                    <span>80%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="80%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>SQL</span>
                    <span>85%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="85%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group mx-1 animate-item">
            {/* Outer Border */}
            <div className="absolute inset-0 border-2 border-portfolio-green rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
            {/* Solid Card */}
            <div className="relative bg-portfolio-lightNavy p-4 rounded-lg shadow-lg z-10">
              <h3 className="text-lg font-medium mb-2 text-portfolio-green">
                Languages
              </h3>
              <ul className="space-y-2">
                <li>
                  <p className="flex justify-between">
                    <span>C</span>
                    <span>85%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="85%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>C++</span>
                    <span>80%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="80%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>Python</span>
                    <span>75%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="75%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>Java</span>
                    <span>85%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="85%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group mx-1 animate-item">
            {/* Outer Border */}
            <div className="absolute inset-0 border-2 border-portfolio-green rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
            {/* Solid Card */}
            <div className="relative bg-portfolio-lightNavy p-4 rounded-lg shadow-lg z-10">
              <h3 className="text-lg font-medium mb-2 text-portfolio-green">
                Soft Skills
              </h3>
              <ul className="space-y-2">
                <li>
                  <p className="flex justify-between">
                    <span>Logial Thinking</span>
                    <span>85%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="85%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>Time Management</span>
                    <span>80%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="80%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>Team Leading</span>
                    <span>80%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="80%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
                <li>
                  <p className="flex justify-between">
                    <span>Desicion Making</span>
                    <span>80%</span>
                  </p>
                  <div className="w-full bg-portfolio-slate rounded-full h-2">
                    <div
                      className="bg-portfolio-green h-2 rounded-full progress-bar"
                      data-width="80%"
                      style={{
                        width: "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group mx-auto animate-fade-in-up">
            {/* Card Content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
