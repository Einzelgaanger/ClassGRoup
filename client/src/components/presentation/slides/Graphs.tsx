import { Slide } from "../Slide";
import { motion } from "framer-motion";

// Graph nodes and their positions
const graphNodes = [
  { label: "A", position: { x: 25, y: 25 }, color: "#0047AB" },
  { label: "B", position: { x: 67, y: 16 }, color: "#FFD700" },
  { label: "C", position: { x: 33, y: 75 }, color: "#00A86B" },
  { label: "D", position: { x: 75, y: 67 }, color: "#000000" }
];

// Graph edges connecting the nodes
const graphEdges = [
  { from: 0, to: 1 },  // A to B
  { from: 0, to: 2 },  // A to C
  { from: 1, to: 3 },  // B to D
  { from: 2, to: 3 }   // C to D
];

// Graph types for display
const graphTypes = [
  { 
    title: "Directed vs Undirected", 
    description: "Edges with or without direction",
    icon: "↔️"
  },
  { 
    title: "Weighted vs Unweighted", 
    description: "Edges with or without values",
    icon: "⚖️"
  },
  { 
    title: "Cyclic vs Acyclic", 
    description: "With or without cycles",
    icon: "🔄"
  },
  { 
    title: "Connected vs Disconnected", 
    description: "All nodes connected or not",
    icon: "🔗" 
  }
];

// Real-world applications of graphs
const applications = [
  { 
    title: "GPS Navigation", 
    description: "Finding shortest routes between locations",
    emoji: "🗺️"
  },
  { 
    title: "Social Networks", 
    description: "Modeling relationships between users",
    emoji: "👥"
  },
  { 
    title: "Internet Routing", 
    description: "Optimizing data packet pathways",
    emoji: "🌐"
  },
  { 
    title: "Recommendation Systems", 
    description: "Suggesting products based on relationships",
    emoji: "📊"
  },
  { 
    title: "Airline Routes", 
    description: "Planning flight connections",
    emoji: "✈️"
  },
  { 
    title: "Circuit Design", 
    description: "Optimizing electronic components",
    emoji: "💡"
  }
];

// Traversal algorithms
const traversalAlgorithms = [
  {
    name: "Breadth-First Search (BFS)",
    description: "Uses a queue data structure",
    features: [
      "Explores neighbors first",
      "Layer by layer traversal",
      "Finds shortest path",
      "O(V+E) complexity"
    ],
    color: "#0047AB",
    pseudocode: `function BFS(graph, start):
  queue = [start]
  visited = {start}
  
  while queue not empty:
    node = queue.dequeue()
    process(node)
    
    for neighbor in graph[node]:
      if neighbor not in visited:
        visited.add(neighbor)
        queue.enqueue(neighbor)`
  },
  {
    name: "Depth-First Search (DFS)",
    description: "Uses a stack or recursion",
    features: [
      "Explores as deep as possible",
      "Backtracking when needed",
      "Good for maze solving",
      "O(V+E) complexity"
    ],
    color: "#FFD700",
    pseudocode: `function DFS(graph, start):
  stack = [start]
  visited = {}
  
  while stack not empty:
    node = stack.pop()
    if node not in visited:
      visited.add(node)
      process(node)
      
      for neighbor in graph[node]:
        stack.push(neighbor)`
  }
];

