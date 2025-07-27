import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-0 px-6">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Hero Text */}
        <div className="space-y-5">
          <p
            className={`text-portfolio-green font-mono text-lg transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-100`}
          >
            Hi, my name is
          </p>
          <h1
            className={` text-[#1a1a1a] transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-200`}
          >
            Ajay Lohith Kulla.
          </h1>
          <h2
            className={`text-portfolio-slate text-3xl md:text-5xl lg:text-6xl transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-300`}
          >
            I build things for the web.
          </h2>
          <p
            className={`max-w-xl text-portfolio-textPrimary text-lg md:text-xl transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-400`}
          >
            I'm a software developer specializing in Java and MERN technologies. With a background in Electrical Engineering, I'm passionate about creating innovative solutions and expanding my skills in web development.
          </p>
          <div
            className={`pt-8 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-300 delay-500`}
          >
            <a href="#projects" className="button text-lg px-7 py-4">
              Check out my projects
            </a>
          </div>
        </div>

        {/* Right Side: Photo Placeholder */}
        {/* <div className="relative group mx-auto w-full sm:w-[200px] md:w-[500px] lg:w-[600px] xl:w-[400px] h-[calc(100%-5px)]"> */}
          {/* Outer Border */}
          {/* <div className="absolute inset-0 border-2 border-portfolio-green rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div> */}
          {/* Inner Image */}
          {/* <div className="relative z-10 bg-portfolio-navy rounded-lg overflow-hidden"> */}
            {/* <img */}
              {/* src="/ajay.jpg" // Correct path for public folder */}
              {/* alt="Your Photo" */}
              {/* className="w-full h-full object-contain rounded-lg" */}
            {/* /> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
