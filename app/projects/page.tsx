"use client";
import ProjectCard from "@/components/project-card";
import SectionReveal from "@/components/section-reveal";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "BillDesk – AI Invoice Generator",
      description: "A full-stack AI-powered invoice generation system integrated with Gemini AI to convert natural language into structured, professional invoices. Features include secure authentication, automated calculations, real-time invoice management, and PDF export.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini AI",
        "Clerk Auth",
        "REST API",
      ],
      imageUrl: "/images/InvoiceGen.png",
      liveUrl: "https://bill-desk-ai-invoice-generator-1.onrender.com/",
      sourceUrl: "https://github.com/Tejas978/bill-desk-ai-invoice-generator"
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
    title: "Weather App",
    description: "A weather forecasting app providing temperature & conditions for any location.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    imageUrl: "/images/WeatherApp.png",
    sourceUrl: "https://github.com/Tejas978/JavaScript-Projects/tree/main/Weather-App",
  },
  {
    title: "Calculator App",
    description: "A clean and fast calculator for basic arithmetic operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/Calculator.png",
    sourceUrl: "https://github.com/Tejas978/JavaScript-Projects/tree/main/Calculator",
  },
  {
    title: "Password Generator",
    description: "A tool to create strong, random passwords for better security.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/PasswordGenerator.png",
    sourceUrl: "https://github.com/Tejas978/JavaScript-Projects/tree/main/Password_Generator",
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website built with HTML, CSS, JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/Portfolio.png",
    liveUrl: "https://port-folio-rose-eta-65.vercel.app/",
    sourceUrl: "https://github.com/Tejas978/Port-Folio",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 pt-8 pb-24 sm:px-6 lg:px-8">

      <SectionReveal>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            My Creative Projects
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tags={p.tags}
              imageUrl={p.imageUrl}
              liveUrl={p.liveUrl}
              sourceUrl={p.sourceUrl}
            />
          ))}
        </div>
      </SectionReveal>
    </main>
  );
}
