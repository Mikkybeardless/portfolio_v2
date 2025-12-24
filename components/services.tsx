"use client";

import { services } from "@/config";
import { ArrowUpRight } from "lucide-react";
import AnimatedHeadingWithParagraphs from "./common/AnimatedHwithP";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="text-primary text-sm font-medium">My Services</span>
        </div>
        <AnimatedHeadingWithParagraphs
          heading="Experience the Impact of User-Centered Design"
          paragraphs={[
            ` I craft visually stunning, functional websites and engaging digital
          solutions that put users first and elevate brands.`,
          ]}
        />

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass p-6 rounded-xl flex items-center justify-between hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div>
                <p className="text-muted-foreground text-xs mb-1">
                  {service.label}
                </p>
                <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <ArrowUpRight
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                size={20}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
