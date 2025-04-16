import { Slide } from "../Slide";
import { motion } from "framer-motion";

export function StacksQueues() {
  return (
    <Slide id="stacks-queues">
      <div className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h4v4H0V0zm8%200h4v4H8V0zm8%200h4v4h-4V0zM0%208h4v4H0V8zm8%200h4v4H8V8zm8%200h4v4h-4V8zM0%2016h4v4H0v-4zm8%200h4v4H8v-4zm8%200h4v4h-4v-4z%22%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none z-0"></div>
        
        <motion.div
          className="relative z-10 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-black text-4xl md:text-6xl text-[#0047AB] mb-2">
            Stacks & Queues
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Linear data structures that follow specific patterns for adding and removing elements
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 max-w-6xl mx-auto px-4">
          {/* Stack Section */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#0047AB]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 71, 171, 0.1)" }}
          >
            <div className="bg-[#0047AB] p-6 text-white">
              <h3 className="font-bold text-2xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Stacks
              </h3>
              <p className="mt-1 text-white text-opacity-90">Last-In-First-Out (LIFO)</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center my-6">
                {/* Stack Visualization */}
                <div className="relative mb-6">
                  <motion.div
                    className="mb-1 text-sm font-bold text-center text-[#0047AB]"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    PUSH/POP
                  </motion.div>
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#0047AB] mx-auto mb-3 text-white flex items-center justify-center text-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0] 
                    }}
                    transition={{ 
                      opacity: { duration: 0.4, delay: 0.5 },
                      scale: { duration: 0.4, delay: 0.5 },
                      y: { repeat: Infinity, duration: 2.5 }
                    }}
                  >
                    ↕️
                  </motion.div>
                  
                  <div className="w-48 border-4 border-[#0047AB] rounded-lg overflow-hidden">
                    {/* Stack items */}
                    {[
                      { value: "TOP ITEM", color: "#FFD700" },
                      { value: "MIDDLE ITEM", color: "#0047AB" },
                      { value: "BOTTOM ITEM", color: "#00A86B" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="p-3 text-white font-bold text-center relative"
                        style={{ backgroundColor: item.color }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + (0.15 * (3-index)) }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        {item.value}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <motion.div
                  className="bg-gray-50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-lg mb-2 text-[#0047AB]">Key Operations</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="font-semibold">Push</div>
                      <div className="text-sm text-gray-600">Add to top</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="font-semibold">Pop</div>
                      <div className="text-sm text-gray-600">Remove from top</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-[#0047AB] bg-opacity-10 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2">Real-world Examples</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">🌐</span>
                      <span>Browser history (back button)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">⚙️</span>
                      <span>Function call tracking</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Queue Section */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#FFD700]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(255, 215, 0, 0.1)" }}
          >
            <div className="bg-[#FFD700] p-6 text-black">
              <h3 className="font-bold text-2xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Queues
              </h3>
              <p className="mt-1 text-black text-opacity-80">First-In-First-Out (FIFO)</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center my-6">
                {/* Queue Visualization */}
                <div className="relative mb-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-between w-full mb-8">
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="mb-1 text-sm font-bold text-[#FFD700]">FRONT (DEQUEUE)</div>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="mb-1 text-sm font-bold text-[#FFD700]">REAR (ENQUEUE)</div>
                        <motion.div
                          animate={{ x: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <div className="w-64 h-16 border-4 border-[#FFD700] rounded-lg overflow-hidden">
                      <div className="flex h-full">
                        {[
                          { id: 1, color: "#00A86B" },
                          { id: 2, color: "#0047AB" },
                          { id: 3, color: "#FFD700" },
                          { id: 4, color: "black" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex-1 h-full flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: item.color }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + (index * 0.15) }}
                            viewport={{ once: true }}
                          >
                            {item.id}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <motion.div
                  className="bg-gray-50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-lg mb-2 text-[#FFD700]">Key Operations</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="font-semibold">Enqueue</div>
                      <div className="text-sm text-gray-600">Add to rear</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="font-semibold">Dequeue</div>
                      <div className="text-sm text-gray-600">Remove from front</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-[#FFD700] bg-opacity-10 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2">Real-world Examples</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">🖨️</span>
                      <span>Printer job queue</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">👥</span>
                      <span>Customer service line</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          className="bg-black text-white rounded-xl p-6 max-w-5xl mx-auto mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-xl mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Key Differences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Insertion & Removal", stack: "Same end (top)", queue: "Different ends (rear, front)" },
              { title: "Order", stack: "LIFO (Last In, First Out)", queue: "FIFO (First In, First Out)" },
              { title: "Use Case", stack: "When order should be reversed", queue: "When processing order matters" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white text-black rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.6 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs font-medium text-[#0047AB]">Stack: {item.stack}</p>
                <p className="text-xs font-medium text-[#FFD700] mt-1">Queue: {item.queue}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
