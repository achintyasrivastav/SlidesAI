import React from 'react'
import { motion } from "framer-motion"
import Image from "../assets/Frame (1).png"
import User from "../assets/User.jpeg"
import User2 from "../assets/User2.png"
import User3 from "../assets/User3.png"

const Testimonials = () => {

    
  return (
    <>

        <div className='mx-auto border-[#CFD5DE] border-y-2 relative bg-gradient-to-b from-[#F5F7FA] to-[#FFFFFF]'>

            <div className='h-full border-x-2 border-[#CFD5DE] mx-20 flex flex-col justify-center pt-2'>


                {/* Rounded */}
                <svg  className='absolute -top-4 right-16 z-30'
                width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_1347)">
                <rect x="4" y="3" width="12" height="12" rx="4" fill="white"/>
                <rect x="4.35" y="3.35" width="11.3" height="11.3" rx="3.65" stroke="#CFD5DE" stroke-width="0.7"/>
                </g>
                <defs>
                <filter id="filter0_d_1_1347" x="0" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.0431373 0 0 0 0 0.270588 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1347"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1347" result="shape"/>
                </filter>
                </defs>
                </svg>

                {/*L*/}
                <svg className='absolute top-0 left-20 -rotate-180'
                width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 -1.11759e-07V12H0" stroke="black"/>
                </svg>


                <motion.div className='flex flex-col justify-center items-center relative mt-5'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5 }}>
                    <img src={Image.src} alt="" />

                    <div className='absolute top-16 left-0 right-0 flex flex-col items-center'>
                        <div className="relative flex items-center justify-center w-36 h-14 rounded-full bg-gradient-to-b from-gray-200 to-white shadow-sm">
                            <button className="w-32 h-10 rounded-full text-semibold border border-gray-300 bg-gray-50 shadow-md text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300">
                                TESTIMONIALS
                            </button>
                        </div>

                        <h1 className="mt-12 font-geist font-bold text-center leading-10 text-4xl text-[#212F40]">
                            Don’t just take our word for it
                        </h1>
                    </div>
                </motion.div>


                <div className="z-30 bg-white rounded-[60px] shadow-sm border border-t-gray-200 border-b-0 border-x-grey  
                 mt-14 mx-64 ">

                    <motion.div className='z-30 bg-gradient-to-b from-[#e5ebf3] to-[#FFFFFF] rounded-[50px] mx-4 mt-4 mb-6'
                    >
                        <p className="font-geist font-medium text-[#344054] text-[16px] text-center leading-9 mb-12 px-40 pt-10">
                        SuperMetrics social analytics tool has provided great insights into social channels for our clients and has become an integral part of our content marketing strategies.
                            </p>
                            
                            <div className="flex flex-col items-center">
                                <img 
                                src={User.src} 
                                alt=""
                                className="h-16 w-16 rounded-full mb-4 shadow-md"
                                />
                                <h3 className="font-semibold text-[#212F40] text-lg mb-1">Mark Manson</h3>
                                <p className="text-gray-500 text-base mb-8">
                                Product Manager at <span className="text-[#212F40] underline font-geist font-semibold">Google</span>
                                </p>
                                
                                {/* Endorser Avatars */}
                                <div className="flex items-center -space-x-3 gap-6">
                                    <motion.div
                                        className="w-16 h-16 rounded-full flex justify-center items-center bg-moving-gradient"
                                        style={{
                                            backgroundSize: "200% 200%",
                                        }}
                                        animate={{
                                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                        }}
                                        >
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-b from-white to-white flex justify-center items-center"
                                         style={{
                                            transform: "rotate(0deg)", // Ensures no rotation happens to the inner div
                                          }}>
                                            <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 2}}
                                                src={User.src}
                                                alt="Endorser"
                                                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 2.4}}
                                    src={User2.src}
                                    alt="Endorser"
                                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                    />

                                    <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 3}}
                                    src={User3.src}
                                    alt="Endorser"
                                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                    />
                                
                                </div>
                            </div>
                    </motion.div>

                </div>

                <div className='bg-white h-10'>

                </div>

                {/* Rounded */}
                <svg  className='absolute -bottom-4 left-16 z-30'
                width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_1347)">
                <rect x="4" y="3" width="12" height="12" rx="4" fill="white"/>
                <rect x="4.35" y="3.35" width="11.3" height="11.3" rx="3.65" stroke="#CFD5DE" stroke-width="0.7"/>
                </g>
                <defs>
                <filter id="filter0_d_1_1347" x="0" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.0431373 0 0 0 0 0.270588 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1347"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1347" result="shape"/>
                </filter>
                </defs>
                </svg>


                {/*R*/}
               <svg className='absolute bottom-0 right-20 rotate-180'
                 width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13V1H13" stroke="black"/>
                </svg>

            </div>

        </div>


        <div className='h-2/6 flex justify-center align-middle items-center'>

            <svg width="370" height="20" viewBox="0 0 370 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="370" y1="9.35" x2="10" y2="9.35" stroke="#CFD5DE" stroke-width="0.7"/>
            <g filter="url(#filter0_d_1_1273)">
            <rect x="4" y="3" width="12" height="12" rx="4" fill="white"/>
            <rect x="4.35" y="3.35" width="11.3" height="11.3" rx="3.65" stroke="#CFD5DE" stroke-width="0.7"/>
            </g>
            <defs>
            <filter id="filter0_d_1_1273" x="0" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.0431373 0 0 0 0 0.270588 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1273"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1273" result="shape"/>
            </filter>
            </defs>
            </svg>

            <img src={Image.src} className='h-10 w-10 -mt-3 mx-5' alt="" />


            <svg width="370" height="20" viewBox="0 0 370 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3.0598e-08" y1="8.65" x2="360" y2="8.65003" stroke="#CFD5DE" stroke-width="0.7"/>
            <g filter="url(#filter0_d_1_1276)">
            <rect width="12" height="12" rx="4" transform="matrix(-1 0 0 1 366 3)" fill="white"/>
            <rect x="-0.35" y="0.35" width="11.3" height="11.3" rx="3.65" transform="matrix(-1 0 0 1 365.3 3)" stroke="#CFD5DE" stroke-width="0.7"/>
            </g>
            <defs>
            <filter id="filter0_d_1_1276" x="350" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.0431373 0 0 0 0 0.270588 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1276"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1276" result="shape"/>
            </filter>
            </defs>
            </svg>


        </div>
    
    </>
  )
}

export default Testimonials