export function Graphs() {
  return (
    <Slide id="graphs">
      {/* Floating graph icons background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(15).fill(null).map((_, i) => {
          // Graph-related emojis
          const icons = ["🗺️", "🌐", "🔗", "📊", "🔄", "🧩", "🕸️", "💠"];
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
        className="font-bold text-3xl md:text-5xl text-center text-[#00A86B] mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Graphs
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-8">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#00A86B]">
            <div className="bg-[#00A86B] p-4 text-black">
              <h3 className="font-bold text-xl mb-1 flex items-center">
                <span className="text-2xl mr-2">🌐</span>
                What is a Graph?
              </h3>
              <p className="text-sm text-black text-opacity-90">A collection of vertices (nodes) connected by edges</p>
            </div>
            
            <div className="p-5">
              <motion.div 
                className="my-6 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Interactive Graph Visualization */}
                <div className="relative w-full h-64 rounded-lg bg-[#f8f9fa] border border-gray-200 p-4 overflow-hidden">
                  {/* SVG for edges */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {graphEdges.map((edge, index) => {
                      const fromNode = graphNodes[edge.from];
                      const toNode = graphNodes[edge.to];
                      return (
                        <motion.path
                          key={index}
                          d={`M${fromNode.position.x}% ${fromNode.position.y}% L${toNode.position.x}% ${toNode.position.y}%`}
                          stroke="rgba(0, 168, 107, 0.5)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                          viewport={{ once: true }}
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Nodes */}
                  {graphNodes.map((node, index) => (
                    <motion.div 
                      key={index}
                      className="absolute"
                      style={{ 
                        top: `${node.position.y}%`, 
                        left: `${node.position.x}%`, 
                        transform: 'translate(-50%, -50%)' 
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15, 
                        delay: 0.5 + (index * 0.1) 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                      }}
                    >
                      <div 
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg"
                        style={{ backgroundColor: node.color }}
                      >
                        {node.label}
                      </div>
                    </motion.div>
                  ))}
                  
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded">
                    Undirected Graph
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mb-6 bg-[#F9FAFB] p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-3 text-[#00A86B]">Graph Types</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {graphTypes.map((type, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <span className="text-2xl mr-2">{type.icon}</span>
                      <div>
                        <h5 className="font-bold text-sm">{type.title}</h5>
                        <p className="text-xs text-gray-600">{type.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="bg-[#00A86B] bg-opacity-5 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2 text-[#00A86B] flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Properties
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { prop: "Order", value: "Number of vertices" },
                    { prop: "Size", value: "Number of edges" },
                    { prop: "Degree", value: "Number of edges at a vertex" },
                    { prop: "Path", value: "Sequence of vertices connected by edges" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-2 rounded border border-gray-200"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 1.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="font-medium text-sm">{item.prop}</div>
                      <div className="text-xs text-gray-600">{item.value}</div>
                    </motion.div>
                  ))}
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
                <span className="text-2xl mr-2">🔍</span>
                Graph Representations
              </h3>
              <p className="text-sm text-white text-opacity-90">Different ways to represent a graph in memory</p>
            </div>
            
            <div className="p-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <motion.div 
                  className="bg-[#F9FAFB] rounded-lg p-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2 text-[#0047AB]">Adjacency Matrix</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-center text-sm">
                      <tbody>
                        <tr>
                          <td className="p-1"></td>
                          <td className="p-1 font-bold">A</td>
                          <td className="p-1 font-bold">B</td>
                          <td className="p-1 font-bold">C</td>
                          <td className="p-1 font-bold">D</td>
                        </tr>
                        {[
                          ["A", [0, 1, 1, 0]],
                          ["B", [1, 0, 0, 1]],
                          ["C", [1, 0, 0, 1]],
                          ["D", [0, 1, 1, 0]]
                        ].map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <td className="p-1 font-bold">{row[0]}</td>
                            {(row[1] as number[]).map((cell, cellIndex) => (
                              <motion.td 
                                key={cellIndex}
                                className={`p-1 border-2 ${cell === 1 ? "bg-[#0047AB] bg-opacity-20 border-[#0047AB] border-opacity-30" : "border-gray-200"}`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.7 + (rowIndex * 0.1) + (cellIndex * 0.05) }}
                                viewport={{ once: true }}
                                whileHover={cell === 1 ? { scale: 1.1, backgroundColor: "rgba(0, 71, 171, 0.3)" } : {}}
                              >
                                {cell}
                              </motion.td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-xs mt-2 text-gray-500">
                    Space: O(V²) • Good for dense graphs
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-[#F9FAFB] rounded-lg p-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2 text-[#0047AB]">Adjacency List</h4>
                  <div className="overflow-x-auto">
                    <div className="font-mono text-sm bg-[#1E293B] text-white p-3 rounded">
                      {[
                        { node: "A", neighbors: ["B", "C"], delay: 0.9 },
                        { node: "B", neighbors: ["A", "D"], delay: 1.0 },
                        { node: "C", neighbors: ["A", "D"], delay: 1.1 },
                        { node: "D", neighbors: ["B", "C"], delay: 1.2 }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="mb-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: item.delay }}
                          viewport={{ once: true }}
                        >
                          <span className="text-[#FFD700]">{item.node}</span>: [
                          {item.neighbors.map((neighbor, nIndex) => (
                            <span key={nIndex}>
                              <span className="text-[#00A86B]">{neighbor}</span>
                              {nIndex < item.neighbors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                          ]
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs mt-2 text-gray-500">
                    Space: O(V + E) • Good for sparse graphs
                  </div>
                </motion.div>
              </div>
              
              <h4 className="font-bold text-lg mb-3 text-[#0047AB]">Graph Traversal Algorithms</h4>
              
              <div className="space-y-4">
                {traversalAlgorithms.map((algo, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.3 + (index * 0.2) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="p-4 border-l-4" style={{ borderColor: algo.color }}>
                      <h5 className="font-bold">{algo.name}</h5>
                      <p className="text-sm text-gray-600 mb-2">{algo.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {algo.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 1.4 + (index * 0.2) + (fIndex * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#00A86B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="overflow-x-auto text-xs">
                        <div className="bg-[#1E293B] text-[#E2E8F0] p-2 rounded font-mono whitespace-pre" style={{ maxHeight: "100px" }}>
                          {algo.pseudocode}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-black text-white rounded-xl p-5 max-w-5xl mx-auto mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-xl mb-3 flex items-center">
          <span className="text-[#00A86B] mr-2">🌍</span>
          Real-world Applications
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {applications.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white text-black rounded-lg p-3 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.6 + (index * 0.05) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
}
