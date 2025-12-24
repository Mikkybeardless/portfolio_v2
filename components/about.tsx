"use client";

import { expertise, stats } from "@/config";
import AnimatedHeadingWithParagraphs from "./common/AnimatedHwithP";

export default function About() {
  return (
    <section id="about" className="py-20   px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-medium">About Me</span>
            </div>

            <AnimatedHeadingWithParagraphs
              heading="Passionate Developer Creating Digital Experiences"
              paragraphs={[
                `I'm a full stack developer with a passion for building scalable,
              secure, and reliable web applications. I enjoy solving complex
              problems and continuously learning new technologies to stay at the
              cutting edge.`,
                `  When I'm not coding, you can find me playing video games, reading
              tech blogs, or exploring other people's codebases to learn and
              improve my craft.`,
              ]}
              headingClassName="text-xl md:text-4xl font-bold text-foreground mb-6"
              paragraphClassName="text-muted-foreground leading-relaxed mb-6"
            />

            {/* Expertise icons */}
            <div className="flex gap-4 mb-8">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass p-4 rounded-xl hover:border-primary/30 transition-all group cursor-default"
                  >
                    <Icon
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      size={24}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="glass p-8 rounded-2xl">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 dark:border-white/10">
              <p className="text-muted-foreground text-center">
                Always learning, always building. Let's create something amazing
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
