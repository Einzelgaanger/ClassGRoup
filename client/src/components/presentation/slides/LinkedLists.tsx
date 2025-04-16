import { Slide } from "../Slide";
import { CodeBlock } from "../CodeBlock";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const insertCodeExample = `function insertAtHead(value) {
  const newNode = {
    data: value,
    next: this.head
  };
  this.head = newNode;
}`;

const deleteCodeExample = `function deleteNode(value) {
  if (!this.head) return;
  
  if (this.head.data === value) {
    this.head = this.head.next;
    return;
  }
  
  let current = this.head;
  while (current.next) {
    if (current.next.data === value) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
}`;

export function LinkedLists() {
  return (
    <Slide id="linked-lists">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-primary mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Linked Lists
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
              <h3 className="font-semibold text-xl mb-4">What is a Linked List?</h3>
              <p className="mb-4">A sequence of nodes where each node contains data and a reference to the next node in the sequence.</p>
              
              <motion.div 
                className="flex justify-center my-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Linked List Visualization */}
                <div className="flex items-center flex-wrap justify-center">
                  {[
                    { data: 12, isLast: false },
                    { data: 99, isLast: false },
                    { data: 37, isLast: false },
                    { data: 8, isLast: true }
                  ].map((node, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.2) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-28 h-20 border-2 border-secondary rounded-lg flex flex-col items-center justify-center m-1 relative">
                        <div className="font-bold">Data: {node.data}</div>
                        <div className="text-xs">{node.isLast ? "Next: NULL" : "Next →"}</div>
                      </div>
                      {!node.isLast && (
                        <motion.div 
                          className="mx-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <h4 className="font-semibold mt-4 mb-2">Types of Linked Lists:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Singly Linked", description: "Each node points to the next node" },
                  { title: "Doubly Linked", description: "Nodes point to both next and previous" },
                  { title: "Circular", description: "Last node points back to the first" }
                ].map((type, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h5 className="font-medium mb-1">{type.title}</h5>
                    <p className="text-sm">{type.description}</p>
                  </motion.div>
                ))}
              </div>
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
              <h3 className="font-semibold text-xl mb-4">Linked List Operations</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Insertion: O(1) at head, O(n) elsewhere</h4>
                <CodeBlock 
                  language="javascript" 
                  code={insertCodeExample}
                  delay={0.5}
                />
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Deletion: O(1) for head, O(n) elsewhere</h4>
                <CodeBlock 
                  language="javascript" 
                  code={deleteCodeExample}
                  delay={0.7}
                />
              </div>
              
              <motion.div 
                className="bg-warning bg-opacity-10 p-4 rounded-lg mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Key Differences from Arrays
                </h4>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Dynamic size</li>
                  <li>No random access (must traverse)</li>
                  <li>Efficient insertions/deletions</li>
                  <li>No need for contiguous memory</li>
                </ul>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-secondary bg-opacity-10 rounded-xl p-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-xl mb-2 text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Real-world Applications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: "music", title: "Music Playlists", description: "Next/previous song navigation" },
            { icon: "train", title: "Train Carriages", description: "Connected sequential cars" },
            { icon: "browser", title: "Browser History", description: "Back/forward navigation" }
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
                {item.icon === "music" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />}
                {item.icon === "train" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />}
                {item.icon === "browser" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
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
