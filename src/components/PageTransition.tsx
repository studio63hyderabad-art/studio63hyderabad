import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
