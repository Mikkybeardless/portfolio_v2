"use client";

import { projects } from "@/config";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import { useState } from "react";
import Thumbnail from "./projectThumbnail";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-medium">
                Featured Work
              </span>
            </div>

            <AnimatedHeading
              as="h2"
              className="text-xl md:text-4xl font-bold text-foreground mb-6"
            >
              Showcasing My Work for
              <br />
              Your Inspiration
            </AnimatedHeading>
          </div>
          <button
            onClick={() => setShowMore(!showMore)}
            className="hidden md:inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {showMore ? "Show Less" : "Explore more Projects"}
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .slice(0, showMore ? projects.length : 3)
            .map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Project thumbnail */}
                <div className="h-48 bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                  {/* <div
                    className={`absolute inset-0 bg-[url('/web-app-screenshot.jpg')] bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500`}
                  ></div> */}
                  <Thumbnail imageurl={project.image} />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-lg text-foreground text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View Project
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="p-6">
                  <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile explore button */}
        <div className="md:hidden mt-8 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-full text-sm"
          >
            {showMore ? "Show Less" : "Explore more Projects"}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
