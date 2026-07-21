import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-dale-blue text-white"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mb-4"
        >
          {/* Simplified Logo Representation for Loader */}
          <div className="w-16 h-16 border-2 border-dale-green rounded-full flex items-center justify-center relative">
             <div className="w-10 h-10 bg-dale-blue rounded-full blur-md absolute opacity-50"></div>
             <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-serif text-2xl tracking-widest text-white"
        >
          DALESAÚDE
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;