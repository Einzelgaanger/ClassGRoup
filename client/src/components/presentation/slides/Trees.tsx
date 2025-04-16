import { Slide } from "../Slide";
import { motion } from "framer-motion";

const traversalMethods = [
  { name: "Pre-order", steps: "Root → Left → Right", icons: "⬆️ → ⬅️ → ➡️" },
  { name: "In-order", steps: "Left → Root → Right", icons: "⬅️ → ⬆️ → ➡️" },
  { name: "Post-order", steps: "Left → Right → Root", icons: "⬅️ → ➡️ → ⬆️" },
  { name: "Level-order", steps: "Level by level (BFS)", icons: "🌊" }
];

export function Trees() {
  return (
    <Slide id="trees">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-[#0047AB] mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Trees
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#0047AB]">
            <div className="bg-[#0047AB] p-4 text-white">
              <h3 className="font-bold text-xl mb-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                What is a Tree?
              </h3>
              <p className="text-sm text-white text-opacity-90">Hierarchical data structure with nodes and edges</p>
            </div>
            
            <div className="p-6">
              <div className="my-6 flex justify-center">
                {/* Tree Visualization */}
                <div className="relative h-64 w-full">
                  {/* Tree background pattern */}
                  <motion.div 
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.05 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    {Array(10).fill(null).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute text-[#0047AB]"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          fontSize: `${Math.random() * 20 + 10}px`,
                          opacity: Math.random() * 0.2 + 0.1
                        }}
                      >
                        🌲
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Root */}
                  <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold text-xl shadow-lg">10</div>
                  </motion.div>
                  
                  {/* Level 1 */}
                  <motion.div 
                    className="mt-8 flex justify-center gap-32"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 71, 171, 0.4)" }}
                      className="w-14 h-14 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-xl shadow-md"
                    >
                      5
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 71, 171, 0.4)" }}
                      className="w-14 h-14 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-xl shadow-md"
                    >
                      15
                    </motion.div>
                  </motion.div>
                  
                  {/* Lines connecting levels */}
                  <motion.div 
                    className="absolute top-14 left-1/2 transform -translate-x-1/2 h-8 w-1.5 bg-[#0047AB] bg-opacity-60 rounded-full"
                    initial={{ height: 0 }}
                    whileInView={{ height: "2rem" }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute top-14 left-1/2 transform -translate-x-32 rotate-45 origin-top-left h-16 w-1.5 bg-[#0047AB] bg-opacity-60 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute top-14 left-1/2 transform translate-x-30 -rotate-45 origin-top-right h-16 w-1.5 bg-[#0047AB] bg-opacity-60 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Level 2 */}
                  <motion.div 
                    className="mt-8 flex justify-around"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { value: 3, color: "#00A86B" },
                      { value: 7, color: "#00A86B" },
                      { value: 12, color: "#00A86B" },
                      { value: 18, color: "#00A86B" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3, boxShadow: `0 10px 25px -5px rgba(0, 168, 107, 0.4)` }}
                        className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-md"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.value}
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Connecting lines for level 2 */}
                  {[
                    "calc(12.5% + 6px)",
                    "calc(37.5% + 6px)",
                    "calc(62.5% + 6px)",
                    "calc(87.5% + 6px)"
                  ].map((left, index) => (
                    <motion.div 
                      key={index}
                      className="absolute top-[7rem] h-8 w-1.5 bg-[#0047AB] bg-opacity-60 rounded-full origin-top"
                      style={{ left }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="bg-[#F3F4F6] p-4 rounded-lg mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2 text-[#0047AB]">Key Terminology</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { term: "Root", definition: "Top node (10)", icon: "⬆️" },
                    { term: "Parent/Child", definition: "Relationship between connected nodes", icon: "👨‍👦" },
                    { term: "Leaf", definition: "Node with no children (3,7,12,18)", icon: "🍃" },
                    { term: "Depth", definition: "Distance from root", icon: "📏" },
                    { term: "Height", definition: "Longest path to leaf", icon: "📊" },
                    { term: "Subtree", definition: "Tree formed by a node and descendants", icon: "🌱" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="bg-white p-2 rounded shadow-sm flex items-center"
                    >
                      <span className="mr-2 text-lg">{item.icon}</span>
                      <div>
                        <span className="font-medium text-sm block">{item.term}</span>
                        <span className="text-xs text-gray-600">{item.definition}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#FFD700]">
            <div className="bg-[#FFD700] p-4 text-black">
              <h3 className="font-bold text-xl mb-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                Binary Search Trees
              </h3>
              <p className="text-sm text-black text-opacity-90">Ordered tree with max two children per node</p>
            </div>
            
            <div className="p-6">
              <motion.div 
                className="bg-[#F9FAFB] p-4 rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2 text-[#FFD700]">BST Property</h4>
                <div className="flex items-center justify-center space-x-8 my-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-[#0047AB] text-white font-bold rounded-lg p-2 shadow mb-2">
                      Left Subtree
                    </div>
                    <div className="text-sm">All values &lt; parent</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-black text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg mb-2 mx-auto">
                      X
                    </div>
                    <div className="text-sm">Parent value</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-[#00A86B] text-white font-bold rounded-lg p-2 shadow mb-2">
                      Right Subtree
                    </div>
                    <div className="text-sm">All values &gt; parent</div>
                  </motion.div>
                </div>
                
                <h4 className="font-bold mb-2 text-[#FFD700] mt-6">BST Operations:</h4>
                <div className="overflow-x-auto">
                  <div className="min-w-[300px]">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { op: "Search", complexity: "O(log n)", icon: "🔍" },
                        { op: "Insert", complexity: "O(log n)", icon: "➕" },
                        { op: "Delete", complexity: "O(log n)", icon: "❌" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                          viewport={{ once: true }}
                          className="bg-white p-2 rounded shadow text-center"
                        >
                          <div className="text-xl mb-1">{item.icon}</div>
                          <div className="font-medium text-sm">{item.op}</div>
                          <div className="text-xs text-gray-600">{item.complexity}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-[#0047AB] bg-opacity-5 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-3 text-[#0047AB] flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  Tree Traversals
                </h4>
                
                <div className="space-y-2">
                  {traversalMethods.map((method, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="bg-white p-3 rounded shadow-sm flex items-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FFD700] mr-3 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{method.name}</div>
                        <div className="text-xs text-gray-600">{method.steps}</div>
                        <div className="text-sm mt-1">{method.icons}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-black text-white rounded-xl p-6 max-w-5xl mx-auto mb-4 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Tree Variants & Applications
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { 
              title: "AVL Trees", 
              description: "Self-balancing BST",
              icon: "⚖️",
              color: "#0047AB" 
            },
            { 
              title: "Red-Black Trees", 
              description: "Balanced with coloring",
              icon: "🔴⚫",
              color: "#FFD700" 
            },
            { 
              title: "B-Trees", 
              description: "Database indexing",
              icon: "🗃️",
              color: "#00A86B" 
            },
            { 
              title: "Tries", 
              description: "Word auto-completion",
              icon: "📝",
              color: "black" 
            },
            { 
              title: "File Systems", 
              description: "Folder hierarchies",
              icon: "📁",
              color: "#0047AB" 
            },
            { 
              title: "HTML DOM", 
              description: "Web page structure",
              icon: "🌐",
              color: "#FFD700" 
            },
            { 
              title: "Decision Trees", 
              description: "ML classification",
              icon: "🤖",
              color: "#00A86B" 
            },
            { 
              title: "Game Trees", 
              description: "AI move evaluation",
              icon: "🎮",
              color: "black" 
            },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white text-black rounded-lg p-3 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.3 + (index * 0.05) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="flex items-start">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl mr-3 flex-shrink-0"
                  style={{ backgroundColor: item.color, color: ["#0047AB", "black"].includes(item.color) ? "white" : "black" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
}
