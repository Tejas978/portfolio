"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

// ... (SectionReveal and SOCIALS constants remain the same)

const SectionReveal = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <section>
        <h2 className="text-center text-4xl font-bold tracking-tight text-foreground/90 mb-4">
            {title}
        </h2>
        <p className="text-center text-muted-foreground mb-10">
            I&apos;m always open to discussing new projects and opportunities.
        </p>
        {children}
    </section>
);

const SOCIALS = [
    {
        name: "Gmail",
        href: "mailto:khairetejas76@gmail.com",
        icon: <HiOutlineMail size={28} />,
    },
    {
        name: "GitHub",
        href: "https://github.com/Tejas978",
        icon: <FaGithub size={28} />,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/tejaskhaire",
        icon: <FaLinkedin size={28} />,
    },
];

export default function ContactPage() {
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;

        try {
            await emailjs.sendForm(
                "service_x400i3m",
                "template_sfev71b",
                form,
                "550z8LSb-9-eLMeRM"
            );

            setStatus("success");
            form.reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
        }

        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <main className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-background">
            {/* Background blobs */}
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 w-full max-w-4xl">
                <SectionReveal title="Let's build something great together.">
                    <div className="bg-card/60 backdrop-blur-xl border border-border/20 p-8 sm:p-12 rounded-2xl shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name" // Changed from user_name to name (if that matches your template)
                                        id="name"
                                        className="w-full rounded-lg border border-border/30 bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email" // Changed from user_email to email (if that matches your template)
                                        id="email"
                                        className="w-full rounded-lg border border-border/30 bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            {/* NEW: Subject Field */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject" // Make sure to update your EmailJS template to include {{subject}}
                                    id="subject"
                                    className="w-full rounded-lg border border-border/30 bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    placeholder="What is this regarding?"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full rounded-lg border border-border/30 bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    placeholder="How can I help you achieve your goals?"
                                    required
                                ></textarea>
                            </div>

                            {status === "success" ? (
                                <p className="text-center text-green-500">
                                    Message sent successfully! Thank you.
                                </p>
                            ) : status === "error" ? (
                                <p className="text-center text-red-500">
                                    Something went wrong. Please try again.
                                </p>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-600 px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-70 w-full animate-pulse-slow"
                                >
                                    <FiSend className="mr-2 h-5 w-5 transition-transform group-hover:rotate-45" />
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                            )}
                        </form>

                        <div className="mt-10 text-center">
                            <p className="text-sm text-muted-foreground mb-4">
                                Or connect with me on
                            </p>
                            <div className="flex items-center justify-center gap-8">
                                {SOCIALS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125"
                                        aria-label={`Link to ${social.name}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionReveal>

                <footer className="mt-12 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Tejas Khaire. All rights reserved.</p>
                </footer>
            </div>

            <style jsx global>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animate-pulse-slow { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                @keyframes pulse { 50% { opacity: 0.8; } }
            `}</style>
        </main>
    );
}