"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-all duration-300 ${
          scrolled
            ? "bg-background/80 border-border/20 shadow-lg"
            : "bg-background/60 border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to home page"
            className="flex items-center gap-3 transition-transform hover:scale-105"
          >
            <div className="relative w-[200px] h-[58px]">
              <Image
                src="/images/name.png"
                alt="logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-x-10 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-x-4">
            <a
              href="/Tejas-Khaire-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium transition hover:bg-primary/10 hover:text-primary"
            >
              Resume
            </a>

            <Link
              href="/contact"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground transition hover:text-primary"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.ul
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mt-20 flex flex-col items-center space-y-6 p-6 text-lg font-medium tracking-wider"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li key={link.href} variants={mobileLinkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}

              <motion.li
                variants={mobileLinkVariants}
                className="flex w-full flex-col gap-y-4 pt-6"
              >
                <a
                  href="/Tejas-Khaire-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg border border-border px-8 py-3 text-center text-sm font-semibold transition hover:bg-primary/10 hover:text-primary"
                >
                  View Resume
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:scale-105"
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
