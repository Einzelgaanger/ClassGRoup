import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function Introduction() {
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
          <h1 className="font-bold text-4xl md:text-6xl text-primary mb-4">
            Algorithms & Data Structures
          </h1>
          <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
            A visual journey into the building blocks of computer science - perfect for beginners!
          </p>
        </motion.div>

        <motion.div 
          className="w-full md:w-3/4 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg overflow-hidden">
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
              className="absolute top-1/4 left-1/4 w-10 h-10 bg-yellow-400 rounded-lg"
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
              className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-300 rounded-full"
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
              className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-green-400 rounded-md"
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
              className="absolute bottom-1/3 right-1/3 w-6 h-16 bg-pink-400 rounded-md"
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
            className="bg-blue-500 rounded-xl p-6 flex flex-col items-center text-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-center">Data Structures</h3>
            <p className="text-center">Ways to organize and store data for efficient access and modification</p>
          </motion.div>

          <motion.div 
            className="bg-amber-500 rounded-xl p-6 flex flex-col items-center text-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.5)" }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-center">Algorithms</h3>
            <p className="text-center">Step-by-step procedures for calculations, data processing, and reasoning</p>
          </motion.div>

          <motion.div 
            className="bg-purple-500 rounded-xl p-6 flex flex-col items-center text-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.5)" }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2 text-center">Efficiency</h3>
            <p className="text-center">Understanding how well an algorithm performs as data size grows</p>
          </motion.div>
        </div>
      
        <motion.div 
          className="text-center mt-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 font-medium">Swipe or use navigation buttons to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
}
