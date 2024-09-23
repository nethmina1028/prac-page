import React from 'react'
import Icon from '../assets/icon.png';
import Avatar from '../assets/avatar.png';

function testimonials() {
  return (
    <div className='flex flex-col items-center justify-center py-12 mt-10 mb-10 text-center bg-gray-50'>
    <div>
      <img src={Icon} alt="icon" />
    </div>
    <div>
      <p className='mt-6 mb-6 text-lg font-bold'>"Flowbite is just awesome. It contains tons of predesigned <br />components and pages starting from login screen to complex <br />dashboard. Perfect choice for your next SaaS application."</p>
    </div>
    <div className='flex items-center'>
  <img src={Avatar} alt="avatar" className="mr-2" />
  <p className='font-bold text-gray-900'>
    Micheal Gough / <span className='text-gray-500'>CEO at Google</span>
  </p>
</div>

  </div>
  
  )
}

export default testimonials