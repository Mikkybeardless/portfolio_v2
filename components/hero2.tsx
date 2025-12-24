"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/config";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Hero() {
  const { theme } = useTheme();

  const tags = ["#FULLSTACK", "#REACT", "#NEXTJS", "#NODEJS"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            viewport={{ once: false, amount: 0.5, margin: "0px 0px -40% 0px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden glass border-2 border-primary/30">
                <Image
                  src={
                    theme === "dark"
                      ? "/images/portfolio_dark3.jpg"
                      : "/images/portfolio_light.jpg"
                  }
                  alt="Igashi Michael"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative glow */}
              <div className="animate-glow absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">IGASHI</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MICHAEL
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-sm text-muted-foreground border border-white/10 px-4 py-2 rounded-full hover:border-primary/50 hover:text-primary transition-all cursor-default"
                >
                  {tag}
                </motion.span>
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
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="glass p-6 rounded-xl"
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
