import { Slide } from "../Slide";
import { motion } from "framer-motion";

// Data structures comparison table data
const dataStructuresComparison = [
  { 
    name: "Array", 
    access: { value: "O(1)", color: "#00A86B" }, 
    search: { value: "O(n)", color: "#FFD700" }, 
    insert: { value: "O(n)", color: "#FFD700" }, 
    delete: { value: "O(n)", color: "#FFD700" }, 
    space: "O(n)",
    icon: "🔢"
  },
  { 
    name: "Linked List", 
    access: { value: "O(n)", color: "#FFD700" }, 
    search: { value: "O(n)", color: "#FFD700" }, 
    insert: { value: "O(1)", color: "#00A86B" }, 
    delete: { value: "O(1)", color: "#00A86B" }, 
    space: "O(n)",
    icon: "🔗"
  },
  { 
    name: "Stack", 
    access: { value: "O(n)", color: "#FFD700" }, 
    search: { value: "O(n)", color: "#FFD700" }, 
    insert: { value: "O(1)", color: "#00A86B" }, 
    delete: { value: "O(1)", color: "#00A86B" }, 
    space: "O(n)",
    icon: "📚"
  },
  { 
    name: "Queue", 
    access: { value: "O(n)", color: "#FFD700" }, 
    search: { value: "O(n)", color: "#FFD700" }, 
    insert: { value: "O(1)", color: "#00A86B" }, 
    delete: { value: "O(1)", color: "#00A86B" }, 
    space: "O(n)",
    icon: "🚶‍♂️"
  },
  { 
    name: "Binary Search Tree", 
    access: { value: "O(log n)*", color: "#0047AB" }, 
    search: { value: "O(log n)*", color: "#0047AB" }, 
    insert: { value: "O(log n)*", color: "#0047AB" }, 
    delete: { value: "O(log n)*", color: "#0047AB" }, 
    space: "O(n)",
    icon: "🌲"
  },
  { 
    name: "Hash Table", 
    access: { value: "O(n)**", color: "#FFD700" }, 
    search: { value: "O(1)**", color: "#00A86B" }, 
    insert: { value: "O(1)**", color: "#00A86B" }, 
    delete: { value: "O(1)**", color: "#00A86B" }, 
    space: "O(n)",
    icon: "🔐"
  },
  { 
    name: "Graph", 
    access: { value: "O(n)", color: "#FFD700" }, 
    search: { value: "O(n)", color: "#FFD700" }, 
    insert: { value: "Varies", color: "#0047AB" }, 
    delete: { value: "Varies", color: "#0047AB" }, 
    space: "O(V+E)",
    icon: "🕸️"
  }
];

// Data structure selection guidelines
const selectionGuidelines = [
  { 
    title: "Frequent Access by Position", 
    description: "Use Arrays for constant-time access to elements by index", 
    color: "#0047AB",
    icon: "🔢"
  },
  { 
    title: "Frequent Insertions/Deletions", 
    description: "Consider Linked Lists, especially for insertions at the beginning", 
    color: "#FFD700",
    icon: "🔗"
  },
  { 
    title: "Fast Lookups by Key", 
    description: "Hash Tables provide near-constant time lookups in the average case", 
    color: "#00A86B",
    icon: "🔐"
  },
  { 
    title: "Hierarchical Data", 
    description: "Trees are perfect for representing parent-child relationships", 
    color: "#0047AB",
    icon: "🌲"
  },
  { 
    title: "Complex Relationships", 
    description: "Graphs excel at representing many-to-many connections", 
    color: "#FFD700",
    icon: "🕸️"
  }
];

// Key takeaways about data structures
const keyTakeaways = [
  {
    point: "Every data structure has strengths and weaknesses. Understanding trade-offs is crucial for making good design decisions.",
    color: "#0047AB"
  },
  {
    point: "Time and space complexity analysis helps predict how a solution will perform as the data size grows.",
    color: "#FFD700"
  },
  {
    point: "Real-world problems often require combinations of different data structures to achieve optimal solutions.",
    color: "#00A86B"
  },
  {
    point: "Understanding the underlying implementations of data structures will help you use them more effectively.",
    color: "#0047AB"
  },
  {
    point: "Practice implementing and using these structures will build your intuition about when to use each one.",
    color: "#FFD700"
  }
];

