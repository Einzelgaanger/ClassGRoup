import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function LinkedLists() {
  return (
    <Slide id="linked-lists">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
          Linked Lists
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A sequence of nodes, each containing data and a reference to the next node in the chain
        </p>
      </motion.div>

      {/* Main Linked List Visualization */}
      <div className="w-full px-4">
        <motion.div 
          className="w-full max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 shadow-md border border-indigo-100 mb-12 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center min-w-max">
            {/* Head pointer */}
            <motion.div
              className="flex flex-col items-center mr-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-md font-bold text-sm mb-1">Head</div>
              <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10H30M30 10L20 0M30 10L20 20" stroke="#4F46E5" strokeWidth="2"/>
              </svg>
            </motion.div>

            {/* Linked nodes */}
            {[
              { data: "42", next: true },
              { data: "17", next: true },
              { data: "85", next: true },
              { data: "23", next: false }
            ].map((node, index) => (
              <div key={index} className="flex items-center" style={{ minWidth: 'max-content' }}>
                <motion.div
                  className="flex flex-col border-2 border-indigo-500 rounded-lg overflow-hidden min-w-[120px]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.2) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                >
                  <div className="bg-indigo-500 text-white text-xs font-semibold py-1 px-2 text-center">Node {index + 1}</div>
                  <div className="grid grid-cols-2 divide-x-2 divide-indigo-200">
                    <div className="p-3 text-center bg-white">
                      <div className="text-xs text-gray-500 mb-1">Data</div>
                      <div className="font-bold text-lg">{node.data}</div>
                    </div>
                    <div className="p-3 text-center bg-white">
                      <div className="text-xs text-gray-500 mb-1">Next</div>
                      {node.next ? (
                        <div className="text-indigo-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      ) : (
                        <div className="text-gray-400 font-mono text-sm">NULL</div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Connection arrows */}
                {node.next && (
                  <motion.div
                    className="mx-2 md:mx-4 w-8 md:w-12"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.2) }}
                    viewport={{ once: true }}
                  >
                    <motion.svg 
                      width="100%" 
                      height="20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <path d="M0 10H40M40 10L32 5M40 10L32 15" stroke="#4F46E5" strokeWidth="2"/>
                    </motion.svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>Each node contains data and a reference to the next node in the sequence</p>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-md border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 12px 25px -5px rgba(99, 102, 241, 0.2)" }}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 text-white">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="font-bold text-lg">Dynamic Size</h3>
          </div>
          <div className="p-4">
            <p>Unlike arrays, linked lists can grow or shrink in size during execution - perfect for when you don't know how much data you'll need to store</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-md border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 12px 25px -5px rgba(99, 102, 241, 0.2)" }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-bold text-lg">Efficient Insertion</h3>
          </div>
          <div className="p-4">
            <p>Adding elements at the beginning of a linked list is extremely fast (O(1) time) - just update a few pointers instead of shifting many elements</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-md border border-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 12px 25px -5px rgba(99, 102, 241, 0.2)" }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg">Memory Flexibility</h3>
          </div>
          <div className="p-4">
            <p>Nodes can be stored anywhere in memory - they don't need to be in contiguous locations like arrays, making them more flexible in memory-constrained situations</p>
          </div>
        </motion.div>
      </div>

      {/* Types of Linked Lists */}
      <motion.div 
        className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 mb-12 text-white overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-xl mb-6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          Types of Linked Lists
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              title: "Singly Linked", 
              emoji: "➡️", 
              description: "Each node has one pointer to the next node",
              visual: "A → B → C → D → null"
            },
            { 
              title: "Doubly Linked", 
              emoji: "⬅️➡️", 
              description: "Each node has pointers to both previous and next nodes",
              visual: "null ← A ⟷ B ⟷ C ⟷ D → null" 
            },
            { 
              title: "Circular Linked", 
              emoji: "🔄", 
              description: "Last node points back to the first node",
              visual: "A → B → C → D → A ..." 
            }
          ].map((type, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <div className="text-2xl mb-2 text-center">{type.emoji}</div>
              <h4 className="font-bold text-lg mb-2 text-center">{type.title}</h4>
              <p className="mb-3 text-sm opacity-90">{type.description}</p>
              <div className="mt-3 text-center bg-black bg-opacity-20 p-2 rounded-lg font-mono text-sm">
                {type.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Real-world applications */}
      <motion.div 
        className="max-w-5xl mx-auto mb-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-xl mb-4 text-center text-indigo-600">Real-world Applications</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: "🎵", title: "Music Playlists", description: "Next/previous song navigation" },
            { emoji: "🚂", title: "Train Carriages", description: "Connected sequential cars" },
            { emoji: "🌐", title: "Browser History", description: "Back/forward browsing" },
            { emoji: "🎮", title: "Game Levels", description: "Moving between levels" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 12px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
}
