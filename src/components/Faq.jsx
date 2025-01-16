import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const questions = [
    {
      id: "1",
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "2",
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time. Your new plan will take effect immediately.",
    },
    {
      id: "3",
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
    },
    {
      id: "4",
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add additional information such as PO numbers, company details, or special notes to your invoices.",
    },
    {
      id: "5",
      question: "How does billing work?",
      answer:
        "We bill monthly or annually, depending on your preference. All plans are billed in advance.",
    },
    {
      id: "6",
      question: "How do I change my account email?",
      answer:
        "You can change your account email from your account settings page. A verification email will be sent to confirm the change.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (

    <>
    
        <div className="mx-auto border-y-2 border-[#CFD5DE] relative">


                         {/* Rounded */}
                         <svg  className='absolute -top-3 right-16'
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


        <div className="h-full border-x-2 border-[#CFD5DE] mx-20 flex flex-col justify-center px-60">
          

            <motion.div className='flex flex-col items-center'
            
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .8 }}
            transition={{ duration: 0.5 }}>
                            <div className="relative flex items-center justify-center w-36 h-14 rounded-full bg-gradient-to-b from-gray-200 to-white shadow-sm mt-11">
                                <button className="w-32 h-10 rounded-full text-semibold border border-gray-300 bg-gray-50 shadow-md text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300">
                                    FAQ's
                                </button>
                            </div>

                            <h1 className="mt-12 font-geist font-bold text-center leading-10 text-4xl text-[#212F40] mb-16">
                            Frequently asked questions
                            </h1>
                </motion.div>

            <motion.div
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
            {questions.map((q) => (
                <FAQItem
                key={q.id}
                item={q}
                isOpen={openItem === q.id}
                toggleItem={toggleItem}
                variants={itemVariants}
                />
            ))}
            </motion.div>
        </div>

                       {/* Rounded */}
                       <svg  className='absolute -bottom-3 left-16'
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

    </>



    
  );
}

function FAQItem({ item, isOpen, toggleItem, variants }) {
  return (
    <motion.div
      variants={variants}
      className="border-b border-gray-200"
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => toggleItem(item.id)}
        className="w-full py-6 flex justify-between items-center text-left text-lg font-medium hover:text-gray-600 transition-colors"
      >
        {item.question}
        <motion.span
          className="text-2xl ml-6"
          whileInView={{ rotate: isOpen ? 180 : 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "−" : "+"}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "auto" }}
            viewport={{ once: true }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-6 text-gray-600">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