export function Summary() {
  return (
    <Slide id="summary">
      {/* Floating background icons */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(20).fill(null).map((_, i) => {
          // Data structure related icons
          const icons = ["🔢", "🔗", "📚", "🚶‍♂️", "🌲", "🔐", "🕸️", "📊", "⏱️", "💾"];
          const randomIcon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <motion.div 
              key={i}
              className="absolute text-xl select-none pointer-events-none opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: ["#0047AB", "#FFD700", "#00A86B"][Math.floor(Math.random() * 3)]
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
      </div>
      
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center mb-6 bg-gradient-to-r from-[#0047AB] via-[#FFD700] to-[#00A86B] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Comparison & Summary
      </motion.h2>
      
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-5 mb-8 border-2 border-[#0047AB]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-xl mb-4 text-center text-[#0047AB] flex items-center justify-center">
          <span className="text-2xl mr-2">📊</span>
          Data Structure Comparison
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#0047AB] text-white">
                <th className="p-3 text-left whitespace-nowrap">Data Structure</th>
                <th className="p-3 text-center whitespace-nowrap">Access</th>
                <th className="p-3 text-center whitespace-nowrap">Search</th>
                <th className="p-3 text-center whitespace-nowrap">Insert</th>
                <th className="p-3 text-center whitespace-nowrap">Delete</th>
                <th className="p-3 text-center whitespace-nowrap">Space</th>
              </tr>
            </thead>
            <tbody>
              {dataStructuresComparison.map((row, index) => (
                <motion.tr 
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <td className="p-3 font-bold flex items-center whitespace-nowrap">
                    <span className="text-xl mr-2">{row.icon}</span>
                    {row.name}
                  </td>
                  <td className="p-3 text-center">
                    <span 
                      className="inline-block px-2 py-1 rounded-md text-white text-sm"
                      style={{ backgroundColor: row.access.color }}
                    >
                      {row.access.value}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span 
                      className="inline-block px-2 py-1 rounded-md text-white text-sm"
                      style={{ backgroundColor: row.search.color }}
                    >
                      {row.search.value}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span 
                      className="inline-block px-2 py-1 rounded-md text-white text-sm"
                      style={{ backgroundColor: row.insert.color }}
                    >
                      {row.insert.value}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span 
                      className="inline-block px-2 py-1 rounded-md text-white text-sm"
                      style={{ backgroundColor: row.delete.color }}
                    >
                      {row.delete.value}
                    </span>
                  </td>
                  <td className="p-3 text-center font-medium">{row.space}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-xs mt-3 text-gray-600 px-2">
          <p>* Average case for balanced trees. Worst case can be O(n) for unbalanced trees</p>
          <p>** Average case. Worst case can be O(n) due to hash collisions</p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#FFD700]">
            <div className="bg-[#FFD700] p-4 text-black">
              <h3 className="font-bold text-xl mb-1 flex items-center">
                <span className="text-2xl mr-2">🔍</span>
                Choosing the Right Data Structure
              </h3>
              <p className="text-sm text-black text-opacity-80">Guidelines for selecting optimal structures</p>
            </div>
            
            <div className="p-5">
              <div className="space-y-3">
                {selectionGuidelines.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-3 border-l-4" style={{ borderColor: item.color }}>
                      <div className="flex items-start">
                        <span className="text-2xl mr-2 mt-1">{item.icon}</span>
                        <div>
                          <h4 className="font-bold text-sm">{item.title}</h4>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#00A86B]">
            <div className="bg-[#00A86B] p-4 text-black">
              <h3 className="font-bold text-xl mb-1 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Key Takeaways
              </h3>
              <p className="text-sm text-black text-opacity-80">Important concepts to remember</p>
            </div>
            
            <div className="p-5">
              <div className="space-y-4">
                {keyTakeaways.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 3 }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full text-white flex items-center justify-center mr-3 flex-shrink-0 shadow-md"
                      style={{ backgroundColor: point.color }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-sm">{point.point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-black text-white rounded-xl p-6 max-w-4xl mx-auto text-center mb-4 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="font-bold text-2xl mb-2 bg-gradient-to-r from-[#0047AB] via-[#FFD700] to-[#00A86B] text-transparent bg-clip-text"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
        >
          Thank You!
        </motion.h3>
        
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-1">Presentation by</p>
          <p className="font-bold text-xl">Janice • Zamzam • Mukisa • Alfred</p>
          <p className="text-gray-400 mt-1 text-sm">Statistics & Data Science • April 16, 2025</p>
        </motion.div>
        
        <motion.p 
          className="mb-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
          viewport={{ once: true }}
        >
          Any questions about algorithms and data structures?
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a 
            href="#"
            className="px-5 py-2 bg-[#0047AB] text-white rounded-full hover:bg-opacity-90 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 71, 171, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Resources
          </motion.a>
          
          <motion.a 
            href="#"
            className="px-5 py-2 bg-[#FFD700] text-black rounded-full hover:bg-opacity-90 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            viewport={{ once: true }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Practice Problems
          </motion.a>
          
          <motion.a 
            href="#"
            className="px-5 py-2 bg-[#00A86B] text-white rounded-full hover:bg-opacity-90 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 168, 107, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            viewport={{ once: true }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </Slide>
  );
}
