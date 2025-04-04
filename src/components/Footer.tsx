import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string, section?: string) => {
    const targetPath = section ? `${path}#${section}` : path;
    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-factor-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-2xl font-display font-bold text-white flex items-center mb-4"
            >
              <span className="text-factor-red">Factor</span>
              <span className="text-white">.</span>
            </Link>
            <p className="text-gray-400 mb-6">
              A full-service digital agency helping brands thrive in an
              increasingly complex landscape.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/factororg/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-factor-black-light border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-factor-red transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Copywriting",
                "Digital Ads",
                "SEO",
                "Social Media",
                "Video Editing",
                "Web Development",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() =>
                      navigate(
                        `/services/${service.toLowerCase().replace(/ /g, "-")}`
                      )
                    }
                    className="text-gray-400 hover:text-factor-red transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/aboutus"
                  className="text-gray-400 hover:text-factor-red transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/", "work")}
                  className="text-gray-400 hover:text-factor-red transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/", "process")}
                  className="text-gray-400 hover:text-factor-red transition-colors"
                >
                  Process
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <a
                  href="https://wa.link/calzr8"
                  className="text-gray-400 hover:text-factor-red transition-colors"
                >
                  +91 93106 39514
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:official.thefactor@gmail.com"
                  className="text-gray-400 hover:text-factor-red transition-colors"
                >
                  official.thefactor@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Factor. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-factor-red text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-500 hover:text-factor-red text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-500 hover:text-factor-red text-sm transition-colors"
              >
                Sitemap
              </Link>
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                Made with 💗 by{"  "}
                <a
                  href="https://www.linkedin.com/in/siddhant-jagati-b156b8203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 hover:underline"
                >
                  Siddhant
                </a>
                {"  "}&{"  "}
                <a
                  href="https://www.linkedin.com/in/karan-mishra-4374762a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 hover:underline"
                >
                  Karan
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
