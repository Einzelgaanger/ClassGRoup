import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

interface CodeBlockProps {
  language: string;
  code: string;
  animate?: boolean;
  delay?: number;
}

export function CodeBlock({ language, code, animate = true, delay = 0 }: CodeBlockProps) {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay } 
    }
  };

  return (
    <motion.div
      className="font-code text-sm mb-4 rounded-lg overflow-hidden"
      initial={animate ? "hidden" : "visible"}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true }}
      variants={variants}
    >
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          borderRadius: "0.5rem",
          background: "#282c34",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </motion.div>
  );
}
