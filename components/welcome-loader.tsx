"use client";
import NextImage from "next/image";
import pythonLoad from "../public/images/pythonload.png";
import nextLoad from "../public/images/nextload.png";
import nodeLoad from "../public/images/nodeload.png";
import React, { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

// ==========================================
// 1. CONFIGURATION & DATA
// ==========================================

interface WelcomeLoaderProps {
  onAnimationComplete: () => void;
}

const CONSTANTS = {
  MAIN_TEXT: "Welcome",
  SUB_TEXT: "To My Portfolio",
  DURATION: 5800, // Slightly increased to accommodate the sequenced animations
};

// Custom SVG Icons
const Icons = {
  React: () => (
    <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current">
      <circle cx="0" cy="0" r="2" fill="currentColor"/>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"/>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"/>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  NextJS: () => (
    <NextImage
      src={nextLoad}
      alt="NextJS Logo"
      width={128}
      height={128}
    />
  ),
  NodeJS: () => (
    <NextImage
      src={nodeLoad}
      alt="NodeJS Logo"
      width={128}
      height={128}
    />
  ),
   Python: () => (
    <NextImage
      src={pythonLoad}
      alt="Python Logo"
      width={128}
      height={128}
    />
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
};

const TECH_STACK = [
  { icon: <Icons.React />, name: "React", color: "text-cyan-400" },
  { icon: <Icons.NextJS />, name: "Next.js", color: "text-white" },
  { icon: <Icons.NodeJS />, name: "Node.js", color: "text-green-500" },
  { icon: <Icons.Python />, name: "Python", color: "text-yellow-400" },
  { icon: <Icons.Tailwind />, name: "Tailwind", color: "text-cyan-300" },
];

// ==========================================
// 2. ANIMATION VARIANTS
// ==========================================

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { when: "beforeChildren" }, 
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    filter: "blur(10px)",
    transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const techStackContainerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,  // when the first icon starts
      staggerChildren: 0.5, // ↑ increase this to make icons appear slower sequentially
    },
  },
};


const childVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const letterVariants: Variants = {
  initial: { y: 30, opacity: 0, filter: "blur(5px)" },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: "easeOut" }, // smooth tween
  },
};


// ==========================================
// 3. SUB-COMPONENTS
// ==========================================

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Dark Gradient Base */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
    
    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    {/* Moving Orbs */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.7, 0.5],
        rotate: [0, 45, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4],
        x: [0, -50, 0],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"
    />
     <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.5, 0.3],
        y: [0, -30, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-[40%] left-[50%] -translate-x-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px]"
    />
  </div>
);

const TechStackGrid = () => (
  <motion.div
    variants={techStackContainerVariants}
    className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 z-10 max-w-2xl"
  >
    {TECH_STACK.map((tech, index) => (
      <motion.div
        key={index}
        variants={childVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        className="group relative flex flex-col items-center justify-center"
        
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-md shadow-xl transition-all duration-300 group-hover:border-gray-700 group-hover:shadow-gray-500/10 p-3">
          <div className={`w-full h-full transition-colors duration-300 ${tech.color}`}>
            {tech.icon}
          </div>
        </div>
        <span className="absolute -bottom-6 text-[10px] font-medium tracking-wider text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
          {tech.name}
        </span>
      </motion.div>
    ))}
  </motion.div>
);

const Typography = () => (
  <div className="z-10 text-center relative px-4 flex flex-col items-center">
    <motion.div
      className="overflow-hidden mb-2"
      initial="initial"
      animate="animate"
      variants={{
        // Start MAIN_TEXT animation quickly after load (0.5s)
        animate: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
      }}
    >
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] pb-2">
        {CONSTANTS.MAIN_TEXT.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
    </motion.div>

    <motion.div
      variants={childVariants}
      // Start subtext at 2.0s, giving the main text time to finish
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2.0, duration: 0.8 } }}
      className="flex items-center justify-center gap-3 text-sm sm:text-lg md:text-xl text-gray-300 font-light tracking-[0.3em] uppercase"
    >
      <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-cyan-400 inline-block" />
      <span className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent font-medium drop-shadow-md">
        {CONSTANTS.SUB_TEXT}
      </span>
      <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-cyan-400 inline-block" />
    </motion.div>
  </div>
);

const ProgressBar = () => (
  <div className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] z-10">
    <div className="flex justify-between text-xs text-gray-400 font-mono mb-2 uppercase tracking-widest">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Loading Portfolio...
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        100%
      </motion.span>
    </div>
    
    <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        // Duration nearly matches total load time for realistic progress
        transition={{ duration: 5.0, ease: "easeInOut" }}
        style={{
          boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
        }}
      />
    </div>
  </div>
);

// ==========================================
// 4. MAIN COMPONENT
// ==========================================

export default function WelcomeLoader({ onAnimationComplete }: WelcomeLoaderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(onAnimationComplete, CONSTANTS.DURATION);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white min-h-[100dvh]"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AnimatedBackground />

        {/* Content Container - Typography TOP, TechStack BOTTOM */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto p-4">
          
          <Typography />

          <TechStackGrid />
          
        </div>

        <ProgressBar />
      </motion.div>
    </AnimatePresence>
  );
}