import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-portfolio-lightNavy shadow-md">
      <h1 className="text-2xl font-bold text-portfolio-green">Portfolio</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-portfolio-green hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" className="text-portfolio-green hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-portfolio-green hover:underline">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;