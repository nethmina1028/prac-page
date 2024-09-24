import { useState } from 'react';
import Logo from '../assets/logo.png';

function Navbar() {
  // State to handle menu visibility on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='m-8'>
      {/* Navbar container */}
      <div className='flex flex-row items-center justify-between'>
        
        {/* Logo and navigation items */}
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center gap-4 pr-6'>
            <img src={Logo} alt="logo" />
            <h1 className='text-2xl font-bold'>LandWind</h1>
          </div>

          {/* Navigation items for medium and larger screens */}
          <div className='hidden md:block'>
            <ul className='flex flex-row gap-8'>
              <li>Company</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Login and Get Started buttons for medium and larger screens */}
        <div className='flex-row items-center hidden gap-4 md:flex'>
          <h1>Login</h1>
          <h1 className='p-3 text-white rounded-lg bg-primary'>Get Started</h1>
        </div>

        {/* Hamburger menu icon for small screens */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className='block mt-4 md:hidden'>
          <ul className='flex flex-col gap-4'>
              <li>Company</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Team</li>
              <li>Contact</li>
          </ul>

          <div className='flex flex-col gap-4 mt-4'>
            <h1>Login</h1>
            <h1 className='p-3 text-white rounded-lg bg-primary'>Get Started</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
