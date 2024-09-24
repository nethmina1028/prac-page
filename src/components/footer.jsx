import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function footer() {
  return (
    <div>
    <div className="flex items-start gap-10 jusify-around flex-wrap flex-row-2">
      
        <div className='mx-14'>
        <p className="mt-6 mb-4 text-sm font-semibold uppercase">Company</p>
        <div className='text-base font-normal text-gray-500'>
        <p className='mb-4'>About</p>
        <p className='mb-4'>Premium</p>
        <p className='mb-4'>Blog</p>
        <p className='mb-4'>Affiliate Program</p>
        <p className='mb-4'>Get Coupon</p>
        </div>
        </div>
        
        <div className='mx-14'>
        <p className="mt-6 mb-4 text-sm font-semibold uppercase">Help and support</p>
        <div className='text-base font-normal text-gray-500'>
        <p className='mb-4 mr-2.5'>Contact us</p>
        <p className='mb-4 mr-2.5'>Knowledge Center</p>
        <p className='mb-4 mr-2.5'>Premium Support</p>
        <p className='mb-4 mr-2.5'>Sponserships</p>
        </div>
        </div>
    

        <div className='mx-14'>
        <p className="mt-6 mb-4 text-sm font-semibold uppercase">Learning</p>
        <div className='text-base font-normal text-gray-500'>
        <p className='mb-4 mr-8'>Learn Hubs</p>
        <p className='mb-4 mr-8'>Manuals</p>
        <p className='mb-4 mr-8'>Tutorials</p>
        <p className='mb-4 mr-8'>Communities</p>
        </div>
        </div>

        <div className='mx-14'>
        <p className="mt-6 mb-4 text-sm font-semibold uppercase">Resources</p>
        <div className='text-base font-normal text-gray-500'>
        <p className='mb-4 mr-4'>Third Party Tools</p>
        <p className='mb-4 mr-4'>Illustrations</p>
        <p className='mb-4 mr-4'>Themesberg</p>
        <p className='mb-4 mr-4'>Blue Host</p>
        <p className='mb-4 mr-4'>Stock Photos</p>
        </div>
        </div>

        <div className='mx-14'>
        <p className="mt-6 mb-4 text-sm font-semibold uppercase">Legal</p>
        <div className='text-base font-normal text-gray-500'>
        <p className='mb-4'>Privacy Policy</p>
        <p className='mb-4'>Terms & Conditions</p>
        <p className='mb-4'>EULA</p>
        </div>
        </div>
    </div>
        <div className='flex flex-row gap-4 justify-center mt-14'>
           <img src="src/assets/logo.png"/>
           <p className='text-2xl font-semibold'>LandWind</p>       
        </div>
        <div className='justify-center my-4 text-center'>
           <p className='text-base font-normal text-gray-500'>© 2022 Flowbite, Inc. All rights reserved.</p>
        </div>
        <div className="mt-4 flex flex-row gap-10 text-gray-500 justify-center items-center mb-20">
          <FaGithub size={20}/><FaTwitter size={20}/><FaDribbble size={20} /><FaFacebookF size={20}/>
        </div>
    </div>
  )
}

export default footer