import React from "react";



const Navbar = () => {
  return (
    <nav className="bg-white p-4 mb-0">
      <div className="container mx-auto flex justify-between items-center">
      <div className="font-allison text-[#0CA296] text-[95px] text-xl">relocate</div>

        <div className="flex items-center space-x-4">
          {/* Add your other navigation links here */}
          <a href="#" className="text-black font-bold hover:text-gray-400">Destinations</a>
          <a href="#" className="text-black font-bold hover:text-gray-400">Deals</a>
          <a href="#" className="text-black font-bold hover:text-gray-400">Explore</a>
          <a href="#" className="text-black font-bold hover:text-gray-400">Resources</a>
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </nav>
  );
};




export default Navbar;