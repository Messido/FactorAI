import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // To track the current URL

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to section after navigation
  useEffect(() => {
    const hash = location.hash; // e.g., "#services"
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top if no hash
    }
  }, [location]); // Trigger on location change

  // Navigation handler for anchor links
  const handleNavClick = (path: string, section?: string) => {
    const targetPath = section ? `${path}#${section}` : path;
    navigate(targetPath);
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-black/80 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Home Button */}
        <button
          onClick={() => handleNavClick("/")}
          className="text-2xl font-display font-bold text-white flex items-center focus:outline-none"
        >
          <span className="text-factor-red">Factor</span>
          <span className="text-white">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavClick("/", "home")}
            className="nav-link text-white"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("/", "services")}
            className="nav-link text-white"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick("/", "work")}
            className="nav-link text-white"
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick("/", "process")}
            className="nav-link text-white"
          >
            Process
          </button>
          <button
            onClick={() => handleNavClick("/", "contact")}
            className="nav-link text-white"
          >
            Contact
          </button>
          <Link to="/aboutus" className="nav-link text-white">
            About Us
          </Link>
          <button
            onClick={() => handleNavClick("/", "contact")}
            className="btn-primary"
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-factor-black-light border-t border-gray-800 animate-fade-in">
          <div className="px-6 py-6 flex flex-col space-y-6">
            <button
              onClick={() => handleNavClick("/", "home")}
              className="text-white hover:text-factor-red transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/", "services")}
              className="text-white hover:text-factor-red transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/", "work")}
              className="text-white hover:text-factor-red transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick("/", "contact")}
              className="text-white hover:text-factor-red transition-colors"
            >
              Contact
            </button>
            <Link
              to="/aboutus"
              className="text-white hover:text-factor-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button
              onClick={() => handleNavClick("/", "contact")}
              className="btn-primary inline-block text-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
