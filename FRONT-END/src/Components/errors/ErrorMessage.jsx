import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BsXSquare  } from "react-icons/bs";
const ErrorMessage = ({ errorShakeTrigger, message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Affiche après 1 seconde
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    // Cache après 6 secondes (1s de délai + 5s visible)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [errorShakeTrigger]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={errorShakeTrigger}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [0, -10, 10, -10, 10, 0], opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ x: { duration: 0.4 }, opacity: { duration: 1.2 } }}
          className="text-sm font-bold text-white p-3 bg-orange-600 flex items-center gap-1 rounded-md"
        >
          <span className="text-xl font-bold "><BsXSquare  /></span>{message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
