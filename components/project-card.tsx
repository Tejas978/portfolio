"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

interface Props {
  title: string;
  description: string;
  tags?: string[];
  imageUrl: string;
  href?: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export default function ProjectCard({ title, description, tags = [], imageUrl, href = "#", liveUrl, sourceUrl }: Props) {

  const cardRef = useRef<HTMLDivElement>(null);

  // New mouse move handler for the 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;  // Adjust divisor for tilt intensity
    const y = (e.clientY - top - height / 2) / 25;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  // New mouse leave handler to reset the tilt
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      className="group block relative h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} style={{ transformStyle: "preserve-3d" }} className="transition-transform duration-300 ease-out h-full">
        <Card
          className="project-card transform-gpu transition-all duration-300 ease-in-out
                    group-hover:shadow-xl group-hover:border-primary/70 group-hover:shadow-primary/30
                    overflow-hidden rounded-xl border border-border/70
                    bg-card/70 backdrop-blur-md relative h-full flex flex-col"
        >
          <div className="relative z-10 h-full flex flex-col">
            {imageUrl && (
              <a
                href={liveUrl || href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >

                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${title} preview`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
                    style={{ transform: "translateZ(20px)" }} // Adds depth to the image
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-bold tracking-wide">
                      View Project
                    </span>
                  </div>
                </div>
              </a>
            )}

            <div className="flex flex-col flex-grow p-6">
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  <a href={liveUrl || href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {title}
                  </a>

                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 flex-grow space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:text-primary text-xs py-0.5 px-2.5 rounded-full"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {(liveUrl || sourceUrl) && (
                <div className="flex items-center gap-4 mt-auto pt-6">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Live Demo <FiArrowUpRight />
                    </a>
                  )}
                  {sourceUrl && (
                    <a
                      href={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Source Code <FiGithub />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      <div
        className="absolute inset-0 rounded-xl pointer-events-none -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 30px var(--primary)',
          borderRadius: 'var(--radius-xl)',
        }}
      />
    </div>
  );
}