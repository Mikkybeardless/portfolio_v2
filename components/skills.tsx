"use client";

import { skills } from "@/config";
import AnimatedHeading from "./AnimatedHeading";

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="text-primary text-sm font-medium">My Skills</span>
        </div>

        {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12"></h2> */}
        <AnimatedHeading
          as="h2"
          className="text-xl md:text-4xl font-bold text-foreground mb-12"
        >
          Technical Expertise
        </AnimatedHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">
                  {skill.name}
                </span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
