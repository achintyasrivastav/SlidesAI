import { motion } from "framer-motion"

export default function Card1() {
  return (
    <motion.div
      className="bg-gradient-to-b from-[#e6e9ed] to-[#FFFFFF] rounded-xl shadow-sm border border-gray-200 h-80"
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="bg-white m-8 rounded-lg p-6 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true, amount: .7}}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="space-y-4">
          <motion.h2 
            className="text-2xl font-geist font-semibold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once: true, amount: .7}}
            transition={{ delay: 0.2 }}
          >
            SuperMetrics.com
          </motion.h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.span 
                className="text-2xl font-semibold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{once: true, amount: 1}}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                4.9
              </motion.span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360, scale: 1.2 }}
                viewport={{once: true, amount: 1}}
                transition={{ duration: 0.6 }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
              <motion.span 
                className="font-geisto text-md font-semibold text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{once: true, amount: 1}}
                transition={{ delay: 0.4 }}
              >
                (2.9k) 10,000 users
              </motion.span>
            </div>
            <motion.button
              className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              viewport={{once: true, amount: 1}}
              transition={{ duration: 0.2 }}
            >
              Install Now
            </motion.button>
          </div>

          <div className="flex items-center gap-2 text-green-700">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13.5h4v1.5h-4zm0 3h4v5h-4zm2 6c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z" />
            </motion.svg>
            <motion.span 
              className="font-medium"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{once: true, amount: 1}}
              transition={{ delay: 0.6 }}
            >
              Featured
            </motion.span>
          </div>
        </div>

        {/* Placeholder lines */}
        <div className="space-y-3">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`h-2 bg-gray-100 rounded-full ${index === 4 ? 'w-2/3' : 'w-full'}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{once: true, amount: 1}}
              transition={{ delay: 0.7 + index * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
