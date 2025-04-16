import { Slide } from "../Slide";
import { CodeBlock } from "../CodeBlock";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const traversalCode = `// In-order traversal (Left-Root-Right)
function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

// Pre-order traversal (Root-Left-Right)
function preOrder(node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}`;

export function Trees() {
  return (
    <Slide id="trees">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-primary mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Trees
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
              <h3 className="font-semibold text-xl mb-4">What is a Tree?</h3>
              <p className="mb-4">A hierarchical data structure with a root value and subtrees of children, represented as a set of linked nodes.</p>
              
              <div className="my-8 flex justify-center">
                {/* Tree Visualization */}
                <div className="relative h-64 w-full">
                  {/* Root */}
                  <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold">10</div>
                  </motion.div>
                  
                  {/* Level 1 */}
                  <motion.div 
                    className="mt-8 flex justify-center gap-24"
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
                      className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold"
                    >
                      5
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold"
                    >
                      15
                    </motion.div>
                  </motion.div>
                  
                  {/* Lines connecting levels */}
                  <motion.div 
                    className="absolute top-14 left-1/2 transform -translate-x-1/2 h-8 w-0.5 bg-gray-400"
                    initial={{ height: 0 }}
                    whileInView={{ height: "2rem" }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute top-14 left-1/2 transform -translate-x-24 rotate-45 origin-top-left h-12 w-0.5 bg-gray-400"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute top-14 left-1/2 transform translate-x-24 -rotate-45 origin-top-right h-12 w-0.5 bg-gray-400"
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
                    {[3, 7, 12, 18].map((value, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold"
                      >
                        {value}
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* More connecting lines - simplified for animation */}
                  <motion.div 
                    className="absolute top-[7rem] left-[calc(25%-7px)] h-8 w-0.5 bg-gray-400 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute top-[7rem] left-[calc(42%-7px)] h-8 w-0.5 bg-gray-400 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute top-[7rem] left-[calc(58%-7px)] h-8 w-0.5 bg-gray-400 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    viewport={{ once: true }}
                  />
                  <motion.div 
                    className="absolute top-[7rem] left-[calc(75%-7px)] h-8 w-0.5 bg-gray-400 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
              
              <h4 className="font-semibold mt-6 mb-2">Key Terminology:</h4>
              <motion.div 
                className="grid grid-cols-2 gap-2 text-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
              >
                {[
                  { term: "Root:", definition: "Top node" },
                  { term: "Parent/Child:", definition: "Relationship" },
                  { term: "Leaf:", definition: "Node with no children" },
                  { term: "Depth:", definition: "Distance from root" },
                  { term: "Height:", definition: "Longest path to leaf" },
                  { term: "Subtree:", definition: "Tree within a tree" }
                ].map((item, index) => (
                  <div key={index}>
                    <span className="font-medium">{item.term}</span> {item.definition}
                  </div>
                ))}
              </motion.div>
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
              <h3 className="font-semibold text-xl mb-4">Binary Search Trees (BST)</h3>
              <p className="mb-4">A tree where each node has at most two children (left and right), with all left descendants less than the node and all right descendants greater.</p>
              
              <motion.div 
                className="bg-gray-100 p-4 rounded-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2">BST Operations:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Search:</b> O(log n) average, O(n) worst</li>
                  <li><b>Insert:</b> O(log n) average, O(n) worst</li>
                  <li><b>Delete:</b> O(log n) average, O(n) worst</li>
                </ul>
              </motion.div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tree Traversals:</h4>
                <CodeBlock 
                  language="javascript" 
                  code={traversalCode}
                  delay={0.8}
                />
              </div>
              
              <motion.div 
                className="bg-info bg-opacity-10 p-4 rounded-lg mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-info mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tree Variants
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { title: "AVL Trees", description: "Self-balancing BST" },
                    { title: "Red-Black Trees", description: "Self-balancing with coloring" },
                    { title: "B-Trees", description: "Multi-way search trees" },
                    { title: "Tries", description: "Specialized for strings" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-2 rounded"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.1 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <h5 className="font-medium">{item.title}</h5>
                      <p>{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-accent bg-opacity-10 rounded-xl p-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-xl mb-2 text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Real-world Applications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: "sitemap", title: "File Systems", description: "Folders and files hierarchy" },
            { icon: "search", title: "Database Indexing", description: "Fast data retrieval" },
            { icon: "network", title: "Network Routing", description: "Finding optimal paths" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-3 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.3 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {item.icon === "sitemap" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />}
                {item.icon === "search" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                {item.icon === "network" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />}
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
