import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg">About Us</h3>
          <p className="text-sm mt-2">
            StayFinder is your go-to platform for finding the perfect vacation rental, 
            offering a wide range of accommodations from city apartments to countryside cottages.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="text-sm hover:text-blue-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook">
              <img src="/path-to-icons/facebook.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/path-to-icons/twitter.png" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/path-to-icons/instagram.png" alt="Instagram" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        © {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
