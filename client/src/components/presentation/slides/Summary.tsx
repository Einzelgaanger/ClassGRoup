import { Slide } from "../Slide";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Summary() {
  return (
    <Slide id="summary">
      <motion.h2 
        className="font-bold text-3xl md:text-5xl text-center text-primary mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Comparison & Summary
      </motion.h2>
      
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-xl mb-6 text-center">Data Structure Comparison</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-3 text-left">Data Structure</th>
                <th className="p-3 text-center">Access</th>
                <th className="p-3 text-center">Search</th>
                <th className="p-3 text-center">Insert</th>
                <th className="p-3 text-center">Delete</th>
                <th className="p-3 text-center">Space</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Array", access: "O(1)", accessColor: "green", search: "O(n)", searchColor: "red", insert: "O(n)", insertColor: "red", delete: "O(n)", deleteColor: "red", space: "O(n)" },
                { name: "Linked List", access: "O(n)", accessColor: "red", search: "O(n)", searchColor: "red", insert: "O(1)", insertColor: "green", delete: "O(1)", deleteColor: "green", space: "O(n)" },
                { name: "Stack", access: "O(n)", accessColor: "red", search: "O(n)", searchColor: "red", insert: "O(1)", insertColor: "green", delete: "O(1)", deleteColor: "green", space: "O(n)" },
                { name: "Queue", access: "O(n)", accessColor: "red", search: "O(n)", searchColor: "red", insert: "O(1)", insertColor: "green", delete: "O(1)", deleteColor: "green", space: "O(n)" },
                { name: "Binary Search Tree", access: "O(log n)*", accessColor: "yellow", search: "O(log n)*", searchColor: "yellow", insert: "O(log n)*", insertColor: "yellow", delete: "O(log n)*", deleteColor: "yellow", space: "O(n)" },
                { name: "Hash Table", access: "O(n)**", accessColor: "red", search: "O(1)**", searchColor: "green", insert: "O(1)**", insertColor: "green", delete: "O(1)**", deleteColor: "green", space: "O(n)" },
                { name: "Graph", access: "O(n)", accessColor: "red", search: "O(n)", searchColor: "red", insert: "Varies", insertColor: "yellow", delete: "Varies", deleteColor: "yellow", space: "O(V+E)" }
              ].map((row, index) => (
                <motion.tr 
                  key={index}
                  className="border-b"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <td className="p-3 font-medium">{row.name}</td>
                  <td className={`p-3 text-center bg-${row.accessColor}-100`}>{row.access}</td>
                  <td className={`p-3 text-center bg-${row.searchColor}-100`}>{row.search}</td>
                  <td className={`p-3 text-center bg-${row.insertColor}-100`}>{row.insert}</td>
                  <td className={`p-3 text-center bg-${row.deleteColor}-100`}>{row.delete}</td>
                  <td className="p-3 text-center">{row.space}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-xs mt-3">
          <p>* Average case for balanced trees. Worst case can be O(n)</p>
          <p>** Average case. Worst case can be O(n) due to collisions</p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-4">Choosing the Right Data Structure</h3>
              
              <div className="space-y-4">
                {[
                  { title: "Frequent Access by Position", description: "Use Arrays for constant-time access to elements by index", color: "primary" },
                  { title: "Frequent Insertions/Deletions", description: "Consider Linked Lists, especially for insertions at the beginning", color: "secondary" },
                  { title: "Fast Lookups by Key", description: "Hash Tables provide near-constant time lookups in the average case", color: "info" },
                  { title: "Hierarchical Data", description: "Trees are perfect for representing parent-child relationships", color: "accent" },
                  { title: "Complex Relationships", description: "Graphs excel at representing many-to-many connections", color: "warning" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <h4 className={`font-medium mb-1 text-${item.color}`}>{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-4">Key Takeaways</h3>
              
              <div className="space-y-3">
                {[
                  "Every data structure has strengths and weaknesses. Understanding these trade-offs is crucial for making good design decisions.",
                  "Time and space complexity analysis helps predict how a solution will perform as the data size grows.",
                  "Real-world problems often require combinations of different data structures to achieve optimal solutions.",
                  "Understanding the underlying implementations of data structures will help you use them more effectively.",
                  "Practice implementing and using these structures will build your intuition about when to use each one."
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p>{point}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-primary bg-opacity-10 rounded-xl p-6 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="font-semibold text-2xl mb-4"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
        >
          Thank You!
        </motion.h3>
        <p className="mb-4">Any questions about algorithms and data structures?</p>
        <div className="flex justify-center gap-4">
          <motion.a 
            href="#"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Resources
          </motion.a>
          <motion.a 
            href="#"
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Practice Problems
          </motion.a>
        </div>
      </motion.div>
    </Slide>
  );
}
