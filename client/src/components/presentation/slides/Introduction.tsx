import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function Introduction() {
  return (
    <Slide id="introduction">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-4xl md:text-6xl text-primary mb-4">
            Algorithms & Data Structures
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            A visual journey into the building blocks of computer science for second-year Data Science students.
          </p>
          <div className="flex flex-wrap gap-4 my-6">
            <motion.div 
              className="bg-primary bg-opacity-10 rounded-lg p-4 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6m-6 4h6" />
              </svg>
              <div>
                <h3 className="font-semibold">Data Structures</h3>
                <p className="text-sm">Organized ways to store data</p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-secondary bg-opacity-10 rounded-lg p-4 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-semibold">Algorithms</h3>
                <p className="text-sm">Step-by-step procedures</p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-accent bg-opacity-10 rounded-lg p-4 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div>
                <h3 className="font-semibold">Efficiency</h3>
                <p className="text-sm">Analyzing performance</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Data Structures and Algorithms Visualization" 
            className="rounded-xl shadow-xl w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-800 font-medium">Scroll down or use navigation to continue</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-primary mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
