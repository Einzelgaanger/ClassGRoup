import { Slide } from "../Slide";
import { CodeBlock } from "../CodeBlock";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const hashTableCode = `class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }
  
  _hash(key) {
    let total = 0;
    for(let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.table.length;
  }
  
  set(key, value) {
    const index = this._hash(key);
    if(!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
    return index;
  }
  
  get(key) {
    const index = this._hash(key);
    if(!this.table[index]) return undefined;
    
    for(let i = 0; i < this.table[index].length; i++) {
      if(this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
    return undefined;
  }
}`;

export function HashTables() {
  return (
    <Slide id="hash-tables">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-primary mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Hash Tables
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
              <h3 className="font-semibold text-xl mb-4">What is a Hash Table?</h3>
              <p className="mb-4">A data structure that stores key-value pairs and uses a hash function to compute an index for fast access.</p>
              
              <motion.div 
                className="my-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Hash Table Visualization */}
                <div className="relative border-2 border-info rounded-lg p-4">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-info font-medium">Hash Table</div>
                  
                  {[
                    { key: "apple", hashIndex: 2, value: '{color: "red", count: 5}' },
                    { key: "banana", hashIndex: 0, value: '{color: "yellow", count: 8}' },
                    { key: "cherry", hashIndex: 4, value: '{color: "red", count: 12}' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.2) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-24 text-right pr-2 font-medium">Key: "{item.key}"</div>
                      <div className="w-20 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <div className="text-xs">Hash Function</div>
                      </div>
                      <div className="w-12 h-8 bg-info text-white flex items-center justify-center rounded">
                        <span>{item.hashIndex}</span>
                      </div>
                      <div className="w-20 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <div className="text-xs">Index</div>
                      </div>
                      <div className="flex-1 bg-gray-100 p-2 rounded">
                        <span className="font-medium">Value:</span> {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <h4 className="font-semibold mt-4 mb-2">Hash Function Requirements:</h4>
              <motion.ul 
                className="list-disc list-inside space-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <li>Fast to compute</li>
                <li>Minimizes collisions</li>
                <li>Distributes keys uniformly</li>
                <li>Deterministic (same input → same output)</li>
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
              <h3 className="font-semibold text-xl mb-4">Hash Table Operations</h3>
              
              <motion.div 
                className="bg-gray-100 p-4 rounded-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2">Core Operations: (Average: O(1), Worst: O(n))</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Insert:</b> Add a new key-value pair</li>
                  <li><b>Lookup:</b> Retrieve value by key</li>
                  <li><b>Delete:</b> Remove a key-value pair</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2">Collision Handling:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-white border border-gray-200 p-3 rounded shadow-sm"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h5 className="font-medium text-primary">Chaining</h5>
                    <p className="text-sm">Store multiple key-value pairs at the same index using a linked list</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white border border-gray-200 p-3 rounded shadow-sm"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h5 className="font-medium text-secondary">Open Addressing</h5>
                    <p className="text-sm">Find the next empty slot by probing (linear, quadratic, double hashing)</p>
                  </motion.div>
                </div>
              </motion.div>
              
              <CodeBlock 
                language="javascript" 
                code={hashTableCode}
                delay={1}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-warning bg-opacity-10 rounded-xl p-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-xl mb-2 text-warning">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Real-world Applications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: "database", title: "Database Indexing", description: "Fast record lookup" },
            { icon: "users", title: "User Sessions", description: "Storing active sessions by ID" },
            { icon: "spell", title: "Spell Checkers", description: "Fast word verification" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-3 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.4 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {item.icon === "database" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />}
                {item.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                {item.icon === "spell" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />}
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
