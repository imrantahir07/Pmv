import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1600; // 1.6 seconds loading
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 400); // Small delay for smooth exit transition
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#181818] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle architectural background pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative flex flex-col items-center px-4 text-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <Logo className="h-24 md:h-32" light={true} />
            </motion.div>

            {/* Glowing Accent Bar */}
            <div className="w-48 h-[2px] bg-neutral-800 rounded-full overflow-hidden mb-4 relative">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-[#F5B400]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Loading text with counter */}
            <motion.div
              className="font-mono text-xs tracking-[0.2em] text-[#F5B400] font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
            >
              INITIALIZING WORKSPACE • {Math.round(progress)}%
            </motion.div>
            
            {/* Tagline */}
            <motion.p
              className="text-xs text-neutral-500 tracking-wider mt-2 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3 }}
            >
              PMV INFRA GROUP — BUILDING INFRASTRUCTURE, DELIVERING PROGRESS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
