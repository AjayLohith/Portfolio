
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
// import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  // Function to initialize intersection observers for animations
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" // Adjusted to trigger animations earlier
    });

    // Short timeout to ensure DOM is fully loaded
    setTimeout(() => {
      const animatedElements = document.querySelectorAll(".animate-item");
      
      if (animatedElements.length === 0) {
        console.log("No animated elements found");
      } else {
        console.log(`Found ${animatedElements.length} animated elements`);
        animatedElements.forEach((el) => {
          observer.observe(el);
          // Force show elements after a delay as fallback
          setTimeout(() => {
            el.classList.add("show");
          }, 1000);
        });
      }
    }, 100);

    return () => {
      const animatedElements = document.querySelectorAll(".animate-item");
      if (observer) {
        animatedElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="bg-portfolio-navy min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <TechStack /> */}
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <ScrollToTop/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
