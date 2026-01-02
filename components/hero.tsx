"use client";

import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";


// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative text-center py-16 sm:py-20 md:py-32 overflow-hidden"
    >
      {/* Content */}
      <motion.div
        className="relative z-10 space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-5 sm:mb-5 "
          variants={itemVariants}
        >
          Tejas Khaire — Full Stack Developer
        </motion.p>

        <motion.h1 
          className="text-balance text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 px-2 sm:px-0 "
          variants={itemVariants}
        >
          Crafting Digital Experiences with Code & Creativity
        </motion.h1>

        <motion.p
          className="text-base sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground px-2 sm:px-0"
          variants={itemVariants}
        >
          I build elegant, efficient, and scalable web solutions, specializing in the{" "}
          <strong>MERN stack</strong>, <strong>Java</strong>, and <strong>Python</strong>{" "}
          to bring ideas to life.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0"
          variants={itemVariants}
        >
          <a
            href="/projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-600 px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-manipulation"
          >
            View My Work
            <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-border bg-background/50 px-6 py-3 sm:py-3.5 text-sm sm:text-base font-medium hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors touch-manipulation"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}