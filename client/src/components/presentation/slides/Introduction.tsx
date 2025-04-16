import { Slide } from "../Slide";
import { motion } from "framer-motion";
import { useSlidesContext } from "@/hooks/use-slides";

export function Introduction() {
  const { goToSlide } = useSlidesContext();
  
  return (
    <Slide id="introduction">
      <div className="flex flex-col items-center justify-between gap-8">
        <motion.div 
          className="w-full text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-black text-5xl md:text-7xl mb-4 text-[#0047AB]">
            Algorithms &<br/>Data Structures
          </h1>
          <p className="text-lg font-semibold text-gray-800 mb-2 max-w-2xl mx-auto">
            A visual guide for Statistics and Data Science students
          </p>
          <motion.p
            className="text-md text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Presented by: Janice, Zamzam, Mukisa, Alfred
          </motion.p>
          
          <motion.button
            onClick={() => goToSlide("next")}
            className="mt-4 bg-[#0047AB] hover:bg-[#003885] text-white font-bold py-3 px-10 rounded-lg text-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 10px 25px -5px rgba(0, 71, 171, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div 
          className="w-full md:w-3/4 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-64 md:h-80 bg-[#0047AB] rounded-2xl shadow-lg overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-6xl md:text-8xl font-bold"
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)", 
                    "0 0 10px rgba(255,255,255,0.8)", 
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                DSA
              </motion.div>
            </motion.div>

            {/* Floating elements representing data structures and algorithms */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-10 h-10 bg-[#FFD700] rounded-lg"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/4 w-12 h-12 bg-white rounded-full"
              animate={{ 
                y: [0, 15, 0],
                x: [0, -10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-[#00A86B] rounded-md"
              animate={{ 
                rotate: [0, 45, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/3 w-6 h-16 bg-white rounded-md"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-6">
          <motion.div 
            className="bg-[#0047AB] rounded-xl p-6 flex flex-col items-center text-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 71, 171, 0.5)" }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0047AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-center">Data Structures</h3>
            <p className="text-center text-sm">Organized ways to store data for efficient manipulation</p>
          </motion.div>

          <motion.div 
            className="bg-[#FFD700] rounded-xl p-6 flex flex-col items-center text-black shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.5)" }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-center">Algorithms</h3>
            <p className="text-center text-sm">Step-by-step procedures to solve specific problems</p>
          </motion.div>

          <motion.div 
            className="bg-[#00A86B] rounded-xl p-6 flex flex-col items-center text-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 168, 107, 0.5)" }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-center">Efficiency</h3>
            <p className="text-center text-sm">How performance changes as data size increases</p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
