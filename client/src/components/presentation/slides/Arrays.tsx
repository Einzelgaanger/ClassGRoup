import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function Arrays() {
  return (
    <Slide id="arrays">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent inline-block mb-4">
          Arrays
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The simplest and most widely used data structure - a collection of elements stored at contiguous memory locations
        </p>
      </motion.div>
      
      <div className="flex flex-col items-center mb-16">
        {/* Main array visualization - interactive and animated */}
        <motion.div 
          className="w-full max-w-2xl mx-auto relative mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-md">
            <div className="flex flex-wrap items-center justify-center gap-1 mb-3">
              {[42, 15, 27, 8, 94, 63, 31, 50].map((value, index) => (
                <motion.div 
                  key={index}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md relative z-10"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#FFD700",
                    color: "#000",
                    transition: { duration: 0.2 }
                  }}
                >
                  {value}
                  <motion.div
                    className="absolute -bottom-6 text-xs font-normal text-gray-600 bg-white px-1 rounded"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (0.1 * index) }}
                    viewport={{ once: true }}
                  >
                    [{index}]
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex justify-center mt-10 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="italic">Each element occupies a position, accessible by its index</p>
            </motion.div>
          </div>

          {/* Animated arrow showing array access */}
          <motion.div
            className="absolute -top-10 left-1/3"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: [0, 10, 0]
            }}
            transition={{ 
              delay: 1.5,
              y: {
                repeat: Infinity,
                duration: 2,
              },
              opacity: { duration: 0.5 }
            }}
          >
            <div className="flex flex-col items-center">
              <div className="bg-amber-400 text-black font-bold px-3 py-1 rounded-md shadow-md">
                array[2] = 27
              </div>
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L23.547 20H0.452997L12 0Z" fill="#F59E0B"/>
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 12px 25px -5px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="bg-blue-500 p-4 text-white">
              <div className="rounded-full w-12 h-12 bg-white flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Fast Access</h3>
            </div>
            <div className="p-4 flex-grow">
              <p>Direct access to any element using its position (index) in O(1) time - constant time regardless of array size</p>
            </div>
            <div className="p-4 bg-blue-50 text-center font-mono text-sm">
              array[3] → 8
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 12px 25px -5px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="bg-amber-500 p-4 text-white">
              <div className="rounded-full w-12 h-12 bg-white flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Linear Search</h3>
            </div>
            <div className="p-4 flex-grow">
              <p>Finding an element requires checking each position one by one in O(n) time - slower as array size grows</p>
            </div>
            <div className="p-4 bg-amber-50 text-center font-mono text-sm">
              Search for 27 → position 2
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 12px 25px -5px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="bg-purple-500 p-4 text-white">
              <div className="rounded-full w-12 h-12 bg-white flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Insertion/Deletion</h3>
            </div>
            <div className="p-4 flex-grow">
              <p>Adding or removing elements may require shifting other elements to maintain order - O(n) time operation</p>
            </div>
            <div className="p-4 bg-purple-50 text-center font-mono text-sm">
              Insert 10 at position 3 → shift everything right
            </div>
          </motion.div>
        </div>

        {/* Real-world applications */}
        <motion.div
          className="mt-16 w-full max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 shadow-lg text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-xl mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Where We Use Arrays
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🖼️", title: "Image Processing", description: "Pixel data" },
              { icon: "📊", title: "Spreadsheets", description: "Tabular data" },
              { icon: "📱", title: "Contact Lists", description: "Name storage" },
              { icon: "🎮", title: "Video Games", description: "Game states" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-20 transition-all border border-white border-opacity-20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs opacity-80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
