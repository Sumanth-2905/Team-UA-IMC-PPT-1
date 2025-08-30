import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentIndex: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentIndex,
  totalSections,
  onPrevious,
  onNext
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-8 right-8 flex items-center space-x-4 z-40"
    >
      <div className="bg-white rounded-full shadow-lg px-3 py-2 text-sm text-gray-600">
        {currentIndex + 1} / {totalSections}
      </div>
      
      <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
            currentIndex === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          disabled={currentIndex === totalSections - 1}
          className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
            currentIndex === totalSections - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NavigationButtons;