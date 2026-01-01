"use client";

import type React from "react";
import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/components/animated-background";

import WelcomeLoader from "@/components/welcome-loader";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const isReload = navEntry?.type === "reload";
    const hasPlayed = sessionStorage.getItem("welcomeAnimationPlayed");

    if (isReload || !hasPlayed) {
      sessionStorage.removeItem("welcomeAnimationPlayed");
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("welcomeAnimationPlayed", "true");
    setLoading(false);
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className="dark scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground transition-colors duration-700`}
      >
        {/* Welcome Loader */}
        <AnimatePresence mode="wait">
          {loading && (
            <WelcomeLoader key="welcome" onAnimationComplete={handleAnimationComplete} />
          )}
        </AnimatePresence>

        {/* Main Application */}
        <AnimatePresence>
          {!loading && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <AnimatedBackground />
              <Navbar />
              <Suspense fallback={null}>{children}</Suspense>
              <Analytics />
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
