import React from 'react';
import Logo from '../assets/logo.png';
function navbar() {
  return (
    <div className='flex flex-row items-center justify-between m-8'>
        <div className='flex flex-row items-center'> 
 
 
          <div className='flex flex-row items-center gap-4 pr-6'>
           <img src={Logo} alt="logo" />
           <h1 className='text-2xl font-bold'>LandWind</h1>
          </div>

          <div className='hidden md:block '>
          <ul className='flex flex-row gap-8 '>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
             </ul>
          </div>
           
          

            
        </div>

        
        <div className='flex flex-row items-center gap-4'>
           <h1>Login</h1>
           <h1 className='p-3 rounded-lg bg-primary'> get Started</h1>
        </div>
    </div>
  );
}

export default navbar;