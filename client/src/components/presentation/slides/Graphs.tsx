import { Slide } from "../Slide";
import { CodeBlock } from "../CodeBlock";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const bfsCode = `// BFS implementation
function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  visited.add(startNode);
  
  while (queue.length) {
    const current = queue.shift();
    console.log(current);
    
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`;

export function Graphs() {
  return (
    <Slide id="graphs">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-primary mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Graphs
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
              <h3 className="font-semibold text-xl mb-4">What is a Graph?</h3>
              <p className="mb-4">A collection of nodes (vertices) and edges that connect pairs of nodes, representing relationships between objects.</p>
              
              <motion.div 
                className="my-8 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Graph Visualization */}
                <div className="relative w-full h-64 border-2 border-primary rounded-lg p-4">
                  {/* Nodes */}
                  {[
                    { label: "A", position: "top-1/4 left-1/4", delay: 0.5 },
                    { label: "B", position: "top-1/6 right-1/3", delay: 0.6 },
                    { label: "C", position: "bottom-1/4 left-1/3", delay: 0.7 },
                    { label: "D", position: "bottom-1/3 right-1/4", delay: 0.8 }
                  ].map((node, index) => (
                    <motion.div 
                      key={index}
                      className={`absolute ${node.position}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: node.delay }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {node.label}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* SVG for edges */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <motion.line 
                      x1="25%" y1="25%" x2="67%" y2="16%" 
                      stroke="#4B56D2" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      viewport={{ once: true }}
                    />
                    <motion.line 
                      x1="25%" y1="25%" x2="33%" y2="75%" 
                      stroke="#4B56D2" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                    />
                    <motion.line 
                      x1="67%" y1="16%" x2="75%" y2="67%" 
                      stroke="#4B56D2" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      viewport={{ once: true }}
                    />
                    <motion.line 
                      x1="33%" y1="75%" x2="75%" y2="67%" 
                      stroke="#4B56D2" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500">Undirected Graph</div>
                </div>
              </motion.div>
              
              <h4 className="font-semibold mt-4 mb-2">Graph Types:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Directed vs Undirected", description: "Edges with or without direction" },
                  { title: "Weighted vs Unweighted", description: "Edges with or without values" },
                  { title: "Cyclic vs Acyclic", description: "With or without cycles" },
                  { title: "Connected vs Disconnected", description: "All nodes connected or not" }
                ].map((type, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h5 className="font-medium">{type.title}</h5>
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
              <h3 className="font-semibold text-xl mb-4">Graph Representations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <motion.div 
                  className="bg-gray-100 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold mb-2">Adjacency Matrix</h4>
                  <div className="overflow-auto">
                    <table className="border-collapse w-full text-center">
                      <tbody>
                        <tr>
                          <td className="p-1"></td>
                          <td className="p-1 font-medium">A</td>
                          <td className="p-1 font-medium">B</td>
                          <td className="p-1 font-medium">C</td>
                          <td className="p-1 font-medium">D</td>
                        </tr>
                        {[
                          ["A", [0, 1, 1, 0]],
                          ["B", [1, 0, 0, 1]],
                          ["C", [1, 0, 0, 1]],
                          ["D", [0, 1, 1, 0]]
                        ].map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <td className="p-1 font-medium">{row[0]}</td>
                            {(row[1] as number[]).map((cell, cellIndex) => (
                              <motion.td 
                                key={cellIndex}
                                className={`p-1 border ${cell === 1 ? "bg-primary bg-opacity-20" : ""}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.7 + (rowIndex * 0.1) + (cellIndex * 0.05) }}
                                viewport={{ once: true }}
                              >
                                {cell}
                              </motion.td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs mt-2">Space: O(V²)</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-100 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold mb-2">Adjacency List</h4>
                  <div className="font-mono text-sm">
                    {[
                      "A → [B, C]",
                      "B → [A, D]",
                      "C → [A, D]",
                      "D → [B, C]"
                    ].map((line, index) => (
                      <motion.div 
                        key={index}
                        className="mb-1"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs mt-2">Space: O(V + E)</p>
                </motion.div>
              </div>
              
              <h3 className="font-semibold text-xl mb-4">Graph Traversal Algorithms</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold mb-2">Breadth-First Search (BFS)</h4>
                  <ul className="list-disc list-inside text-sm">
                    <li>Uses a queue</li>
                    <li>Explores neighbors first</li>
                    <li>Good for shortest path</li>
                    <li>O(V + E) time complexity</li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold mb-2">Depth-First Search (DFS)</h4>
                  <ul className="list-disc list-inside text-sm">
                    <li>Uses a stack (or recursion)</li>
                    <li>Explores as far as possible</li>
                    <li>Good for tree traversal</li>
                    <li>O(V + E) time complexity</li>
                  </ul>
                </motion.div>
              </div>
              
              <CodeBlock 
                language="javascript" 
                code={bfsCode}
                delay={1.4}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-primary bg-opacity-10 rounded-xl p-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-xl mb-2 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Real-world Applications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: "map", title: "GPS Navigation", description: "Finding shortest routes" },
            { icon: "social", title: "Social Networks", description: "Modeling connections" },
            { icon: "network", title: "Internet Routing", description: "Data packet pathways" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-3 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.6 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {item.icon === "map" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />}
                {item.icon === "social" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
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
