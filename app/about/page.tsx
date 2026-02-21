"use client";

import Image from "next/image";
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,
    FaPython, FaFigma, FaLinkedin, FaJava
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import React, { useRef, useCallback, memo } from "react";

// Memoized section with animation
const SectionReveal = memo(({ title, children }: { title: string; children: React.ReactNode }) => (
    <motion.section 
        className="py-12 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
    >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 sm:mb-12 text-center bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent px-4">
            {title}
        </h2>
        {children}
    </motion.section>
));
SectionReveal.displayName = 'SectionReveal';

// Tech stack icon component
const TechIcon = memo(({ item, index }: { item: { name: string; icon: React.ReactNode }; index: number }) => (
    <motion.div
        className="group relative flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 text-white/90 border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3.5 shadow-lg backdrop-blur-sm hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.05, y: -4 }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
    >
        <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            {item.icon}
        </div>
        <span className="text-xs sm:text-sm font-medium text-foreground/90">{item.name}</span>
        <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
));
TechIcon.displayName = 'TechIcon';

// Certification card component
const CertCard = memo(({ cert, index }: { cert: { title: string; issuer: string; imageUrl: string }; index: number }) => (
    <motion.a
        href={cert.imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-xl sm:rounded-2xl bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-md border border-border/30 p-4 sm:p-6 shadow-xl transition-all duration-300 hover:border-primary/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden touch-manipulation"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <div className="w-full sm:w-3/5 flex-shrink-0">
                <div className="aspect-[16/9] overflow-hidden rounded-lg sm:rounded-xl border border-border/30 bg-background/50 shadow-inner group-hover:shadow-lg transition-all duration-300">
                    <Image
                        src={cert.imageUrl}
                        alt={`${cert.title} certificate`}
                        width={400}
                        height={225}
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-foreground text-sm sm:text-base md:text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Issued by <span className="font-medium text-foreground/80">{cert.issuer}</span></p>
            </div>
            <FiArrowUpRight className="absolute top-4 sm:top-5 right-4 sm:right-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={18} />
        </div>
    </motion.a>
));
CertCard.displayName = 'CertCard';

// Constants
const STACK = [
    { name: "HTML", icon: <FaHtml5 size={24} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
    { name: "Java", icon: <FaJava size={24} color="#007396" /> },
    { name: "Python", icon: <FaPython size={24} color="#3776AB" /> },
    { name: "React.js", icon: <FaReact size={24} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={24} color="#339933" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#06B6D4" /> },
    { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
    { name: "Git", icon: <FaGitAlt size={24} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
    { name: "Figma", icon: <FaFigma size={24} color="#F24E1E" /> },
];

const CERTIFICATIONS = [
    { title: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle", imageUrl: "/images/Oracle OCI.png" },
    { title: "Google AI-ML", issuer: "Google", imageUrl: "/images/Cohort.png" },
    { title: "Cloud Computing", issuer: "NPTEL", imageUrl: "/images/Cloud Computing.png" },
    { title: "Software Engineering", issuer: "NPTEL", imageUrl: "/images/Software Engineering.png" },
    { title: "Introduction to Internet of Things", issuer: "NPTEL", imageUrl: "/images/Introduction To Internet Of Things.png" },
    { title: "Python for Data Science", issuer: "NPTEL", imageUrl: "/images/Python for Data Science.png" },
    { title: "Data Science Job Simulation", issuer: "Tata Group", imageUrl: "/images/Tata Group_Data.png" },
];

const SOCIALS = [
    { name: "GitHub", icon: <FaGithub size={32} />, url: "https://github.com/Tejas978" },
    { name: "LinkedIn", icon: <FaLinkedin size={32} />, url: "https://www.linkedin.com/in/tejas-khaire-32714534a/" },
];

export default function AboutPage() {
    const photoRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!photoRef.current) return;
        const { left, top, width, height } = photoRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 15;
        const y = (e.clientY - top - height / 2) / 15;
        photoRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02, 1.02, 1.02)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (photoRef.current) {
            photoRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
        }
    }, []);

    return (
        <main className="relative mx-auto max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8 overflow-hidden">
            {/* Enhanced animated background
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" />
                <div className="absolute top-0 -right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
            </div> */}

            <div className="relative">
                {/* About Me Section */}
                <SectionReveal title="About Me">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center">
                        <motion.div
                            className="md:col-span-1 relative aspect-square w-full max-w-[200px] sm:max-w-xs mx-auto"
                            ref={photoRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ 
                                transformStyle: "preserve-3d",
                                transition: "transform 0.1s ease-out"
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <div className="orbiting-ring ring-1" />
                                <div className="orbiting-ring ring-2" />
                            </div>
                            
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-background shadow-2xl shadow-primary/20">
                                <Image
                                    src="/images/Tejas.png"
                                    alt="Tejas Khaire - Full Stack Developer"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            className="md:col-span-2 space-y-4 sm:space-y-6 px-2 sm:px-0"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                                Hi, I&apos;m Tejas Khaire 👋
                            </h1>
                            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    I'm a final-year IT Engineering student at <strong className="font-semibold text-foreground">Mumbai University</strong>, graduating in <strong className="font-semibold text-foreground">May 2026</strong>.
                                    I have hands-on experience in <strong className="font-semibold text-foreground">Full Stack Development</strong>, focusing on the <strong className="font-semibold text-foreground">MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), as well as Python, Java, and relational databases like MySQL.
                                </p>
                                <p>
                                    I have built multiple projects during my studies, including web applications, CRUD platforms, e-commerce stores, landing pages, and portfolio sites, gaining practical experience in developing efficient and user-friendly solutions.
                                </p>
                                <p>
                                    I am passionate about writing clean, efficient, and scalable code, solving complex problems, and creating user-friendly web experiences. Outside of tech, I enjoy movies, gaming, exploring new technologies, and discussing everything from cricket stats to video games.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </SectionReveal>

                {/* Tech Stack Section */}
                <SectionReveal title="Tech Stack">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2">
                        {STACK.map((item, index) => (
                            <TechIcon key={item.name} item={item} index={index} />
                        ))}
                    </div>
                </SectionReveal>

                {/* Certifications Section */}
                <SectionReveal title="Certifications & Credentials">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {CERTIFICATIONS.map((cert, index) => (
                            <CertCard key={`${cert.issuer}-${index}`} cert={cert} index={index} />
                        ))}
                    </div>
                </SectionReveal>

                {/* Connect Section */}
                <SectionReveal title="Let's Connect">
                    <motion.div 
                        className="flex items-center justify-center gap-6 sm:gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {SOCIALS.map((social) => (
                            <motion.a
                                href={social.url}
                                key={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative text-muted-foreground transition-all duration-300 hover:text-primary touch-manipulation"
                                aria-label={`Visit my ${social.name} profile`}
                                whileHover={{ scale: 1.15, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                                <span className="sr-only">{social.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </SectionReveal>
            </div>

            <style jsx global>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(40px, -60px) scale(1.1); }
                    66% { transform: translate(-30px, 30px) scale(0.9); }
                }
                .animate-blob { animation: blob 20s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                
                .orbiting-ring {
                    position: absolute;
                    width: 110%;
                    height: 110%;
                    border-radius: 50%;
                    border: 2px solid;
                    border-color: hsl(var(--primary) / 0.3) transparent;
                    animation: orbit 12s linear infinite;
                    pointer-events: none;
                }
                .orbiting-ring.ring-2 {
                    width: 120%;
                    height: 120%;
                    border-color: transparent hsl(var(--primary) / 0.2);
                    animation-direction: reverse;
                    animation-duration: 15s;
                }
                @keyframes orbit {
                    to { transform: rotate(360deg); }
                }
                
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border-width: 0;
                }
            `}</style>
        </main>
    );
}
