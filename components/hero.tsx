"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import ProfileImage from "./profileImage";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tags = ["#FULLSTACK", "#REACT", "#NEXTJS", "#NODEJS"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden glass border-2 border-primary/30">
                <ProfileImage />
              </div>
              {/* Decorative glow */}
              <div className="animate-glow absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">IGASHI</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MICHAEL
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-muted-foreground border border-white/10 px-4 py-2 rounded-full hover:border-primary/50 hover:text-primary transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Welcome to my portfolio! I'm a full stack developer with expertise
              in building scalable, secure web applications that deliver
              exceptional user experiences.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 group"
            >
              Start a Project Now
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* <div
          className={`mt-20 grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass p-6 rounded-xl">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
