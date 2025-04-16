import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Sample algorithms data that might be requested via API
const algorithmData = {
  // Time complexity data for the comparison chart
  complexityData: {
    arrays: {
      access: "O(1)",
      search: "O(n)",
      insert: "O(n)",
      delete: "O(n)",
      space: "O(n)",
    },
    linkedLists: {
      access: "O(n)",
      search: "O(n)",
      insert: "O(1)",
      delete: "O(1)",
      space: "O(n)",
    },
    stacks: {
      access: "O(n)",
      search: "O(n)",
      insert: "O(1)",
      delete: "O(1)",
      space: "O(n)",
    },
    queues: {
      access: "O(n)",
      search: "O(n)",
      insert: "O(1)",
      delete: "O(1)",
      space: "O(n)",
    },
    trees: {
      access: "O(log n)*",
      search: "O(log n)*",
      insert: "O(log n)*",
      delete: "O(log n)*",
      space: "O(n)",
    },
    hashTables: {
      access: "O(n)**",
      search: "O(1)**",
      insert: "O(1)**",
      delete: "O(1)**",
      space: "O(n)",
    },
    graphs: {
      access: "O(n)",
      search: "O(n)",
      insert: "Varies",
      delete: "Varies",
      space: "O(V+E)",
    },
  },
  
  // Algorithm descriptions
  descriptions: {
    arrays: "A collection of elements stored at contiguous memory locations, accessible by index.",
    linkedLists: "A sequence of nodes where each node contains data and a reference to the next node.",
    stacks: "A collection that follows the Last-In-First-Out (LIFO) principle.",
    queues: "A collection that follows the First-In-First-Out (FIFO) principle.",
    trees: "A hierarchical data structure with a root value and subtrees of children.",
    hashTables: "A data structure that uses a hash function to map keys to values for efficient lookup.",
    graphs: "A collection of nodes (vertices) and edges connecting nodes, representing relationships.",
  },
  
  // Code examples
  codeExamples: {
    arraySearch: `function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}`,
    linkedListInsert: `function insertAtHead(value) {
  const newNode = {
    data: value,
    next: this.head
  };
  this.head = newNode;
}`,
    stackImplementation: `class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}`,
    queueImplementation: `class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  
  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }
  
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  
  isEmpty() {
    return this.frontIndex === this.backIndex;
  }
}`,
    treeTraversal: `// In-order traversal (Left-Root-Right)
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
}`,
    hashTableImplementation: `class HashTable {
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
}`,
    graphTraversal: `// BFS implementation
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
}`
  },
  
  // Real-world applications
  applications: {
    arrays: [
      { title: "Image Processing", description: "Pixel data storage" },
      { title: "Todo Lists", description: "Simple item collections" },
      { title: "Spreadsheets", description: "Grid-based data storage" }
    ],
    linkedLists: [
      { title: "Music Playlists", description: "Next/previous song navigation" },
      { title: "Train Carriages", description: "Connected sequential cars" },
      { title: "Browser History", description: "Back/forward navigation" }
    ],
    stacks: [
      { title: "Browser History", description: "Back button functionality" },
      { title: "Function Calls", description: "Call stack for execution tracking" }
    ],
    queues: [
      { title: "Print Jobs", description: "Documents waiting to be printed" },
      { title: "Customer Support", description: "Customers waiting in line for service" }
    ],
    trees: [
      { title: "File Systems", description: "Folders and files hierarchy" },
      { title: "Database Indexing", description: "Fast data retrieval" },
      { title: "Network Routing", description: "Finding optimal paths" }
    ],
    hashTables: [
      { title: "Database Indexing", description: "Fast record lookup" },
      { title: "User Sessions", description: "Storing active sessions by ID" },
      { title: "Spell Checkers", description: "Fast word verification" }
    ],
    graphs: [
      { title: "GPS Navigation", description: "Finding shortest routes" },
      { title: "Social Networks", description: "Modeling connections" },
      { title: "Internet Routing", description: "Data packet pathways" }
    ]
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get algorithm time complexity data
  app.get("/api/algorithms/complexity", (_req, res) => {
    res.json(algorithmData.complexityData);
  });

  // API endpoint to get algorithm descriptions
  app.get("/api/algorithms/descriptions", (_req, res) => {
    res.json(algorithmData.descriptions);
  });

  // API endpoint to get code examples
  app.get("/api/algorithms/code-examples", (_req, res) => {
    res.json(algorithmData.codeExamples);
  });

  // API endpoint to get real-world applications
  app.get("/api/algorithms/applications", (_req, res) => {
    res.json(algorithmData.applications);
  });

  // API endpoint to get data for a specific data structure
  app.get("/api/algorithms/:structure", (req, res) => {
    const structure = req.params.structure;
    
    // Convert structure name to camelCase for object property access
    const structureCamelCase = structure.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    // Check if the requested structure exists
    if (!algorithmData.descriptions[structureCamelCase as keyof typeof algorithmData.descriptions]) {
      return res.status(404).json({ error: "Data structure not found" });
    }
    
    // Return combined data for the specific structure
    const structureData = {
      description: algorithmData.descriptions[structureCamelCase as keyof typeof algorithmData.descriptions],
      complexity: algorithmData.complexityData[structureCamelCase as keyof typeof algorithmData.complexityData],
      applications: algorithmData.applications[structureCamelCase as keyof typeof algorithmData.applications],
      codeExamples: Object.entries(algorithmData.codeExamples)
        .filter(([key]) => key.includes(structureCamelCase) || 
                          key.includes(structure.replace('-', '')))
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as Record<string, string>)
    };
    
    res.json(structureData);
  });

  const httpServer = createServer(app);
  return httpServer;
}
