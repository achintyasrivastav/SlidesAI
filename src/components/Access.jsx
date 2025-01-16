import React from 'react'
import { motion } from "framer-motion"
import window from '../assets/Mockup wrap (1).png';
import box from '../assets/box.svg';
import { svg } from 'framer-motion/client';

const Access = () => {
    
  return (
    <>

        <div className='h-4/6 relative mt-20'>


            <motion.img className='absolute right-0 mt-11'

            
            src={window.src} alt="" />


          

                <div className='absolute top-8 left-5 flex flex-col justify-start'>
                    <p className="mt-12 font-geist font-bold leading-[3.5rem] text-4xl text-[#212F40] px-32">
                    Access all your marketing <br /> data without leaving Google <br /> Workspace
                    </p>
                </div>

                <motion.img
                whileHover={{opacity: .5}}
                className='absolute bottom-32 left-36 cursor-pointer hover:opacity-[0.6]' src={box.src} alt="" />
                

                
        </div>
        
    </>
  )
}

export default Access;