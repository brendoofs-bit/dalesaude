import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-dale-green rounded-full mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: 1, // Hover expansion removed
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-dale-green rounded-full opacity-50"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: 1, // Hover expansion removed
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </div>
  );
};

export default CustomCursor;