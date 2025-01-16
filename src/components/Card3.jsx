import React from 'react'
import { motion } from "framer-motion"
import Image from "../assets/Toolbar and mockup.png"
import Img from "../assets/Mockup wrap.png"

const Card3 = () => {
    return (
        <>

            <motion.div
                className="relative bg-gradient-to-b from-[#eeeff1] to-[#FFFFFF] rounded-xl shadow-sm border border-gray-200 h-80 overflow-hidden"
                transition={{ duration: 0.8 }}
            >
                {/* Blurred Image */}
                <motion.img
                initial={{ opacity: 0, scale: 1.1 }} // Start blurred image with opacity 0 and slightly zoomed
                whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale down
                whileHover={{ scale: 1.2 }}
                viewport={{once: true, amount: .7}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                src={Image.src} className="blur-[5px] ml-11 mt-11 h-full w-full" alt="" />

                {/* Top Image */}
                <motion.img src={Img.src} className=" absolute top-5 right-0 z-60" alt=""
                initial={{ x: -50, opacity: 0 }} // Start slightly above and invisible
                whileInView={{ x: 0, opacity: 1 }} // Slide down into view
                viewport={{once: true, amount: .7}}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} />


                <motion.svg className=" absolute top-2 left-60 z-60"

                    initial={{opacity: 0 }} // Start slightly above and invisible
                    whileInView={{opacity: 1 }} // Slide down into view
                    whileHover={{ scale: 1.2 }}
                    viewport={{once: true, amount: .7}}
                    transition={{ duration: 1, delay:1}}
                width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_3204)">
                <rect width="66" height="66" rx="33" fill="white" fill-opacity="0.3"/>
                <rect x="0.526087" y="0.526087" width="64.9478" height="64.9478" rx="32.4739" stroke="#E3E8EF" stroke-width="1.05217"/>
                <path d="M42.4542 49H23.5451C22.3451 49 21.3633 48.0182 21.3633 46.8182V19.1818C21.3633 17.9818 22.3451 17 23.5451 17H36.636L44.636 25V46.8182C44.636 48.0182 43.6542 49 42.4542 49Z" fill="#FFBF00"/>
                <path d="M36.6328 17L44.6328 25H36.6328V17Z" fill="#FF9300"/>
                <path d="M25.7266 29.5469V39.7287H40.272V29.5469H25.7266ZM38.4539 37.9104H27.5448V31.365H38.4538V37.9104H38.4539Z" fill="#FBFFFF"/>
                </g>
                <defs>
                <filter id="filter0_b_1_3204" x="-8.55556" y="-8.55556" width="83.1111" height="83.1111" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.27778"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_3204"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_3204" result="shape"/>
                </filter>
                </defs>
                </motion.svg>


                <motion.svg className=" absolute top-12 left-12 z-60"
                
                initial={{opacity: 0 }} // Start slightly above and invisible
                whileInView={{opacity: 1 }} // Slide down into view
                whileHover={{ scale: 1.2 }}
                viewport={{once: true, amount: .7}}
                transition={{ duration: 1, delay:1.3}}

                width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_3210)">
                <rect width="66" height="66" rx="33" fill="white" fill-opacity="0.3"/>
                <rect x="0.526087" y="0.526087" width="64.9478" height="64.9478" rx="32.4739" stroke="#E3E8EF" stroke-width="1.05217"/>
                <g clip-path="url(#clip0_1_3210)">
                <path d="M42.4542 48.9961H23.5451C22.3451 48.9961 21.3633 48.0143 21.3633 46.8143V19.1779C21.3633 17.9779 22.3451 16.9961 23.5451 16.9961H36.636L44.636 24.9961V46.8143C44.636 48.0143 43.6542 48.9961 42.4542 48.9961Z" fill="#0086F9"/>
                <path d="M36.6328 16.9961L44.6328 24.9961H36.6328V16.9961Z" fill="#0067D9"/>
                <path d="M26.332 27.6602H39.423V29.4783H26.332V27.6602ZM26.332 32.0238H39.423V33.842H26.332V32.0238ZM26.332 36.3875H35.7866V38.2057H26.332V36.3875Z" fill="#FBFFFF"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_b_1_3210" x="-8.55556" y="-8.55556" width="83.1111" height="83.1111" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.27778"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_3210"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_3210" result="shape"/>
                </filter>
                <clipPath id="clip0_1_3210">
                <rect width="32" height="32" fill="white" transform="translate(17 17)"/>
                </clipPath>
                </defs>
                </motion.svg>


                <motion.svg className=" absolute bottom-10 left-6 z-60"
                
                initial={{opacity: 0 }} // Start slightly above and invisible
                whileInView={{opacity: 1 }} // Slide down into view
                viewport={{once: true, amount: .7}}
                transition={{ duration: 1, delay:1.6}}
                width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_3217)">
                <rect width="66" height="66" rx="33" fill="white" fill-opacity="0.3"/>
                <rect x="0.526087" y="0.526087" width="64.9478" height="64.9478" rx="32.4739" stroke="#E3E8EF" stroke-width="1.05217"/>
                <path d="M24.3333 18.3333C23.2288 18.3333 22.3333 19.2287 22.3333 20.3333V45.6666C22.3333 46.7712 23.2288 47.6666 24.3333 47.6666H41.6667C42.7712 47.6666 43.6667 46.7712 43.6667 45.6666V26.3333L35.6667 18.3333H24.3333Z" fill="#20A464"/>
                <path d="M24.3333 47.6666C23.2288 47.6666 22.3333 46.7712 22.3333 45.6666V45.3333C22.3333 46.4378 23.2288 47.3333 24.3333 47.3333H41.6667C42.7712 47.3333 43.6667 46.4378 43.6667 45.3333V45.6666C43.6667 46.7712 42.7712 47.6666 41.6667 47.6666H24.3333Z" fill="#149456"/>
                <path d="M24.3333 18.3333C23.2288 18.3333 22.3333 19.2287 22.3333 20.3333V20.6666C22.3333 19.562 23.2288 18.6666 24.3333 18.6666H36L35.6667 18.3333H24.3333Z" fill="#38AE74"/>
                <path d="M43.6667 33.1667V26.3334L42.5 25.1667H36.8738C36.4283 25.1667 36.2052 25.7053 36.5202 26.0203L43.6667 33.1667Z" fill="url(#paint0_linear_1_3217)"/>
                <path d="M35.6667 18.3333L43.6667 26.3333H37.6667C36.5621 26.3333 35.6667 25.4378 35.6667 24.3333V18.3333Z" fill="#8ED1B1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.3334 32.6667V42.3334H27.6667V32.6667H38.3334ZM32.3334 34.0001H29V35.6667H32.3334V34.0001ZM33.6667 35.6667V34.0001H37V35.6667H33.6667ZM32.3334 36.6667H29V38.3334H32.3334V36.6667ZM33.6667 38.3334V36.6667H37V38.3334H33.6667ZM32.3334 39.3334H29V41.0001H32.3334V39.3334ZM33.6667 41.0001V39.3334H37V41.0001H33.6667Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_b_1_3217" x="-8.55556" y="-8.55556" width="83.1111" height="83.1111" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.27778"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_3217"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_3217" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1_3217" x1="40.0197" y1="33.1667" x2="40.0197" y2="25.0001" gradientUnits="userSpaceOnUse">
                <stop stop-color="#20A464"/>
                <stop offset="1" stop-color="#207E55"/>
                </linearGradient>
                </defs>
                </motion.svg>



            </motion.div>








        </>
    )
}

export default Card3



