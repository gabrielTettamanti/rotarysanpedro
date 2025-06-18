import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, ExternalLink } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/about" },
    { name: "Proyectos", href: "/projects" },
    { name: "Noticias", href: "/news" },
    { name: "Contacto", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/rotary_logo.png"
              alt="Rotary Club Logo"
              className="h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-900 border-b-2 border-yellow-400 pb-1"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://rotary4895.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Distrito 4895</span>
            </a>
            <Link
              to="/join"
              className="flex items-center space-x-2 px-6 py-2 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium"
            >
              <Users className="w-4 h-4" />
              <span>Asociarse</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-900 bg-blue-50"
                    : "text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href="https://rotary4895.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Distrito 4895</span>
              </a>
              <Link
                to="/join"
                className="flex items-center space-x-2 px-3 py-2 bg-yellow-400 text-blue-900 rounded-md hover:bg-yellow-500 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-4 h-4" />
                <span>Asociarse</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
