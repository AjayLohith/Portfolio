import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons

const Contact = () => {
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

    const elements = document.querySelectorAll("#contact .animate-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="bg-portfolio-lightNavy/30 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-item">
          <span className="text-portfolio-green text-8xl md:text-6xl font-bold my-4 animate-item">
            Contact
          </span>
        </div>
        <p className="text-portfolio-slate mb-8 max-w-lg mx-auto animate-item">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-green text-3xl hover:text-portfolio-lightGreen transition-colors duration-300"
          >
            
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-green text-3xl hover:text-portfolio-lightGreen transition-colors duration-300"
          >
           
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="text-left animate-item">
            <h3 className="text-xl font-medium mb-4 text-portfolio-green">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:ajaylohith855@gmail.com" className="hover:text-portfolio-green">ajaylohith855@gmail.com</a>
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+919052132989" className="hover:text-portfolio-green">+91-9052132989</a>
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">
                  <FaLinkedin className="h-5 w-5" /> {/* LinkedIn Icon */}
                </span>
                <a
                  href="https://linkedin.com/in/ajay-lohith-kulla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-portfolio-green"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">
                  <FaGithub className="h-5 w-5" /> {/* GitHub Icon */}
                </span>
                <a
                  href="https://github.com/AjayLohith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-portfolio-green"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-left animate-item">
            <h3 className="text-xl font-medium mb-4 text-portfolio-green">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-portfolio-navy border-portfolio-lightNavy focus:border-portfolio-green" 
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-portfolio-navy border-portfolio-lightNavy focus:border-portfolio-green" 
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-portfolio-navy border-portfolio-lightNavy focus:border-portfolio-green min-h-[120px]" 
                />
              </div>
              <div>
                <button 
                  type="button" 
                  className="button px-6 py-3"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
