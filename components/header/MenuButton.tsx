import { AnimatePresence, SVGMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import classes from "./menuBtn.module.css";

interface Props {
  isOpen?: boolean;
  onClick?: () => void;
}

const variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

const MenuButton = ({ isOpen = false, onClick, ...props }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {!isOpen ? (
        <motion.div
          className="space-y-1.5 scale-x-[-1]"
          aria-label="open menu"
          variants={variants}
          key="open"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
        >
          <span className="block w-5 h-0.5 bg-primary" />
          <span className="block w-7 h-0.5 bg-primary" />
          <span className="block w-6 h-0.5 bg-primary" />
        </motion.div>
      ) : (
        <motion.div
          aria-label="close menu"
          variants={variants}
          key="close"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.05 }}
          onClick={onClick}
          className={classes.close}
        />
      )}
    </AnimatePresence>
  );
};

export default MenuButton;
