import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import upward arrow icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
className={`fixed bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-lg transition-opacity duration-300 ${        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp
        className="h-5 w-5"
        style={{
          stroke: "white", // Add black border to the arrow
          strokeWidth: "3.5px", // Adjust the thickness of the border
        }}
      />
    </button>
  );
};

export default ScrollToTop;