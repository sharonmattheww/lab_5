import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              HealthCare+
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/services" className="hover:text-blue-200 transition">Services</Link>
            <Link to="/contact" className="hover:text-blue-200 transition">Book Appointment</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-blue-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="block py-2 hover:text-blue-200" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" className="block py-2 hover:text-blue-200" onClick={() => setIsOpen(false)}>Book Appointment</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;