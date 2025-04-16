import { Slide } from "../Slide";
import { motion } from "framer-motion";

// Hash table visualization data
const hashExamples = [
  { key: "apple", hashIndex: 2, value: '{color: "red", count: 5}' },
  { key: "banana", hashIndex: 0, value: '{color: "yellow", count: 8}' },
  { key: "cherry", hashIndex: 4, value: '{color: "red", count: 12}' }
];

// Collision handling methods
const collisionMethods = [
  { 
    title: "Chaining", 
    description: "Store multiple key-value pairs at the same index using a linked list",
    color: "#0047AB",
    icon: "🔗"
  },
  { 
    title: "Open Addressing", 
    description: "Find the next empty slot by probing (linear, quadratic, double hashing)",
    color: "#FFD700",
    icon: "🔍"
  },
  { 
    title: "Robin Hood Hashing", 
    description: "Rich items give to poor items during insert",
    color: "#00A86B",
    icon: "🏹"
  }
];

// Real-world applications
const applications = [
  { 
    icon: "database", 
    title: "Database Indexing", 
    description: "Fast record lookup",
    emoji: "🗄️" 
  },
  { 
    icon: "users", 
    title: "User Sessions", 
    description: "Storing active sessions by ID",
    emoji: "👥" 
  },
  { 
    icon: "spell", 
    title: "Spell Checkers", 
    description: "Fast word verification",
    emoji: "✅" 
  },
  { 
    icon: "cache", 
    title: "Caching", 
    description: "Store frequently accessed data",
    emoji: "⚡" 
  }
];

export function HashTables() {
  return (
    <Slide id="hash-tables">
      {/* Floating hash icons */}
      {Array(15).fill(null).map((_, i) => {
        // Hash-related emojis
        const icons = ["🔑", "🧮", "#️⃣", "🔢", "📋", "🔍", "📊", "⚡"];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        return (
          <motion.div 
            key={i}
            className="absolute text-xl select-none pointer-events-none text-[#FFD700] opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, Math.random() > 0.5 ? 10 : -10, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {randomIcon}
          </motion.div>
        );
      })}
    
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-[#FFD700] mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Hash Tables
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-8">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#FFD700]">
            <div className="bg-[#FFD700] p-4 text-black">
              <h3 className="font-bold text-xl mb-1 flex items-center">
                <span className="text-2xl mr-2">#️⃣</span>
                What is a Hash Table?
              </h3>
              <p className="text-sm text-black text-opacity-90">Key-value storage with O(1) average time complexity for lookups</p>
            </div>
            
            <div className="p-5">
              <motion.div 
                className="mb-6 bg-[#F9FAFB] p-4 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-3 text-[#FFD700] flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  How Hashing Works
                </h4>
                
                <div className="overflow-x-auto w-full -mx-4 px-4">
                  <div className="min-w-[300px] md:min-w-[500px]">
                    {/* Hash Table Visualization */}
                    {hashExamples.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center mb-4 gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + (index * 0.2) }}
                        viewport={{ once: true }}
                      >
                        <div className="w-20 text-right pr-2 font-medium text-sm">Key: "{item.key}"</div>
                        
                        <motion.div 
                          className="w-16 text-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-[#0047AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                          <div className="text-xs">Hash Function</div>
                        </motion.div>
                        
                        <motion.div 
                          className="w-10 h-8 bg-[#FFD700] text-black flex items-center justify-center rounded-lg shadow-md"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <span className="font-bold text-sm">{item.hashIndex}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="w-16 text-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-[#0047AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                          <div className="text-xs">Index</div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex-1 bg-[#F3F4F6] p-2 rounded border border-gray-200 shadow-sm text-sm"
                          whileHover={{ y: -2 }}
                        >
                          <span className="font-medium text-[#0047AB]">Value:</span> {item.value}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2 text-[#0047AB]">Hash Function Requirements</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { req: "Fast calculation", icon: "⚡" },
                    { req: "Minimize collisions", icon: "🛡️" },
                    { req: "Uniform distribution", icon: "📊" },
                    { req: "Deterministic output", icon: "🔁" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-[#F9FAFB] p-3 rounded-lg flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, backgroundColor: "#F0F4FF" }}
                    >
                      <span className="text-xl mr-2">{item.icon}</span>
                      <span className="text-sm font-medium">{item.req}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-[#0047AB] bg-opacity-5 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2 text-[#0047AB]">Time Complexity</h4>
                <div className="overflow-x-auto w-full">
                  <table className="min-w-[300px] md:min-w-full text-sm">
                    <thead>
                      <tr>
                        <th className="py-2 px-3 text-left">Operation</th>
                        <th className="py-2 px-3 text-left">Average</th>
                        <th className="py-2 px-3 text-left">Worst</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { op: "Insert", avg: "O(1)", worst: "O(n)" },
                        { op: "Delete", avg: "O(1)", worst: "O(n)" },
                        { op: "Search", avg: "O(1)", worst: "O(n)" }
                      ].map((item, index) => (
                        <motion.tr 
                          key={index}
                          className="border-t border-gray-200"
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: 1.1 + (index * 0.1) }}
                          viewport={{ once: true }}
                          whileHover={{ backgroundColor: "#F0F4FF" }}
                        >
                          <td className="py-2 px-3 font-medium">{item.op}</td>
                          <td className="py-2 px-3 text-[#00A86B]">{item.avg}</td>
                          <td className="py-2 px-3 text-[#FFD700]">{item.worst}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#0047AB]">
            <div className="bg-[#0047AB] p-4 text-white">
              <h3 className="font-bold text-xl mb-1 flex items-center">
                <motion.div
                  animate={{ rotate: [0, 15, 0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mr-2 text-2xl"
                >
                  🔀
                </motion.div>
                Collision Handling
              </h3>
              <p className="text-sm text-white text-opacity-90">When different keys hash to the same index</p>
            </div>
            
            <div className="p-5">
              <div className="space-y-4">
                {collisionMethods.map((method, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-4 border-l-4" style={{ borderColor: method.color }}>
                      <div className="flex items-start">
                        <div className="text-2xl mr-3 mt-1">{method.icon}</div>
                        <div>
                          <h5 className="font-bold">{method.title}</h5>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* No code examples as per user request */}
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-black text-white rounded-xl p-5 max-w-5xl mx-auto mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-xl mb-3 flex items-center">
          <span className="text-[#FFD700] mr-2">🌍</span>
          Real-world Applications
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {applications.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white text-black rounded-lg p-3 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.4 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="flex items-start">
                <div className="text-2xl mr-2">{item.emoji}</div>
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
