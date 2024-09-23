import React from 'react'
import Server from '../assets/server.png';
import Users from '../assets/users.png';
import Shoppingcart from '../assets/shopping-cart.png';
import Globe from '../assets/globe.png';
import Arrow from '../assets/arrow-right.png';

function Socialproof() {
  return (
    <div  className='flex flex-col gap-20 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-20'>
       <div className=''>
        <p className='text-lg text-purple-600'>Trusted Worldwide</p>
        <p className='mt-4 mb-4 text-4xl font-bold'>Trusted by over 600 million users and 10,000 teams</p>
        <p className='mb-4 text-2xl text-gray-500 '>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
         <hr></hr>
        <div className="flex items-center mt-6 ">
       <p className='text-purple-600'>Explore Legality Guide</p>
       <img src={Arrow} alt="arrow" className="ml-2" />
       </div>

       <div className="flex items-center ">
       <p className='text-purple-600'>Visit the Trust Center</p>
       <img src={Arrow} alt="arrow" className="ml-2" />
       </div>

        </div> 


    <div className="grid grid-cols-2 gap-4">
  <div>
    <img src={Server} alt="Server" />
    <p className="text-2xl font-bold">99.99% uptime</p>
    <p className="text-gray-500">for Flowbite, with zero maintenance downtime</p>
  </div>
  <div>
    <img src={Users} alt="Users" />
    <p className="text-2xl font-bold">600M+ Users</p>
    <p className="text-gray-500">trusted by over 600 million users around the world</p>
  </div>
  <div>
    <img src={Shoppingcart} alt="Shoppingcart" />
    <p className="text-2xl font-bold">Millions</p>
    <p className="text-gray-500">of transactions per day</p>
  </div>
  <div>
    <img src={Globe} alt="Globe" />
    <p className="text-2xl font-bold">100+ countries</p>
    <p className="text-gray-500">have used Flowbite to create functional websites</p>
  </div>
</div>

    </div>
   
  )
}

export default Socialproof