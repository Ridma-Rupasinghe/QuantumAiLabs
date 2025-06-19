import { motion } from "framer-motion";

interface ScrollSectionWrapperProps {
  children: React.ReactNode;
  index: number;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 0.8,
      delay: index * 0.1,
    },
  }),
};

export default function ScrollSectionWrapper({ children, index }: ScrollSectionWrapperProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
