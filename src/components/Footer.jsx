import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (

    <>

        <div className="h-4/6 mt-6 border-y-2 border-[#CFD5DE] bg-[#F5F7FA]">
        <div className="grid grid-cols-1 md:grid-cols-4 h-full">

            <div className="h-full pt-16 pl-16">

                <motion.div className="font-geist font-semibold text-black text-lg flex items-center text-center"
                initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}}>
                    SuperMetrics.com
                </motion.div>

                <motion className="flex justify-start gap-5 mt-6"
                initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}}>
                    <motion.svg initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                     width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9435 23.5L10.3941 15.5901L3.44691 23.5H0.507812L9.09013 13.7311L0.507812 1.5H8.05376L13.284 8.95502L19.8373 1.5H22.7764L14.5924 10.8165L23.4895 23.5H15.9435ZM19.2165 21.27H17.2378L4.71616 3.73H6.69515L11.7102 10.7532L12.5774 11.9719L19.2165 21.27Z" fill="#9AA3B2"/>
                    </motion.svg>

                    <motion.svg initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                     width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_1860)">
                    <path d="M22.2234 0.5H1.77187C0.792187 0.5 0 1.27344 0 2.22969V22.7656C0 23.7219 0.792187 24.5 1.77187 24.5H22.2234C23.2031 24.5 24 23.7219 24 22.7703V2.22969C24 1.27344 23.2031 0.5 22.2234 0.5ZM7.12031 20.9516H3.55781V9.49531H7.12031V20.9516ZM5.33906 7.93438C4.19531 7.93438 3.27188 7.01094 3.27188 5.87187C3.27188 4.73281 4.19531 3.80937 5.33906 3.80937C6.47813 3.80937 7.40156 4.73281 7.40156 5.87187C7.40156 7.00625 6.47813 7.93438 5.33906 7.93438ZM20.4516 20.9516H16.8937V15.3828C16.8937 14.0562 16.8703 12.3453 15.0422 12.3453C13.1906 12.3453 12.9094 13.7937 12.9094 15.2891V20.9516H9.35625V9.49531H12.7687V11.0609H12.8156C13.2891 10.1609 14.4516 9.20938 16.1813 9.20938C19.7859 9.20938 20.4516 11.5813 20.4516 14.6656V20.9516Z" fill="#9AA3B2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_1860">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                    </motion.svg>

                    <motion.svg initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                     width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_1860)">
                    <path d="M22.2234 0.5H1.77187C0.792187 0.5 0 1.27344 0 2.22969V22.7656C0 23.7219 0.792187 24.5 1.77187 24.5H22.2234C23.2031 24.5 24 23.7219 24 22.7703V2.22969C24 1.27344 23.2031 0.5 22.2234 0.5ZM7.12031 20.9516H3.55781V9.49531H7.12031V20.9516ZM5.33906 7.93438C4.19531 7.93438 3.27188 7.01094 3.27188 5.87187C3.27188 4.73281 4.19531 3.80937 5.33906 3.80937C6.47813 3.80937 7.40156 4.73281 7.40156 5.87187C7.40156 7.00625 6.47813 7.93438 5.33906 7.93438ZM20.4516 20.9516H16.8937V15.3828C16.8937 14.0562 16.8703 12.3453 15.0422 12.3453C13.1906 12.3453 12.9094 13.7937 12.9094 15.2891V20.9516H9.35625V9.49531H12.7687V11.0609H12.8156C13.2891 10.1609 14.4516 9.20938 16.1813 9.20938C19.7859 9.20938 20.4516 11.5813 20.4516 14.6656V20.9516Z" fill="#9AA3B2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_1860">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                    </motion.svg>

                    <motion.svg initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                     width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_1867)">
                    <path d="M24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 18.4895 4.3882 23.454 10.125 24.3542V15.9688H7.07812V12.5H10.125V9.85625C10.125 6.84875 11.9166 5.1875 14.6576 5.1875C15.9701 5.1875 17.3438 5.42188 17.3438 5.42188V8.375H15.8306C14.34 8.375 13.875 9.30008 13.875 10.25V12.5H17.2031L16.6711 15.9688H13.875V24.3542C19.6118 23.454 24 18.4895 24 12.5Z" fill="#9AA3B2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_1867">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                    </motion.svg>

                </motion>

            </div>




            <div className=" h-full pt-16 pl-16"
            initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}}>
                
                <motion.p
                initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}} className='font-geist text-md pb-2 font-medium uppercase text-[#838E9E] border-b-2 border-dashed pr-8'>Products</motion.p>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-5'>Integrations</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Analytics</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Workspace</motion.h2>


                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Embed Charts</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                className='font-geist font-semibold text-[#42526B] text-lg mt-3'>DataStudio</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Google add-on</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Pricing</motion.h2>

            </div>




            <div className=" h-full pt-16 pl-16"
            initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}}>
                <motion.p
                initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}} className='font-geist text-md pb-2 font-medium uppercase text-[#838E9E] border-b-2 border-dashed pr-8'>Resources</motion.p>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-5'>Blog</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Changelog</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Affiliate Program</motion.h2>


                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Knowledge base</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Contact us</motion.h2>

            </div>




            <div className="h-full h-full pt-16 pl-16 pr-8"
            initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}}>
                <motion.p
                initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}} className='font-geist text-md pb-2 font-medium uppercase text-[#838E9E] border-b-2 border-dashed pr-8'>Legal</motion.p>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                 className='font-geist font-semibold text-[#42526B] text-lg mt-5'>Privacy policy</motion.h2>

                <motion.h2 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 1}}
                className='font-geist font-semibold text-[#42526B] text-lg mt-3'>Terms & Conditions</motion.h2>

                <p className='font-geist text-lg font-medium uppercase text-[#838E9E] border-b-2 border-dashed mt-6'></p>

                <motion.svg className='mt-6'
                 initial={{opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true, amount: 1}} transition={{duration: 1.5, delay: 2}}
                 width="208" height="44" viewBox="0 0 208 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.16663" y="0.5" width="206" height="43" rx="7.5" fill="white"/>
                <rect x="1.16663" y="0.5" width="206" height="43" rx="7.5" stroke="#CFD5DE"/>
                <g clip-path="url(#clip0_1_1988)">
                <g clip-path="url(#clip1_1_1988)">
                <path d="M24.6558 23.876L24.0293 26.215L21.7392 26.2635C21.0548 24.9941 20.6666 23.5418 20.6666 21.9984C20.6666 20.506 21.0296 19.0986 21.6729 17.8594H21.6734L23.7122 18.2332L24.6053 20.2597C24.4184 20.8047 24.3165 21.3897 24.3165 21.9984C24.3166 22.659 24.4363 23.292 24.6558 23.876Z" fill="#FBBB00"/>
                <path d="M38.5107 20.3203C38.6141 20.8647 38.668 21.427 38.668 22.0016C38.668 22.646 38.6002 23.2745 38.4712 23.8808C38.0331 25.9438 36.8883 27.7453 35.3024 29.0201L35.3019 29.0197L32.734 28.8886L32.3705 26.6198C33.4228 26.0027 34.2452 25.0369 34.6784 23.8808H29.8658V20.3203H38.5107Z" fill="#518EF8"/>
                <path d="M35.3022 29.0193L35.3027 29.0198C33.7603 30.2595 31.8011 31.0012 29.6683 31.0012C26.2408 31.0012 23.261 29.0855 21.7408 26.2664L24.6574 23.8789C25.4175 25.9074 27.3742 27.3513 29.6683 27.3513C30.6543 27.3513 31.5781 27.0848 32.3707 26.6194L35.3022 29.0193Z" fill="#28B446"/>
                <path d="M35.4089 15.072L32.4933 17.4589C31.6729 16.9461 30.7032 16.6499 29.6642 16.6499C27.3183 16.6499 25.3249 18.1601 24.603 20.2613L21.671 17.861H21.6705C23.1684 14.9731 26.1859 13 29.6642 13C31.8479 13 33.8502 13.7779 35.4089 15.072Z" fill="#F14336"/>
                </g>
                <path d="M52.5386 28.256C49.3066 28.256 47.4026 25.792 47.4026 22.336C47.4026 18.928 49.3386 16.384 52.6026 16.384C55.4026 16.384 56.8426 18 57.2906 20.208L55.4826 20.304C55.2266 18.912 54.3946 17.968 52.6186 17.968C50.2346 17.968 49.1946 19.952 49.1946 22.336C49.1946 24.816 50.2506 26.672 52.6186 26.672C54.4746 26.672 55.6106 25.328 55.6746 23.664H52.6346V22.208H57.3226V28H56.1386L56.0586 26.192C55.4986 27.424 54.1066 28.256 52.5386 28.256ZM63.0436 28.192C60.5956 28.192 58.9956 26.448 58.9956 23.744C58.9956 21.04 60.5956 19.296 63.0436 19.296C65.4756 19.296 67.0756 21.04 67.0756 23.744C67.0756 26.448 65.4756 28.192 63.0436 28.192ZM63.0436 26.72C64.4836 26.72 65.3156 25.616 65.3156 23.744C65.3156 21.872 64.4836 20.768 63.0436 20.768C61.6036 20.768 60.7556 21.872 60.7556 23.744C60.7556 25.616 61.6036 26.72 63.0436 26.72ZM72.4343 28.192C69.9863 28.192 68.3863 26.448 68.3863 23.744C68.3863 21.04 69.9863 19.296 72.4343 19.296C74.8663 19.296 76.4663 21.04 76.4663 23.744C76.4663 26.448 74.8663 28.192 72.4343 28.192ZM72.4343 26.72C73.8743 26.72 74.7063 25.616 74.7063 23.744C74.7063 21.872 73.8743 20.768 72.4343 20.768C70.9943 20.768 70.1463 21.872 70.1463 23.744C70.1463 25.616 70.9943 26.72 72.4343 26.72ZM81.7449 30.592C79.7129 30.592 78.3849 29.616 78.0329 28.144L79.7929 28.032C80.0169 28.752 80.5289 29.184 81.7449 29.184C83.1529 29.184 83.9209 28.608 83.9209 27.376V26.144C83.5049 27.008 82.5449 27.568 81.4409 27.568C79.2969 27.568 77.7769 25.888 77.7769 23.44C77.7769 21.008 79.2809 19.296 81.3929 19.296C82.5929 19.296 83.5849 19.888 83.9849 20.832V19.488H85.6329V27.328C85.6329 29.424 84.1289 30.592 81.7449 30.592ZM81.7129 26.128C83.0569 26.128 83.9209 25.104 83.9369 23.424C83.9529 21.76 83.0729 20.736 81.7129 20.736C80.3369 20.736 79.5369 21.776 79.5369 23.424C79.5369 25.088 80.3689 26.128 81.7129 26.128ZM89.8945 28C88.7745 28 88.0385 27.456 88.0385 26.192V16.64H89.7345V26.032C89.7345 26.432 89.9425 26.608 90.3265 26.608H90.9985V28H89.8945ZM96.1995 28.192C93.7355 28.192 92.1675 26.432 92.1675 23.744C92.1675 21.056 93.7355 19.296 96.1515 19.296C98.4715 19.296 100.056 20.944 100.056 23.808V24.24H93.9435C94.0235 25.904 94.8715 26.736 96.2155 26.736C97.2235 26.736 97.8955 26.24 98.1675 25.44L99.9275 25.552C99.4795 27.136 98.0875 28.192 96.1995 28.192ZM93.9435 22.96H98.2475C98.1515 21.456 97.3195 20.736 96.1515 20.736C94.9515 20.736 94.1355 21.52 93.9435 22.96ZM108.267 28.192C106.507 28.192 105.355 27.344 105.355 25.872C105.355 24.416 106.219 23.632 108.075 23.264L111.003 22.704C111.003 21.392 110.395 20.736 109.179 20.736C108.091 20.736 107.483 21.232 107.259 22.16L105.499 22.048C105.819 20.352 107.147 19.296 109.179 19.296C111.483 19.296 112.699 20.592 112.699 22.8V26.112C112.699 26.528 112.843 26.656 113.163 26.656H113.467V28C113.355 28.032 113.083 28.048 112.843 28.048C111.867 28.048 111.291 27.68 111.147 26.688C110.715 27.584 109.595 28.192 108.267 28.192ZM108.555 26.848C110.075 26.848 111.003 25.888 111.003 24.528V23.984L108.523 24.464C107.499 24.656 107.115 25.056 107.115 25.712C107.115 26.448 107.643 26.848 108.555 26.848ZM118.126 28.192C115.934 28.192 114.558 26.48 114.558 23.744C114.558 21.024 115.934 19.296 118.126 19.296C119.294 19.296 120.27 19.808 120.718 20.688V16.64H122.414V28H120.846L120.798 26.72C120.318 27.648 119.31 28.192 118.126 28.192ZM118.574 26.72C119.95 26.72 120.718 25.616 120.718 23.744C120.718 21.856 119.95 20.768 118.574 20.768C117.198 20.768 116.318 21.888 116.318 23.744C116.318 25.568 117.214 26.72 118.574 26.72ZM127.892 28.192C125.7 28.192 124.324 26.48 124.324 23.744C124.324 21.024 125.7 19.296 127.892 19.296C129.06 19.296 130.036 19.808 130.484 20.688V16.64H132.18V28H130.612L130.564 26.72C130.084 27.648 129.076 28.192 127.892 28.192ZM128.34 26.72C129.716 26.72 130.484 25.616 130.484 23.744C130.484 21.856 129.716 20.768 128.34 20.768C126.964 20.768 126.084 21.888 126.084 23.744C126.084 25.568 126.98 26.72 128.34 26.72ZM134.105 24.08V22.592H139.465V24.08H134.105ZM144.934 28.192C142.486 28.192 140.886 26.448 140.886 23.744C140.886 21.04 142.486 19.296 144.934 19.296C147.366 19.296 148.966 21.04 148.966 23.744C148.966 26.448 147.366 28.192 144.934 28.192ZM144.934 26.72C146.374 26.72 147.206 25.616 147.206 23.744C147.206 21.872 146.374 20.768 144.934 20.768C143.494 20.768 142.646 21.872 142.646 23.744C142.646 25.616 143.494 26.72 144.934 26.72ZM150.773 28V19.488H152.325L152.357 20.976C152.805 19.808 153.781 19.296 154.949 19.296C156.853 19.296 157.829 20.672 157.829 22.528V28H156.133V23.04C156.133 21.536 155.669 20.72 154.485 20.72C153.285 20.72 152.469 21.536 152.469 23.04V28H150.773Z" fill="#036AC6"/>
                <path d="M176.832 17.832H172.665C172.223 17.832 171.799 18.0076 171.487 18.3202C171.174 18.6327 170.999 19.0567 170.999 19.4987V26.9987C170.999 27.4407 171.174 27.8646 171.487 28.1772C171.799 28.4898 172.223 28.6654 172.665 28.6654H180.165C180.607 28.6654 181.031 28.4898 181.344 28.1772C181.656 27.8646 181.832 27.4407 181.832 26.9987V22.832M175.999 23.6654L184.332 15.332M184.332 15.332H180.165M184.332 15.332V19.4987" stroke="#036AC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1_1988">
                <rect width="167" height="24" fill="white" transform="translate(20.6666 10)"/>
                </clipPath>
                <clipPath id="clip1_1_1988">
                <rect width="18" height="18" fill="white" transform="translate(20.6666 13)"/>
                </clipPath>
                </defs>
                </motion.svg>


            </div>
        </div>
        </div>

    
    
    </>
  )
}

export default Footer