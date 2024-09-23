import React from 'react';

function navbar() {
  return (
    <>
      <div className='nav'>
        <div className='flex items-center logo'>
          <img 
            src="src/assets/logo.png" 
            alt="Landwind Logo" 
            className='w-8 h-8 mr-2' 
          />
          <span className="pr-10 text-2xl font-bold">Landwind</span>

          <div className='link'>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li><a href="#">Company</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#"><span className='font-bold'>Log In</span></a>
          <button className='button'>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default navbar;