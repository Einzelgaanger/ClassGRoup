import { Slide } from "../Slide";
import { CodeBlock } from "../CodeBlock";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const stackCodeExample = `class Stack {
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
}`;

const queueCodeExample = `class Queue {
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
}`;

export function StacksQueues() {
  return (
    <Slide id="stacks-queues">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-primary mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Stacks & Queues
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Stack Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-t-4 border-secondary">
            <CardContent className="p-6">
              <h3 className="font-semibold text-2xl mb-4 text-secondary">Stacks</h3>
              <p className="mb-4">A collection that follows the Last-In-First-Out (LIFO) principle.</p>
              
              <div className="flex justify-center my-6">
                {/* Stack Visualization */}
                <div className="relative w-48 h-64 border-2 border-secondary rounded-lg flex flex-col-reverse items-center justify-start p-4">
                  {[
                    { label: "Item 1 (Bottom)", delay: 0.6 },
                    { label: "Item 2", delay: 0.8 },
                    { label: "Item 3 (Top)", delay: 1.0 }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="w-40 h-12 bg-secondary text-white m-1 rounded flex items-center justify-center"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      viewport={{ once: true }}
                    >
                      <span>{item.label}</span>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="absolute -right-20 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-100 p-2 rounded-lg text-sm">
                      <p>Push → Top</p>
                      <p>Pop ← Top</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <h4 className="font-semibold mb-2">Core Operations: (All O(1))</h4>
              <motion.ul 
                className="list-disc list-inside space-y-1 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <li><b>Push:</b> Add element to top</li>
                <li><b>Pop:</b> Remove element from top</li>
                <li><b>Peek/Top:</b> View top element</li>
                <li><b>isEmpty:</b> Check if stack is empty</li>
              </motion.ul>
              
              <CodeBlock language="javascript" code={stackCodeExample} delay={1.3} />
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Queue Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="border-t-4 border-accent">
            <CardContent className="p-6">
              <h3 className="font-semibold text-2xl mb-4 text-accent">Queues</h3>
              <p className="mb-4">A collection that follows the First-In-First-Out (FIFO) principle.</p>
              
              <div className="flex justify-center my-6">
                {/* Queue Visualization */}
                <div className="relative w-64 h-48 border-2 border-accent rounded-lg flex items-center justify-center p-4">
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {[1, 2, 3].map((value, index) => (
                      <motion.div 
                        key={index}
                        className="w-14 h-14 bg-accent text-white m-1 rounded flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + (index * 0.2) }}
                        viewport={{ once: true }}
                      >
                        <span>{value}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-100 p-2 rounded-lg text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Enqueue
                    </div>
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-100 p-2 rounded-lg text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Dequeue
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <h4 className="font-semibold mb-2">Core Operations: (All O(1))</h4>
              <motion.ul 
                className="list-disc list-inside space-y-1 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <li><b>Enqueue:</b> Add element to rear</li>
                <li><b>Dequeue:</b> Remove element from front</li>
                <li><b>Front:</b> View front element</li>
                <li><b>isEmpty:</b> Check if queue is empty</li>
              </motion.ul>
              
              <CodeBlock language="javascript" code={queueCodeExample} delay={1.5} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* Real-world Applications */}
      <motion.div 
        className="bg-primary bg-opacity-10 rounded-xl p-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-xl mb-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Real-world Applications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: "Stack: Browser History", description: "Back button uses a stack to navigate to previously visited pages", color: "secondary" },
            { title: "Stack: Function Calls", description: "Call stack for tracking nested function execution", color: "secondary" },
            { title: "Queue: Print Jobs", description: "Documents waiting to be printed are processed in order", color: "accent" },
            { title: "Queue: Customer Support", description: "Customers waiting in line for service", color: "accent" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-lg p-4 shadow-sm border-l-4 border-${item.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.7 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Slide>
  );
}
