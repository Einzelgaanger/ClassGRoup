import { Slide } from "../Slide";
import { CodeBlock } from "../CodeBlock";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const accessCodeExample = `// Accessing element at index 2
let element = array[2]; // Returns 10`;

const searchCodeExample = `function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}`;

export function Arrays() {
  return (
    <Slide id="arrays">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-primary mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Arrays
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-4">What is an Array?</h3>
              <p className="mb-4">A collection of elements stored at contiguous memory locations.</p>
              
              <div className="flex flex-wrap gap-4 my-4 justify-center">
                <div className="relative">
                  {/* Array visualization */}
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {[5, 8, 10, 12, 15].map((value, index) => (
                      <motion.div 
                        key={index}
                        className="w-12 h-12 border-2 border-primary flex items-center justify-center font-bold"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 * index }}
                        viewport={{ once: true }}
                      >
                        {value}
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="flex text-xs text-center">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <div key={index} className="w-12">Index {index}</div>
                    ))}
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold mt-6 mb-2">Key Characteristics:</h4>
              <motion.ul 
                className="list-disc list-inside space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <li>Fixed size (in most languages)</li>
                <li>Elements accessed by index in O(1) time</li>
                <li>Contiguous memory allocation</li>
                <li>Homogeneous elements (same data type)</li>
              </motion.ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-4">Array Operations</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Access: O(1)</h4>
                <CodeBlock 
                  language="javascript" 
                  code={accessCodeExample}
                  delay={0.5}
                />
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Search: O(n)</h4>
                <CodeBlock 
                  language="javascript" 
                  code={searchCodeExample}
                  delay={0.7}
                />
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Insert/Delete: O(n)</h4>
                <p className="text-sm mb-2">Insertion and deletion may require shifting elements</p>
                <motion.div 
                  className="bg-gray-100 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1516101922849-2bf0be616449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Array insertion visualization" 
                    className="rounded-lg w-full"
                  />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-info bg-opacity-10 rounded-xl p-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-xl mb-2 text-info">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Real-world Applications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: "image", title: "Image Processing", description: "Pixel data storage" },
            { icon: "list", title: "Todo Lists", description: "Simple item collections" },
            { icon: "table", title: "Spreadsheets", description: "Grid-based data storage" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-3 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-primary mb-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {item.icon === "image" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                {item.icon === "list" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />}
                {item.icon === "table" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18M3 6h18" />}
              </svg>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
}
