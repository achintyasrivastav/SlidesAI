import React from 'react'

const Checkout = () => {
  return (
    <>
    
        <div className="h-24 border-y-2 border-[#CFD5DE] relative">

            {/* Rounded */}
            <svg  className='absolute -top-4 left-16'
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
            <svg className='absolute top-0 right-20 rotate-90'
                width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13V1H13" stroke="black"/>
            </svg>


            <div className=" border-x-2 border-[#CFD5DE] mx-20 flex items-center justify-center gap-4 p-8">
                <p className="text-xl text-[#697586] font-normal">
                    Looking for{" "}
                    <strong className="text-[#212F40] font-semibold">DataStudio</strong>?
                </p>
                <button variant="outline" className="font-geist font-semibold text-[#212F40] border-2 border-[#CFD5DE] hover:bg-gray-50 whitespace-nowrap py-1 px-3 rounded-xl">
                    Check it out
                </button>
            </div>



            {/* Rounded */}
            <svg  className='absolute -bottom-4 right-16 z-30'
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
            <svg className='absolute bottom-0 left-20 rotate-90'
            width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 -1.11759e-07V12H0" stroke="black"/>
            </svg>

        </div>

        
    </>
  )
}

export default Checkout