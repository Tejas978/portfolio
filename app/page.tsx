"use client";

import Hero from "@/components/hero";
import SectionReveal from "@/components/section-reveal";
import ProjectCard from "@/components/project-card";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Page() {
  const projects = [
    {
      title: "Crypto Vision",
      description:
        "A real-time crypto tracking dashboard that displays live prices, trends, watchlist features, and detailed coin analytics with interactive charts.",
      tags: ["React.js", "Material UI", "CoinGecko API", "Context API"],
      href: "/projects/crypto-currency-tracker",
      imageUrl: "/images/CryptoVision.png",
      liveUrl: "https://crypto-analytics-dashboard-kohl.vercel.app",
      sourceUrl: "https://github.com/Tejas978/crypto-analytics-dashboard",
    },
    {
      title: "SkillBoost – AI Powered LMS",
      description: "A full-stack, AI-driven Learning Management System enabling course creation, enrollment, secure payments, and personalized learning through smart search and role-based dashboards.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Razorpay",
        "REST API"
      ],
      imageUrl: "/images/LMS.png",
      liveUrl: "https://skillboost-smart-learning-managemen.vercel.app",
      sourceUrl: "https://github.com/Tejas978/skillboost-smart-learning-management-system"
    },
    {
      title: "Medical Image Diagnosis",
      description:
        "An AI-powered tool that analyzes medical images, providing accurate diagnostic insights and supporting healthcare professionals in decision-making.",
      tags: ["Python", "TensorFlow", "CNN", "Streamlit", "MERN"],
      href: "/projects/medical-image-diagnosis",
      imageUrl: "/images/Medical.png",
      liveUrl: "#",
      sourceUrl: "#",
    },
  ];

  const skills = [
    { name: "React.js", icon: <FaReact size={24} color="#61DBFB" /> },
    { name: "Node.js", icon: <SiNodedotjs size={24} color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress size={24} color="#F7DF1E" /> },
    { name: "MongoDB", icon: <SiMongodb size={24} color="#4DB33D" /> },
    { name: "Java", icon: <FaJava size={24} color="#f89820" /> },
    { name: "Python", icon: <FaPython size={24} color="#3776AB" /> },
  ];

  return (
    <>
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- Hero Section --- */}
        <Hero />

        {/* --- About Section --- */}
        <SectionReveal id="about" title="About Me">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Area */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                I&apos;m <strong>Tejas Khaire</strong>, a final-year IT Engineering student at{" "}
                <strong>Mumbai University</strong> with a passion for building elegant and efficient web
                solutions. Graduating in <strong>May 2026</strong>, I specialize in{" "}
                <strong>Full Stack Development</strong>.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                My expertise is focused on the <strong>MERN stack</strong>, along with{" "}
                <strong>Java</strong>, <strong>Python</strong>, and database technologies. I've developed
                robust, user-friendly applications demonstrating clean architecture and engaging user
                experiences.
              </p>
            </div>

            {/* Skills Card */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/20 p-4 sm:p-6 rounded-2xl shadow-lg space-y-6 sm:space-y-8">
              <div>
                <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
                  Core Technologies
                </h3>
                <div className="grid grid-cols-3 gap-4 sm:gap-y-6 text-center">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-all"
                      title={skill.name}
                    >
                      <div className="transition-transform group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
                  Current Focus
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground list-disc list-inside">
                  <li>Polishing full-stack projects & UI micro-interactions</li>
                  <li>Integrating AI/ML features into modern web apps</li>
                  <li>Improving developer workflow & automation</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* --- Projects Section --- */}
        <SectionReveal id="projects" title="Featured Work">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center rounded-lg border border-border bg-background/50 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring transition-all"
            >
              View All Projects{" "}
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>

        {/* --- Contact Section --- */}
        <SectionReveal id="contact" title="Get In Touch">
          <div className="bg-card/60 backdrop-blur-sm border border-border/20 rounded-2xl shadow-lg text-center p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">
              Have a project in mind?
            </h3>
            <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-muted-foreground mb-6 sm:mb-8 px-2">
              I&apos;m open to freelance work and collaboration opportunities. Let&apos;s
              turn your ideas into impactful products.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring"
              >
                Send a Message
              </Link>
              <Link
                href="mailto:tejaskhaire@example.com"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background/50 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring transition-colors"
              >
                Email Me Directly
              </Link>
            </div>
          </div>
        </SectionReveal>
      </main>

      {/* --- Footer --- */}
      <footer className="relative z-10 mx-auto max-w-7xl px-4 pb-8 sm:pb-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tejas Khaire. All Rights Reserved.</p>
        <p className="mt-1 px-4">
          Built with <strong>Next.js</strong>, styled using <strong>Tailwind CSS</strong>, and crafted
          with passion.
        </p>
      </footer>
    </>
  );
}